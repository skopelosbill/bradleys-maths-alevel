window.ALEVEL_QUESTIONS = [
        {
                "id": "004051",
                "board": "Pearson Edexcel",
                "branch": "Pure",
                "level": "A",
                "major_area": "Sequences & Series",
                "topic": "Series",
                "subtopic": [
                        "Geometric Series"
                ],
                "img": false,
                "question": "A competitor is swimming a 15-kilometre marathon swim.<br>She swims each of the first 3 kilometres at a steady pace of 20 minutes per kilometre.<br>After the first 3 kilometres, she begins to slow down.<br>In order to estimate her finishing time, the time that she will take to complete each subsequent kilometre is modelled to be 4% greater than the time that she took to complete the previous kilometre.<br>Using the model,<br><strong>(a)</strong> show that her time to swim the first 5 kilometres is estimated to be 102 minutes 26 seconds,<br><strong>(b)</strong> show that her estimated time, in minutes, to swim the $r$th kilometre, for $4 \\le r \\le 15$, is:<br>$$20 \\times 1.04^{r-3}$$<br><strong>(c)</strong> estimate the total time, in hours, minutes, and seconds, that she will take to complete the marathon swim.",
                "steps": [
                        "<strong>Part (a):</strong> The time for the first 3 kilometres is run at a steady pace of $20\\text{ min/km}$:<br>\\begin{aligned}\\text{Time}_{1-3} &= 3 \\times 20 \\cr&= 60\\text{ minutes}\\end{aligned}",
                        "The 4th kilometre takes 4% longer than the 3rd kilometre ($20\\text{ minutes}$):<br>\\begin{aligned}\\text{Time}_{4} &= 20 \\times 1.04 \\cr&= 20.8\\text{ minutes}\\end{aligned}",
                        "The 5th kilometre takes 4% longer than the 4th kilometre:<br>\\begin{aligned}\\text{Time}_{5} &= 20.8 \\times 1.04 \\cr&= 20 \\times 1.04^2 \\cr&= 21.632\\text{ minutes}\\end{aligned}",
                        "Adding these times together gives the total estimated time for the first 5 kilometres:<br>\\begin{aligned}\\text{Total Time} &= 60 + 20.8 + 21.632 \\cr&= 102.432\\text{ minutes}\\end{aligned}<br>Converting $0.432$ minutes into seconds: $0.432 \\times 60 = 25.92 \\approx 26\\text{ seconds}$.<br>Therefore, the time is <strong>102 minutes 26 seconds</strong> (to the nearest second).",
                        "<strong>Part (b):</strong> For $r \\ge 4$, each subsequent kilometre is 4% slower than the previous one, forming a geometric progression where the first term after the steady phase (at $r=4$) is $20 \\times 1.04^1$.<br>In general, for the $r$th kilometre, the time has been multiplied by $1.04$ a total of $r-3$ times starting from the base pace of $20\\text{ minutes}$.<br>Therefore, the time for the $r$th kilometre is:<br>$$\\text{Time}_{r} = 20 \\times 1.04^{r-3}$$",
                        "<strong>Part (c):</strong> The total time is the sum of the first 3 steady kilometres ($60\\text{ minutes}$) and the geometric series from $r=4$ to $r=15$.<br>For $r=4$ to $15$, there are $15 - 4 + 1 = 12$ kilometres.<br>This is a geometric series with first term $a = 20 \\times 1.04 = 20.8$ and common ratio $r_{\\text{gp}} = 1.04$.",
                        "Using the sum formula, $S_N = \\dfrac{a(r_{\\text{gp}}^N - 1)}{r_{\\text{gp}} - 1}$:<br>\\begin{aligned}S_{12} &= \\dfrac{20.8(1.04^{12} - 1)}{1.04 - 1} \\cr&= \\dfrac{20.8(1.04^{12} - 1)}{0.04} \\cr&= 520(1.04^{12} - 1)\\cr &\\approx 520(1.601032 - 1)\\cr & \\approx 312.537\\text{ minutes}\\end{aligned}",
                        "Adding the initial $60\\text{ minutes}$ gives the total estimated time:<br>\\begin{aligned}\\text{Total Time} &= 60 + 312.537 \\cr&= 372.537\\text{ minutes}\\end{aligned}<br>Converting to hours, minutes, and seconds:\\begin{aligned} & \\dfrac{372.537}{60}\\cr & \\quad = 6\\text{ hours and } 12.537\\text{ minutes}\\end{aligned}<br>$$0.537 \\times 60 = 32.22 \\approx 32\\text{ seconds}$$<br>Therefore, the total estimated time is <strong>6 hours, 12 minutes, and 32 seconds</strong>.",
                        "Final Answer: <strong>(a)</strong> $$102\\text{ min } 26\\text{ s}$$ <strong>(b)</strong> $$20 \\times 1.04^{r-3}$$ <strong>(c)</strong> $$6\\text{ h } 12\\text{ min } 32\\text{ s}$$"
                ],
                "pi_options": [
                        {
                                "ans": "<strong>(a)</strong> $$102\\text{ min } 26\\text{ s}$$ <strong>(b)</strong> $$20 \\times 1.04^{r-3}$$ <strong>(c)</strong> $$6\\text{ h } 12\\text{ min } 54\\text{ s}$$",
                                "feedback": "You probably made an arithmetic rounding error in Part (c) by rounding the sum of your geometric series to $312.5$ minutes prematurely. Retaining full calculator precision during your summation yields a total time of $372.537$ minutes, which converts to $6\\text{ h } 12\\text{ min } 32\\text{ s}$."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$102\\text{ min } 26\\text{ s}$$ <strong>(b)</strong> $$20 \\times 1.04^{r-4}$$ <strong>(c)</strong> $$6\\text{ h } 12\\text{ min } 32\\text{ s}$$",
                                "feedback": "Check your exponent index in Part (b). Since the steady phase ends after the 3rd kilometre, the first 4% increase occurs on the 4th kilometre ($r=4$). This requires an exponent of $r-3$ so that $T_4 = 20 \\times 1.04^1$. An exponent of $r-4$ would incorrectly mean the 4th kilometre had no slow-down."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$102\\text{ min } 26\\text{ s}$$ <strong>(b)</strong> $$20 \\times 1.04^{r-3}$$ <strong>(c)</strong> $$6\\text{ h } 15\\text{ min } 12\\text{ s}$$",
                                "feedback": "Check your value for $N$ (the number of terms in your geometric series) in Part (c). The slow-down phase runs from $r=4$ to $r=15$, which contains $15-4+1 = 12$ terms, not $11$ terms."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Counting Terms",
                        "content": "When calculating the sum of a series over a specific range like $r=4$ to $r=15$, a common pitfall is subtracting the limits ($15 - 4 = 11$) and using $11$ as the number of terms ($N$). Always remember the inclusive rule: $N = \\text{upper limit} - \\text{lower limit} + 1$. In this case, $15 - 4 + 1 = 12$ terms."
                }
        },
        {
                "id": "004052",
                "board": "Pearson Edexcel",
                "branch": "Pure",
                "level": "A",
                "major_area": "Sequences & Series",
                "topic": "Series",
                "subtopic": [
                        "Geometric Series"
                ],
                "img": false,
                "question": "An engineering firm is drilling a 100-metre deep borehole.<br>The team drills each of the first 20 metres at a steady rate of 15 minutes per metre.<br>After the first 20 metres, the drilling speed begins to decrease due to harder rock layers.<br>In order to estimate the completion time, the time taken to drill each subsequent metre is modelled to be 2% greater than the time taken to drill the previous metre.<br>Using the model,<br><strong>(a)</strong> show that the time to drill the first 22 metres is estimated to be 330 minutes 54 seconds,<br><strong>(b)</strong> show that the estimated time, in minutes, to drill the $r$th metre, for $21 \\le r \\le 100$, is:<br>$$15 \\times 1.02^{r-20}$$<br><strong>(c)</strong> estimate the total time, in hours, minutes, and seconds, to complete the 100-metre borehole.",
                "steps": [
                        "<strong>Part (a):</strong> The time for the first 20 metres is drilled at a steady rate of $15\\text{ min/m}$:<br>\\begin{aligned}\\text{Time}_{1-20} &= 20 \\times 15 \\cr&= 300\\text{ minutes}\\end{aligned}",
                        "The 21st metre takes 2% longer than the 20th metre ($15\\text{ minutes}$):<br>\\begin{aligned}\\text{Time}_{21} &= 15 \\times 1.02 \\cr&= 15.3\\text{ minutes}\\end{aligned}",
                        "The 22nd metre takes 2% longer than the 21st metre:<br>\\begin{aligned}\\text{Time}_{22} &= 15.3 \\times 1.02 \\cr&= 15 \\times 1.02^2 \\cr&= 15.606\\text{ minutes}\\end{aligned}",
                        "Adding these times together gives the total estimated time for the first 22 metres:<br>\\begin{aligned}\\text{Total Time} &= 300 + 15.3 + 15.606 \\cr&= 330.906\\text{ minutes}\\end{aligned}<br>Converting $0.906$ minutes into seconds: $0.906 \\times 60 = 54.36 \\approx 54\\text{ seconds}$.<br>Therefore, the time is <strong>330 minutes 54 seconds</strong> (to the nearest second).",
                        "<strong>Part (b):</strong> For $r \\ge 21$, each subsequent metre is 2% slower than the previous one, forming a geometric progression where the first term after the steady phase (at $r=21$) is $15 \\times 1.02^1$.<br>In general, for the $r$th metre, the time has been multiplied by $1.02$ a total of $r-20$ times starting from the base pace of $15\\text{ minutes}$.<br>Therefore, the time for the $r$th metre is:<br>$$\\text{Time}_{r} = 15 \\times 1.02^{r-20}$$",
                        "<strong>Part (c):</strong> The total time is the sum of the first 20 steady metres ($300\\text{ minutes}$) and the geometric series from $r=21$ to $r=100$.<br>For $r=21$ to $100$, there are $100 - 21 + 1 = 80$ metres.<br>This is a geometric series with first term $a = 15 \\times 1.02 = 15.3$ and common ratio $r_{\\text{gp}} = 1.02$.",
                        "Using the sum formula, $S_N = \\dfrac{a(r_{\\text{gp}}^N - 1)}{r_{\\text{gp}} - 1}$:<br>\\begin{aligned}S_{80} &= \\dfrac{15.3(1.02^{80} - 1)}{1.02 - 1} \\cr&= \\dfrac{15.3(1.02^{80} - 1)}{0.02} \\cr&= 765(1.02^{80} - 1)\\cr & \\approx 765(4.875439 - 1)\\cr & \\approx 2964.711\\text{ minutes}\\end{aligned}",
                        "Adding the initial $300\\text{ minutes}$ gives the total estimated time:<br>\\begin{aligned}\\text{Total Time} &= 300 + 2964.711 \\cr&= 3264.711\\text{ minutes}\\end{aligned}<br>Converting to hours, minutes, and seconds:\\begin{aligned} & \\dfrac{3264.711}{60}\\cr & \\quad = 54\\text{ hours and } 24.711\\text{ minutes}\\end{aligned} $$0.711 \\times 60 = 42.66 \\approx 43\\text{ seconds}$$<br>Therefore, the total estimated time is <strong>54 hours, 24 minutes, and 43 seconds</strong>.",
                        "Final Answer: <strong>(a)</strong> $$330\\text{ min } 54\\text{ s}$$ <strong>(b)</strong> $$15 \\times 1.02^{r-20}$$ <strong>(c)</strong> $$54\\text{ h } 24\\text{ min } 43\\text{ s}$$"
                ],
                "pi_options": [
                        {
                                "ans": "<strong>(a)</strong> $$330\\text{ min } 54\\text{ s}$$ <strong>(b)</strong> $$15 \\times 1.02^{r-20}$$ <strong>(c)</strong> $$54\\text{ h } 28\\text{ min } 12\\text{ s}$$",
                                "feedback": "You probably made an arithmetic rounding error in Part (c) by rounding the sum of your geometric series to $2968.2$ minutes prematurely. Retaining full calculator precision during your summation yields a total time of $3264.711$ minutes, which converts to $54\\text{ h } 24\\text{ min } 43\\text{ s}$."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$330\\text{ min } 54\\text{ s}$$ <strong>(b)</strong> $$15 \\times 1.02^{r-21}$$ <strong>(c)</strong> $$54\\text{ h } 24\\text{ min } 43\\text{ s}$$",
                                "feedback": "Check your exponent index in Part (b). Since the steady phase ends after the 20th metre, the first 2% increase occurs on the 21st metre ($r=21$). This requires an exponent of $r-20$ so that $T_{21} = 15 \\times 1.02^1$. An exponent of $r-21$ would incorrectly mean the 21st metre had no slow-down."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$330\\text{ min } 54\\text{ s}$$ <strong>(b)</strong> $$15 \\times 1.02^{r-20}$$ <strong>(c)</strong> $$54\\text{ h } 20\\text{ min } 18\\text{ s}$$",
                                "feedback": "Check your value for $N$ (the number of terms in your geometric series) in Part (c). The slow-down phase runs from $r=21$ to $r=100$, which contains $100-21+1 = 80$ terms, not $79$ terms."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Avoid Early Rounding",
                        "content": "In multi-step GCE questions, never round your intermediate values on your calculator. Keeping the exact values stored in memory until the very final conversion prevents tiny rounding errors from compounding and throwing off your final seconds value."
                }
        },
        {
                "id": "004053",
                "board": "Pearson Edexcel",
                "branch": "Pure",
                "level": "A",
                "major_area": "Sequences & Series",
                "topic": "Series",
                "subtopic": [
                        "Geometric Series"
                ],
                "img": false,
                "question": "A cyclist is completing a 50-kilometre long-distance ride.<br>He cycles each of the first 10 kilometres at a steady pace of 3 minutes per kilometre.<br>After the first 10 kilometres, he begins to slow down due to fatigue.<br>In order to estimate his finishing time, the time taken to complete each subsequent kilometre is modelled to be 3% greater than the time taken to complete the previous kilometre.<br>Using the model,<br><strong>(a)</strong> show that his time to cycle the first 12 kilometres is estimated to be 36 minutes 16 seconds,<br><strong>(b)</strong> show that his estimated time, in minutes, to cycle the $r$th kilometre, for $11 \\le r \\le 50$, is:<br>$$3 \\times 1.03^{r-10}$$<br><strong>(c)</strong> estimate the total time, in hours, minutes, and seconds, that he will take to complete the ride.",
                "steps": [
                        "<strong>Part (a):</strong> The time for the first 10 kilometres is cycled at a steady pace of $3\\text{ min/km}$:<br>\\begin{aligned}\\text{Time}_{1-10} &= 10 \\times 3 \\cr&= 30\\text{ minutes}\\end{aligned}",
                        "The 11th kilometre takes 3% longer than the 10th kilometre ($3\\text{ minutes}$):<br>\\begin{aligned}\\text{Time}_{11} &= 3 \\times 1.03 \\cr&= 3.09\\text{ minutes}\\end{aligned}",
                        "The 12th kilometre takes 3% longer than the 11th kilometre:<br>\\begin{aligned}\\text{Time}_{12} &= 3.09 \\times 1.03 \\cr&= 3 \\times 1.03^2 \\cr&= 3.1827\\text{ minutes}\\end{aligned}",
                        "Adding these times together gives the total estimated time for the first 12 kilometres:<br>\\begin{aligned}\\text{Total Time} &= 30 + 3.09 + 3.1827 \\cr&= 36.2727\\text{ minutes}\\end{aligned}<br>Converting $0.2727$ minutes into seconds: $0.2727 \\times 60 = 16.362 \\approx 16\\text{ seconds}$.<br>Therefore, the time is <strong>36 minutes 16 seconds</strong> (to the nearest second).",
                        "<strong>Part (b):</strong> For $r \\ge 11$, each subsequent kilometre is 3% slower than the previous one, forming a geometric progression where the first term after the steady phase (at $r=11$) is $3 \\times 1.03^1$.<br>In general, for the $r$th kilometre, the time has been multiplied by $1.03$ a total of $r-10$ times starting from the base pace of $3\\text{ minutes}$.<br>Therefore, the time for the $r$th kilometre is:<br>$$\\text{Time}_{r} = 3 \\times 1.03^{r-10}$$",
                        "<strong>Part (c):</strong> The total time is the sum of the first 10 steady kilometres ($30\\text{ minutes}$) and the geometric series from $r=11$ to $r=50$.<br>For $r=11$ to $50$, there are $50 - 11 + 1 = 40$ kilometres.<br>This is a geometric series with first term $a = 3 \\times 1.03 = 3.09$ and common ratio $r_{\\text{gp}} = 1.03$.",
                        "Using the sum formula, $S_N = \\dfrac{a(r_{\\text{gp}}^N - 1)}{r_{\\text{gp}} - 1}$:<br>\\begin{aligned}S_{40} &= \\dfrac{3.09(1.03^{40} - 1)}{1.03 - 1} \\cr&= \\dfrac{3.09(1.03^{40} - 1)}{0.03} \\cr&= 103(1.03^{40} - 1)\\cr & \\approx 103(3.262038 - 1)\\cr & \\approx 232.990\\text{ minutes}\\end{aligned}",
                        "Adding the initial $300\\text{ minutes}$ gives the total estimated time:<br>\\begin{aligned}\\text{Total Time} &= 30 + 232.990 \\cr&= 262.990\\text{ minutes}\\end{aligned}<br>Converting to hours, minutes, and seconds:\\begin{aligned} & \\dfrac{262.990}{60}\\cr & \\quad = 4\\text{ hours and } 22.990\\text{ minutes}\\end{aligned} $$0.990 \\times 60 = 59.4 \\approx 59\\text{ seconds}$$<br>Therefore, the total estimated time is <strong>4 hours, 22 minutes, and 59 seconds</strong>.",
                        "Final Answer: <strong>(a)</strong> $$36\\text{ min } 16\\text{ s}$$ <strong>(b)</strong> $$3 \\times 1.03^{r-10}$$ <strong>(c)</strong> $$4\\text{ h } 22\\text{ min } 59\\text{ s}$$"
                ],
                "pi_options": [
                        {
                                "ans": "<strong>(a)</strong> $$36\\text{ min } 16\\text{ s}$$ <strong>(b)</strong> $$3 \\times 1.03^{r-10}$$ <strong>(c)</strong> $$4\\text{ h } 22\\text{ min } 54\\text{ s}$$",
                                "feedback": "You probably made an arithmetic rounding error in Part (c) by rounding the sum of your geometric series to $232.9$ minutes prematurely. Retaining full calculator precision during your summation yields a total time of $262.990$ minutes, which converts to $4\\text{ h } 22\\text{ min } 59\\text{ s}$."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$36\\text{ min } 16\\text{ s}$$ <strong>(b)</strong> $$3 \\times 1.03^{r-11}$$ <strong>(c)</strong> $$4\\text{ h } 22\\text{ min } 59\\text{ s}$$",
                                "feedback": "Check your exponent index in Part (b). Since the steady phase ends after the 10th kilometre, the first 3% increase occurs on the 11th kilometre ($r=11$). This requires an exponent of $r-10$ so that $T_{11} = 3 \\times 1.03^1$. An exponent of $r-11$ would incorrectly mean the 11th kilometre had no slow-down."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$36\\text{ min } 16\\text{ s}$$ <strong>(b)</strong> $$3 \\times 1.03^{r-10}$$ <strong>(c)</strong> $$4\\text{ h } 18\\text{ min } 12\\text{ s}$$",
                                "feedback": "Check your value for $N$ (the number of terms in your geometric series) in Part (c). The slow-down phase runs from $r=11$ to $r=50$, which contains $50-11+1 = 40$ terms, not $39$ terms."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Shifted Exponents",
                        "content": "In series modeling, when the geometric phase starts at an offset index (like $r=11$ in this question), the exponent must be shifted back to align properly. Always test your boundary case: substituting your first term index ($r=11$) into your formula must yield the single 3% multiplier increase ($r-10 = 1$)."
                }
        },
        {
                "id": "004054",
                "board": "Pearson Edexcel",
                "branch": "Pure",
                "level": "A",
                "major_area": "Sequences & Series",
                "topic": "Series",
                "subtopic": [
                        "Geometric Series"
                ],
                "img": false,
                "question": "A hiker is walking a 12-kilometre uphill trail.<br>She hikes each of the first 3 kilometres at a steady pace of 12 minutes per kilometre.<br>After the first 3 kilometres, the trail becomes steeper and she begins to slow down.<br>In order to estimate her arrival time, the time taken to complete each subsequent kilometre is modelled to be 6% greater than the time taken to complete the previous kilometre.<br>Using the model,<br><strong>(a)</strong> show that her time to hike the first 5 kilometres is estimated to be 62 minutes 12 seconds,<br><strong>(b)</strong> show that her estimated time, in minutes, to hike the $r$th kilometre, for $4 \\le r \\le 12$, is:<br>$$12 \\times 1.06^{r-3}$$<br><strong>(c)</strong> estimate the total time, in hours, minutes, and seconds, that she will take to complete the uphill trail.",
                "steps": [
                        "<strong>Part (a):</strong> The time for the first 3 kilometres is hiked at a steady pace of $12\\text{ min/km}$:<br>\\begin{aligned}\\text{Time}_{1-3} &= 3 \\times 12 \\cr&= 36\\text{ minutes}\\end{aligned}",
                        "The 4th kilometre takes 6% longer than the 3rd kilometre ($12\\text{ minutes}$):<br>\\begin{aligned}\\text{Time}_{4} &= 12 \\times 1.06 \\cr&= 12.72\\text{ minutes}\\end{aligned}",
                        "The 5th kilometre takes 6% longer than the 4th kilometre:<br>\\begin{aligned}\\text{Time}_{5} &= 12.72 \\times 1.06 \\cr&= 12 \\times 1.06^2 \\cr&= 13.4832\\text{ minutes}\\end{aligned}",
                        "Adding these times together gives the total estimated time for the first 5 kilometres:<br>\\begin{aligned} &\\text{Total Time}\\cr &\\quad \\quad= 36 + 12.72 + 13.4832 \\cr &\\quad \\quad= 62.2032\\text{ minutes}\\end{aligned}<br>Converting $0.2032$ minutes into seconds: $0.2032 \\times 60 = 12.192 \\approx 12\\text{ seconds}$.<br>Therefore, the time is <strong>62 minutes 12 seconds</strong> (to the nearest second).",
                        "<strong>Part (b):</strong> For $r \\ge 4$, each subsequent kilometre is 6% slower than the previous one, forming a geometric progression where the first term after the steady phase (at $r=4$) is $12 \\times 1.06^1$.<br>In general, for the $r$th kilometre, the time has been multiplied by $1.06$ a total of $r-3$ times starting from the base pace of $12\\text{ minutes}$.<br>Therefore, the time for the $r$th kilometre is:<br>$$\\text{Time}_{r} = 12 \\times 1.06^{r-3}$$",
                        "<strong>Part (c):</strong> The total time is the sum of the first 3 steady kilometres ($36\\text{ minutes}$) and the geometric series from $r=4$ to $r=12$.<br>For $r=4$ to $12$, there are $12 - 4 + 1 = 9$ kilometres.<br>This is a geometric series with first term $a = 12 \\times 1.06 = 12.72$ and common ratio $r_{\\text{gp}} = 1.06$.",
                        "Using the sum formula, $S_N = \\dfrac{a(r_{\\text{gp}}^N - 1)}{r_{\\text{gp}} - 1}$:<br>\\begin{aligned}S_9 &= \\dfrac{12.72(1.06^9 - 1)}{1.06 - 1} \\cr&= \\dfrac{12.72(1.06^9 - 1)}{0.06} \\cr&= 212(1.06^9 - 1)\\cr & \\approx 212(1.689479 - 1) \\cr & \\approx 146.169\\text{ minutes}\\end{aligned}",
                        "Adding the initial $36\\text{ minutes}$ gives the total estimated time:<br>\\begin{aligned}\\text{Total Time} &= 36 + 146.169 \\cr&= 182.169\\text{ minutes}\\end{aligned}<br>Converting to hours, minutes, and seconds:\\begin{aligned} &\\dfrac{182.169}{60}\\cr & \\quad = 3\\text{ hours and } 2.169\\text{ minutes}\\end{aligned} $$2.169 \\times 60 = 10.14 \\approx 10\\text{ seconds}$$<br>Therefore, the total estimated time is <strong>3 hours, 2 minutes, and 10 seconds</strong>.",
                        "Final Answer: <strong>(a)</strong> $$62\\text{ min } 12\\text{ s}$$ <strong>(b)</strong> $$12 \\times 1.06^{r-3}$$ <strong>(c)</strong> $$3\\text{ h } 2\\text{ min } 10\\text{ s}$$"
                ],
                "pi_options": [
                        {
                                "ans": "<strong>(a)</strong> $$62\\text{ min } 12\\text{ s}$$ <strong>(b)</strong> $$12 \\times 1.06^{r-3}$$ <strong>(c)</strong> $$3\\text{ h } 2\\text{ min } 0\\text{ s}$$",
                                "feedback": "Check your final seconds conversion in Part (c). $182.169$ minutes converts to $3$ hours, $2$ minutes, and $10$ seconds. Make sure you don't drop the fractional minutes when performing your division."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$62\\text{ min } 12\\text{ s}$$ <strong>(b)</strong> $$12 \\times 1.06^{r-4}$$ <strong>(c)</strong> $$3\\text{ h } 2\\text{ min } 10\\text{ s}$$",
                                "feedback": "Check your exponent index in Part (b). Since the steady phase ends after the 3rd kilometre, the first 6% increase occurs on the 4th kilometre ($r=4$). This requires an exponent of $r-3$ so that $T_4 = 12 \\times 1.06^1$. An exponent of $r-4$ would incorrectly mean the 4th kilometre had no slow-down."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$62\\text{ min } 12\\text{ s}$$ <strong>(b)</strong> $$12 \\times 1.06^{r-3}$$ <strong>(c)</strong> $$3\\text{ h } 0\\text{ min } 48\\text{ s}$$",
                                "feedback": "Check your value for $N$ (the number of terms in your geometric series) in Part (c). The slow-down phase runs from $r=4$ to $r=12$, which contains $12-4+1 = 9$ terms, not $8$ terms."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Time Conversions",
                        "content": "When converting a large decimal number of minutes into hours, minutes, and seconds, divide by $60$ first to isolate the whole hours. Take the remainder and multiply it by $60$ to isolate the whole minutes, and then multiply the final remaining decimal fraction by $60$ to secure your seconds."
                }
        },
        {
                "id": "004055",
                "board": "Pearson Edexcel",
                "branch": "Pure",
                "level": "A",
                "major_area": "Sequences & Series",
                "topic": "Series",
                "subtopic": [
                        "Geometric Series"
                ],
                "img": false,
                "question": "A rower is crossing a 10-kilometre lake.<br>She rows each of the first 2 kilometres at a steady pace of 8 minutes per kilometre.<br>After the first 2 kilometres, she begins to slow down.<br>In order to estimate her crossing time, the time taken to complete each subsequent kilometre is modelled to be 4% greater than the time taken to complete the previous kilometre.<br>Using the model,<br><strong>(a)</strong> show that her time to row the first 4 kilometres is estimated to be 32 minutes 58 seconds,<br><strong>(b)</strong> show that her estimated time, in minutes, to row the $r$th kilometre, for $3 \\le r \\le 10$, is:<br>$$8 \\times 1.04^{r-2}$$<br><strong>(c)</strong> estimate the total time, in minutes and seconds, that she will take to complete the 10-kilometre crossing.",
                "steps": [
                        "<strong>Part (a):</strong> The time for the first 2 kilometres is rowed at a steady pace of $8\\text{ min/km}$:<br>\\begin{aligned}\\text{Time}_{1-2} &= 2 \\times 8 \\cr&= 16\\text{ minutes}\\end{aligned}",
                        "The 3rd kilometre takes 4% longer than the 2nd kilometre ($8\\text{ minutes}$):<br>\\begin{aligned}\\text{Time}_{3} &= 8 \\times 1.04 \\cr&= 8.32\\text{ minutes}\\end{aligned}",
                        "The 4th kilometre takes 4% longer than the 3rd kilometre:<br>\\begin{aligned}\\text{Time}_{4} &= 8.32 \\times 1.04 \\cr&= 8 \\times 1.04^2 \\cr&= 8.6528\\text{ minutes}\\end{aligned}",
                        "Adding these times together gives the total estimated time for the first 4 kilometres:<br>\\begin{aligned}\\text{Total Time} &= 16 + 8.32 + 8.6528 \\cr&= 32.9728\\text{ minutes}\\end{aligned}<br>Converting $0.9728$ minutes into seconds: $0.9728 \\times 60 = 58.368 \\approx 58\\text{ seconds}$.<br>Therefore, the time is <strong>32 minutes 58 seconds</strong> (to the nearest second).",
                        "<strong>Part (b):</strong> For $r \\ge 3$, each subsequent kilometre is 4% slower than the previous one, forming a geometric progression where the first term after the steady phase (at $r=3$) is $8 \\times 1.04^1$.<br><br>In general, for the $r$th kilometre, the time has been multiplied by $1.04$ a total of $r-2$ times starting from the base pace of $8\\text{ minutes}$.<br>Therefore, the time for the $r$th kilometre is:<br>$$\\text{Time}_{r} = 8 \\times 1.04^{r-2}$$",
                        "<strong>Part (c):</strong> The total time is the sum of the first 2 steady kilometres ($16\\text{ minutes}$) and the geometric series from $r=3$ to $r=10$.<br>For $r=3$ to $10$, there are $10 - 3 + 1 = 8$ kilometres.<br>This is a geometric series with first term $a = 8 \\times 1.04 = 8.32$ and common ratio $r_{\\text{gp}} = 1.04$.",
                        "Using the sum formula, $S_N = \\dfrac{a(r_{\\text{gp}}^N - 1)}{r_{\\text{gp}} - 1}$:<br>\\begin{aligned}S_8 &= \\dfrac{8.32(1.04^8 - 1)}{1.04 - 1} \\cr&= \\dfrac{8.32(1.04^8 - 1)}{0.04} \\cr&= 208(1.04^8 - 1)\\cr & \\approx 208(1.368569 - 1)\cr & \\approx 76.662\\text{ minutes}\\end{aligned}",
                        "Adding the initial $16\\text{ minutes}$ gives the total estimated time:<br>\\begin{aligned}\\text{Total Time} &= 16 + 76.662 \\cr&= 92.662\\text{ minutes}\\end{aligned}<br>Converting to minutes and seconds:<br>\\begin{aligned} &\\text{Total Time} \\cr & \\quad \\quad= 92\\text{ minutes and } 0.662\\text{ minutes}\\end{aligned}<br>$$0.662 \\times 60 = 39.72 \\approx 40\\text{ seconds}$$<br>Therefore, the total estimated time is <strong>92 minutes 40 seconds</strong>.",
                        "Final Answer: <strong>(a)</strong> $$32\\text{ min } 58\\text{ s}$$ <strong>(b)</strong> $$8 \\times 1.04^{r-2}$$ <strong>(c)</strong> $$92\\text{ min } 40\\text{ s}$$"
                ],
                "pi_options": [
                        {
                                "ans": "<strong>(a)</strong> $$32\\text{ min } 58\\text{ s}$$ <strong>(b)</strong> $$8 \\times 1.04^{r-2}$$ <strong>(c)</strong> $$92\\text{ min } 12\\text{ s}$$",
                                "feedback": "Check your decimal minutes conversion in Part (c). $92.662$ minutes is not $92\\text{ min } 12\\text{ s}$. You must multiply the fractional part ($0.662$) by $60$ to get the correct seconds value ($40\\text{ s}$)."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$32\\text{ min } 58\\text{ s}$$ <strong>(b)</strong> $$8 \\times 1.04^{r-3}$$ <strong>(c)</strong> $$92\\text{ min } 40\\text{ s}$$",
                                "feedback": "Check your exponent index in Part (b). Since the steady phase ends after the 2nd kilometre, the first 4% increase occurs on the 3rd kilometre ($r=3$). This requires an exponent of $r-2$ so that $T_3 = 8 \\times 1.04^1$. An exponent of $r-3$ would incorrectly mean the 3rd kilometre had no slow-down."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$32\\text{ min } 58\\text{ s}$$ <strong>(b)</strong> $$8 \\times 1.04^{r-2}$$ <strong>(c)</strong> $$84\\text{ min } 0\\text{ s}$$",
                                "feedback": "Check your value for $N$ (the number of terms in your geometric series) in Part (c). The slow-down phase runs from $r=3$ to $r=10$, which contains $10-3+1 = 8$ terms, not $7$ terms."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Checking Calculations",
                        "content": "For this question, when converting fractional minutes to seconds, always make sure you multiply the decimal by $60$ rather than simply reading the decimal directly as seconds. A value of $0.662$ minutes is roughly two-thirds of a minute, which is exactly $40$ seconds."
                }
        },
        {
                "id": "004056",
                "board": "Pearson Edexcel",
                "branch": "Pure",
                "level": "A",
                "major_area": "Calculus",
                "topic": "Differentiation",
                "subtopic": [
                        "Product Rule",
                        "Calculus Modelling"
                ],
                "img": "images/Pure_SVGs/004056.svg",
                "question": "A curve has the equation:<br>$$f(x)  = 15\\text{e}^{-0.5x}\\sin x, \\quad x \\ge 0$$<br><strong>(a)</strong> Show that the $x$-coordinates of the turning points of the curve satisfy the equation $\\tan x = 2$.<br><br>The diagram shows a sketch of part of the curve with equation $y = f(x) $.<br><strong>(b)</strong> Sketch the graph of $H$ against $t$ where:<br>$$H(t) = \\left|15\\text{e}^{-0.5t}\\sin t\\right|, \\quad t \\ge 0$$<br>showing the long-term behaviour of this curve.<br><br>The function $H(t)$ is used to model the height, in metres, of a ball above the ground $t$ seconds after it has been kicked. Using this model, find:<br><strong>(c)</strong> the maximum height of the ball above the ground between the first and second bounce, giving your answer to 3 significant figures.<br><strong>(d)</strong> Explain why this model should not be used to predict the time of each bounce.",
                "steps": [
                        "<strong>Part (a):</strong> We find the derivative of $f(x) $ with respect to $x$ using the <strong>Product Rule</strong>, where $u = 15\\text{e}^{-0.5x}$ and $v = \\sin x$:<br>$$u' = -7.5\\text{e}^{-0.5x}$$<br>$$v' = \\cos x$$<br>\\begin{aligned}f'(x) &= u'v + uv' \\cr&= -7.5\\text{e}^{-0.5x}\\sin x\\cr & \\quad + 15\\text{e}^{-0.5x}\\cos x\\end{aligned}",
                        "Factorising out the exponential term:<br>$$f'(x) = 7.5\\text{e}^{-0.5x} \\left( 2\\cos x - \\sin x \\right)$$<br>At turning points, $f'(x) = 0$. Since $\\text{e}^{-0.5x} \\ne 0$ for all real $x$, we require:<br>\\begin{aligned}2\\cos x - \\sin x &= 0 \\cr2\\cos x &= \\sin x \\cr\\tan x &= 2\\end{aligned}",
                        "<strong>Part (b):</strong> The graph of \\begin{aligned}H(t) = \\left|15\\text{e}^{-0.5t}\\sin t\\right|\\end{aligned} is a damped sine wave with all its negative lobes reflected above the $t$-axis. This models the successive decreasing bounces of the ball tending to $0$ as $t \\to \\infty$.<br><br>Here is the completed sketch showing this long-term behaviour:<br><img src='images/Pure_SVGs/004056_ans.svg' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'>",
                        "<strong>Part (c):</strong> Bounces occur when \\begin{aligned}H(t) &= 0 \\cr \\implies \\sin t &= 0\\cr \\implies t &= n\\pi\\end{aligned}The interval between the first bounce ($t = \\pi$) and the second bounce ($t = 2\\pi$) is $\\pi < t < 2\\pi$.<br>The turning point in this interval occurs where $\\tan t = 2$, which in the third quadrant is:\\begin{aligned}t &= \\pi + \\tan^{-1}(2)\\cr &\\approx 3.14159 + 1.10715 \\cr &\\approx 4.24874\\text{ seconds}\\end{aligned}",
                        "Substituting this value into the model to find the maximum height:\\begin{aligned} & H(4.24874)\\cr & \\quad \\quad = \\left|15\\text{e}^{-0.5(4.24874)}\\sin(4.24874)\\right|\\cr & \\quad \\quad \\approx \\left|15(0.119508)(-0.894427)\\right|\\cr & \\quad \\quad  \\approx 1.6033\\text{ m}\\end{aligned}Therefore, the maximum height is <strong>$1.60\\text{ m}$</strong> (to 3 significant figures).",
                        "<strong>Part (d):</strong> Under this model, the bounces are forced to occur at fixed intervals of exactly $\\pi$ seconds because of the $\\sin t$ term.<br>In reality, as the ball loses energy, the time between consecutive bounces decreases. Therefore, this model is physically unrealistic and must not be used to predict bounce times.",
                        "Final Answer: <strong>(a)</strong> $$\\tan x = 2 \\text{is verified}$$ <strong>(b)</strong> $$\\text{Bouncing curves sketched above the $t$-axis}$$ <strong>(c)</strong> $$1.60\\text{ m}$$ <strong>(d)</strong> $$\\text{Bounces are forced at}$$ $$\\text{constant intervals of } \\pi \\text{ seconds}$$"
                ],
                "pi_options": [
                        {
                                "ans": "<strong>(a)</strong> $$\\tan x = 2$$ <strong>(b)</strong> Bouncing curves sketched <strong>(c)</strong> $$1.59\\text{ m}$$ <strong>(d)</strong> Bounces occur at constant intervals",
                                "feedback": "You probably made an arithmetic rounding error in Part (c) by evaluating the expression using rounded intermediate values. Retaining full calculator precision yields $H(4.24874) = 1.6033\\text{ m}$, which rounds to $1.60\\text{ m}$ to 3 significant figures."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$\\tan x = 0.5$$ <strong>(b)</strong> Bouncing curves sketched <strong>(c)</strong> $$1.60\\text{ m}$$ <strong>(d)</strong> Bounces occur at constant intervals",
                                "feedback": "Check your division in Part (a). When dividing $2\\cos x = \\sin x$ by $\\cos x$ on both sides, you obtain $2 = \\frac{\\sin x}{\\cos x}$, which simplifies to $\\tan x = 2$, not $\\tan x = 0.5$."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$\\tan x = 2$$ <strong>(b)</strong> Bouncing curves sketched <strong>(c)</strong> $$0.802\\text{ m}$$ <strong>(d)</strong> The model is completely accurate",
                                "feedback": "Check your quadrant value in Part (c). The interval between the first and second bounce is $\\pi < t < 2\\pi$, which is the third quadrant. It appears you calculated the turning point in the first quadrant ($t = \\tan^{-1}(2) \\approx 1.11\\text{ s}$), which represents the peak of the first lobe before the first bounce."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Real-world Limitations",
                        "content": "This question is a classic example of evaluating the limitations of a mathematical model. While the exponential multiplier successfully models the decay in height, the trigonometric term enforces a constant period, which contradicts the real-world physics of decreasing bounce periods. Always look for these simplified assumptions in modelling tasks."
                }
        },
        {
                "id": "004057",
                "board": "Pearson Edexcel",
                "branch": "Pure",
                "level": "A",
                "major_area": "Calculus",
                "topic": "Differentiation",
                "subtopic": [
                        "Product Rule",
                        "Calculus Modelling"
                ],
                "img": "images/Pure_SVGs/004057.svg",
                "question": "A curve has the equation:<br>$$f(x)  = 8\\text{e}^{-0.2x}\\sin x, \\quad x \\ge 0$$<br><strong>(a)</strong> Show that the $x$-coordinates of the turning points of the curve satisfy the equation $\\tan x = 5$.<br><br>The diagram shows a sketch of part of the curve with equation $y = f(x) $.<br><strong>(b)</strong> Sketch the graph of $H$ against $t$ where:<br>$$H(t) = \\left|8\\text{e}^{-0.2t}\\sin t\\right|, \\quad t \\ge 0$$<br>showing the long-term behaviour of this curve.<br><br>The function $H(t)$ is used to model the height, in metres, of a ball above the ground $t$ seconds after it has been kicked. Using this model, find:<br><strong>(c)</strong> the maximum height of the ball above the ground between the first and second bounce, giving your answer to 3 significant figures.<br><strong>(d)</strong> Explain why this model should not be used to predict the time of each bounce.",
                "steps": [
                        "<strong>Part (a):</strong> We find the derivative of $f(x) $ with respect to $x$ using the <strong>Product Rule</strong>, where $u = 8\\text{e}^{-0.2x}$ and $v = \\sin x$:<br>$$u' = -1.6\\text{e}^{-0.2x}$$<br>$$v' = \\cos x$$<br>\\begin{aligned}f'(x) &= u'v + uv' \\cr&= -1.6\\text{e}^{-0.2x}\\sin x \\cr & \\quad + 8\\text{e}^{-0.2x}\\cos x\\end{aligned}",
                        "Factorising out the exponential term:<br>$$f'(x) = 1.6\\text{e}^{-0.2x} \\left( 5\\cos x - \\sin x \\right)$$<br>At turning points, $f'(x) = 0$. Since $\\text{e}^{-0.2x} \\ne 0$ for all real $x$, we require:<br>\\begin{aligned}5\\cos x - \\sin x &= 0 \\cr5\\cos x &= \\sin x \\cr\\tan x &= 5\\end{aligned}",
                        "<strong>Part (b):</strong> The graph of $H(t) = \\left|8\\text{e}^{-0.2t}\\sin t\\right|$ is a damped sine wave with all its negative lobes reflected above the $t$-axis. This models the successive decreasing bounces of the ball tending to $0$ as $t \\to \\infty$.<br><br>Here is the completed sketch showing this long-term behaviour:<br><img src='images/Pure_SVGs/004057_ans.svg' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'>",
                        "<strong>Part (c):</strong> Bounces occur when \begin(aligned}H(t) &= 0 \\cr \\implies \\sin t &= 0 \\cr\\implies &t = n\\pi\\end{aligned}.<br>The interval between the first bounce ($t = \\pi$) and the second bounce ($t = 2\\pi$) is $\\pi < t < 2\\pi$.<br>The turning point in this interval occurs where $\\tan t = 5$, which in the third quadrant is:\begin{aligned}t &= \\pi + \\tan^{-1}(5)\\cr & \\approx 3.14159 + 1.37340\\cr & \\approx 4.51499\\text{ seconds}\\end{aligned}",
                        "Substituting this value into the model to find the maximum height:\\begin{aligned} & H(4.51499)\\cr & \\quad \\quad = \\left|8\\text{e}^{-0.2(4.51499)}\\sin(4.51499)\\right|\\cr & \\quad \\quad \\approx \\left|8(0.40535)(-0.980581)\\right|\\cr & \\quad \\quad \\approx 3.180\\text{ m}\\end{aligned}<br>Therefore, the maximum height is <strong>$3.18\\text{ m}$</strong> (to 3 significant figures).",
                        "<strong>Part (d):</strong> Under this model, the bounces are forced to occur at fixed intervals of exactly $\\pi$ seconds because of the $\\sin t$ term.<br>In reality, as the ball loses energy, the time between consecutive bounces decreases. Therefore, this model is physically unrealistic and must not be used to predict bounce times.",
                        "Final Answer: <strong>(a)</strong> $$\\tan x = 5 \\text{ is verified}$$ <strong>(b)</strong> $$\\text{Bouncing curves sketched above the }t\\text{-axis}$$ <strong>(c)</strong> $$3.18\\text{ m}$$ <strong>(d)</strong> $$\\text{Bounces are forced at constant}$$ $$\\text{intervals of \\pi \\text{seconds}$$"
                ],
                "pi_options": [
                        {
                                "ans": "<strong>(a)</strong> $$\\tan x = 5$$ <strong>(b)</strong> Bouncing curves sketched <strong>(c)</strong> $$3.18\\text{ m}$$ <strong>(d)</strong> The model is highly physically accurate",
                                "feedback": "Check your reasoning for Part (d). The model is strictly periodic and forces bounces at fixed multiples of $\\pi$ seconds, ignoring the natural physical decay in the bounce period. Therefore, it is physically inaccurate for predicting bounce times."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$\\tan x = 0.2$$ <strong>(b)</strong> Bouncing curves sketched <strong>(c)</strong> $$3.18\\text{ m}$$ <strong>(d)</strong> Bounces occur at constant intervals",
                                "feedback": "Check your division in Part (a). When dividing $5\\cos x = \\sin x$ by $\\cos x$ on both sides, you obtain $5 = \\frac{\\sin x}{\\cos x}$, which simplifies to $\\tan x = 5$, not $\\tan x = 0.2$."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$\\tan x = 5$$ <strong>(b)</strong> Bouncing curves sketched <strong>(c)</strong> $$1.59\\text{ m}$$ <strong>(d)</strong> Bounces occur at constant intervals",
                                "feedback": "Check your quadrant value in Part (c). The interval between the first and second bounce is $\\pi < t < 2\\pi$, which is the third quadrant. It appears you calculated the turning point in the first quadrant ($t = \\tan^{-1}(5) \\approx 1.37\\text{ s}$), which represents the peak of the first lobe before the first bounce."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Product Rule Coefficients",
                        "content": "In this question, when factorising the exponential term $\\text{e}^{-0.2x}$ from the derivative, you can factorise out its coefficient ($1.6$) as well. This reduces the brackets to $5\\cos x - \\sin x$, making the division to obtain $\\tan x = 5$ exceptionally clean."
                }
        },
        {
                "id": "004058",
                "board": "Pearson Edexcel",
                "branch": "Pure",
                "level": "A",
                "major_area": "Calculus",
                "topic": "Differentiation",
                "subtopic": [
                        "Product Rule",
                        "Calculus Modelling"
                ],
                "img": "images/Pure_SVGs/004058.svg",
                "question": "A curve has the equation:<br>$$f(x)  = 12\\text{e}^{-\\frac{1}{3}x}\\sin x, \\quad x \\ge 0$$<br><strong>(a)</strong> Show that the $x$-coordinates of the turning points of the curve satisfy the equation $\\tan x = 3$.<br><br>The diagram shows a sketch of part of the curve with equation $y = f(x) $.<br><strong>(b)</strong> Sketch the graph of $H$ against $t$ where:<br>$$H(t) = \\left|12\\text{e}^{-\\frac{1}{3}t}\\sin t\\right|, \\quad t \\ge 0$$<br>showing the long-term behaviour of this curve.<br><br>The function $H(t)$ is used to model the height, in metres, of a ball above the ground $t$ seconds after it has been kicked. Using this model, find:<br><strong>(c)</strong> the maximum height of the ball above the ground between the first and second bounce, giving your answer to 3 significant figures.<br><strong>(d)</strong> Explain why this model should not be used to predict the time of each bounce.",
                "steps": [
                        "<strong>Part (a):</strong> We find the derivative of $f(x) $ with respect to $x$ using the <strong>Product Rule</strong>, where $u = 12\\text{e}^{-\\frac{1}{3}x}$ and $v = \\sin x$:<br>$$u' = -4\\text{e}^{-\\frac{1}{3}x}$$<br>$$v' = \\cos x$$<br>\\begin{aligned}f'(x) &= u'v + uv' \\cr&= -4\\text{e}^{-\\frac{1}{3}x}\\sin x\\cr & \\quad \\quad + 12\\text{e}^{-\\frac{1}{3}x}\\cos x\\end{aligned}",
                        "Factorising out the exponential term:<br>$$f'(x) = 4\\text{e}^{-\\frac{1}{3}x} \\left( 3\\cos x - \\sin x \\right)$$<br>At turning points, $f'(x) = 0$. Since $\\text{e}^{-\\frac{1}{3}x} \\ne 0$ for all real $x$, we require:<br>\\begin{aligned}3\\cos x - \\sin x &= 0 \\cr3\\cos x &= \\sin x \\cr\\tan x &= 3\\end{aligned}",
                        "<strong>Part (b):</strong> The graph of $H(t) = \\left|12\\text{e}^{-\\frac{1}{3}t}\\sin t\\right|$ is a damped sine wave with all its negative lobes reflected above the $t$-axis. This models the successive decreasing bounces of the ball tending to $0$ as $t \\to \\infty$.<br><br>Here is the completed sketch showing this long-term behaviour:<br><img src='images/Pure_SVGs/004058_ans.svg' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'>",
                        "<strong>Part (c):</strong> Bounces occur when \\begin{aligned}H(t) &= 0\\cr\\implies \\sin t &= 0 \\cr\\implies t &= n\\pi\\end{alligned}.<br>The interval between the first bounce ($t = \\pi$) and the second bounce ($t = 2\\pi$) is $\\pi < t < 2\\pi$.<br>The turning point in this interval occurs where $\\tan t = 3$, which in the third quadrant is:\\begin{aligned}t &= \\pi + \\tan^{-1}(3) \\cr &\\approx 3.14159 + 1.24905\\cr & \\approx 4.39064\\text{ seconds}\\end{aligned}",
                        "Substituting this value into the model to find the maximum height:\\begin{aligned} & H(4.39064)\\cr & \\quad \\quad = \\left|12\\text{e}^{-\\frac{1}{3}(4.39064)}\\sin(4.39064)\\right|\\cr & \\quad \\quad \\approx \\left|12(0.231415)(-0.948683)\\right| \\cr & \\quad \\quad\\approx 2.634\\text{ m}\\end{aligned}Therefore, the maximum height is <strong>$2.63\\text{ m}$</strong> (to 3 significant figures).",
                        "<strong>Part (d):</strong> Under this model, the bounces are forced to occur at fixed intervals of exactly $\\pi$ seconds because of the $\\sin t$ term.<br>In reality, as the ball loses energy, the time between consecutive bounces decreases. Therefore, this model is physically unrealistic and must not be used to predict bounce times.",
                        "Final Answer: <strong>(a)</strong> $$\\tan x = 3\\\\\\ \\text{is verified}$$ <strong>(b)</strong>$$\\text{Bouncing curves sketched above the }t\\text{-axis}$$ <strong>(c)</strong> $$2.63\\text{ m}$$ <strong>(d)</strong> $$\\text{Bounces are forced at constant}$$ $$\\text{intervals of }\\pi \\text{ seconds}$$"
                ],
                "pi_options": [
                        {
                                "ans": "<strong>(a)</strong> $$\\tan x = 3$$ <strong>(b)</strong> Bouncing curves sketched <strong>(c)</strong> $$2.63\\text{ m}$$ <strong>(d)</strong> Air resistance makes the model highly accurate",
                                "feedback": "Check your reasoning for Part (d). Air resistance would actually cause the ball to lose energy and bounce more frequently, meaning the intervals would decrease. The model's rigid periodicity is its main limitation."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$\\tan x = \\dfrac{1}{3}$$ <strong>(b)</strong> Bouncing curves sketched <strong>(c)</strong> $$2.63\\text{ m}$$ <strong>(d)</strong> Bounces occur at constant intervals",
                                "feedback": "Check your division in Part (a). When dividing $3\\cos x = \\sin x$ by $\\cos x$ on both sides, you obtain $3 = \\frac{\\sin x}{\\cos x}$, which simplifies to $\\tan x = 3$, not $\\tan x = \\frac{1}{3}$."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$\\tan x = 3$$ <strong>(b)</strong> Bouncing curves sketched <strong>(c)</strong> $$1.14\\text{ m}$$ <strong>(d)</strong> Bounces occur at constant intervals",
                                "feedback": "Check your quadrant value in Part (c). The interval between the first and second bounce is $\\pi < t < 2\\pi$, which is the third quadrant. It appears you calculated the turning point in the first quadrant ($t = \\tan^{-1}(3) \\approx 1.25\\text{ s}$), which represents the peak of the first lobe before the first bounce."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Damped Oscillations",
                        "content": "Damped oscillations of the form $A\\text{e}^{-kx}\\sin x$ are used extensively in physics to model real-world decay systems. While the mathematical envelope decays smoothly, always remember that trigonometric components assume a constant frequency, which is often the primary limitation of such models in physical sciences."
                }
        },
        {
                "id": "004059",
                "board": "Pearson Edexcel",
                "branch": "Pure",
                "level": "A",
                "major_area": "Calculus",
                "topic": "Differentiation",
                "subtopic": [
                        "Product Rule",
                        "Calculus Modelling"
                ],
                "img": "images/Pure_SVGs/004059.svg",
                "question": "A curve has the equation:<br>$$f(x)  = 6\\text{e}^{-0.125x}\\sin x, \\quad x \\ge 0$$<br><strong>(a)</strong> Show that the $x$-coordinates of the turning points of the curve satisfy the equation $\\tan x = 8$.<br><br>The diagram shows a sketch of part of the curve with equation $y = f(x) $.<br><strong>(b)</strong> Sketch the graph of $H$ against $t$ where:<br>$$H(t) = \\left|6\\text{e}^{-0.125t}\\sin t\\right|, \\quad t \\ge 0$$<br>showing the long-term behaviour of this curve.<br><br>The function $H(t)$ is used to model the height, in metres, of a ball above the ground $t$ seconds after it has been kicked. Using this model, find:<br><strong>(c)</strong> the maximum height of the ball above the ground between the first and second bounce, giving your answer to 3 significant figures.<br><strong>(d)</strong> Explain why this model should not be used to predict the time of each bounce.",
                "steps": [
                        "<strong>Part (a):</strong> We find the derivative of $f(x) $ with respect to $x$ using the <strong>Product Rule</strong>, where $u = 6\\text{e}^{-0.125x}$ and $v = \\sin x$:<br>$$u' = -0.75\\text{e}^{-0.125x}$$<br>$$v' = \\cos x$$<br>\\begin{aligned}f'(x) &= u'v + uv' \\cr&= -0.75\\text{e}^{-0.125x}\\sin x\\cr & \\quad \\quad + 6\\text{e}^{-0.125x}\\cos x\\end{aligned}",
                        "Factorising out the exponential term:<br>$$f'(x) = 0.75\\text{e}^{-0.125x} \\left( 8\\cos x - \\sin x \\right)$$<br>At turning points, $f'(x) = 0$. Since $\\text{e}^{-0.125x} \\ne 0$ for all real $x$, we require:<br>\\begin{aligned}8\\cos x - \\sin x &= 0 \\cr8\\cos x &= \\sin x \\cr\\tan x &= 8\\end{aligned}",
                        "<strong>Part (b):</strong> The graph of $H(t) = \\left|6\\text{e}^{-0.125t}\\sin t\\right|$ is a damped sine wave with all its negative lobes reflected above the $t$-axis. This models the successive decreasing bounces of the ball tending to $0$ as $t \\to \\infty$.<br><br>Here is the completed sketch showing this long-term behaviour:<br><img src='images/Pure_SVGs/004059_ans.svg' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'>",
                        "<strong>Part (c):</strong> Bounces occur when \\begin{aligned}H(t) &= 0 \\cr\\implies \\sin t & = 0\\cr \\implies t &= n\\pi\\end{aligned}The interval between the first bounce ($t = \\pi$) and the second bounce ($t = 2\\pi$) is $\\pi < t < 2\\pi$.<br>The turning point in this interval occurs where $\\tan t = 8$, which in the third quadrant is:\\begin{aligned}t &= \\pi + \\tan^{-1}(8)\\cr &\\approx 3.14159 + 1.44644\\cr &\\approx 4.58803\\text{ seconds}\\end{aligned}",
                        "Substituting this value into the model to find the maximum height:\\begin{aligned} & H(4.58803)\\cr & \\quad \\quad = \\left|6\\text{e}^{-0.125(4.58803)}\\sin(4.58803)\\right|\\cr & \\quad \\quad \\approx \\left|6(0.563546)(-0.992278)\\right|\\cr & \\quad \\quad \\approx 3.3551\\text{ m}\\end{aligned}<br>Therefore, the maximum height is <strong>$3.36\\text{ m}$</strong> (to 3 significant figures).",
                        "<strong>Part (d):</strong> Under this model, the bounces are forced to occur at fixed intervals of exactly $\\pi$ seconds because of the $\\sin t$ term.<br>In reality, as the ball loses energy, the time between consecutive bounces decreases. Therefore, this model is physically unrealistic and must not be used to predict bounce times.",
                        "Final Answer: <strong>(a)</strong> $$\\tan x = 8\\\\\\ \\text{is verified}$$ <strong>(b)</strong> $$\\text{Bouncing curves sketched above the }t\\text{-axis}$$ <strong>(c)</strong> $$3.36\\text{ m}$$ <strong>(d)</strong> $$\\text{Bounces are forced at}$$ $$\\text{constant intervals of } \\pi \\text{ seconds}$$"
                ],
                "pi_options": [
                        {
                                "ans": "<strong>(a)</strong> $$\\tan x = 8$$ <strong>(b)</strong> Bouncing curves sketched <strong>(c)</strong> $$3.36\\text{ m}$$ <strong>(d)</strong> The bounce intervals will get progressively shorter",
                                "feedback": "Check your reasoning for Part (d). While real-world bounce intervals do get shorter, this mathematical model uses a strictly periodic $\\sin t$ term, which forces the bounce intervals to remain completely constant."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$\\tan x = 0.125$$ <strong>(b)</strong> Bouncing curves sketched <strong>(c)</strong> $$3.36\\text{ m}$$ <strong>(d)</strong> Bounces occur at constant intervals",
                                "feedback": "Check your division in Part (a). When dividing $8\\cos x = \\sin x$ by $\\cos x$ on both sides, you obtain $8 = \\frac{\\sin x}{\\cos x}$, which simplifies to $\\tan x = 8$, not $\\tan x = 0.125$."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$\\tan x = 8$$ <strong>(b)</strong> Bouncing curves sketched <strong>(c)</strong> $$1.98\\text{ m}$$ <strong>(d)</strong> Bounces occur at constant intervals",
                                "feedback": "Check your quadrant value in Part (c). The interval between the first and second bounce is $\\pi < t < 2\\pi$, which is the third quadrant. It appears you calculated the turning point in the first quadrant ($t = \\tan^{-1}(8) \\approx 1.45\\text{ s}$), which represents the peak of the first lobe before the first bounce."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: High Value Tangents",
                        "content": "When $\\tan x = 8$, the angle is very close to $90^\\circ$ ($\\frac{\\pi}{2}$ radians). This means the peak of the bounce is shifted slightly to the left compared to a standard un-damped sine wave. This horizontal shift is a natural consequence of exponential damping."
                }
        },
        {
                "id": "004060",
                "board": "Pearson Edexcel",
                "major_area": "Calculus",
                "level": "A",
                "topic": "Differentiation",
                "subtopic": [
                        "Product Rule",
                        "Calculus Modelling"
                ],
                "img": "images/Pure_SVGs/004060.svg",
                "question": "A curve has the equation:<br>$$f(x)  = 20\\text{e}^{-\\frac{1}{6}x}\\sin x, \\quad x \\ge 0$$<br><strong>(a)</strong> Show that the $x$-coordinates of the turning points of the curve satisfy the equation $\\tan x = 6$.<br><br>The diagram shows a sketch of part of the curve with equation $y = f(x) $.<br><strong>(b)</strong> Sketch the graph of $H$ against $t$ where:<br>$$H(t) = \\left|20\\text{e}^{-\\frac{1}{6}t}\\sin t\\right|, \\quad t \\ge 0$$<br>showing the long-term behaviour of this curve.<br><br>The function $H(t)$ is used to model the height, in metres, of a ball above the ground $t$ seconds after it has been kicked. Using this model, find:<br><strong>(c)</strong> the maximum height of the ball above the ground between the first and second bounce, giving your answer to 3 significant figures.<br><strong>(d)</strong> Explain why this model should not be used to predict the time of each bounce.",
                "steps": [
                        "<strong>Part (a):</strong> We find the derivative of $f(x) $ with respect to $x$ using the <strong>Product Rule</strong>, where $u = 20\\text{e}^{-\\frac{1}{6}x}$ and $v = \\sin x$:<br>$$u' = -\\frac{10}{3}\\text{e}^{-\\frac{1}{6}x}$$<br>$$v' = \\cos x$$<br>\\begin{aligned}f'(x) &= u'v + uv' \\cr&= -\\frac{10}{3}\\text{e}^{-\\frac{1}{6}x}\\sin x \\cr& \\quad \\quad + 20\\text{e}^{-\\frac{1}{6}x}\\cos x\\end{aligned}",
                        "Factorising out the exponential term:<br>$$f'(x) = \\frac{10}{3}\\text{e}^{-\\frac{1}{6}x} \\left( 6\\cos x - \\sin x \\right)$$<br>At turning points, $f'(x) = 0$. Since $\\text{e}^{-\\frac{1}{6}x} \\ne 0$ for all real $x$, we require:<br>\\begin{aligned}6\\cos x - \\sin x &= 0 \\cr6\\cos x &= \\sin x \\cr\\tan x &= 6\\end{aligned}",
                        "<strong>Part (b):</strong> The graph of $H(t) = \\left|20\\text{e}^{-\\frac{1}{6}t}\\sin t\\right|$ is a damped sine wave with all its negative lobes reflected above the $t$-axis. This models the successive decreasing bounces of the ball tending to $0$ as $t \\to \\infty$.<br><br>Here is the completed sketch showing this long-term behaviour:<br><img src='images/Pure_SVGs/004060_ans.svg' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'>",
                        "<strong>Part (c):</strong> Bounces occur when \\begin{aligned}H(t)& = 0\\cr \\implies \\sin t& = 0 \\cr\\implies t &= n\\pi\\end{aligned}The interval between the first bounce ($t = \\pi$) and the second bounce ($t = 2\\pi$) is $\\pi < t < 2\\pi$.<br>The turning point in this interval occurs where $\\tan t = 6$, which in the third quadrant is:\\begin{aligned}t &= \\pi + \\tan^{-1}(6)\\cr & \\approx 3.14159 + 1.40565\\cr & \\approx 4.54724\\text{ seconds}\\end{aligned}",
                        "Substituting this value into the model to find the maximum height:<br>$$H(4.54724) = \\left|20\\text{e}^{-\\frac{1}{6}(4.54724)}\\sin(4.54724)\\right| \\approx \\left|20(0.468656)(-0.986394)\\right| \\approx 9.2464\\text{ m}$$<br>Therefore, the maximum height is <strong>$9.25\\text{ m}$</strong> (to 3 significant figures).",
                        "<strong>Part (d):</strong> Under this model, the bounces are forced to occur at fixed intervals of exactly $\\pi$ seconds because of the $\\sin t$ term.<br>In reality, as the ball loses energy, the time between consecutive bounces decreases. Therefore, this model is physically unrealistic and must not be used to predict bounce times.",
                        "Final Answer: <strong>(a)</strong> $$\\tan x = 6 \\text{ is verified}$$ <strong>(b)</strong> $$\\text{Bouncing curves sketched above the }t\\text{-axis}$$ <strong>(c)</strong> $$9.25\\text{ m}$$ <strong>(d)</strong> $$\\text{Bounces are forced at}$$ $$\\text{constant intervals of } \\pi \\text{ seconds}$$"
                ],
                "pi_options": [
                        {
                                "ans": "<strong>(a)</strong> $$\\tan x = 6$$ <strong>(b)</strong> Bouncing curves sketched <strong>(c)</strong> $$9.26\\text{ m}$$ <strong>(d)</strong> Bounces are forced at constant intervals",
                                "feedback": "You probably made an arithmetic rounding error in Part (c) by evaluating the expression using rounded intermediate values. Retaining full calculator precision yields $H(4.54724) = 9.2464\\text{ m}$, which rounds to $9.25\\text{ m}$ to 3 significant figures."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$\\tan x = \\dfrac{1}{6}$$ <strong>(b)</strong> Bouncing curves sketched <strong>(c)</strong> $$9.25\\text{ m}$$ <strong>(d)</strong> Bounces are forced at constant intervals",
                                "feedback": "Check your division in Part (a). When dividing $6\\cos x = \\sin x$ by $\\cos x$ on both sides, you obtain $6 = \\frac{\\sin x}{\\cos x}$, which simplifies to $\\tan x = 6$, not $\\tan x = \\frac{1}{6}$."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$\\tan x = 6$$ <strong>(b)</strong> Bouncing curves sketched <strong>(c)</strong> $$1.54\\text{ m}$$ <strong>(d)</strong> Bounces are forced at constant intervals",
                                "feedback": "Check your quadrant value in Part (c). The interval between the first and second bounce is $\\pi < t < 2\\pi$, which is the third quadrant. It appears you calculated the turning point in the first quadrant ($t = \\tan^{-1}(6) \\approx 1.41\\text{ s}$), which represents the peak of the first lobe before the first bounce."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Product Rule Fractional Derivatives",
                        "content": "When applying the Product Rule to exponential functions with fractional coefficients like $20\\text{e}^{-\\frac{1}{6}x}$, keep your derivatives in exact fraction form ($u' = -\\frac{10}{3}\\text{e}^{-\\frac{1}{6}x}$) rather than decimals. This allows you to factorise the common term cleanly and secures your algebraic proofs."
                }
        },
        {
                "id": "004061",
                "board": "Pearson Edexcel",
                "branch": "Pure",
                "level": "A",
                "major_area": "Calculus",
                "topic": "Integration",
                "subtopic": [
                        "Area Under a Curve",
                        "Partial Fractions"
                ],
                "img": "images/Pure_SVGs/004061.svg",
                "question": "The curve $C$ with equation:<br>$$y = \\dfrac{p - 2x}{(2x - q)(x + 2)} \\quad x \\in \\mathbb{R}, \\\\ x \\ne -2, \\\\ x \\ne 3$$<br>where $p$ and $q$ are constants, passes through the point $(4, \\frac{1}{2})$ and has two vertical asymptotes with equations $x = 3$ and $x = -2$.<br><br><strong>(a)(i)</strong> Explain why you can deduce that $q = 6$.<br><strong>(a)(ii)</strong> Show that $p = 14$.<br><br>The diagram shows a sketch of part of the curve $C$. The region $R$, shown shaded in the diagram, is bounded by the curve $C$, the $x$-axis and the line with equation $x = 4$.<br><strong>(b)</strong> Show that the exact value of the area of $R$ is $a\\ln 2 + b\\ln 3 + c\\ln 7$, where $a$, $b$, and $c$ are rational constants to be found.",
                "steps": [
                        "<strong>Part (a)(i):</strong> Vertical asymptotes occur where the denominator of the rational function is equal to zero, which means:<br>\\begin{aligned}(2x - q)(x + 2) &= 0 \\crx &= \\frac{q}{2} \\quad \\text{and} \\quad x = -2\\end{aligned}",
                        "Since we are given that the vertical asymptotes have equations $x = 3$ and $x = -2$, we can equate the root terms:<br>\\begin{aligned}\\frac{q}{2} &= 3 \\crq &= 6\\end{aligned}",
                        "<strong>Part (a)(ii):</strong> Substituting our calculated value of $q = 6$ into the curve's equation gives:<br>$$y = \\dfrac{p - 2x}{(2x - 6)(x + 2)}$$",
                        "Since the curve passes through the point $(4, \\frac{1}{2})$, we substitute $x = 4$ and $y = \\frac{1}{2}$ into the equation to solve for $p$:<br>\\begin{aligned}\\frac{1}{2} &= \\dfrac{p - 2(4)}{(2(4) - 6)(4 + 2)} \\cr\\frac{1}{2} &= \\dfrac{p - 8}{(2)(6)}\\end{aligned}<br>\\begin{aligned}\\frac{1}{2} &= \\dfrac{p - 8}{12} \\cr6 &= p - 8 \\crp &= 14\\end{aligned}",
                        "<strong>Part (b):</strong> To find the area of the region $R$, we must find where the curve crosses the $x$-axis (the $x$-intercept). Setting $y = 0$ in the numerator gives:<br>\\begin{aligned}14 - 2x &= 0 \\cr2x &= 14 \\crx &= 7\\end{aligned}",
                        "Therefore, the region $R$ is bounded on the $x$-axis between $x = 4$ and $x = 7$.<br><br>Here is the completed diagram showing these key features and the vertical asymptote at $x = 3$:<br><img src='images/Pure_SVGs/004061_ans.svg' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'><br>Since the curve lies above the $x$-axis in this interval ($y > 0$), the area of $R$ is given by the definite integral:<br>$$\\text{Area} = \\int_{4}^{7} \\dfrac{14 - 2x}{(2x - 6)(x + 2)} \\text{ d}x$$",
                        "We simplify the integrand by factorising and cancelling a common factor of $2$:<br>\\begin{aligned}\\dfrac{14 - 2x}{(2x - 6)(x + 2)} &= \\dfrac{-2(x - 7)}{2(x - 3)(x + 2)} \\cr&= -\\dfrac{x - 7}{(x - 3)(x + 2)}\\end{aligned}",
                        "Now, we express this integrand in <strong>partial fractions</strong>:<br>$$-\\dfrac{x - 7}{(x - 3)(x + 2)} = \\dfrac{A}{x - 3} + \\dfrac{B}{x + 2}$$<br>$$14 - 2x = A(x + 2) + B(x - 3)$$",
                        "Using the substitution method to solve for the coefficients:<br>1. Setting $x = 3 \\implies 14 - 2(3) = A(3 + 2) \\implies 8 = 5A \\implies A = \\frac{4}{5}$ (noting the scale factor of $2$ cancelled earlier).<br>2. Setting $x = -2 \\implies 14 - 2(-2) = B(-2 - 3) \\implies 18 = -5B \\implies B = -\\frac{9}{5}$",
                        "Substituting these coefficients back into our integral gives:<br>\\begin{aligned}\\text{Area} &= \\int_{4}^{7} \\left( \\dfrac{4/5}{x - 3} - \\dfrac{9/5}{x + 2} \\right) \\text{ d}x \\cr&= \\left[ \\frac{4}{5}\\ln|x - 3| - \\frac{9}{5}\\ln|x + 2| \\right]_{4}^{7}\\end{aligned}",
                        "Evaluating this expression at our upper limit ($7$) and lower limit ($4$):<br>\\begin{aligned}\\text{Value at 7} &= \\frac{4}{5}\\ln(4) - \\frac{9}{5}\\ln(9) \\cr&= \\frac{8}{5}\\ln(2) - \\frac{18}{5}\\ln(3)\\end{aligned}<br>\\begin{aligned}\\text{Value at 4} &= \\frac{4}{5}\\ln(1) - \\frac{9}{5}\\ln(6) \\cr&= 0 - \\frac{9}{5}(\\ln 2 + \\ln 3) \\cr&= -\\frac{9}{5}\\ln(2) - \\frac{9}{5}\\ln(3)\\end{aligned}",
                        "Subtracting the lower limit value from the upper limit value yields:<br>$$\\text{Area} = \\left( \\frac{8}{5}\\ln 2 - \\frac{18}{5}\\ln 3 \\right) - \\left( -\\frac{9}{5}\\ln 2 - \\frac{9}{5}\\ln 3 \\right)$$<br>\\begin{aligned}\\text{Area} &= \\left( \\frac{8 + 9}{5} \\right)\\ln 2 + \\left( \\frac{-18 + 9}{5} \\right)\\ln 3 \\cr&= \\frac{17}{5}\\ln 2 - \\frac{9}{5}\\ln 3\\end{aligned}<br>Therefore, the constants are $a = \\frac{17}{5}$, $b = -\\frac{9}{5}$, and $c = 0$.",
                        "Final Answer: <strong>(a)(i)</strong> $$q = 6$$ <strong>(a)(ii)</strong> $$p = 14$$ <strong>(b)</strong> $$\\dfrac{17}{5}\\ln 2 - \\dfrac{9}{5}\\ln 3$$"
                ],
                "pi_options": [
                        {
                                "ans": "<strong>(a)(i)</strong> $$q = 3$$ <strong>(a)(ii)</strong> $$p = 14$$ <strong>(b)</strong> $$\\dfrac{17}{5}\\ln 2 - \\dfrac{9}{5}\\ln 3$$",
                                "feedback": "You probably made a division slip in Part (a)(i). The denominator term $2x - q = 0$ yields $x = \\frac{q}{2}$. Equating this to the asymptote $x = 3$ gives $\\frac{q}{2} = 3 \\implies q = 6$, not $q = 3$."
                        },
                        {
                                "ans": "<strong>(a)(i)</strong> $$q = 6$$ <strong>(a)(ii)</strong> $$p = 14$$ <strong>(b)</strong> $$\\dfrac{17}{5}\\ln 2 + \\dfrac{9}{5}\\ln 3$$",
                                "feedback": "Check your signs in Part (b). When subtracting the lower limit term, the double negative becomes a positive, yielding $-\\frac{18}{5}\\ln 3 - (-\\frac{9}{5}\\ln 3) = -\\frac{9}{5}\\ln 3$. Be careful when combining logarithm terms."
                        },
                        {
                                "ans": "<strong>(a)(i)</strong> $$q = 6$$ <strong>(a)(ii)</strong> $$p = 14$$ <strong>(b)</strong> $$\\dfrac{8}{5}\\ln 2 - \\dfrac{18}{5}\\ln 3$$",
                                "feedback": "You probably forgot to subtract the lower limit value ($x=4$) at the end of Part (b). Remember to substitute both limits into your integrated function: $\\text{Area} = \\text{F}(7) - \\text{F}(4)$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Simplifying Integrands",
                        "content": "In this question, before starting your partial fractions, always look for common numerical factors in your numerator and denominator. Factorising and cancelling out the $2$ from $14-2x$ and $2x-6$ simplifies the algebra of your partial fractions significantly, reducing your chance of calculation errors."
                }
        },
        {
                "id": "004062",
                "board": "Pearson Edexcel",
                "branch": "Pure",
                "level": "A",
                "major_area": "Calculus",
                "topic": "Integration",
                "subtopic": [
                        "Area Under a Curve",
                        "Partial Fractions"
                ],
                "img": "images/Pure_SVGs/004062.svg",
                "question": "The curve $C$ with equation:<br>$$y = \\dfrac{p - 3x}{(3x - q)(x + 2)} \\quad x \\in \\mathbb{R}, \\\\ x \\ne -2, \\\\ x \\ne 1$$<br>where $p$ and $q$ are constants, passes through the point $(2, \\frac{1}{2})$ and has two vertical asymptotes with equations $x = 1$ and $x = -2$.<br><br><strong>(a)(i)</strong> Explain why you can deduce that $q = 3$.<br><strong>(a)(ii)</strong> Show that $p = 12$.<br><br>The diagram shows a sketch of part of the curve $C$. The region $R$, shown shaded in the diagram, is bounded by the curve $C$, the $x$-axis and the line with equation $x = 2$.<br><strong>(b)</strong> Show that the exact value of the area of $R$ is $a\\ln 2 + b\\ln 3$, where $a$ and $b$ are rational constants to be found.",
                "steps": [
                        "<strong>Part (a)(i):</strong> Vertical asymptotes occur where the denominator of the rational function is equal to zero, which means:<br>\\begin{aligned}(3x - q)(x + 2) &= 0 \\crx &= \\frac{q}{3} \\quad \\text{and} \\quad x = -2\\end{aligned}",
                        "Since we are given that the vertical asymptotes have equations $x = 1$ and $x = -2$, we can equate the root terms:<br>\\begin{aligned}\\frac{q}{3} &= 1 \\crq &= 3\\end{aligned}",
                        "<strong>Part (a)(ii):</strong> Substituting our calculated value of $q = 3$ into the curve's equation gives:<br>$$y = \\dfrac{p - 3x}{(3x - 3)(x + 2)}$$",
                        "Since the curve passes through the point $(2, \\frac{1}{2})$, we substitute $x = 2$ and $y = \\frac{1}{2}$ into the equation to solve for $p$:<br>\\begin{aligned}\\frac{1}{2} &= \\dfrac{p - 3(2)}{(3(2) - 3)(2 + 2)} \\cr\\frac{1}{2} &= \\dfrac{p - 6}{(3)(4)}\\end{aligned}<br>\\begin{aligned}\\frac{1}{2} &= \\dfrac{p - 6}{12} \\cr6 &= p - 6 \\crp &= 12\\end{aligned}",
                        "<strong>Part (b):</strong> To find the area of the region $R$, we must find where the curve crosses the $x$-axis (the $x$-intercept). Setting $y = 0$ in the numerator gives:<br>\\begin{aligned}12 - 3x &= 0 \\cr3x &= 12 \\crx &= 4\\end{aligned}",
                        "Therefore, the region $R$ is bounded on the $x$-axis between $x = 2$ and $x = 4$.<br><br>Here is the completed diagram showing these key features and the vertical asymptote at $x = 1$:<br><img src='images/Pure_SVGs/004062_ans.svg' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'><br>Since the curve lies above the $x$-axis in this interval ($y > 0$), the area of $R$ is given by the definite integral:<br>$$\\text{Area} = \\int_{2}^{4} \\dfrac{12 - 3x}{(3x - 3)(x + 2)} \\text{ d}x$$",
                        "We simplify the integrand by factorising and cancelling a common factor of $3$:<br>\\begin{aligned}\\dfrac{12 - 3x}{(3x - 3)(x + 2)} &= \\dfrac{-3(x - 4)}{3(x - 1)(x + 2)} \\cr&= -\\dfrac{x - 4}{(x - 1)(x + 2)}\\end{aligned}",
                        "Now, we express this integrand in <strong>partial fractions</strong>:<br>$$-\\dfrac{x - 4}{(x - 1)(x + 2)} = \\dfrac{A}{x - 1} + \\dfrac{B}{x + 2}$$<br>$$4 - x = A(x + 2) + B(x - 1)$$",
                        "Using the substitution method to solve for the coefficients:<br>1. Setting $x = 1 \\implies 4 - (1) = A(1 + 2) \\implies 3 = 3A \\implies A = 1$.<br>2. Setting $x = -2 \\implies 4 - (-2) = B(-2 - 1) \\implies 6 = -3B \\implies B = -2$.",
                        "Substituting these coefficients back into our integral gives:<br>\\begin{aligned}\\text{Area} &= \\int_{2}^{4} \\left( \\dfrac{1}{x - 1} - \\dfrac{2}{x + 2} \\right) \\text{ d}x \\cr&= \\left[ \\ln|x - 1| - 2\\ln|x + 2| \\right]_{2}^{4}\\end{aligned}",
                        "Evaluating this expression at our upper limit ($4$) and lower limit ($2$):<br>\\begin{aligned}\\text{Value at 4} &= \\ln(3) - 2\\ln(6) \\cr&= \\ln(3) - 2(\\ln 2 + \\ln 3) \\cr&= -2\\ln(2) - \\ln(3)\\end{aligned}<br>\\begin{aligned}\\text{Value at 2} &= \\ln(1) - 2\\ln(4) \\cr&= 0 - 2(2\\ln 2) \\cr&= -4\\ln(2)\\end{aligned}",
                        "Subtracting the lower limit value from the upper limit value yields:<br>$$\\text{Area} = \\left( -2\\ln 2 - \\ln 3 \\right) - \\left( -4\\ln 2 \\right)$$<br>$$\\text{Area} = 2\\ln 2 - \\ln 3$$<br>Therefore, the constants are $a = 2$ and $b = -1$.",
                        "Final Answer: <strong>(a)(i)</strong> $$q = 3$$ <strong>(a)(ii)</strong> $$p = 12$$ <strong>(b)</strong> $$2\\ln 2 - \\ln 3$$"
                ],
                "pi_options": [
                        {
                                "ans": "<strong>(a)(i)</strong> $$q = 1$$ <strong>(a)(ii)</strong> $$p = 12$$ <strong>(b)</strong> $$2\\ln 2 - \\ln 3$$",
                                "feedback": "You probably made a division slip in Part (a)(i). The denominator term $3x - q = 0$ yields $x = \\frac{q}{3}$. Equating this to the asymptote $x = 1$ gives $\\frac{q}{3} = 1 \\implies q = 3$, not $q = 1$."
                        },
                        {
                                "ans": "<strong>(a)(i)</strong> $$q = 3$$ <strong>(a)(ii)</strong> $$p = 12$$ <strong>(b)</strong> $$2\\ln 2 + \\ln 3$$",
                                "feedback": "Check your signs in Part (b). When subtracting the lower limit term, the double negative becomes a positive, yielding $-\\ln 3 - (-4\\ln 2) = 2\\ln 2 - \\ln 3$. Be careful when combining logarithm terms."
                        },
                        {
                                "ans": "<strong>(a)(i)</strong> $$q = 3$$ <strong>(a)(ii)</strong> $$p = 12$$ <strong>(b)</strong> $$-2\\ln 2 - \\ln 3$$",
                                "feedback": "You probably forgot to subtract the lower limit value ($x=2$) at the end of Part (b). Remember to substitute both limits into your integrated function: $\\text{Area} = \\text{F}(4) - \\text{F}(2)$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Simplifications of Log 6",
                        "content": "In GCE integration questions, terms like $\\ln 6$ can always be split into $\\ln 2 + \\ln 3$. Expressing your log terms in their prime bases allows you to combine coefficients cleanly and secures your final proof forms."
                }
        },
        {
                "id": "004063",
                "board": "Pearson Edexcel",
                "branch": "Pure",
                "level": "A",
                "major_area": "Calculus",
                "topic": "Integration",
                "subtopic": [
                        "Area Under a Curve",
                        "Partial Fractions"
                ],
                "img": "images/Pure_SVGs/004063.svg",
                "question": "The curve $C$ with equation:<br>$$y = \\dfrac{p - 4x}{(2x - q)(x + 1)} \\quad x \\in \\mathbb{R}, \\\\ x \\ne -1, \\\\ x \\ne 2$$<br>where $p$ and $q$ are constants, passes through the point $(3, \\frac{1}{2})$ and has two vertical asymptotes with equations $x = 2$ and $x = -1$.<br><br><strong>(a)(i)</strong> Explain why you can deduce that $q = 4$.<br><strong>(a)(ii)</strong> Show that $p = 16$.<br><br>The diagram shows a sketch of part of the curve $C$. The region $R$, shown shaded in the diagram, is bounded by the curve $C$, the $x$-axis and the line with equation $x = 3$.<br><strong>(b)</strong> Show that the exact value of the area of $R$ is $a\\ln 2 + b\\ln 5$, where $a$ and $b$ are rational constants to be found.",
                "steps": [
                        "<strong>Part (a)(i):</strong> Vertical asymptotes occur where the denominator of the rational function is equal to zero, which means:<br>\\begin{aligned}(2x - q)(x + 1) &= 0 \\crx &= \\frac{q}{2} \\quad \\text{and} \\quad x = -1\\end{aligned}",
                        "Since we are given that the vertical asymptotes have equations $x = 2$ and $x = -1$, we can equate the root terms:<br>\\begin{aligned}\\frac{q}{2} &= 2 \\crq &= 4\\end{aligned}",
                        "<strong>Part (a)(ii):</strong> Substituting our calculated value of $q = 4$ into the curve's equation gives:<br>$$y = \\dfrac{p - 4x}{(2x - 4)(x + 1)}$$",
                        "Since the curve passes through the point $(3, \\frac{1}{2})$, we substitute $x = 3$ and $y = \\frac{1}{2}$ into the equation to solve for $p$:<br>\\begin{aligned}\\frac{1}{2} &= \\dfrac{p - 4(3)}{(2(3) - 4)(3 + 1)} \\cr\\frac{1}{2} &= \\dfrac{p - 12}{(2)(4)}\\end{aligned}<br>\\begin{aligned}\\frac{1}{2} &= \\dfrac{p - 12}{8} \\cr4 &= p - 12 \\crp &= 16\\end{aligned}",
                        "<strong>Part (b):</strong> To find the area of the region $R$, we must find where the curve crosses the $x$-axis (the $x$-intercept). Setting $y = 0$ in the numerator gives:<br>\\begin{aligned}16 - 4x &= 0 \\cr4x &= 16 \\crx &= 4\\end{aligned}",
                        "Therefore, the region $R$ is bounded on the $x$-axis between $x = 3$ and $x = 4$.<br><br>Here is the completed diagram showing these key features and the vertical asymptote at $x = 2$:<br><img src='images/Pure_SVGs/004063_ans.svg' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'><br>Since the curve lies above the $x$-axis in this interval ($y > 0$), the area of $R$ is given by the definite integral:<br>$$\\text{Area} = \\int_{3}^{4} \\dfrac{16 - 4x}{(2x - 4)(x + 1)} \\text{ d}x$$",
                        "We simplify the integrand by factorising and cancelling a common factor of $2$:<br>\\begin{aligned}\\dfrac{16 - 4x}{(2x - 4)(x + 1)} &= \\dfrac{-4(x - 4)}{2(x - 2)(x + 1)} \\cr&= -2\\dfrac{x - 4}{(x - 2)(x + 1)}\\end{aligned}",
                        "Now, we express this integrand in <strong>partial fractions</strong>:<br>$$-2\\dfrac{x - 4}{(x - 2)(x + 1)} = \\dfrac{A}{x - 2} + \\dfrac{B}{x + 1}$$<br>$$8 - 2x = A(x + 1) + B(x - 2)$$",
                        "Using the substitution method to solve for the coefficients:<br>1. Setting $x = 2 \\implies 8 - 2(2) = A(2 + 1) \\implies 4 = 3A \\implies A = \\frac{4}{3}$.<br>2. Setting $x = -1 \\implies 8 - 2(-1) = B(-1 - 2) \\implies 10 = -3B \\implies B = -\\frac{10}{3}$.",
                        "Substituting these coefficients back into our integral gives:<br>\\begin{aligned}\\text{Area} &= \\int_{3}^{4} \\left( \\dfrac{4/3}{x - 2} - \\dfrac{10/3}{x + 1} \\right) \\text{ d}x \\cr&= \\left[ \\frac{4}{3}\\ln|x - 2| - \\frac{10}{3}\\ln|x + 1| \\right]_{3}^{4}\\end{aligned}",
                        "Evaluating this expression at our upper limit ($4$) and lower limit ($3$):<br>$$\\text{Value at 4} = \\frac{4}{3}\\ln(2) - \\frac{10}{3}\\ln(5)$$<br>\\begin{aligned}\\text{Value at 3} &= \\frac{4}{3}\\ln(1) - \\frac{10}{3}\\ln(4) \\cr&= 0 - \\frac{10}{3}(2\\ln 2) \\cr&= -\\frac{20}{3}\\ln(2)\\end{aligned}",
                        "Subtracting the lower limit value from the upper limit value yields:<br>$$\\text{Area} = \\left( \\frac{4}{3}\\ln 2 - \\frac{10}{3}\\ln 5 \\right) - \\left( -\\frac{20}{3}\\ln 2 \\right)$$<br>\\begin{aligned}\\text{Area} &= \\left( \\frac{4 + 20}{3} \\right)\\ln 2 - \\frac{10}{3}\\ln 5 \\cr&= 8\\ln 2 - \\frac{10}{3}\\ln 5\\end{aligned}<br>Therefore, the constants are $a = 8$ and $b = -\\frac{10}{3}$.",
                        "Final Answer: <strong>(a)(i)</strong> $$q = 4$$ <strong>(a)(ii)</strong> $$p = 16$$ <strong>(b)</strong> $$8\\ln 2 - \\dfrac{10}{3}\\ln 5$$"
                ],
                "pi_options": [
                        {
                                "ans": "<strong>(a)(i)</strong> $$q = 2$$ <strong>(a)(ii)</strong> $$p = 16$$ <strong>(b)</strong> $$8\\ln 2 - \\dfrac{10}{3}\\ln 5$$",
                                "feedback": "You probably made a division slip in Part (a)(i). The denominator term $2x - q = 0$ yields $x = \\frac{q}{2}$. Equating this to the asymptote $x = 2$ gives $\\frac{q}{2} = 2 \\implies q = 4$, not $q = 2$."
                        },
                        {
                                "ans": "<strong>(a)(i)</strong> $$q = 4$$ <strong>(a)(ii)</strong> $$p = 16$$ <strong>(b)</strong> $$8\\ln 2 + \\dfrac{10}{3}\\ln 5$$",
                                "feedback": "Check your signs in Part (b). The negative sign attached to the coefficient of $\\ln 5$ remains negative upon subtraction because the lower limit evaluated to $0$ for that term: $-\\frac{10}{3}\\ln 5 - 0 = -\\frac{10}{3}\\ln 5$."
                        },
                        {
                                "ans": "<strong>(a)(i)</strong> $$q = 4$$ <strong>(a)(ii)</strong> $$p = 16$$ <strong>(b)</strong> $$\\dfrac{22}{3}\\ln 2 - \\dfrac{10}{3}\\ln 5$$",
                                "feedback": "Check your fraction addition at the end of Part (b). When combining your $\\ln 2$ terms, you must add $\\frac{4}{3} + \\frac{20}{3} = \\frac{24}{3}$, which simplifies perfectly to the integer $8$."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Power Laws",
                        "content": "When evaluating terms like $\\ln 4$ at the lower limit, always apply the power law to rewrite it as $2\\ln 2$ before combining. Failing to reduce composite bases like $4$ to prime bases like $2$ is the most common reason students fail to match the target form of the proof."
                }
        },
        {
                "id": "004064",
                "board": "Pearson Edexcel",
                "branch": "Pure",
                "level": "A",
                "major_area": "Calculus",
                "topic": "Integration",
                "subtopic": [
                        "Area Under a Curve",
                        "Partial Fractions"
                ],
                "img": "images/Pure_SVGs/004064.svg",
                "question": "The curve $C$ with equation:<br>$$y = \\dfrac{p - 2x}{(3x - q)(x + 1)} \\quad x \\in \\mathbb{R}, \\\\ x \\ne -1, \\\\ x \\ne 2$$<br>where $p$ and $q$ are constants, passes through the point $(3, \\frac{1}{2})$ and has two vertical asymptotes with equations $x = 2$ and $x = -1$.<br><br><strong>(a)(i)</strong> Explain why you can deduce that $q = 6$.<br><strong>(a)(ii)</strong> Show that $p = 12$.<br><br>The diagram shows a sketch of part of the curve $C$. The region $R$, shown shaded in the diagram, is bounded by the curve $C$, the $x$-axis and the line with equation $x = 3$.<br><strong>(b)</strong> Show that the exact value of the area of $R$ is $a\\ln 2 + b\\ln 7$, where $a$ and $b$ are rational constants to be found.",
                "steps": [
                        "<strong>Part (a)(i):</strong> Vertical asymptotes occur where the denominator of the rational function is equal to zero, which means:<br>\\begin{aligned}(3x - q)(x + 1) &= 0 \\crx &= \\frac{q}{3} \\quad \\text{and} \\quad x = -1\\end{aligned}",
                        "Since we are given that the vertical asymptotes have equations $x = 2$ and $x = -1$, we can equate the root terms:<br>\\begin{aligned}\\frac{q}{3} &= 2 \\crq &= 6\\end{aligned}",
                        "<strong>Part (a)(ii):</strong> Substituting our calculated value of $q = 6$ into the curve's equation gives:<br>$$y = \\dfrac{p - 2x}{(3x - 6)(x + 1)}$$",
                        "Since the curve passes through the point $(3, \\frac{1}{2})$, we substitute $x = 3$ and $y = \\frac{1}{2}$ into the equation to solve for $p$:<br>\\begin{aligned}\\frac{1}{2} &= \\dfrac{p - 2(3)}{(3(3) - 6)(3 + 1)} \\cr\\frac{1}{2} &= \\dfrac{p - 6}{(3)(4)}\\end{aligned}<br>\\begin{aligned}\\frac{1}{2} &= \\dfrac{p - 6}{12} \\cr6 &= p - 6 \\crp &= 12\\end{aligned}",
                        "<strong>Part (b):</strong> To find the area of the region $R$, we must find where the curve crosses the $x$-axis (the $x$-intercept). Setting $y = 0$ in the numerator gives:<br>\\begin{aligned}12 - 2x &= 0 \\cr2x &= 12 \\crx &= 6\\end{aligned}",
                        "Therefore, the region $R$ is bounded on the $x$-axis between $x = 3$ and $x = 6$.<br><br>Here is the completed diagram showing these key features and the vertical asymptote at $x = 2$:<br><img src='images/Pure_SVGs/004064_ans.svg' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'><br>Since the curve lies above the $x$-axis in this interval ($y > 0$), the area of $R$ is given by the definite integral:<br>$$\\text{Area} = \\int_{3}^{6} \\dfrac{12 - 2x}{(3x - 6)(x + 1)} \\text{ d}x$$",
                        "We simplify the integrand by factorising:<br>\\begin{aligned}\\dfrac{12 - 2x}{(3x - 6)(x + 1)} &= \\dfrac{2(6 - x)}{3(x - 2)(x + 1)} \\cr&= \\dfrac{2}{3} \\dfrac{6 - x}{(x - 2)(x + 1)}\\end{aligned}",
                        "Now, we express this integrand in <strong>partial fractions</strong>:<br>$$\\dfrac{2}{3} \\dfrac{6 - x}{(x - 2)(x + 1)} = \\dfrac{A}{x - 2} + \\dfrac{B}{x + 1}$$<br>\\begin{aligned}12 - 2x &= 3A(x + 1) + 3B(x - 2) \\cr&= 3(A + B)x + 3(A - 2B)\\end{aligned}",
                        "Using the substitution method to solve for the coefficients:<br>1. Setting $x = 2 \\implies 12 - 2(2) = 3A(2 + 1) \\implies 8 = 9A \\implies A = \\frac{8}{9}$.<br>2. Setting $x = -1 \\implies 12 - 2(-1) = 3B(-1 - 2) \\implies 14 = -9B \\implies B = -\\frac{14}{9}$.",
                        "Substituting these coefficients back into our integral gives:<br>\\begin{aligned}\\text{Area} &= \\int_{3}^{6} \\left( \\dfrac{8/9}{x - 2} - \\dfrac{14/9}{x + 1} \\right) \\text{ d}x \\cr&= \\left[ \\frac{8}{9}\\ln|x - 2| - \\frac{14}{9}\\ln|x + 1| \\right]_{3}^{6}\\end{aligned}",
                        "Evaluating this expression at our upper limit ($6$) and lower limit ($3$):<br>\\begin{aligned}\\text{Value at 6} &= \\frac{8}{9}\\ln(4) - \\frac{14}{9}\\ln(7) \\cr&= \\frac{16}{9}\\ln(2) - \\frac{14}{9}\\ln(7)\\end{aligned}<br>\\begin{aligned}\\text{Value at 3} &= \\frac{8}{9}\\ln(1) - \\frac{14}{9}\\ln(4) \\cr&= 0 - \\frac{14}{9}(2\\ln 2) \\cr&= -\\frac{28}{9}\\ln(2)\\end{aligned}",
                        "Subtracting the lower limit value from the upper limit value yields:<br>$$\\text{Area} = \\left( \\frac{16}{9}\\ln 2 - \\frac{14}{9}\\ln 7 \\right) - \\left( -\\frac{28}{9}\\ln 2 \\right)$$<br>\\begin{aligned}\\text{Area} &= \\left( \\frac{16 + 28}{9} \\right)\\ln 2 - \\frac{14}{9}\\ln 7 \\cr&= \\frac{44}{9}\\ln 2 - \\frac{14}{9}\\ln 7\\end{aligned}<br>Therefore, the constants are $a = \\frac{44}{9}$ and $b = -\\frac{14}{9}$.",
                        "Final Answer: <strong>(a)(i)</strong> $$q = 6$$ <strong>(a)(ii)</strong> $$p = 12$$ <strong>(b)</strong> $$\\dfrac{44}{9}\\ln 2 - \\dfrac{14}{9}\\ln 7$$"
                ],
                "pi_options": [
                        {
                                "ans": "<strong>(a)(i)</strong> $$q = 2$$ <strong>(a)(ii)</strong> $$p = 12$$ <strong>(b)</strong> $$\\dfrac{44}{9}\\ln 2 - \\dfrac{14}{9}\\ln 7$$",
                                "feedback": "You probably made a division slip in Part (a)(i). The denominator term $3x - q = 0$ yields $x = \\frac{q}{3}$. Equating this to the asymptote $x = 2$ gives $\\frac{q}{3} = 2 \\implies q = 6$, not $q = 2$."
                        },
                        {
                                "ans": "<strong>(a)(i)</strong> $$q = 6$$ <strong>(a)(ii)</strong> $$p = 12$$ <strong>(b)</strong> $$\\dfrac{44}{9}\\ln 2 + \\dfrac{14}{9}\\ln 7$$",
                                "feedback": "Check your signs in Part (b). The negative sign attached to the coefficient of $\\ln 7$ remains negative upon subtraction because the lower limit evaluated to $0$ for that term: $-\\frac{14}{9}\\ln 7 - 0 = -\\frac{14}{9}\\ln 7$."
                        },
                        {
                                "ans": "<strong>(a)(i)</strong> $$q = 6$$ <strong>(a)(ii)</strong> $$p = 12$$ <strong>(b)</strong> $$\\dfrac{16}{9}\\ln 2 - \\dfrac{14}{9}\\ln 7$$",
                                "feedback": "You probably forgot to subtract the lower limit value ($x=3$) at the end of Part (b). Remember to substitute both limits into your integrated function: $\\text{Area} = \\text{F}(6) - \\text{F}(3)$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Integral Limits",
                        "content": "In GCE questions, finding the upper limit of your shaded region is an active step. Even if it is not explicitly labeled on the diagram, you must determine it yourself by finding the $x$-intercept where the curve cuts the $x$-axis (setting $y=0$)."
                }
        },
        {
                "id": "004065",
                "board": "Pearson Edexcel",
                "branch": "Pure",
                "level": "A",
                "major_area": "Calculus",
                "topic": "Integration",
                "subtopic": [
                        "Area Under a Curve",
                        "Partial Fractions"
                ],
                "img": "images/Pure_SVGs/004065.svg",
                "question": "The curve $C$ with equation:<br>$$y = \\dfrac{p - 3x}{(2x - q)(x + 2)} \\quad x \\in \\mathbb{R}, \\\\ x \\ne -2, \\\\ x \\ne 3$$<br>where $p$ and $q$ are constants, passes through the point $(4, \\frac{1}{2})$ and has two vertical asymptotes with equations $x = 3$ and $x = -2$.<br><br><strong>(a)(i)</strong> Explain why you can deduce that $q = 6$.<br><strong>(a)(ii)</strong> Show that $p = 18$.<br><br>The diagram shows a sketch of part of the curve $C$. The region $R$, shown shaded in the diagram, is bounded by the curve $C$, the $x$-axis and the line with equation $x = 4$.<br><strong>(b)</strong> Show that the exact value of the area of $R$ is $a\\ln 2 + b\\ln 3$, where $a$ and $b$ are rational constants to be found.",
                "steps": [
                        "<strong>Part (a)(i):</strong> Vertical asymptotes occur where the denominator of the rational function is equal to zero, which means:<br>\\begin{aligned}(2x - q)(x + 2) &= 0 \\crx &= \\frac{q}{2} \\quad \\text{and} \\quad x = -2\\end{aligned}",
                        "Since we are given that the vertical asymptotes have equations $x = 3$ and $x = -2$, we can equate the root terms:<br>\\begin{aligned}\\frac{q}{2} &= 3 \\crq &= 6\\end{aligned}",
                        "<strong>Part (a)(ii):</strong> Substituting our calculated value of $q = 6$ into the curve's equation gives:<br>$$y = \\dfrac{p - 3x}{(2x - 6)(x + 2)}$$",
                        "Since the curve passes through the point $(4, \\frac{1}{2})$, we substitute $x = 4$ and $y = \\frac{1}{2}$ into the equation to solve for $p$:<br>\\begin{aligned}\\frac{1}{2} &= \\dfrac{p - 3(4)}{(2(4) - 6)(4 + 2)} \\cr\\frac{1}{2} &= \\dfrac{p - 12}{(2)(6)}\\end{aligned}<br>\\begin{aligned}\\frac{1}{2} &= \\dfrac{p - 12}{12} \\cr6 &= p - 12 \\crp &= 18\\end{aligned}",
                        "<strong>Part (b):</strong> To find the area of the region $R$, we must find where the curve crosses the $x$-axis (the $x$-intercept). Setting $y = 0$ in the numerator gives:<br>\\begin{aligned}18 - 3x &= 0 \\cr3x &= 18 \\crx &= 6\\end{aligned}",
                        "Therefore, the region $R$ is bounded on the $x$-axis between $x = 4$ and $x = 6$.<br><br>Here is the completed diagram showing these key features and the vertical asymptote at $x = 3$:<br><img src='images/Pure_SVGs/004065_ans.svg' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'><br>Since the curve lies above the $x$-axis in this interval ($y > 0$), the area of $R$ is given by the definite integral:<br>$$\\text{Area} = \\int_{4}^{6} \\dfrac{18 - 3x}{(2x - 6)(x + 2)} \\text{ d}x$$",
                        "We simplify the integrand by factorising:<br>\\begin{aligned}\\dfrac{18 - 3x}{(2x - 6)(x + 2)} &= \\dfrac{3(6 - x)}{2(x - 3)(x + 2)} \\cr&= \\dfrac{3}{2} \\dfrac{6 - x}{(x - 3)(x + 2)}\\end{aligned}",
                        "Now, we express this integrand in <strong>partial fractions</strong>:<br>$$\\dfrac{3}{2} \\dfrac{6 - x}{(x - 3)(x + 2)} = \\dfrac{A}{x - 3} + \\dfrac{B}{x + 2}$$<br>\\begin{aligned}18 - 3x &= 2A(x + 2) + 2B(x - 3) \\cr&= 2(A + B)x + 2(2A - 3B)\\end{aligned}",
                        "Using the substitution method to solve for the coefficients:<br>1. Setting $x = 3 \\implies 18 - 3(3) = 2A(3 + 2) \\implies 9 = 10A \\implies A = \\frac{9}{10}$.<br>2. Setting $x = -2 \\implies 18 - 3(-2) = 2B(-2 - 3) \\implies 24 = -10B \\implies B = -\\frac{12}{5}$.",
                        "Substituting these coefficients back into our integral gives:<br>\\begin{aligned}\\text{Area} &= \\int_{4}^{6} \\left( \\dfrac{9/10}{x - 3} - \\dfrac{12/5}{x + 2} \\right) \\text{ d}x \\cr&= \\left[ \\frac{9}{10}\\ln|x - 3| - \\frac{12}{5}\\ln|x + 2| \\right]_{4}^{6}\\end{aligned}",
                        "Evaluating this expression at our upper limit ($6$) and lower limit ($4$):<br>\\begin{aligned}\\text{Value at 6} &= \\frac{9}{10}\\ln(3) - \\frac{12}{5}\\ln(8) \\cr&= \\frac{9}{10}\\ln(3) - \\frac{12}{5}(3\\ln 2) \\cr&= -\\frac{36}{5}\\ln(2) + \\frac{9}{10}\\ln(3)\\end{aligned}<br>\\begin{aligned}\\text{Value at 4} &= \\frac{9}{10}\\ln(1) - \\frac{12}{5}\\ln(6) \\cr&= 0 - \\frac{12}{5}(\\ln 2 + \\ln 3) \\cr&= -\\frac{12}{5}\\ln(2) - \\frac{12}{5}\\ln(3)\\end{aligned}",
                        "Subtracting the lower limit value from the upper limit value yields:<br>$$\\text{Area} = \\left( -\\frac{36}{5}\\ln 2 + \\frac{9}{10}\\ln 3 \\right) - \\left( -\\frac{12}{5}\\ln 2 - \\frac{12}{5}\\ln 3 \\right)$$<br>\\begin{aligned}\\text{Area} &= \\left( -\\frac{36}{5} + \\frac{12}{5} \\right)\\ln 2 + \\left( \\frac{9}{10} + \\frac{24}{10} \\right)\\ln 3 \\cr&= -\\frac{24}{5}\\ln 2 + \\frac{33}{10}\\ln 3\\end{aligned}<br>Therefore, the constants are $a = -\\frac{24}{5}$ and $b = \\frac{33}{10}$.",
                        "Final Answer: <strong>(a)(i)</strong> $$q = 6$$ <strong>(a)(ii)</strong> $$p = 18$$ <strong>(b)</strong> $$-\\dfrac{24}{5}\\ln 2 + \\dfrac{33}{10}\\ln 3$$"
                ],
                "pi_options": [
                        {
                                "ans": "<strong>(a)(i)</strong> $$q = 3$$ <strong>(a)(ii)</strong> $$p = 18$$ <strong>(b)</strong> $$-\\dfrac{24}{5}\\ln 2 + \\dfrac{33}{10}\\ln 3$$",
                                "feedback": "You probably made a division slip in Part (a)(i). The denominator term $2x - q = 0$ yields $x = \\frac{q}{2}$. Equating this to the asymptote $x = 3$ gives $\\frac{q}{2} = 3 \\implies q = 6$, not $q = 3$."
                        },
                        {
                                "ans": "<strong>(a)(i)</strong> $$q = 6$$ <strong>(a)(ii)</strong> $$p = 18$$ <strong>(b)</strong> $$-\\dfrac{24}{5}\\ln 2 - \\dfrac{33}{10}\\ln 3$$",
                                "feedback": "Check your signs in Part (b). When subtracting the lower limit term, the double negative becomes a positive, yielding $\\frac{9}{10}\\ln 3 - (-\\frac{12}{5}\\ln 3) = \\frac{9}{10}\\ln 3 + \\frac{24}{10}\\ln 3 = \\frac{33}{10}\\ln 3$. Be careful when combining logarithm terms."
                        },
                        {
                                "ans": "<strong>(a)(i)</strong> $$q = 6$$ <strong>(a)(ii)</strong> $$p = 18$$ <strong>(b)</strong> $$-\\dfrac{36}{5}\\ln 2 + \\dfrac{9}{10}\\ln 3$$",
                                "feedback": "You probably forgot to subtract the lower limit value ($x=4$) at the end of Part (b). Remember to substitute both limits into your integrated function: $\\text{Area} = \\text{F}(6) - \\text{F}(4)$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Combining Fractions",
                        "content": "To combine fractional log coefficients cleanly, always express them with a common denominator first. For example, converting $-\\frac{36}{5} + \\frac{12}{5}$ directly yields $-\\frac{24}{5}$ without any risk of fractional addition errors."
                }
        },
        {
                "id": "004066",
                "board": "Pearson Edexcel",
                "branch": "Pure",
                "level": "A",
                "major_area": "Calculus",
                "topic": "Differentiation",
                "subtopic": [
                        "Implicit Differentiation",
                        "Small Angle Approximations"
                ],
                "img": false,
                "question": "The curve $C$, in the standard Cartesian plane, is defined by the equation:<br>$$x = 3\\sin 2y \\quad -\\frac{\\pi}{4} < y < \\frac{\\pi}{4}$$<br>The curve $C$ passes through the origin $O$.<br><br><strong>(a)</strong> Find the value of $\\dfrac{\\text{d}y}{\\text{d}x}$ at the origin.<br><br><strong>(b)(i)</strong> Use the small-angle approximation for $\\sin 2y$ to find an equation linking $x$ and $y$ for points close to the origin.<br><strong>(b)(ii)</strong> Explain the relationship between the answers to <strong>(a)</strong> and <strong>(b)(i)</strong>.<br><br><strong>(c)</strong> Show that, for all points $(x, y)$ lying on $C$,<br>$$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{1}{a\\sqrt{b - x^2}}$$<br>where $a$ and $b$ are constants to be found.",
                "steps": [
                        "<strong>Part (a):</strong> We differentiate the equation of our curve, $x = 3\\sin 2y$, implicitly with respect to $x$:<br>$$\\dfrac{\\text{d}}{\\text{d}x}(x) = \\dfrac{\\text{d}}{\\text{d}x}(3\\sin 2y)$$<br>$$1 = 3\\cos 2y \\cdot \\left(2\\dfrac{\\text{d}y}{\\text{d}x}\\right)$$<br>\\begin{aligned}1 &= 6\\cos 2y \\cdot \\dfrac{\\text{d}y}{\\text{d}x} \\cr\\dfrac{\\text{d}y}{\\text{d}x} &= \\dfrac{1}{6\\cos 2y}\\end{aligned}",
                        "At the origin, the coordinates are $(0,0)$, which means $y = 0$. Substituting $y = 0$ into our derivative gives:<br>\\begin{aligned}\\left. \\dfrac{\\text{d}y}{\\text{d}x} \\right|_{O} &= \\dfrac{1}{6\\cos(0)} \\cr&= \\dfrac{1}{6}\\end{aligned}",
                        "<strong>Part (b)(i):</strong> The small-angle approximation for sine is $\\sin\\theta \\approx \\theta$ when $\\theta$ is small and measured in radians.<br>Applying this approximation with $\\theta = 2y$ gives:<br>$$\\sin 2y \\approx 2y$$",
                        "Substituting this into the curve's equation:<br>\\begin{aligned}x \\approx 3(2y) &= 6y \\cry \\approx \\dfrac{1}{6}x\\end{aligned}",
                        "<strong>Part (b)(ii):</strong> The linear equation $y \\approx \\frac{1}{6}x$ represents the tangent line to the curve at the origin. The gradient of this straight line is $\\frac{1}{6}$, which is exactly equal to the value of the exact derivative $\\dfrac{\\text{d}y}{\\text{d}x}$ at the origin found in Part (a).",
                        "<strong>Part (c):</strong> We start with our derivative expression from Part (a):<br>$$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{1}{6\\cos 2y}$$",
                        "Using the fundamental identity $\\sin^2 2y + \\cos^2 2y = 1$, we can express $\\cos 2y$ in terms of sine:<br>$$\\cos 2y = \\sqrt{1 - \\sin^2 2y}$$<br>*(Note: Since $-\\frac{\\pi}{4} < y < \\frac{\\pi}{4}$, the angle lies in the interval $-\\frac{\\pi}{2} < 2y < \\frac{\\pi}{2}$, where cosine is strictly positive, so the positive root is correct).* ",
                        "From the original curve equation, we have $\\sin 2y = \\frac{x}{3}$. Substituting this into our expression for $\\cos 2y$ gives:<br>\\begin{aligned}\\cos 2y &= \\sqrt{1 - \\left(\\frac{x}{3}\\right)^2} \\cr&= \\sqrt{1 - \\frac{x^2}{9}} \\cr&= \\sqrt{\\dfrac{9 - x^2}{9}} \\cr&= \\dfrac{\\sqrt{9 - x^2}}{3}\\end{aligned}",
                        "Now, we substitute this back into our derivative expression:<br>\\begin{aligned}\\dfrac{\\text{d}y}{\\text{d}x} &= \\dfrac{1}{6 \\left( \\frac{\\sqrt{9 - x^2}}{3} \\right)} \\cr&= \\dfrac{1}{2\\sqrt{9 - x^2}}\\end{aligned}<br>Comparing this with the target form gives the constants as $a = 2$ and $b = 9$.",
                        "Final Answer: <strong>(a)</strong> $$\\dfrac{1}{6}$$ <strong>(b)(i)</strong> $$y \\approx \\dfrac{1}{6}x$$ <strong>(b)(ii)</strong> The gradient of the linear approximation equals the exact derivative at the origin <strong>(c)</strong> $a = 2,$ $b = 9$"
                ],
                "pi_options": [
                        {
                                "ans": "<strong>(a)</strong> $$\\dfrac{1}{6}$$ <strong>(b)(i)</strong> $$y \\approx \\dfrac{1}{6}x$$ <strong>(b)(ii)</strong> The gradient of the linear approximation equals the exact derivative at the origin <strong>(c)</strong> $a = 6,$ $b = 9$",
                                "feedback": "You probably made an algebraic cancellation error at the very end of Part (c). When substituting the cosine term, you must simplify the denominator: $6 \\cdot \\frac{\\sqrt{9-x^2}}{3} = 2\\sqrt{9-x^2}$. This yields $a = 2$, not $a = 6$."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$\\dfrac{1}{3}$$ <strong>(b)(i)</strong> $$y \\approx 3x$$ <strong>(b)(ii)</strong> The values are unrelated",
                                "feedback": "Check your differentiation in Part (a). When differentiating $3\\sin 2y$ implicitly, you must apply the Chain Rule to $2y$, which yields a coefficient of $6$, not $3$. This error also affected your linear approximation in Part (b)(i)."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$\\dfrac{1}{6}$$ <strong>(b)(i)</strong> $$y \\approx \\dfrac{1}{6}x$$ <strong>(b)(ii)</strong> The gradient of the linear approximation equals the exact derivative at the origin <strong>(c)</strong> $a = 2,$ $b = 3$",
                                "feedback": "Check your square root algebra in Part (c). When substituting $\\sin 2y = \\frac{x}{3}$ into $\\sqrt{1 - \\sin^2 2y}$, you must square the denominator: $\\left(\\frac{x}{3}\\right)^2 = \\frac{x^2}{9}$. When factorised out of the square root, this yields the constant $b = 9$, not $b = 3$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Tangents as Approximations",
                        "content": "In this question, the relationship in Part (b)(ii) is a beautiful highlight of core calculus. The small-angle approximation of any trigonometric function close to the origin is always identical to the equation of the tangent line to the curve at the origin. Spotting this geometric connection acts as an instant sanity check for your maths."
                }
        },
        {
                "id": "004067",
                "board": "Pearson Edexcel",
                "branch": "Pure",
                "level": "A",
                "major_area": "Calculus",
                "topic": "Differentiation",
                "subtopic": [
                        "Implicit Differentiation",
                        "Small Angle Approximations"
                ],
                "img": false,
                "question": "The curve $C$, in the standard Cartesian plane, is defined by the equation:<br>$$x = 5\\sin 3y \\quad -\\frac{\\pi}{6} < y < \\frac{\\pi}{6}$$<br>The curve $C$ passes through the origin $O$.<br><br><strong>(a)</strong> Find the value of $\\dfrac{\\text{d}y}{\\text{d}x}$ at the origin.<br><br><strong>(b)(i)</strong> Use the small-angle approximation for $\\sin 3y$ to find an equation linking $x$ and $y$ for points close to the origin.<br><strong>(b)(ii)</strong> Explain the relationship between the answers to <strong>(a)</strong> and <strong>(b)(i)</strong>.<br><br><strong>(c)</strong> Show that, for all points $(x, y)$ lying on $C$,<br>$$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{1}{a\\sqrt{b - x^2}}$$<br>$$\\text{where } a \\text{ and } b \\text{ are rational constants to be found.}$$",
                "steps": [
                        "<strong>Part (a):</strong> We differentiate our equation, $x = 5\\sin 3y$, implicitly with respect to $x$:<br>$$\\dfrac{\\text{d}}{\\text{d}x}(x) = \\dfrac{\\text{d}}{\\text{d}x}(5\\sin 3y)$$<br>$$1 = 5\\cos 3y \\cdot \\left(3\\dfrac{\\text{d}y}{\\text{d}x}\\right)$$<br>\\begin{aligned}1 &= 15\\cos 3y \\cdot \\dfrac{\\text{d}y}{\\text{d}x} \\cr\\dfrac{\\text{d}y}{\\text{d}x} &= \\dfrac{1}{15\\cos 3y}\\end{aligned}",
                        "At the origin, the coordinates are $(0,0)$, which means $y = 0$. Substituting $y = 0$ into our derivative gives:<br>\\begin{aligned}\\left. \\dfrac{\\text{d}y}{\\text{d}x} \\right|_{O} &= \\dfrac{1}{15\\cos(0)} \\cr&= \\dfrac{1}{15}\\end{aligned}",
                        "<strong>Part (b)(i):</strong> The small-angle approximation for sine is $\\sin\\theta \\approx \\theta$ when $\\theta$ is small and measured in radians.<br>Applying this approximation with $\\theta = 3y$ gives:<br>$$\\sin 3y \\approx 3y$$",
                        "Substituting this into the curve's equation:<br>\\begin{aligned}x \\approx 5(3y) &= 15y \\cry \\approx \\dfrac{1}{15}x\\end{aligned}",
                        "<strong>Part (b)(ii):</strong> The linear equation $y \\approx \\frac{1}{15}x$ represents the tangent line to the curve at the origin. The gradient of this straight line is $\\frac{1}{15}$, which is exactly equal to the value of the exact derivative $\\dfrac{\\text{d}y}{\\text{d}x}$ at the origin found in Part (a).",
                        "<strong>Part (c):</strong> We start with our derivative expression from Part (a):<br>$$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{1}{15\\cos 3y}$$",
                        "Using the fundamental identity $\\sin^2 3y + \\cos^2 3y = 1$, we can express $\\cos 3y$ in terms of sine:<br>$$\\cos 3y = \\sqrt{1 - \\sin^2 3y}$$<br><em>(Note: Since $-\\frac{\\pi}{6} < y < \\frac{\\pi}{6}$, the angle lies in the interval $-\\frac{\\pi}{2} < 3y < \\frac{\\pi}{2}$, where cosine is strictly positive, so the positive root is correct).</em>",
                        "From the original curve equation, we have $\\sin 3y = \\frac{x}{5}$. Substituting this into our expression for $\\cos 3y$ gives:<br>\\begin{aligned}\\cos 3y &= \\sqrt{1 - \\left(\\frac{x}{5}\\right)^2} \\cr&= \\sqrt{1 - \\frac{x^2}{25}} \\cr&= \\sqrt{\\dfrac{25 - x^2}{25}} \\cr&= \\dfrac{\\sqrt{25 - x^2}}{5}\\end{aligned}",
                        "Now, we substitute this back into our derivative expression:<br>\\begin{aligned}\\dfrac{\\text{d}y}{\\text{d}x} &= \\dfrac{1}{15 \\left( \\frac{\\sqrt{25 - x^2}}{5} \\right)} \\cr&= \\dfrac{1}{3\\sqrt{25 - x^2}}\\end{aligned}<br>Comparing this with the target form gives the constants as $a = 3$ and $b = 25$.",
                        "Final Answer: <strong>(a)</strong> $$\\dfrac{1}{15}$$ <strong>(b)(i)</strong> $$y \\approx \\dfrac{1}{15}x$$ <strong>(b)(ii)</strong> The gradient of the linear approximation equals the exact derivative at the origin <strong>(c)</strong> $a = 3,$ $b = 25$"
                ],
                "pi_options": [
                        {
                                "ans": "<strong>(a)</strong> $$\\dfrac{1}{15}$$ <strong>(b)(i)</strong> $$y \\approx \\dfrac{1}{15}x$$ <strong>(b)(ii)</strong> The gradient of the linear approximation equals the exact derivative at the origin <strong>(c)</strong> $a = 15,$ $b = 25$",
                                "feedback": "You probably made an algebraic cancellation error at the very end of Part (c). When substituting the cosine term, you must simplify the denominator: $15 \\cdot \\frac{\\sqrt{25-x^2}}{5} = 3\\sqrt{25-x^2}$. This yields $a = 3$, not $a = 15$."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$\\dfrac{1}{5}$$ <strong>(b)(i)</strong> $$y \\approx 5x$$ <strong>(b)(ii)</strong> The values are unrelated",
                                "feedback": "Check your differentiation in Part (a). When differentiating $5\\sin 3y$ implicitly, you must apply the Chain Rule to $3y$, which yields a coefficient of $15$, not $5$. This error also affected your linear approximation in Part (b)(i)."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$\\dfrac{1}{15}$$ <strong>(b)(i)</strong> $$y \\approx \\dfrac{1}{15}x$$ <strong>(b)(ii)</strong> The gradient of the linear approximation equals the exact derivative at the origin <strong>(c)</strong> $a = 3,$ $b = 5$",
                                "feedback": "Check your square root algebra in Part (c). When substituting $\\sin 3y = \\frac{x}{5}$ into $\\sqrt{1 - \\sin^2 3y}$, you must square the denominator: $\\left(\\frac{x}{5}\\right)^2 = \\frac{x^2}{25}$. When factorised out of the square root, this yields the constant $b = 25$, not $b = 5$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Tangents as Approximations",
                        "content": "In this question, the relationship in Part (b)(ii) is a beautiful highlight of core calculus. The small-angle approximation of any trigonometric function close to the origin is always identical to the equation of the tangent line to the curve at the origin. Spotting this geometric connection acts as an instant sanity check for your maths."
                }
        },
        {
                "id": "004068",
                "board": "Pearson Edexcel",
                "branch": "Pure",
                "level": "A",
                "major_area": "Calculus",
                "topic": "Differentiation",
                "subtopic": [
                        "Implicit Differentiation",
                        "Small Angle Approximations"
                ],
                "img": false,
                "question": "The curve $C$, in the standard Cartesian plane, is defined by the equation:<br>$$x = 2\\sin 4y \\quad -\\frac{\\pi}{8} < y < \\frac{\\pi}{8}$$<br>The curve $C$ passes through the origin $O$.<br><br><strong>(a)</strong> Find the value of $\\dfrac{\\text{d}y}{\\text{d}x}$ at the origin.<br><br><strong>(b)(i)</strong> Use the small-angle approximation for $\\sin 4y$ to find an equation linking $x$ and $y$ for points close to the origin.<br><strong>(b)(ii)</strong> Explain the relationship between the answers to <strong>(a)</strong> and <strong>(b)(i)</strong>.<br><br><strong>(c)</strong> Show that, for all points $(x, y)$ lying on $C$,<br>$$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{1}{a\\sqrt{b - x^2}}$$<br>$$\\text{where } a \\text{ and } b \\text{ are rational constants to be found.}$$",
                "steps": [
                        "<strong>Part (a):</strong> We differentiate the equation of our curve, $x = 2\\sin 4y$, implicitly with respect to $x$:<br>$$\\dfrac{\\text{d}}{\\text{d}x}(x) = \\dfrac{\\text{d}}{\\text{d}x}(2\\sin 4y)$$<br>$$1 = 2\\cos 4y \\cdot \\left(4\\dfrac{\\text{d}y}{\\text{d}x}\\right)$$<br>\\begin{aligned}1 &= 8\\cos 4y \\cdot \\dfrac{\\text{d}y}{\\text{d}x} \\cr\\dfrac{\\text{d}y}{\\text{d}x} &= \\dfrac{1}{8\\cos 4y}\\end{aligned}",
                        "At the origin, the coordinates are $(0,0)$, which means $y = 0$. Substituting $y = 0$ into our derivative gives:<br>\\begin{aligned}\\left. \\dfrac{\\text{d}y}{\\text{d}x} \\right|_{O} &= \\dfrac{1}{8\\cos(0)} \\cr&= \\dfrac{1}{8}\\end{aligned}",
                        "<strong>Part (b)(i):</strong> The small-angle approximation for sine is $\\sin\\theta \\approx \\theta$ when $\\theta$ is small and measured in radians.<br>Applying this approximation with $\\theta = 4y$ gives:<br>$$\\sin 4y \\approx 4y$$",
                        "Substituting this into the curve's equation:<br>\\begin{aligned}x \\approx 2(4y) &= 8y \\cry \\approx \\dfrac{1}{8}x\\end{aligned}",
                        "<strong>Part (b)(ii):</strong> The linear equation $y \\approx \\frac{1}{8}x$ represents the tangent line to the curve at the origin. The gradient of this straight line is $\\frac{1}{8}$, which is exactly equal to the value of the exact derivative $\\dfrac{\\text{d}y}{\\text{d}x}$ at the origin found in Part (a).",
                        "<strong>Part (c):</strong> We start with our derivative expression from Part (a):<br>$$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{1}{8\\cos 4y}$$",
                        "Using the fundamental identity $\\sin^2 4y + \\cos^2 4y = 1$, we can express $\\cos 4y$ in terms of sine:<br>$$\\cos 4y = \\sqrt{1 - \\sin^2 4y}$$<br>*(Note: Since $-\\frac{\\pi}{8} < y < \\frac{\\pi}{8}$, the angle lies in the interval $-\\frac{\\pi}{2} < 4y < \\frac{\\pi}{2}$, where cosine is strictly positive, so the positive root is correct).* ",
                        "From the original curve equation, we have $\\sin 4y = \\frac{x}{2}$. Substituting this into our expression for $\\cos 4y$ gives:<br>\\begin{aligned}\\cos 4y &= \\sqrt{1 - \\left(\\frac{x}{2}\\right)^2} \\cr&= \\sqrt{1 - \\frac{x^2}{4}} \\cr&= \\sqrt{\\dfrac{4 - x^2}{4}} \\cr&= \\dfrac{\\sqrt{4 - x^2}}{2}\\end{aligned}",
                        "Now, we substitute this back into our derivative expression:<br>\\begin{aligned}\\dfrac{\\text{d}y}{\\text{d}x} &= \\dfrac{1}{8 \\left( \\frac{\\sqrt{4 - x^2}}{2} \\right)} \\cr&= \\dfrac{1}{4\\sqrt{4 - x^2}}\\end{aligned}<br>Comparing this with the target form gives the constants as $a = 4$ and $b = 4$.",
                        "Final Answer: <strong>(a)</strong> $$\\dfrac{1}{8}$$ <strong>(b)(i)</strong> $$y \\approx \\dfrac{1}{8}x$$ <strong>(b)(ii)</strong> The gradient of the linear approximation equals the exact derivative at the origin <strong>(c)</strong> $a = 4,$ $b = 4$"
                ],
                "pi_options": [
                        {
                                "ans": "<strong>(a)</strong> $$\\dfrac{1}{8}$$ <strong>(b)(i)</strong> $$y \\approx \\dfrac{1}{8}x$$ <strong>(b)(ii)</strong> The gradient of the linear approximation equals the exact derivative at the origin <strong>(c)</strong> $a = 8,$ $b = 4$",
                                "feedback": "You probably made an algebraic cancellation error at the very end of Part (c). When substituting the cosine term, you must simplify the denominator: $8 \\cdot \\frac{\\sqrt{4-x^2}}{2} = 4\\sqrt{4-x^2}$. This yields $a = 4$, not $a = 8$."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$\\dfrac{1}{2}$$ <strong>(b)(i)</strong> $$y \\approx 2x$$ <strong>(b)(ii)</strong> The values are unrelated",
                                "feedback": "Check your differentiation in Part (a). When differentiating $2\\sin 4y$ implicitly, you must apply the Chain Rule to $4y$, which yields a coefficient of $8$, not $2$. This error also affected your linear approximation in Part (b)(i)."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$\\dfrac{1}{8}$$ <strong>(b)(i)</strong> $$y \\approx \\dfrac{1}{8}x$$ <strong>(b)(ii)</strong> The gradient of the linear approximation equals the exact derivative at the origin <strong>(c)</strong> $a = 4,$ $b = 2$",
                                "feedback": "Check your square root algebra in Part (c). When substituting $\\sin 4y = \\frac{x}{2}$ into $\\sqrt{1 - \\sin^2 4y}$, you must square the denominator: $\\left(\\frac{x}{2}\\right)^2 = \\frac{x^2}{4}$. When factorised out of the square root, this yields the constant $b = 4$, not $b = 2$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Tangents as Approximations",
                        "content": "In this question, the relationship in Part (b)(ii) is a beautiful highlight of core calculus. The small-angle approximation of any trigonometric function close to the origin is always identical to the equation of the tangent line to the curve at the origin. Spotting this geometric connection acts as an instant sanity check for your maths."
                }
        },
        {
                "id": "004069",
                "board": "Pearson Edexcel",
                "branch": "Pure",
                "level": "A",
                "major_area": "Calculus",
                "topic": "Differentiation",
                "subtopic": [
                        "Implicit Differentiation",
                        "Small Angle Approximations"
                ],
                "img": false,
                "question": "The curve $C$, in the standard Cartesian plane, is defined by the equation:<br>$$x = 6\\sin 2y \\quad -\\frac{\\pi}{4} < y < \\frac{\\pi}{4}$$<br>The curve $C$ passes through the origin $O$.<br><br><strong>(a)</strong> Find the value of $\\dfrac{\\text{d}y}{\\text{d}x}$ at the origin.<br><br><strong>(b)(i)</strong> Use the small-angle approximation for $\\sin 2y$ to find an equation linking $x$ and $y$ for points close to the origin.<br><strong>(b)(ii)</strong> Explain the relationship between the answers to <strong>(a)</strong> and <strong>(b)(i)</strong>.<br><br><strong>(c)</strong> Show that, for all points $(x, y)$ lying on $C$,<br>$$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{1}{a\\sqrt{b - x^2}}$$<br>$$\\text{where } a \\text{ and } b \\text{ are rational constants to be found.}$$",
                "steps": [
                        "<strong>Part (a):</strong> We differentiate the equation of our curve, $x = 6\\sin 2y$, implicitly with respect to $x$:<br>$$\\dfrac{\\text{d}}{\\text{d}x}(x) = \\dfrac{\\text{d}}{\\text{d}x}(6\\sin 2y)$$<br>$$1 = 6\\cos 2y \\cdot \\left(2\\dfrac{\\text{d}y}{\\text{d}x}\\right)$$<br>\\begin{aligned}1 &= 12\\cos 2y \\cdot \\dfrac{\\text{d}y}{\\text{d}x} \\cr\\dfrac{\\text{d}y}{\\text{d}x} &= \\dfrac{1}{12\\cos 2y}\\end{aligned}",
                        "At the origin, the coordinates are $(0,0)$, which means $y = 0$. Substituting $y = 0$ into our derivative gives:<br>\\begin{aligned}\\left. \\dfrac{\\text{d}y}{\\text{d}x} \\right|_{O} &= \\dfrac{1}{12\\cos(0)} \\cr&= \\dfrac{1}{12}\\end{aligned}",
                        "<strong>Part (b)(i):</strong> The small-angle approximation for sine is $\\sin\\theta \\approx \\theta$ when $\\theta$ is small and measured in radians.<br>Applying this approximation with $\\theta = 2y$ gives:<br>$$\\sin 2y \\approx 2y$$",
                        "Substituting this into the curve's equation:<br>\\begin{aligned}x \\approx 6(2y) &= 12y \\cry \\approx \\dfrac{1}{12}x\\end{aligned}",
                        "<strong>Part (b)(ii):</strong> The linear equation $y \\approx \\frac{1}{12}x$ represents the tangent line to the curve at the origin. The gradient of this straight line is $\\frac{1}{12}$, which is exactly equal to the value of the exact derivative $\\dfrac{\\text{d}y}{\\text{d}x}$ at the origin found in Part (a).",
                        "<strong>Part (c):</strong> We start with our derivative expression from Part (a):<br>$$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{1}{12\\cos 2y}$$",
                        "Using the fundamental identity $\\sin^2 2y + \\cos^2 2y = 1$, we can express $\\cos 2y$ in terms of sine:<br>$$\\cos 2y = \\sqrt{1 - \\sin^2 2y}$$<br>*(Note: Since $-\\frac{\\pi}{4} < y < \\frac{\\pi}{4}$, the angle lies in the interval $-\\frac{\\pi}{2} < 2y < \\frac{\\pi}{2}$, where cosine is strictly positive, so the positive root is correct).* ",
                        "From the original curve equation, we have $\\sin 2y = \\frac{x}{6}$. Substituting this into our expression for $\\cos 2y$ gives:<br>\\begin{aligned}\\cos 2y &= \\sqrt{1 - \\left(\\frac{x}{6}\\right)^2} \\cr&= \\sqrt{1 - \\frac{x^2}{36}} \\cr&= \\sqrt{\\dfrac{36 - x^2}{36}} \\cr&= \\dfrac{\\sqrt{36 - x^2}}{6}\\end{aligned}",
                        "Now, we substitute this back into our derivative expression:<br>\\begin{aligned}\\dfrac{\\text{d}y}{\\text{d}x} &= \\dfrac{1}{12 \\left( \\frac{\\sqrt{36 - x^2}}{6} \\right)} \\cr&= \\dfrac{1}{2\\sqrt{36 - x^2}}\\end{aligned}<br>Comparing this with the target form gives the constants as $a = 2$ and $b = 36$.",
                        "Final Answer: <strong>(a)</strong> $$\\dfrac{1}{12}$$ <strong>(b)(i)</strong> $$y \\approx \\dfrac{1}{12}x$$ <strong>(b)(ii)</strong> The gradient of the linear approximation equals the exact derivative at the origin <strong>(c)</strong> $a = 2,$ $b = 36$"
                ],
                "pi_options": [
                        {
                                "ans": "<strong>(a)</strong> $$\\dfrac{1}{12}$$ <strong>(b)(i)</strong> $$y \\approx \\dfrac{1}{12}x$$ <strong>(b)(ii)</strong> The gradient of the linear approximation equals the exact derivative at the origin <strong>(c)</strong> $a = 12,$ $b = 36$",
                                "feedback": "You probably made an algebraic cancellation error at the very end of Part (c). When substituting the cosine term, you must simplify the denominator: $12 \\cdot \\frac{\\sqrt{36-x^2}}{6} = 2\\sqrt{36-x^2}$. This yields $a = 2$, not $a = 12$."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$\\dfrac{1}{6}$$ <strong>(b)(i)</strong> $$y \\approx 6x$$ <strong>(b)(ii)</strong> The values are unrelated",
                                "feedback": "Check your differentiation in Part (a). When differentiating $6\\sin 2y$ implicitly, you must apply the Chain Rule to $2y$, which yields a coefficient of $12$, not $6$. This error also affected your linear approximation in Part (b)(i)."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$\\dfrac{1}{12}$$ <strong>(b)(i)</strong> $$y \\approx \\dfrac{1}{12}x$$ <strong>(b)(ii)</strong> The gradient of the linear approximation equals the exact derivative at the origin <strong>(c)</strong> $a = 2,$ $b = 6$",
                                "feedback": "Check your square root algebra in Part (c). When substituting $\\sin 2y = \\frac{x}{6}$ into $\\sqrt{1 - \\sin^2 2y}$, you must square the denominator: $\\left(\\frac{x}{6}\\right)^2 = \\frac{x^2}{36}$. When factorised out of the square root, this yields the constant $b = 36$, not $b = 6$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Tangents as Approximations",
                        "content": "In this question, the relationship in Part (b)(ii) is a beautiful highlight of core calculus. The small-angle approximation of any trigonometric function close to the origin is always identical to the equation of the tangent line to the curve at the origin. Spotting this geometric connection acts as an instant sanity check for your maths."
                }
        },
        {
                "id": "004070",
                "board": "Pearson Edexcel",
                "branch": "Pure",
                "level": "A",
                "major_area": "Calculus",
                "topic": "Differentiation",
                "subtopic": [
                        "Implicit Differentiation",
                        "Small Angle Approximations"
                ],
                "img": false,
                "question": "The curve $C$, in the standard Cartesian plane, is defined by the equation:<br>$$x = 4\\sin 3y \\quad -\\frac{\\pi}{6} < y < \\frac{\\pi}{6}$$<br>The curve $C$ passes through the origin $O$.<br><br><strong>(a)</strong> Find the value of $\\dfrac{\\text{d}y}{\\text{d}x}$ at the origin.<br><br><strong>(b)(i)</strong> Use the small-angle approximation for $\\sin 3y$ to find an equation linking $x$ and $y$ for points close to the origin.<br><strong>(b)(ii)</strong> Explain the relationship between the answers to <strong>(a)</strong> and <strong>(b)(i)</strong>.<br><br><strong>(c)</strong> Show that, for all points $(x, y)$ lying on $C$,<br>$$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{1}{a\\sqrt{b - x^2}}$$<br>$$\\text{where } a \\text{ and } b \\text{ are rational constants to be found.}$$",
                "steps": [
                        "<strong>Part (a):</strong> We differentiate the equation of our curve, $x = 4\\sin 3y$, implicitly with respect to $x$:<br>$$\\dfrac{\\text{d}}{\\text{d}x}(x) = \\dfrac{\\text{d}}{\\text{d}x}(4\\sin 3y)$$<br>$$1 = 4\\cos 3y \\cdot \\left(3\\dfrac{\\text{d}y}{\\text{d}x}\\right)$$<br>\\begin{aligned}1 &= 12\\cos 3y \\cdot \\dfrac{\\text{d}y}{\\text{d}x} \\cr\\dfrac{\\text{d}y}{\\text{d}x} &= \\dfrac{1}{12\\cos 3y}\\end{aligned}",
                        "At the origin, the coordinates are $(0,0)$, which means $y = 0$. Substituting $y = 0$ into our derivative gives:<br>\\begin{aligned}\\left. \\dfrac{\\text{d}y}{\\text{d}x} \\right|_{O} &= \\dfrac{1}{12\\cos(0)} \\cr&= \\dfrac{1}{12}\\end{aligned}",
                        "<strong>Part (b)(i):</strong> The small-angle approximation for sine is $\\sin\\theta \\approx \\theta$ when $\\theta$ is small and measured in radians.<br>Applying this approximation with $\\theta = 3y$ gives:<br>$$\\sin 3y \\approx 3y$$",
                        "Substituting this into the curve's equation:<br>\\begin{aligned}x \\approx 4(3y) &= 12y \\cry \\approx \\dfrac{1}{12}x\\end{aligned}",
                        "<strong>Part (b)(ii):</strong> The linear equation $y \\approx \\frac{1}{12}x$ represents the tangent line to the curve at the origin. The gradient of this straight line is $\\frac{1}{12}$, which is exactly equal to the value of the exact derivative $\\dfrac{\\text{d}y}{\\text{d}x}$ at the origin found in Part (a).",
                        "<strong>Part (c):</strong> We start with our derivative expression from Part (a):<br>$$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{1}{12\\cos 3y}$$",
                        "Using the fundamental identity $\\sin^2 3y + \\cos^2 3y = 1$, we can express $\\cos 3y$ in terms of sine:<br>$$\\cos 3y = \\sqrt{1 - \\sin^2 3y}$$<br>*(Note: Since $-\\frac{\\pi}{6} < y < \\frac{\\pi}{6}$, the angle lies in the interval $-\\frac{\\pi}{2} < 3y < \\frac{\\pi}{2}$, where cosine is strictly positive, so the positive root is correct).* ",
                        "From the original curve equation, we have $\\sin 3y = \\frac{x}{4}$. Substituting this into our expression for $\\cos 3y$ gives:<br>\\begin{aligned}\\cos 3y &= \\sqrt{1 - \\left(\\frac{x}{4}\\right)^2} \\cr&= \\sqrt{1 - \\frac{x^2}{16}} \\cr&= \\sqrt{\\dfrac{16 - x^2}{16}} \\cr&= \\dfrac{\\sqrt{16 - x^2}}{4}\\end{aligned}",
                        "Now, we substitute this back into our derivative expression:<br>\\begin{aligned}\\dfrac{\\text{d}y}{\\text{d}x} &= \\dfrac{1}{12 \\left( \\frac{\\sqrt{16 - x^2}}{4} \\right)} \\cr&= \\dfrac{1}{3\\sqrt{16 - x^2}}\\end{aligned}<br>Comparing this with the target form gives the constants as $a = 3$ and $b = 16$.",
                        "Final Answer: <strong>(a)</strong> $$\\dfrac{1}{12}$$ <strong>(b)(i)</strong> $$y \\approx \\dfrac{1}{12}x$$ <strong>(b)(ii)</strong> The gradient of the linear approximation equals the exact derivative at the origin <strong>(c)</strong> $a = 3,$ $b = 16$"
                ],
                "pi_options": [
                        {
                                "ans": "<strong>(a)</strong> $$\\dfrac{1}{12}$$ <strong>(b)(i)</strong> $$y \\approx \\dfrac{1}{12}x$$ <strong>(b)(ii)</strong> The gradient of the linear approximation equals the exact derivative at the origin <strong>(c)</strong> $a = 12,$ $b = 16$",
                                "feedback": "You probably made an algebraic cancellation error at the very end of Part (c). When substituting the cosine term, you must simplify the denominator: $12 \\cdot \\frac{\\sqrt{16-x^2}}{4} = 3\\sqrt{16-x^2}$. This yields $a = 3$, not $a = 12$."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$\\dfrac{1}{4}$$ <strong>(b)(i)</strong> $$y \\approx 4x$$ <strong>(b)(ii)</strong> The values are unrelated",
                                "feedback": "Check your differentiation in Part (a). When differentiating $4\\sin 3y$ implicitly, you must apply the Chain Rule to $3y$, which yields a coefficient of $12$, not $4$. This error also affected your linear approximation in Part (b)(i)."
                        },
                        {
                                "ans": "<strong>(a)</strong> $$\\dfrac{1}{12}$$ <strong>(b)(i)</strong> $$y \\approx \\dfrac{1}{12}x$$ <strong>(b)(ii)</strong> The gradient of the linear approximation equals the exact derivative at the origin <strong>(c)</strong> $a = 3,$ $b = 4$",
                                "feedback": "Check your square root algebra in Part (c). When substituting $\\sin 3y = \\frac{x}{4}$ into $\\sqrt{1 - \\sin^2 3y}$, you must square the denominator: $\\left(\\frac{x}{4}\\right)^2 = \\frac{x^2}{16}$. When factorised out of the square root, this yields the constant $b = 16$, not $b = 4$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Tangents as Approximations",
                        "content": "In this question, the relationship in Part (b)(ii) is a beautiful highlight of core calculus. The small-angle approximation of any trigonometric function close to the origin is always identical to the equation of the tangent line to the curve at the origin. Spotting this geometric connection acts as an instant sanity check for your maths."
                }
        },
        {
                "id": "004071",
                "board": "AQA",
                "branch": "Pure",
                "level": "AS",
                "major_area": "Calculus",
                "topic": "Differentiation",
                "subtopic": [
                        "Power Rule"
                ],
                "img": false,
                "question": "$$y = \\dfrac{1}{x^3}$$Find an expression for $$\\dfrac{dy}{dx}$$<br><br>Choose the correct answer from the options below:<br>$$(a)\\\\\\ \\dfrac{dy}{dx} = -\\dfrac{3}{x^2}\\\\\\ (b)\\\\\\ \\dfrac{dy}{dx} = x^{-3}\\\\\\ (c)\\\\\\ \\dfrac{dy}{dx} = -\\dfrac{3}{x^4}\\\\\\ (d) \\dfrac{dy}{dx} = -\\dfrac{3}{x^3}$$",
                "steps": [
                        "First, rewrite the expression in index form: $$y = x^{-3}$$",
                        "Next, apply the standard rule for differentiation, $$\\dfrac{\\text{d}}{\\text{d}x}\\left(x^n\\right) = n x^{n-1}$$ where, $$n = -3$$ \\begin{aligned}\\dfrac{dy}{dx} &= -3x^{-3-1} \\cr&= -3x^{-4}\\end{aligned}",
                        "Finally, convert the derivative back into fractional form.",
                        "Final Answer: $$(c) \\dfrac{dy}{dx} = -\\dfrac{3}{x^4}$$"
                ],
                "pi_options": [
                        {
                                "ans": "$$(a) \\dfrac{dy}{dx} = -\\dfrac{3}{x^2}$$",
                                "feedback": "This is a common error where the power in the denominator has been decreased by one. When differentiating, you must subtract one from the exponent in index form: $-3 - 1 = -4$, meaning the power of $x$ in the denominator becomes 4."
                        },
                        {
                                "ans": "$$(b) \\dfrac{dy}{dx} = x^{-3}$$",
                                "feedback": "This is simply the original function rewritten in index form. Remember that you must apply the power rule to differentiate."
                        },
                        {
                                "ans": "$$(d) \\dfrac{dy}{dx} = -\\dfrac{3}{x^3}$$",
                                "feedback": "You have multiplied by the negative power but forgotten to decrease the exponent of $x$ by one. The index in index form decreases from $-3$ to $-4$."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Negative Exponents",
                        "content": "Students preparing for exams often make errors by subtracting one from the denominator's power directly (e.g., changing the denominator power from 3 to 2). Always convert the term to index form first to ensure your arithmetic with negative indices remains clear and correct."
                }
        },
        {
                "id": "004072",
                "board": "AQA",
                "branch": "Pure",
                "level": "AS",
                "major_area": "Calculus",
                "topic": "Differentiation",
                "subtopic": [
                        "Power Rule"
                ],
                "img": false,
                "question": "$$y = \\dfrac{1}{x^4}$$Find an expression for $$\\dfrac{dy}{dx}$$<br><br>Choose the correct answer from the options below:<br>$$(a)\\\\\\ \\dfrac{dy}{dx} = -\\dfrac{4}{x^5}\\\\\\ (b)\\\\\\ \\dfrac{dy}{dx} = -\\dfrac{4}{x^3}\\\\\\ (c)\\\\\\ \\dfrac{dy}{dx} = x^{-4}\\\\\\ (d) \\dfrac{dy}{dx} = -\\dfrac{4}{x^4}$$",
                "steps": [
                        "First, rewrite the expression in index form: $$y = x^{-4}$$",
                        "Next, apply the standard rule for differentiation, $$\\dfrac{\\text{d}}{\\text{d}x}\\left(x^n\\right) = n x^{n-1}$$ where, $$n = -4$$ \\begin{aligned}\\dfrac{dy}{dx} &= -4x^{-4-1} \\cr&= -4x^{-5}\\end{aligned}",
                        "Finally, convert the derivative back into fractional form.",
                        "Final Answer: $$(a) \\dfrac{dy}{dx} = -\\dfrac{4}{x^5}$$"
                ],
                "pi_options": [
                        {
                                "ans": "$$(b) \\dfrac{dy}{dx} = -\\dfrac{4}{x^3}$$",
                                "feedback": "This is a common error where the power in the denominator has been decreased by one. When differentiating, you must subtract one from the exponent in index form: $-4 - 1 = -5$, meaning the power of $x$ in the denominator becomes 5."
                        },
                        {
                                "ans": "$$(c) \\dfrac{dy}{dx} = x^{-4}$$",
                                "feedback": "This is simply the original function rewritten in index form. Remember that you must apply the power rule to differentiate."
                        },
                        {
                                "ans": "$$(d) \\dfrac{dy}{dx} = -\\dfrac{4}{x^4}$$",
                                "feedback": "You have multiplied by the negative power but forgotten to decrease the exponent of $x$ by one. The index in index form decreases from $-4$ to $-5$."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Power Rule",
                        "content": "Forgetting to decrease the exponent is a typical slip under exam pressure. When dealing with fractions, writing out the index form stage explicitly is probably the safest way to avoid arithmetic slips with negative numbers."
                }
        },
        {
                "id": "004073",
                "board": "AQA",
                "branch": "Pure",
                "level": "AS",
                "major_area": "Calculus",
                "topic": "Differentiation",
                "subtopic": [
                        "Power Rule"
                ],
                "img": false,
                "question": "$$y = \\dfrac{1}{x^5}$$Find an expression for $$\\dfrac{dy}{dx}$$<br><br>Choose the correct answer from the options below:<br>$$(a)\\\\\\ \\dfrac{dy}{dx} = x^{-5}\\\\\\ (b)\\\\\\ \\dfrac{dy}{dx} = -\\dfrac{5}{x^6}\\\\\\ (c)\\\\\\ \\dfrac{dy}{dx} = -\\dfrac{5}{x^4}\\\\\\ (d) \\dfrac{dy}{dx} = -\\dfrac{5}{x^5}$$",
                "steps": [
                        "First, rewrite the expression in index form: $$y = x^{-5}$$",
                        "Next, apply the standard rule for differentiation, $$\\dfrac{\\text{d}}{\\text{d}x}\\left(x^n\\right) = n x^{n-1}$$ where, $$n = -5$$ \\begin{aligned}\\dfrac{dy}{dx} &= -5x^{-5-1} \\cr&= -5x^{-6}\\end{aligned}",
                        "Finally, convert the derivative back into fractional form.",
                        "Final Answer: $$(b) \\dfrac{dy}{dx} = -\\dfrac{5}{x^6}$$"
                ],
                "pi_options": [
                        {
                                "ans": "$$(a) \\dfrac{dy}{dx} = x^{-5}$$",
                                "feedback": "This is simply the original function rewritten in index form. Remember that you must apply the power rule to differentiate."
                        },
                        {
                                "ans": "$$(c) \\dfrac{dy}{dx} = -\\dfrac{5}{x^4}$$",
                                "feedback": "This error occurs if you decrease the power in the denominator. Subtracting one from the negative index gives $-5 - 1 = -6$, so the power of $x$ in the denominator should be 6."
                        },
                        {
                                "ans": "$$(d) \\dfrac{dy}{dx} = -\\dfrac{5}{x^5}$$",
                                "feedback": "You have multiplied by the exponent but did not decrease the power of $x$. The power must change from $-5$ to $-6$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Systematic Differentiation",
                        "content": "A systematic approach is essential. Write down the function in index form, perform the differentiation on paper, and only then simplify back into fraction form. Trying to do this mentally leads to sign and index errors."
                }
        },
        {
                "id": "004074",
                "board": "AQA",
                "branch": "Pure",
                "level": "AS",
                "major_area": "Calculus",
                "topic": "Differentiation",
                "subtopic": [
                        "Power Rule"
                ],
                "img": false,
                "question": "$$y = \\dfrac{2}{x^3}$$Find an expression for $$\\dfrac{dy}{dx}$$<br><br>Choose the correct answer from the options below:<br>$$(a)\\\\\\ \\dfrac{dy}{dx} = -\\dfrac{6}{x^2}\\\\\\ (b)\\\\\\ \\dfrac{dy}{dx} = -\\dfrac{6}{x^4}\\\\\\ (c)\\\\\\ \\dfrac{dy}{dx} = -\\dfrac{2}{x^4}\\\\\\ (d) \\dfrac{dy}{dx} = 2x^{-3}$$",
                "steps": [
                        "First, rewrite the expression in index form: $$y = 2x^{-3}$$",
                        "Next, apply the standard rule for differentiation, $$\\dfrac{\\text{d}}{\\text{d}x}\\left(a x^n\\right) = a n x^{n-1}$$ where, $$a = 2$$ and $$n = -3$$ \\begin{aligned}\\dfrac{dy}{dx} &= 2 \\times \\left(-3\\right)x^{-3-1} \\cr&= -6x^{-4}\\end{aligned}",
                        "Finally, convert the derivative back into fractional form.",
                        "Final Answer: $$(b) \\dfrac{dy}{dx} = -\\dfrac{6}{x^4}$$"
                ],
                "pi_options": [
                        {
                                "ans": "$$(a) \\dfrac{dy}{dx} = -\\dfrac{6}{x^2}$$",
                                "feedback": "This incorrect answer arises from reducing the power in the denominator. When differentiating, subtracting one from the negative exponent of $-3$ gives $-4$, resulting in a denominator power of 4."
                        },
                        {
                                "ans": "$$(c) \\dfrac{dy}{dx} = -\\dfrac{2}{x^4}$$",
                                "feedback": "It seems you differentiated the $x^{-3}$ component to get $-3x^{-4}$ but forgot to multiply by the original constant coefficient of 2."
                        },
                        {
                                "ans": "$$(d) \\dfrac{dy}{dx} = 2x^{-3}$$",
                                "feedback": "This is the original function written in index form. It has not yet been differentiated."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Coefficient Handling",
                        "content": "When there is a constant coefficient in the numerator, make sure it is multiplied by the exponent brought down. It is a common mistake to either replace the constant or completely ignore it during the power rule application."
                }
        },
        {
                "id": "004075",
                "board": "AQA",
                "branch": "Pure",
                "level": "AS",
                "major_area": "Calculus",
                "topic": "Differentiation",
                "subtopic": [
                        "Power Rule"
                ],
                "img": false,
                "question": "$$y = \\dfrac{1}{2x^2}$$Find an expression for $$\\dfrac{dy}{dx}$$<br><br>Choose the correct answer from the options below:<br>$$(a)\\\\\\ \\dfrac{dy}{dx} = -\\dfrac{1}{4x^3}\\\\\\ (b)\\\\\\ \\dfrac{dy}{dx} = -\\dfrac{1}{x^2}\\\\\\ (c)\\\\\\ \\dfrac{dy}{dx} = -\\dfrac{1}{x^3}\\\\\\ (d) \\dfrac{dy}{dx} = \\dfrac{1}{2}x^{-2}$$",
                "steps": [
                        "First, rewrite the expression in index form: $$y = \\dfrac{1}{2}x^{-2}$$",
                        "Next, apply the standard rule for differentiation, $$\\dfrac{\\text{d}}{\\text{d}x}\\left(a x^n\\right) = a n x^{n-1}$$ where, $$a = \\dfrac{1}{2}$$ and $$n = -2$$ \\begin{aligned}\\dfrac{dy}{dx} &= \\dfrac{1}{2} \\times \\left(-2\\right)x^{-2-1} \\cr&= -1x^{-3}\\end{aligned}",
                        "Finally, convert the derivative back into fractional form.",
                        "Final Answer: $$(c) \\dfrac{dy}{dx} = -\\dfrac{1}{x^3}$$"
                ],
                "pi_options": [
                        {
                                "ans": "$$(a) \\dfrac{dy}{dx} = -\\dfrac{1}{4x^3}$$",
                                "feedback": "This error probably arises from trying to differentiate the denominator directly, which is incorrect. Always convert the entire term to index form first."
                        },
                        {
                                "ans": "$$(b) \\dfrac{dy}{dx} = -\\dfrac{1}{x^2}$$",
                                "feedback": "This error is caused by decreasing the denominator power. Remember that differentiating $x^{-2}$ decreases the power to $-3$, which means the power in the denominator becomes 3."
                        },
                        {
                                "ans": "$$(d) \\dfrac{dy}{dx} = \\dfrac{1}{2}x^{-2}$$",
                                "feedback": "This is simply the original function written in index form. You must apply the power rule to differentiate."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Separating Coefficients",
                        "content": "When a constant is in the denominator of an algebraic term, rewrite it clearly as a fractional coefficient (such as 1/2) rather than keeping it grouped with the variable. This prevents differentiation mistakes in the denominator."
                }
        },
        {
                "id": "004076",
                "board": "AQA",
                "branch": "Pure",
                "level": "AS",
                "major_area": "Algebra and functions",
                "topic": "Graph transformations",
                "subtopic": [
                        "Transformations of Graphs"
                ],
                "img": false,
                "question": "The graph of $$y = 3^x$$ is transformed by a stretch in the $y$-direction, scale factor 3.<br><br>State the equation of the transformed graph.<br><br>Choose the correct answer from the options below:<br>$$(a)\\\\ y = 3^{3x}\\\\\\ (b)\\\\ y = \\dfrac{1}{3} \\times 3^x\\\\\\ (c)\\\\ y = 3^{\\frac{x}{3}}\\\\\\ (d)\\\\ y = 3 \\times 3^x$$",
                "steps": [
                        "First, identify the original function: \\begin{aligned}y &= f(x) \\cr&= 3^x\\end{aligned}",
                        "Next, recall that a stretch in the $y$-direction with scale factor $k$ transforms the function $f(x)$ to $k \\times f(x)$<br><br> Here, $$k = 3$$",
                        "Finally, apply this rule to scale the entire function.",
                        "Final Answer: $$(d) y = 3 \\times 3^x$$"
                ],
                "pi_options": [
                        {
                                "ans": "$$(a) y = 3^{3x}$$",
                                "feedback": "This is a common error where a horizontal stretch with scale factor $1/3$ is applied to the input variable $x$. A vertical stretch affects the entire function from the outside, not just the exponent."
                        },
                        {
                                "ans": "$$(b) y = \\dfrac{1}{3} \\times 3^x$$",
                                "feedback": "This incorrect answer represents a vertical stretch with scale factor $1/3$. Remember that a stretch of scale factor $3$ in the $y$-direction scales the function by a factor of $3$ directly."
                        },
                        {
                                "ans": "$$(c) y = 3^{\\frac{x}{3}}$$",
                                "feedback": "This error occurs when attempting a stretch in the $x$-direction with scale factor $3$ instead of the $y$-direction. A stretch in the $y$-direction scale factor $3$ is a vertical change and multiplies the entire function by $3$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Inside vs Outside Transformations",
                        "content": "Remembering that changes 'outside' the main function affect the $y$-direction directly (e.g. $k f(x)$) while changes 'inside' the function affect the $x$-direction inversely (e.g. $f(kx)$) is probably the safest rule of thumb for graph transformations. Always write down the general formula $y = k f(x)$ first to guide your steps."
                }
        },
        {
                "id": "004077",
                "board": "AQA",
                "branch": "Pure",
                "level": "AS",
                "major_area": "Algebra and functions",
                "topic": "Graph transformations",
                "subtopic": [
                        "Transformations of Graphs"
                ],
                "img": false,
                "question": "The graph of $$y = 4^x$$ is transformed by a stretch in the $y$-direction, scale factor 4.<br><br>State the equation of the transformed graph.<br><br>Choose the correct answer from the options below:<br>$$(a)\\\\ y = 4 \\times 4^x\\\\\\ (b)\\\\ y = 4^{\\frac{x}{4}}\\\\\\ (c)\\\\ y = \\dfrac{1}{4} \\times 4^x\\\\\\ (d)\\\\ y = 4^{4x}$$",
                "steps": [
                        "First, identify the original function: \\begin{aligned}y &= f(x) \\cr&= 4^x\\end{aligned}",
                        "Next, recall that a stretch in the $y$-direction with scale factor $k$ transforms the function $f(x)$ to $k \\times f(x)$<br><br> Here, $$k = 4$$",
                        "Finally, apply this rule to scale the entire function.",
                        "Final Answer: $$(a) y = 4 \\times 4^x$$"
                ],
                "pi_options": [
                        {
                                "ans": "$$(b) y = 4^{\\frac{x}{4}}$$",
                                "feedback": "This error occurs when attempting a stretch in the $x$-direction with scale factor $4$ instead of the $y$-direction. A stretch in the $y$-direction scale factor $4$ multiplies the entire function by $4$."
                        },
                        {
                                "ans": "$$(c) y = \\dfrac{1}{4} \\times 4^x$$",
                                "feedback": "This incorrect answer represents a vertical stretch with scale factor $1/4$. Remember that a stretch of scale factor $4$ in the $y$-direction scales the function by a factor of $4$ directly."
                        },
                        {
                                "ans": "$$(d) y = 4^{4x}$$",
                                "feedback": "This is a common error where a horizontal stretch with scale factor $1/4$ is applied to the input variable $x$. A vertical stretch affects the entire function from the outside, not just the exponent."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Inside vs Outside Transformations",
                        "content": "Remembering that changes 'outside' the main function affect the $y$-direction directly (e.g. $k f(x)$) while changes 'inside' the function affect the $x$-direction inversely (e.g. $f(kx)$) is probably the safest rule of thumb for graph transformations. Always write down the general formula $y = k f(x)$ first to guide your steps."
                }
        },
        {
                "id": "004078",
                "board": "AQA",
                "branch": "Pure",
                "level": "AS",
                "major_area": "Algebra and functions",
                "topic": "Graph transformations",
                "subtopic": [
                        "Transformations of Graphs"
                ],
                "img": false,
                "question": "The graph of $$y = 2^x$$ is transformed by a stretch in the $y$-direction, scale factor 2.<br><br>State the equation of the transformed graph.<br><br>Choose the correct answer from the options below:<br>$$(a)\\\\ y = 2^{2x}\\\\\\ (b)\\\\ y = 2 \\times 2^x\\\\\\ (c)\\\\ y = 2^{\\frac{x}{2}}\\\\\\ (d)\\\\ y = \\dfrac{1}{2} \\times 2^x$$",
                "steps": [
                        "First, identify the original function: \\begin{aligned}y &= f(x) \\cr&= 2^x\\end{aligned}",
                        "Next, recall that a stretch in the $y$-direction with scale factor $k$ transforms the function $f(x)$ to $k \\times f(x)$<br><br> Here, $$k = 2$$",
                        "Finally, apply this rule to scale the entire function.",
                        "Final Answer: $$(b) y = 2 × 2^x$$"
                ],
                "pi_options": [
                        {
                                "ans": "$$(a) y = 2^{2x}$$",
                                "feedback": "This is a common error where a horizontal stretch with scale factor $1/2$ is applied to the input variable $x$. A vertical stretch affects the entire function from the outside, not just the exponent."
                        },
                        {
                                "ans": "$$(c) y = 2^{\\frac{x}{2}}$$",
                                "feedback": "This error occurs when attempting a stretch in the $x$-direction with scale factor $2$ instead of the $y$-direction. A stretch in the $y$-direction scale factor $2$ is a vertical change and multiplies the entire function by $2$."
                        },
                        {
                                "ans": "$$(d) y = \\dfrac{1}{2} \\times 2^x$$",
                                "feedback": "This incorrect answer represents a vertical stretch with scale factor $1/2$. Remember that a stretch of scale factor $2$ in the $y$-direction scales the function by a factor of $2$ directly."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Inside vs Outside Transformations",
                        "content": "Remembering that changes 'outside' the main function affect the $y$-direction directly (e.g. $k f(x)$) while changes 'inside' the function affect the $x$-direction inversely (e.g. $f(kx)$) is probably the safest rule of thumb for graph transformations. Always write down the general formula $y = k f(x)$ first to guide your steps."
                }
        },
        {
                "id": "004079",
                "board": "AQA",
                "branch": "Pure",
                "level": "AS",
                "major_area": "Algebra and functions",
                "topic": "Graph transformations",
                "subtopic": [
                        "Transformations of Graphs"
                ],
                "img": false,
                "question": "The graph of $$y = 6^x$$ is transformed by a stretch in the $y$-direction, scale factor 6.<br><br>State the equation of the transformed graph.<br><br>Choose the correct answer from the options below:<br>$$(a)\\\\ y = 6^{\\frac{x}{6}}\\\\\\ (b)\\\\ y = \\dfrac{1}{6} \\times 6^x\\\\\\ (c)\\\\ y = 6^{6x}\\\\\\ (d)\\\\ y = 6 \\times 6^x$$",
                "steps": [
                        "First, identify the original function: \\begin{aligned}y &= f(x) \\cr&= 6^x\\end{aligned}",
                        "Next, recall that a stretch in the $y$-direction with scale factor $k$ transforms the function $f(x)$ to $k \\times f(x)$<br><br> Here, $$k = 6$$",
                        "Finally, apply this rule to scale the entire function.",
                        "Final Answer: $$(d) y = 6 \\times 6^x$$"
                ],
                "pi_options": [
                        {
                                "ans": "$$(a) y = 6^{\\frac{x}{6}}$$",
                                "feedback": "This error occurs when attempting a stretch in the $x$-direction with scale factor $6$ instead of the $y$-direction. A stretch in the $y$-direction scale factor $6$ is a vertical change and multiplies the entire function by $6$."
                        },
                        {
                                "ans": "$$(b) y = \\dfrac{1}{6} \\times 6^x$$",
                                "feedback": "This incorrect answer represents a vertical stretch with scale factor $1/6$. Remember that a stretch of scale factor $6$ in the $y$-direction scales the function by a factor of $6$ directly."
                        },
                        {
                                "ans": "$$(c) y = 6^{6x}$$",
                                "feedback": "This is a common error where a horizontal stretch with scale factor $1/6$ is applied to the input variable $x$. A vertical stretch affects the entire function from the outside, not just the exponent."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Inside vs Outside Transformations",
                        "content": "Remembering that changes 'outside' the main function affect the $y$-direction directly (e.g. $k f(x)$) while changes 'inside' the function affect the $x$-direction inversely (e.g. $f(kx)$) is probably the safest rule of thumb for graph transformations. Always write down the general formula $y = k f(x)$ first to guide your steps."
                }
        },
        {
                "id": "004080",
                "board": "AQA",
                "branch": "Pure",
                "level": "AS",
                "major_area": "Algebra and functions",
                "topic": "Graph transformations",
                "subtopic": [
                        "Transformations of Graphs"
                ],
                "img": false,
                "question": "The graph of $$y = 7^x$$ is transformed by a stretch in the $y$-direction, scale factor 7.<br><br>State the equation of the transformed graph.<br><br>Choose the correct answer from the options below:<br>$$(a)\\\\ y = 7 \\times 7^x\\\\\\ (b)\\\\ y = 7^{\\frac{x}{7}}\\\\\\ (c)\\\\ y = \\dfrac{1}{7} \\times 7^x\\\\\\ (d)\\\\ y = 7^{7x}$$",
                "steps": [
                        "First, identify the original function: \\begin{aligned}y &= f(x) \\cr&= 7^x\\end{aligned}",
                        "Next, recall that a stretch in the $y$-direction with scale factor $k$ transforms the function $f(x)$ to $k \\times f(x)$<br><br> Here, $$k = 7$$",
                        "Finally, apply this rule to scale the entire function.",
                        "Final Answer: $$(a) y = 7 \\times 7^x$$"
                ],
                "pi_options": [
                        {
                                "ans": "$$(b) y = 7^{\\frac{x}{7}}$$",
                                "feedback": "This error occurs when attempting a stretch in the $x$-direction with scale factor $7$ instead of the $y$-direction. A stretch in the $y$-direction scale factor $7$ multiplies the entire function by $7$."
                        },
                        {
                                "ans": "$$(c) y = \\dfrac{1}{7} \\times 7^x$$",
                                "feedback": "This incorrect answer represents a vertical stretch with scale factor $1/7$. Remember that a stretch of scale factor $7$ in the $y$-direction scales the function by a factor of $7$ directly."
                        },
                        {
                                "ans": "$$(d) y = 7^{7x}$$",
                                "feedback": "This is a common error where a horizontal stretch with scale factor $1/7$ is applied to the input variable $x$. A vertical stretch affects the entire function from the outside, not just the exponent."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Inside vs Outside Transformations",
                        "content": "Remembering that changes 'outside' the main function affect the $y$-direction directly (e.g. $k f(x)$) while changes 'inside' the function affect the $x$-direction inversely (e.g. $f(kx)$) is probably the safest rule of thumb for graph transformations. Always write down the general formula $y = k f(x)$ first to guide your steps."
                }
        },
        {
                "id": "004081",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Sequences and series",
                "topic": "Sequences",
                "subtopic": [
                        "Periodic Sequences"
                ],
                "img": false,
                "question": "A periodic sequence is defined by $$U_n = \\cos(n\\pi)$$.<br><br>State the period of this sequence.<br><br>Choose the correct answer from the options below:<br>$$(a)\\\\\\ 2\\pi\\\\\\ \\\\\\ (b)\\\\\\ 2\\\\\\ (c)\\\\\\ \\pi\\\\\\ \\\\\\ (d)\\\\\\ 4$$",
                "steps": [
                        "First, write down the sequence formula: $$U_n = \\cos(n\\pi)$$.",
                        "Next, calculate the first few terms of the sequence to see the numerical pattern: $U_1 = -1,$ $U_2 = 1,$ $U_3 = -1,$ $U_4 = 1$",
                        "Finally, identify the repeating cycle of terms, which is $-1, 1$, and note that the cycle has a length of $2$.",
                        "Final Answer: $$(b) 2$$"
                ],
                "pi_options": [
                        {
                                "ans": "$$(a) 2\\pi$$",
                                "feedback": "This is a common error where the continuous period of a trigonometric function is confused with the discrete period of a sequence. The period of a sequence must be a positive integer $T$ representing the number of terms before the pattern repeats."
                        },
                        {
                                "ans": "$$(c) \\pi$$",
                                "feedback": "You have probably confused the period of the sequence with the period of a continuous trigonometric function such as $\\tan(x)$. The period of a sequence $U_n$ is the smallest integer $T$ such that $U_{n+T} = U_n$."
                        },
                        {
                                "ans": "$$(d) 4$$",
                                "feedback": "This is a common error that probably arises from confusing this sequence with one that has a fractional argument in the denominator. Write out the first few terms of the sequence to verify how quickly they repeat."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Sequence vs Function Periods",
                        "content": "A common slip under exam pressure is to state the period as $\\pi$ or $2\\pi$ because of familiarity with continuous trigonometric graphs. Remember that the period of a sequence must be an integer, representing how many terms are in each repeating cycle."
                }
        },
        {
                "id": "004082",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Sequences and series",
                "topic": "Sequences",
                "subtopic": [
                        "Periodic Sequences"
                ],
                "img": false,
                "question": "A periodic sequence is defined by $$U_n = \\cos\\left(\\dfrac{n\\pi}{2}\\right)$$.<br><br>State the period of this sequence.<br><br>Choose the correct answer from the options below:<br>$$\\text{(a) }2\\pi\\text{ (b) 8 (c) 4 (d) } \\pi$$",
                "steps": [
                        "First, write down the sequence formula: $$U_n = \\cos\\left(\\dfrac{n\\pi}{2}\\right)$$.",
                        "Next, calculate the first few terms of the sequence to identify the pattern: $U_1 = 0,$ $U_2 = -1,$ $U_3 = 0,$ $U_4 = 1,$ $U_5 = 0$",
                        "Finally, identify the repeating cycle, which is $0, -1, 0, 1$, and note that the length of this repeating pattern is $4$.",
                        "Final Answer: $$(c) 4$$"
                ],
                "pi_options": [
                        {
                                "ans": "$$(a) 2\\pi$$",
                                "feedback": "This incorrect option is probably a confusion with the continuous period of a trigonometric function. Remember that the period of a sequence must be a whole integer $T$ representing the number of discrete steps before the sequence repeats."
                        },
                        {
                                "ans": "$$(b) 8$$",
                                "feedback": "This error probably arises from doubling the correct period. Write out the first few terms of the sequence and identify the earliest term where the pattern starts repeating to locate the smallest positive integer period."
                        },
                        {
                                "ans": "$$(d) \\pi$$",
                                "feedback": "This error is probably a confusion with the period of continuous trigonometric graphs. Always calculate the first four or five terms of the sequence to make the discrete repeating cycle visible on your page."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Generating the First Few Terms",
                        "content": "If you ever find yourself uncertain about the trigonometric formula, simply write down the first few terms of the sequence (e.g. $U_1, U_2, U_3, \\dots$). Seeing the repeating pattern of numbers on your page is probably the quickest and safest way to confirm the period."
                }
        },
        {
                "id": "004083",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Sequences and series",
                "topic": "Sequences",
                "subtopic": [
                        "Periodic Sequences"
                ],
                "img": false,
                "question": "A periodic sequence is defined by $$U_n = \\sin\\left(\\dfrac{n\\pi}{3}\\right)$$.<br><br>State the period of this sequence.<br><br>Choose the correct answer from the options below:<br>$$(a)\\\\\\ 6\\\\\\ \\\\\\ (b)\\\\\\ 2\\pi\\\\\\ (c)\\\\\\ 3\\\\\\ \\\\\\ (d)\\\\\\ 6\\pi$$",
                "steps": [
                        "First, write down the sequence formula: $$U_n = \\sin\\left(\\dfrac{n\\pi}{3}\\right)$$.",
                        "Next, calculate the first few terms of the sequence to observe the periodic pattern: \\begin{aligned}U_1 &= \\dfrac{\\sqrt{3}}{2},\\\\ U_2 \\cr&= \\dfrac{\\sqrt{3}}{2},\\\\ U_3 \\cr&= 0,\\\\ U_4 \\cr&= -\\dfrac{\\sqrt{3}}{2},\\\\ U_5 \\cr&= -\\dfrac{\\sqrt{3}}{2},\\\\ U_6 \\cr&= 0,\\\\ U_7 \\cr&= \\dfrac{\\sqrt{3}}{2}\\end{aligned}",
                        "Finally, identify the repeating cycle, which is $\\dfrac{\\sqrt{3}}{2}, \\dfrac{\\sqrt{3}}{2}, 0, -\\dfrac{\\sqrt{3}}{2}, -\\dfrac{\\sqrt{3}}{2}, 0$, and note that the pattern repeats every $6$ terms.",
                        "Final Answer: $$(a) 6$$"
                ],
                "pi_options": [
                        {
                                "ans": "$$(b) 2\\pi$$",
                                "feedback": "This error probably occurs by confusing the period of the sequence with the continuous period of the sine function. The period of a sequence must always be a positive integer $T$."
                        },
                        {
                                "ans": "$$(c) 3$$",
                                "feedback": "This is a common error from dividing the numerator coefficient by $\\pi$ instead of using the full continuous period relation. Calculating the first few terms of the sequence will show that the cycle repeats every 6 terms."
                        },
                        {
                                "ans": "$$(d) 6\\pi$$",
                                "feedback": "This incorrect option combines both the integer period of 6 and the continuous function period $\\pi$. The period of a discrete sequence must be a plain whole number with no factor of $\\pi$ attached."
                        }
                ],
                "bradley_insight": {
                        "type": "deeper",
                        "title": "The Head Teacher's Eye: Why the Period is Integer-Valued",
                        "content": "Trigonometric functions are periodic in real numbers with a period of $2\\pi$. For a discrete sequence $U_n$, the period $T$ is the smallest positive integer that satisfies $U_{n+T} = U_n$. Because $n$ only takes integer values, the sequence samples the continuous curve at discrete intervals, which is why the continuous period $2\\pi$ must scale to a whole number."
                }
        },
        {
                "id": "004084",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Sequences and series",
                "topic": "Sequences",
                "subtopic": [
                        "Periodic Sequences"
                ],
                "img": false,
                "question": "A periodic sequence is defined by $$U_n = \\cos\\left(\\dfrac{2n\\pi}{3}\\right)$$.<br><br>State the period of this sequence.<br><br>Choose the correct answer from the options below:<br>$$(a)\\\\\\ 3\\\\\\ \\\\\\ (b)\\\\\\ 2\\pi\\\\\\  (c)\\\\\\ 6\\\\\\ \\\\\\ (d)\\\\\\ \\pi$$",
                "steps": [
                        "First, write down the sequence formula: $$U_n = \\cos\\left(\\dfrac{2n\\pi}{3}\\right)$$.",
                        "Next, calculate the first few terms of the sequence: \\begin{aligned}U_1 &= -\\dfrac{1}{2},\\\\ U_2 \\cr&= -\\dfrac{1}{2},\\\\ U_3 \\cr&= 1,\\\\ U_4 \\cr&= -\\dfrac{1}{2}\\end{aligned}",
                        "Finally, identify the repeating cycle, which is $-\\dfrac{1}{2}, -\\dfrac{1}{2}, 1$, and note that the length of this repeating pattern is $3$.",
                        "Final Answer: $$(a) 3$$"
                ],
                "pi_options": [
                        {
                                "ans": "$$(b) 2\\pi$$",
                                "feedback": "This error probably arises from stating the continuous period of a standard trigonometric function rather than finding the discrete integer period of the sequence."
                        },
                        {
                                "ans": "$$(c) 6$$",
                                "feedback": "This error probably arises from dividing by $\\pi/3$ instead of the full coefficient of $2\\pi/3$. Write down the first few values of $U_n$ to confirm that the pattern repeats every 3 terms."
                        },
                        {
                                "ans": "$$(d) \\pi$$",
                                "feedback": "This is a common error that probably results from confusing the discrete sequence period with the continuous period of functions like $\\cos(2x)$. A discrete sequence period is always a positive integer."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Fractions in Coefficient Arguments",
                        "content": "Watch out when the coefficient of $n$ contains a multiplier in the numerator, such as $\\frac{2\\pi}{3}$. This scales the period down to 3. If you make a slip and divide by $\\pi/3$ instead, you will obtain an incorrect period of 6. Double-check your division of fractions carefully."
                }
        },
        {
                "id": "004085",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Sequences and series",
                "topic": "Sequences",
                "subtopic": [
                        "Periodic Sequences"
                ],
                "img": false,
                "question": "A periodic sequence is defined by $$U_n = \\sin\\left(\\dfrac{n\\pi}{4}\\right)$$.<br><br>State the period of this sequence.<br><br>Choose the correct answer from the options below:<br>$$(a)\\\\\\ 8\\\\\\ \\\\\\ (b)\\\\\\ 2\\pi\\\\\\  (c)\\\\\\ 4\\\\\\ \\\\\\ (d)\\\\\\ 4\\pi$$",
                "steps": [
                        "First, write down the sequence formula: $$U_n = \\sin\\left(\\dfrac{n\\pi}{4}\\right)$$.",
                        "Next, calculate the first few terms of the sequence: \\begin{aligned}U_1 &= \\dfrac{1}{\\sqrt{2}},\\\\ U_2 \\cr&= 1,\\\\ U_3 \\cr&= \\dfrac{1}{\\sqrt{2}},\\\\ U_4 \\cr&= 0,\\\\ U_5 \\cr&= -\\dfrac{1}{\\sqrt{2}},\\\\ U_6 \\cr&= -1,\\\\ U_7 \\cr&= -\\dfrac{1}{\\sqrt{2}},\\\\ U_8 \\cr&= 0,\\\\ U_9 \\cr&= \\dfrac{1}{\\sqrt{2}}\\end{aligned}",
                        "Finally, identify the repeating cycle of terms and note that the pattern completes its cycle and starts repeating every $8$ terms.",
                        "Final Answer: $$(a) 8$$"
                ],
                "pi_options": [
                        {
                                "ans": "$$(b) 2\\pi$$",
                                "feedback": "This is a common error that probably results from confusing the discrete sequence period with the continuous period of the trigonometric function. The period of a sequence must be a plain positive integer."
                        },
                        {
                                "ans": "$$(c) 4$$",
                                "feedback": "This error probably arises from dividing $2\\pi$ by the denominator of 4, rather than dividing by the full coefficient of $\\pi/4$. Remember to divide the continuous period $2\\pi$ by the variable's coefficient."
                        },
                        {
                                "ans": "$$(d) 4\\pi$$",
                                "feedback": "This incorrect answer is probably a confusion between discrete sequence period calculations and continuous graph period modifications. The period of a discrete sequence is always a clean whole number."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Simple Formula Strategy",
                        "content": "For any sequence defined by $U_n = \\sin(\\omega n)$ or $\\cos(\\omega n)$ where $\\omega = \\frac{\\pi}{d}$, the period is simply given by $\\frac{2\\pi}{\\omega} = 2d$. Memorising this relation is probably the most efficient shortcut for these direct exam questions."
                }
        },
        {
                "id": "004086",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Algebra and functions",
                "topic": "Functions",
                "subtopic": [
                        "Inverse Functions"
                ],
                "img": false,
                "question": "The function $f$ is defined by $f(x) = e^{x-3}$, $x \\in \\mathbb{R}$.<br><br>Find $f^{-1}(x)$ and state its domain.",
                "steps": [
                        "Set $y = e^{x-3}$.",
                        "Take the natural logarithm of both sides to rearrange for $x$: \\begin{aligned}\\ln(y) &= x - 3 \\crx &= \\ln(y) + 3\\end{aligned}",
                        "Swap $x$ and $y$ to write the inverse function: $$f^{-1}(x) = \\ln(x) + 3$$",
                        "Since the domain of the inverse function is equal to the range of the original function, and the range of $f(x) = e^{x-3}$ is $y > 0$, the domain of $f^{-1}(x)$ is $x > 0$.",
                        "Final Answer: $$f^{-1}(x) = \\ln(x) + 3,\\quad \\text{domain: } x > 0$$"
                ],
                "pi_options": [
                        {
                                "ans": "$$f^{-1}(x) = \\ln(x) - 3,\\quad \\text{domain: } x > 0$$",
                                "feedback": "This incorrect answer results from a sign error when transposing the $-3$. When rearranging $\\ln(y) = x - 3$, adding $3$ to both sides gives $x = \\ln(y) + 3$."
                        },
                        {
                                "ans": "$$f^{-1}(x) = \\ln(x) + 3,\\quad \\text{domain: } x \\in \\mathbb{R}$$",
                                "feedback": "This error is caused by copying the domain of the original function $f(x)$. The domain of the inverse function must be equal to the range of the original function. Since $e^{x-3} > 0$, the domain of $f^{-1}(x)$ is $x > 0$."
                        },
                        {
                                "ans": "$$f^{-1}(x) = \\ln(x) + 3,\\quad \\text{domain: } x > 3$$",
                                "feedback": "This error probably arises from confusing the boundary of the domain with the constant term $3$ inside the inverse function. The domain of the inverse is determined strictly by the range of the original exponential function, which is $y > 0$."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: The Domain Trap",
                        "content": "A very common error in exam papers is to state the domain of the inverse function as $x \\in \\mathbb{R}$, simply copying the domain of the original function. Remember that the domain of $f^{-1}$ is always strictly equal to the range of $f$. Since an exponential term $e^{x-3}$ is always strictly positive, the range is $y > 0$, making the inverse domain $x > 0$."
                }
        },
        {
                "id": "004087",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Algebra and functions",
                "topic": "Functions",
                "subtopic": [
                        "Inverse Functions"
                ],
                "img": false,
                "question": "The function $f$ is defined by $f(x) = e^{x+5}$, $x \\in \\mathbb{R}$.<br><br>Find $f^{-1}(x)$ and state its domain.",
                "steps": [
                        "Set $y = e^{x+5}$.",
                        "Take the natural logarithm of both sides to rearrange for $x$: \\begin{aligned}\\ln(y) &= x + 5 \\crx &= \\ln(y) - 5\\end{aligned}",
                        "Swap $x$ and $y$ to write the inverse function: $$f^{-1}(x) = \\ln(x) - 5$$",
                        "Since the domain of the inverse function is equal to the range of the original function, and the range of $f(x) = e^{x+5}$ is $y > 0$, the domain of $f^{-1}(x)$ is $x > 0$.",
                        "Final Answer: $$f^{-1}(x) = \\ln(x) - 5,\\quad \\text{domain: } x > 0$$"
                ],
                "pi_options": [
                        {
                                "ans": "$$f^{-1}(x) = \\ln(x) + 5,\\quad \\text{domain: } x > 0$$",
                                "feedback": "This incorrect answer results from a sign error when transposing $+5$. When rearranging $\\ln(y) = x + 5$, subtracting $5$ from both sides gives $x = \\ln(y) - 5$."
                        },
                        {
                                "ans": "$$f^{-1}(x) = \\ln(x) - 5,\\quad \\text{domain: } x \\in \\mathbb{R}$$",
                                "feedback": "This error occurs by copying the domain of the original function. The domain of the inverse is equal to the range of the original function, which is $x > 0$."
                        },
                        {
                                "ans": "$$f^{-1}(x) = \\ln(x) - 5,\\quad \\text{domain: } x > 5$$",
                                "feedback": "This error probably results from confusing the domain boundary with the constant term. The domain of the inverse function is strictly bounded by $x > 0$, representing the range of the original exponential function."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Verifying Your Inverse",
                        "content": "To quickly check if your algebraic transposition is correct, pick a simple value for $x$ in the original function, say $x = -5$ for $f(x) = e^{x+5}$, giving $f(-5) = 1$. Substitute $1$ into your inverse function: $f^{-1}(1) = \\ln(1) - 5 = -5$. Since you get your original input back, you can be confident your inverse is correct."
                }
        },
        {
                "id": "004088",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Algebra and functions",
                "topic": "Functions",
                "subtopic": [
                        "Inverse Functions"
                ],
                "img": false,
                "question": "The function $f$ is defined by $f(x) = e^{2x-4}$, $x \\in \\mathbb{R}$.<br><br>Find $f^{-1}(x)$ and state its domain.",
                "steps": [
                        "Set $y = e^{2x-4}$.",
                        "Take the natural logarithm of both sides to rearrange for $x$: \\begin{aligned}\\ln(y) &= 2x - 4 \\cr2x &= \\ln(y) + 4\\end{aligned}",
                        "Divide by $2$ and swap $x$ and $y$ to write the inverse function: $$f^{-1}(x) = \\dfrac{\\ln(x) + 4}{2}$$",
                        "Since the domain of $f^{-1}(x)$ is equal to the range of the original function $f(x)$, and the range of $f(x) = e^{2x-4}$ is $y > 0$ for all real $x$, the domain of $f^{-1}(x)$ is $x > 0$.",
                        "Final Answer: $$f^{-1}(x) = \\dfrac{\\ln(x) + 4}{2},\\quad \\text{domain: } x > 0$$"
                ],
                "pi_options": [
                        {
                                "ans": "$$f^{-1}(x) = \\dfrac{\\ln(x) - 4}{2},\\quad \\text{domain: } x > 0$$",
                                "feedback": "This error comes from a transposition sign error. Rearranging $\\ln(y) = 2x - 4$ requires adding $4$ to both sides to get $2x = \\ln(y) + 4$, before dividing by $2$."
                        },
                        {
                                "ans": "$$f^{-1}(x) = \\dfrac{\\ln(x) + 4}{2},\\quad \\text{domain: } x \\in \\mathbb{R}$$",
                                "feedback": "This error is caused by copying the domain of the original function $f(x)$. The domain of the inverse function is equal to the range of $f(x)$, which is $y > 0$."
                        },
                        {
                                "ans": "$$f^{-1}(x) = \\dfrac{\\ln(x) + 4}{2},\\quad \\text{domain: } x > 2$$",
                                "feedback": "This error probably arises from confusing the domain boundary of the inverse function with the simplified constant term $2$ (from $4/2$). The domain of the inverse is strictly bounded by $x > 0$."
                        }
                ],
                "bradley_insight": {
                        "type": "deeper",
                        "title": "The Head Teacher's Eye: Inverse Logarithmic Properties",
                        "content": "When finding the inverse of $f(x) = e^{2x-4}$, taking natural logs yields $\\ln(y) = 2x - 4$. Rearranging gives $x = \\frac{1}{2}\\ln(y) + 2$. Mathematically, this can also be written as $x = \\ln(\\sqrt{y}) + 2$ using the power law of logarithms. While both forms are entirely correct, keeping the fractional coefficient of $\\frac{1}{2}$ in front of the log is probably the most standard way to present your final answer."
                }
        },
        {
                "id": "004089",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Algebra and functions",
                "topic": "Functions",
                "subtopic": [
                        "Inverse Functions"
                ],
                "img": false,
                "question": "The function $f$ is defined by $f(x) = e^{2x+6}$, $x \\in \\mathbb{R}$.<br><br>Find $f^{-1}(x)$ and state its domain.",
                "steps": [
                        "Set $y = e^{2x+6}$.",
                        "Take the natural logarithm of both sides to rearrange for $x$: \\begin{aligned}\\ln(y) &= 2x + 6 \\cr2x &= \\ln(y) - 6\\end{aligned}",
                        "Divide by $2$ and swap $x$ and $y$ to write the inverse function: $$f^{-1}(x) = \\dfrac{\\ln(x) - 6}{2}$$",
                        "Since the domain of $f^{-1}(x)$ is equal to the range of the original function $f(x)$, and the range of $f(x) = e^{2x+6}$ is $y > 0$ for all real $x$, the domain of $f^{-1}(x)$ is $x > 0$.",
                        "Final Answer: $$f^{-1}(x) = \\dfrac{\\ln(x) - 6}{2},\\quad \\text{domain: } x > 0$$"
                ],
                "pi_options": [
                        {
                                "ans": "$$f^{-1}(x) = \\dfrac{\\ln(x) + 6}{2},\\quad \\text{domain: } x > 0$$",
                                "feedback": "This error results from a sign error when rearranging. Moving $+6$ to the other side of the equation yields $\\ln(y) - 6 = 2x$."
                        },
                        {
                                "ans": "$$f^{-1}(x) = \\dfrac{\\ln(x) - 6}{2},\\quad \\text{domain: } x \\in \\mathbb{R}$$",
                                "feedback": "This error is caused by copying the domain of the original function. The domain of $f^{-1}(x)$ must equal the range of $f(x)$, which is $y > 0$."
                        },
                        {
                                "ans": "$$f^{-1}(x) = \\dfrac{\\ln(x) - 6}{2},\\quad \\text{domain: } x > 3$$",
                                "feedback": "This error probably comes from confusing the domain boundary with the simplified constant term $-3$ (from $-6/2$). The domain of the inverse is strictly bounded by $x > 0$."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Order of Operations in Rearranging",
                        "content": "When rearranging $y = e^{2x+6}$, always take the natural logarithm of both sides before attempting to divide by the coefficient of $2$. Trying to divide by $2$ first is a major order of operations error because the coefficient is inside the exponent. The exponential function must be isolated first."
                }
        },
        {
                "id": "004090",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Algebra and functions",
                "topic": "Functions",
                "subtopic": [
                        "Inverse Functions"
                ],
                "img": false,
                "question": "The function $f$ is defined by $f(x) = e^{2x-1}$, $x \\in \\mathbb{R}$.<br><br>Find $f^{-1}(x)$ and state its domain.",
                "steps": [
                        "Set $y = e^{2x-1}$.",
                        "Take the natural logarithm of both sides to rearrange for $x$: \\begin{aligned}\\ln(y) &= 2x - 1 \\cr2x &= \\ln(y) + 1\\end{aligned}",
                        "Divide by $2$ and swap $x$ and $y$ to write the inverse function: $$f^{-1}(x) = \\dfrac{\\ln(x) + 1}{2}$$",
                        "Since the domain of $f^{-1}(x)$ is equal to the range of the original function $f(x)$, and the range of $f(x) = e^{2x-1}$ is $y > 0$ for all real $x$, the domain of $f^{-1}(x)$ is $x > 0$.",
                        "Final Answer: $$f^{-1}(x) = \\dfrac{\\ln(x) + 1}{2},\\quad \\text{domain: } x > 0$$"
                ],
                "pi_options": [
                        {
                                "ans": "$$f^{-1}(x) = \\dfrac{\\ln(x) - 1}{2},\\quad \\text{domain: } x > 0$$",
                                "feedback": "This error comes from a transposition sign error. Rearranging $\\ln(y) = 2x - 1$ requires adding $1$ to both sides to get $2x = \\ln(y) + 1$, before dividing by $2$."
                        },
                        {
                                "ans": "$$f^{-1}(x) = \\dfrac{\\ln(x) + 1}{2},\\quad \\text{domain: } x \\in \\mathbb{R}$$",
                                "feedback": "This error is caused by copying the domain of the original function $f(x)$. The domain of the inverse function is equal to the range of $f(x)$, which is $y > 0$."
                        },
                        {
                                "ans": "$$f^{-1}(x) = \\dfrac{\\ln(x) + 1}{2},\\quad \\text{domain: } x > 0.5$$",
                                "feedback": "This error probably arises from confusing the domain boundary of the inverse function with the constant term $0.5$ (from $1/2$). The domain of the inverse is strictly bounded by $x > 0$."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Fractional Exponent Shortcuts",
                        "content": "When finding the inverse of functions with coefficients in the exponent like $e^{2x-1}$, the inverse will always involve a division by that coefficient (e.g., dividing by 2). Recognizing this pattern is probably the best way to mentally verify your steps as you write them down."
                }
        },
        {
                "id": "004091",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Calculus",
                "topic": "Differentiation",
                "subtopic": [
                        "Parametric Differentiation",
                        "Parametric Equations"
                ],
                "img": false,
                "question": "A curve is defined by the parametric equations:<br>$$x = 2 \\times 2^{-t} + 4$$<br>$$y = 5 \\times 2^t - 1$$<br><br>Find an expression for $\\dfrac{dy}{dx}$ and find the Cartesian equation of the curve in the form $xy + ax + by = c$, where $a$, $b$, and $c$ are integers.",
                "steps": [
                        "First, differentiate $y = 5 \\times 2^t - 1$ and $x = 2 \\times 2^{-t} + 4$ with respect to $t$: $$\\dfrac{dy}{dt} = 5 \\ln(2) 2^t$$ and $$\\dfrac{dx}{dt} = -2 \\ln(2) 2^{-t}$$",
                        "Next, use the chain rule, $$\\dfrac{dy}{dx} = \\dfrac{\\frac{dy}{dt}}{\\frac{dx}{dt}}$$, to obtain Part (a): \\begin{aligned}\\dfrac{dy}{dx} &= \\dfrac{5 \\ln(2) 2^t}{-2 \\ln(2) 2^{-t}} \\cr&= -\\dfrac{5}{2} \\times 2^{2t}\\end{aligned}",
                        "To find Part (b), rearrange the parametric equations to isolate the exponential terms: \\begin{aligned}2^{-t} &= \\dfrac{x-4}{2} \\cr2^t &= \\dfrac{2}{x-4}\\end{aligned}",
                        "Substitute this into the $y$ equation and expand: \\begin{aligned}y + 1 &= 5 \\times \\dfrac{2}{x-4} \\cr(y + 1)(x - 4) &= 10 \\crxy + x - 4y &= 14\\end{aligned}",
                        "Final Answer: \\begin{aligned}\\text{(a) } \\dfrac{dy}{dx} &= -\\dfrac{5}{2} \\times 2^{2t},\\quad \\text{(b) } xy + x - 4y \\cr&= 14\\end{aligned}"
                ],
                "pi_options": [
                        {
                                "ans": "$$\\text{(a) } \\dfrac{dy}{dx} = -\\dfrac{5}{2} \\times 2^{t},\\quad \\text{(b) } xy + x - 4y = 14$$",
                                "feedback": "In Part (a), you probably made a mistake with index division laws. Dividing $2^t$ by $2^{-t}$ yields $2^{t - (-t)} = 2^{2t}$ rather than $2^t$. Part (b) is correct."
                        },
                        {
                                "ans": "$$\\text{(a) } \\dfrac{dy}{dx} = -\\dfrac{5}{2} \\times 2^{2t},\\quad \\text{(b) } xy - 4x + y = 14$$",
                                "feedback": "In Part (b), you probably made a sign error when expanding $(y + 1)(x - 4) = 10$. The expansion yields $xy - 4y + x - 4 = 10$, which rearranges to $xy + x - 4y = 14$. Part (a) is correct."
                        },
                        {
                                "ans": "$$\\text{(a) } \\dfrac{dy}{dx} = \\dfrac{5}{2} \\times 2^{2t},\\quad \\text{(b) } xy + x - 4y = 6$$",
                                "feedback": "In Part (a), you probably forgot the negative sign from the derivative of $2^{-t}$. In Part (b), you probably forgot to subtract $4$ from $10$ or made a transposition mistake."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Exponential Chain Rule",
                        "content": "A very common trap when differentiating parametric equations with negative exponential powers like $2^{-t}$ is forgetting to multiply by the negative coefficient from the inner chain rule. Always write out $\\frac{d}{dt}(a^{-t}) = -a^{-t} \\ln(a)$ explicitly to avoid sign errors."
                }
        },
        {
                "id": "004092",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Calculus",
                "topic": "Differentiation",
                "subtopic": [
                        "Parametric Differentiation",
                        "Parametric Equations"
                ],
                "img": false,
                "question": "A curve is defined by the parametric equations:<br>$$x = 3 \\times 3^{-t} + 2$$<br>$$y = 2 \\times 3^t - 4$$<br><br>Find an expression for $\\dfrac{dy}{dx}$ and find the Cartesian equation of the curve in the form $xy + ax + by = c$, where $a$, $b$, and $c$ are integers.",
                "steps": [
                        "First, differentiate $y = 2 \\times 3^t - 4$ and $x = 3 \\times 3^{-t} + 2$ with respect to $t$: $$\\dfrac{dy}{dt} = 2 \\ln(3) 3^t$$ and $$\\dfrac{dx}{dt} = -3 \\ln(3) 3^{-t}$$",
                        "Next, use the chain rule, $$\\dfrac{dy}{dx} = \\dfrac{\\frac{dy}{dt}}{\\frac{dx}{dt}}$$, to obtain Part (a): \\begin{aligned}\\dfrac{dy}{dx} &= \\dfrac{2 \\ln(3) 3^t}{-3 \\ln(3) 3^{-t}} \\cr&= -\\dfrac{2}{3} \\times 3^{2t}\\end{aligned}",
                        "To find Part (b), rearrange the parametric equations to isolate the exponential terms: \\begin{aligned}3^{-t} &= \\dfrac{x-2}{3} \\cr3^t &= \\dfrac{3}{x-2}\\end{aligned}",
                        "Substitute this into the $y$ equation and expand: \\begin{aligned}y + 4 &= 2 \\times \\dfrac{3}{x-2} \\cr(y + 4)(x - 2) &= 6 \\crxy + 4x - 2y &= 14\\end{aligned}",
                        "Final Answer: \\begin{aligned}\\text{(a) } \\dfrac{dy}{dx} &= -\\dfrac{2}{3} \\times 3^{2t},\\quad \\text{(b) } xy + 4x - 2y \\cr&= 14\\end{aligned}"
                ],
                "pi_options": [
                        {
                                "ans": "$$\\text{(a) } \\dfrac{dy}{dx} = -\\dfrac{2}{3} \\times 3^{t},\\quad \\text{(b) } xy + 4x - 2y = 14$$",
                                "feedback": "In Part (a), you probably made an index error during division. Since $3^t \\div 3^{-t} = 3^{t - (-t)} = 3^{2t}$, the power of the exponential term becomes $2t$. Part (b) is correct."
                        },
                        {
                                "ans": "$$\\text{(a) } \\dfrac{dy}{dx} = -\\dfrac{2}{3} \\times 3^{2t},\\quad \\text{(b) } xy - 2x + 4y = 14$$",
                                "feedback": "In Part (b), you probably made a sign error or transposed the coefficients when expanding $(y + 4)(x - 2) = 6$. The correct expansion yields $xy - 2y + 4x - 8 = 6$, which simplifies to $xy + 4x - 2y = 14$. Part (a) is correct."
                        },
                        {
                                "ans": "$$\\text{(a) } \\dfrac{dy}{dx} = \\dfrac{2}{3} \\times 3^{2t},\\quad \\text{(b) } xy + 4x - 2y = 6$$",
                                "feedback": "In Part (a), you probably missed the negative sign from the derivative of $3^{-t}$. In Part (b), you probably made a sign error during transposition or expansion of the bracket constant."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Simplifying Exponential Transpositions",
                        "content": "When rearranging equations like $x - 2 = 3 \\times 3^{-t}$, write $3^{-t}$ as $\\frac{1}{3^t}$ to isolate the term easily. Taking the reciprocal of both sides is probably the fastest way to get $3^t = \\frac{3}{x-2}$ without sign or fraction slips."
                }
        },
        {
                "id": "004093",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Calculus",
                "topic": "Differentiation",
                "subtopic": [
                        "Parametric Differentiation",
                        "Parametric Equations"
                ],
                "img": false,
                "question": "A curve is defined by the parametric equations:<br>$$x = 5 \\times 2^{-t} + 1$$<br>$$y = 4 \\times 2^t - 3$$<br><br>Find an expression for $\\dfrac{dy}{dx}$ and find the Cartesian equation of the curve in the form $xy + ax + by = c$, where $a$, $b$, and $c$ are integers.",
                "steps": [
                        "First, differentiate $y = 4 \\times 2^t - 3$ and $x = 5 \\times 2^{-t} + 1$ with respect to $t$: $$\\dfrac{dy}{dt} = 4 \\ln(2) 2^t$$ and $$\\dfrac{dx}{dt} = -5 \\ln(2) 2^{-t}$$",
                        "Next, use the chain rule, $$\\dfrac{dy}{dx} = \\dfrac{\\frac{dy}{dt}}{\\frac{dx}{dt}}$$, to obtain Part (a): \\begin{aligned}\\dfrac{dy}{dx} &= \\dfrac{4 \\ln(2) 2^t}{-5 \\ln(2) 2^{-t}} \\cr&= -\\dfrac{4}{5} \\times 2^{2t}\\end{aligned}",
                        "To find Part (b), rearrange the parametric equations to isolate the exponential terms: \\begin{aligned}2^{-t} &= \\dfrac{x-1}{5} \\cr2^t &= \\dfrac{5}{x-1}\\end{aligned}",
                        "Substitute this into the $y$ equation and expand: \\begin{aligned}y + 3 &= 4 \\times \\dfrac{5}{x-1} \\cr(y + 3)(x - 1) &= 20 \\crxy + 3x - y &= 23\\end{aligned}",
                        "Final Answer: \\begin{aligned}\\text{(a) } \\dfrac{dy}{dx} &= -\\dfrac{4}{5} \\times 2^{2t},\\quad \\text{(b) } xy + 3x - y \\cr&= 23\\end{aligned}"
                ],
                "pi_options": [
                        {
                                "ans": "$$\\text{(a) } \\dfrac{dy}{dx} = -\\dfrac{4}{5} \\times 2^{t},\\quad \\text{(b) } xy + 3x - y = 23$$",
                                "feedback": "In Part (a), you probably made an index calculation slip during division. Dividing $2^t$ by $2^{-t}$ results in $2^{t - (-t)} = 2^{2t}$, not $2^t$. Part (b) is correct."
                        },
                        {
                                "ans": "$$\\text{(a) } \\dfrac{dy}{dx} = -\\dfrac{4}{5} \\times 2^{2t},\\quad \\text{(b) } xy + 3x - y = 17$$",
                                "feedback": "In Part (b), you probably made a sign error when expanding $(y + 3)(x - 1) = 20$. The expansion yields $xy - y + 3x - 3 = 20$, which rearranges to $xy + 3x - y = 23$. Part (a) is correct."
                        },
                        {
                                "ans": "$$\\text{(a) } \\dfrac{dy}{dx} = \\dfrac{4}{5} \\times 2^{2t},\\quad \\text{(b) } xy - y + 3x = 17$$",
                                "feedback": "In Part (a), you probably missed the negative sign from the derivative of $2^{-t}$. In Part (b), you probably made transposition or expansion constant sign errors."
                        }
                ],
                "bradley_insight": {
                        "type": "deeper",
                        "title": "The Head Teacher's Eye: Logarithm Elimination",
                        "content": "A deeper look at the Cartesian elimination method shows why it is so effective here. Since $2^{-t}$ and $2^t$ are multiplicative inverses, their product is exactly $1$. Multiplying $(x-1)/5$ by $(y+3)/4$ is probably the most elegant way to see that $\\frac{x-1}{5} \\times \\frac{y+3}{4} = 1 \\implies (x-1)(y+3) = 20$ directly."
                }
        },
        {
                "id": "004094",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Calculus",
                "topic": "Differentiation",
                "subtopic": [
                        "Parametric Differentiation",
                        "Parametric Equations"
                ],
                "img": false,
                "question": "A curve is defined by the parametric equations:<br>$$x = 2 \\times 3^{-t} + 5$$<br>$$y = 4 \\times 3^t - 1$$<br><br>Find an expression for $\\dfrac{dy}{dx}$ and find the Cartesian equation of the curve in the form $xy + ax + by = c$, where $a$, $b$, and $c$ are integers.",
                "steps": [
                        "First, differentiate $y = 4 \\times 3^t - 1$ and $x = 2 \\times 3^{-t} + 5$ with respect to $t$: $$\\dfrac{dy}{dt} = 4 \\ln(3) 3^t$$ and $$\\dfrac{dx}{dt} = -2 \\ln(3) 3^{-t}$$",
                        "Next, use the chain rule, $$\\dfrac{dy}{dx} = \\dfrac{\\frac{dy}{dt}}{\\frac{dx}{dt}}$$, to obtain Part (a): \\begin{aligned}\\dfrac{dy}{dx} &= \\dfrac{4 \\ln(3) 3^t}{-2 \\ln(3) 3^{-t}} \\cr&= -2 \\times 3^{2t}\\end{aligned}",
                        "To find Part (b), rearrange the parametric equations to isolate the exponential terms: \\begin{aligned}3^{-t} &= \\dfrac{x-5}{2} \\cr3^t &= \\dfrac{2}{x-5}\\end{aligned}",
                        "Substitute this into the $y$ equation and expand: \\begin{aligned}y + 1 &= 4 \\times \\dfrac{2}{x-5} \\cr(y + 1)(x - 5) &= 8 \\crxy + x - 5y &= 13\\end{aligned}",
                        "Final Answer: \\begin{aligned}\\text{(a) } \\dfrac{dy}{dx} &= -2 \\times 3^{2t},\\quad \\text{(b) } xy + x - 5y \\cr&= 13\\end{aligned}"
                ],
                "pi_options": [
                        {
                                "ans": "$$\\text{(a) } \\dfrac{dy}{dx} = -2 \\times 3^{t},\\quad \\text{(b) } xy + x - 5y = 13$$",
                                "feedback": "In Part (a), you probably made an index division error. Since $3^t \\div 3^{-t} = 3^{t - (-t)} = 3^{2t}$, the exponent must be $2t$. Part (b) is correct."
                        },
                        {
                                "ans": "$$\\text{(a) } \\dfrac{dy}{dx} = -2 \\times 3^{2t},\\quad \\text{(b) } xy + x - 5y = 3$$",
                                "feedback": "In Part (b), you probably made a sign error when expanding $(y + 1)(x - 5) = 8$. The expansion yields $xy - 5y + x - 5 = 8$, which simplifies to $xy + x - 5y = 13$. Part (a) is correct."
                        },
                        {
                                "ans": "$$\\text{(a) } \\dfrac{dy}{dx} = 2 \\times 3^{2t},\\quad \\text{(b) } xy + x - 5y = 3$$",
                                "feedback": "In Part (a), you probably missed the negative sign from the derivative of $3^{-t}$. In Part (b), you probably made sign transposition errors when expanding and simplifying the constant."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Expanding Algebraic Fractions",
                        "content": "A common error is to try to expand $(y+1)(x-5) = 8$ and get a negative term in $xy$. Make sure you expand each term in the brackets carefully: $y \\times x = xy$, $y \\times (-5) = -5y$, $1 \\times x = x$, and $1 \\times (-5) = -5$."
                }
        },
        {
                "id": "004095",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Calculus",
                "topic": "Differentiation",
                "subtopic": [
                        "Parametric Differentiation",
                        "Parametric Equations"
                ],
                "img": false,
                "question": "A curve is defined by the parametric equations:<br>$$x = 3 \\times 2^{-t} + 2$$<br>$$y = 2 \\times 2^t - 6$$<br><br>Find an expression for $\\dfrac{dy}{dx}$ and find the Cartesian equation of the curve in the form $xy + ax + by = c$, where $a$, $b$, and $c$ are integers.",
                "steps": [
                        "First, differentiate $y = 2 \\times 2^t - 6$ and $x = 3 \\times 2^{-t} + 2$ with respect to $t$: $$\\dfrac{dy}{dt} = 2 \\ln(2) 2^t$$ and $$\\dfrac{dx}{dt} = -3 \\ln(2) 2^{-t}$$",
                        "Next, use the chain rule, $$\\dfrac{dy}{dx} = \\dfrac{\\frac{dy}{dt}}{\\frac{dx}{dt}}$$, to obtain Part (a): \\begin{aligned}\\dfrac{dy}{dx} &= \\dfrac{2 \\ln(2) 2^t}{-3 \\ln(2) 2^{-t}} \\cr&= -\\dfrac{2}{3} \\times 2^{2t}\\end{aligned}",
                        "To find Part (b), rearrange the parametric equations to isolate the exponential terms: \\begin{aligned}2^{-t} &= \\dfrac{x-2}{3} \\cr2^t &= \\dfrac{3}{x-2}\\end{aligned}",
                        "Substitute this into the $y$ equation and expand: \\begin{aligned}y + 6 &= 2 \\times \\dfrac{3}{x-2} \\cr(y + 6)(x - 2) &= 6 \\crxy + 6x - 2y &= 18\\end{aligned}",
                        "Final Answer: \\begin{aligned}\\text{(a) } \\dfrac{dy}{dx} &= -\\dfrac{2}{3} \\times 2^{2t},\\quad \\text{(b) } xy + 6x - 2y \\cr&= 18\\end{aligned}"
                ],
                "pi_options": [
                        {
                                "ans": "$$\\text{(a) } \\dfrac{dy}{dx} = -\\dfrac{2}{3} \\times 2^{t},\\quad \\text{(b) } xy + 6x - 2y = 18$$",
                                "feedback": "In Part (a), you probably made an index division error. Since $2^t \\div 2^{-t} = 2^{t - (-t)} = 2^{2t}$, the exponent must be $2t$. Part (b) is correct."
                        },
                        {
                                "ans": "$$\\text{(a) } \\dfrac{dy}{dx} = -\\dfrac{2}{3} \\times 2^{2t},\\quad \\text{(b) } xy + 6x - 2y = 6$$",
                                "feedback": "In Part (b), you probably made a sign error when expanding $(y + 6)(x - 2) = 6$. The expansion yields $xy - 2y + 6x - 12 = 6$, which simplifies to $xy + 6x - 2y = 18$. Part (a) is correct."
                        },
                        {
                                "ans": "$$\\text{(a) } \\dfrac{dy}{dx} = \\dfrac{2}{3} \\times 2^{2t},\\quad \\text{(b) } xy - 2y + 6x = 6$$",
                                "feedback": "In Part (a), you probably missed the negative sign from the derivative of $2^{-t}$. In Part (b), you probably made a sign transposition error when simplifying the constant terms."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Sanity Checking the Cartesian Equation",
                        "content": "A quick sanity check for your final Cartesian equation is probably to substitute a simple value for $t$, like $t=0$, back into the original equations. This yields $x = 5$ and $y = -4$. Substitute $(5, -4)$ into your Cartesian equation: $5(-4) + 6(5) - 2(-4) = -20 + 30 + 8 = 18$, which correctly matches."
                }
        },
        {
                "id": "004096",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Sequences and series",
                "topic": "Binomial expansion",
                "subtopic": [
                        "Binomial Expansion",
                        "Numerical Integration"
                ],
                "img": false,
                "question": "(a) Find the first three terms, in ascending powers of $x$, of the binomial expansion of $\\dfrac{1}{\\sqrt{9+x}}$.<br><br>(b) Hence, find the first three terms of the binomial expansion of $\\dfrac{1}{\\sqrt{9-x^3}}$.<br><br>(c) Using your answer to part (b), find an approximation for $\\int_{0}^{1} \\dfrac{1}{\\sqrt{9-x^3}} \\text{d}x$, giving your answer to seven decimal places.<br><br>(d) (i) Tom, a student, decides to use this method to find a more accurate value for the integral by increasing the number of terms of the binomial expansion used. Explain clearly whether Tom's approximation will be an overestimate, an underestimate, or if it is impossible to tell.<br><br>(d) (ii) Tom goes on to use the expansion from part (b) to find an approximation for $\\int_{-3}^{0} \\dfrac{1}{\\sqrt{9-x^3}} \\text{d}x$. Explain why Tom's approximation is invalid.",
                "steps": [
                        "For Part (a), rewrite the function in index form and factor out $9$: \\begin{aligned}(9+x)^{-\\frac{1}{2}} &= 9^{-\\frac{1}{2}}\\left(1+\\dfrac{x}{9}\\right)^{-\\frac{1}{2}} \\cr&= \\dfrac{1}{3}\\left(1 - \\dfrac{1}{2}\\left(\\dfrac{x}{9}\\right) + \\dfrac{3}{8}\\left(\\dfrac{x}{9}\\right)^2 + \\dots\\right) \\cr&= \\dfrac{1}{3} - \\dfrac{x}{54} + \\dfrac{x^2}{648}\\end{aligned}",
                        "For Part (b), substitute $x \\implies -x^3$ into your Part (a) expansion: \\begin{aligned}\\dfrac{1}{\\sqrt{9-x^3}} &= \\dfrac{1}{3} - \\dfrac{-x^3}{54} + \\dfrac{(-x^3)^2}{648} \\cr&= \\dfrac{1}{3} + \\dfrac{x^3}{54} + \\dfrac{x^6}{648}\\end{aligned}",
                        "For Part (c), integrate this polynomial approximation from $0$ to $1$: \\begin{aligned}\\int_{0}^{1} \\left(\\dfrac{1}{3} + \\dfrac{x^3}{54} + \\dfrac{x^6}{648}\\right) \\text{d}x &= \\left[\\dfrac{x}{3} + \\dfrac{x^4}{216} + \\dfrac{x^7}{4536}\\right]_{0}^{1} \\cr&= \\dfrac{1}{3} + \\dfrac{1}{216} + \\dfrac{1}{4536} \\approx 0.3381834\\end{aligned}",
                        "For Part (d)(i), notice that since $u = \\dfrac{x^3}{9} \\ge 0$ on the interval $[0,1]$, every term in the binomial series for $(1-u)^{-\\frac{1}{2}}$ is positive. Truncating the series removes positive terms, so Tom's approximation is an underestimate.",
                        "For Part (d)(ii), the expansion converges only for $|u| < 1 \\implies \\left|\\dfrac{x^3}{9}\\right| < 1 \\implies |x| < 9^{\\frac{1}{3}} \\approx 2.08$. Since the lower limit is $x = -3$ and $|-3| = 3 \\ge 2.08$, the series does not converge on this interval.",
                        "Final Answer: $$\\text{Part (b): } \\dfrac{1}{3} + \\dfrac{x^3}{54} + \\dfrac{x^6}{648},\\quad \\text{Part (c): } 0.3381834,\\quad \\text{Part (d)(i): Underestimate}$$"
                ],
                "pi_options": [
                        {
                                "ans": "$$\\text{Part (b): } \\dfrac{1}{3} - \\dfrac{x^3}{54} + \\dfrac{x^6}{648},\\quad \\text{Part (c): } 0.3289243,\\quad \\text{Part (d)(i): Underestimate}$$",
                                "feedback": "In Part (b), you probably made a sign error when substituting $-x^3$ into the expansion. Since we are substituting into $-\\frac{x}{54}$, we get $-\\frac{-x^3}{54} = +\\frac{x^3}{54}$. This also affects the integral in Part (c)."
                        },
                        {
                                "ans": "$$\\text{Part (b): } \\dfrac{1}{3} + \\dfrac{x^3}{54} + \\dfrac{x^6}{648},\\quad \\text{Part (c): } 0.3381834,\\quad \\text{Part (d)(i): Overestimate}$$",
                                "feedback": "In Part (d)(i), you probably assumed that adding more positive terms makes the approximation an overestimate. However, since all terms in the series are positive, truncating after finitely many terms leaves out positive values, meaning the approximation is smaller than the true value (an underestimate)."
                        },
                        {
                                "ans": "$$\\text{Part (b): } \\dfrac{1}{3} + \\dfrac{x^3}{54} - \\dfrac{x^6}{648},\\quad \\text{Part (c): } 0.3377425,\\quad \\text{Part (d)(i): Underestimate}$$",
                                "feedback": "Check your signs in Part (b). Substituting $-x^3$ into the third term $+x^2/648$ gives $+(-x^3)^2/648 = +x^6/648$. Both terms must be positive, which also affects your integration in Part (c)."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Substituting Negative Powers",
                        "content": "When substituting $-x^3$ into the expansion of $(9+x)^{-1/2}$, pay close attention to the sign changes. For the $x$ term, we get $-\\frac{-x^3}{54} = +\\frac{x^3}{54}$, but for the $x^2$ term, the square removes the negative sign: $+(-x^3)^2/648 = +\\frac{x^6}{648}$. Missing these sign reversals is a very common way to lose easy marks on this question."
                }
        },
        {
                "id": "004097",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Sequences and series",
                "topic": "Binomial expansion",
                "subtopic": [
                        "Binomial Expansion",
                        "Numerical Integration"
                ],
                "img": false,
                "question": "(a) Find the first three terms, in ascending powers of $x$, of the binomial expansion of $\\dfrac{1}{\\sqrt{1+x}}$.<br><br>(b) Hence, find the first three terms of the binomial expansion of $\\dfrac{1}{\\sqrt{1-x^2}}$.<br><br>(c) Using your answer to part (b), find an approximation for $\\int_{0}^{0.5} \\dfrac{1}{\\sqrt{1-x^2}} \\text{d}x$, giving your answer to seven decimal places.<br><br>(d) (i) Sarah, a student, decides to use this method to find a more accurate value for the integral by increasing the number of terms of the binomial expansion used. Explain clearly whether Sarah's approximation will be an overestimate, an underestimate, or if it is impossible to tell.<br><br>(d) (ii) Sarah goes on to use the expansion from part (b) to find an approximation for $\\int_{-2}^{0} \\dfrac{1}{\\sqrt{1-x^2}} \\text{d}x$. Explain why Sarah's approximation is invalid.",
                "steps": [
                        "For Part (a), rewrite the function in index form and expand using $(1+x)^{-\\frac{1}{2}}$: $$(1+x)^{-\\frac{1}{2}} = 1 - \\dfrac{1}{2}x + \\dfrac{3}{8}x^2$$",
                        "For Part (b), substitute $x \\implies -x^2$ into your Part (a) expansion: \\begin{aligned}\\dfrac{1}{\\sqrt{1-x^2}} &= 1 - \\dfrac{1}{2}(-x^2) + \\dfrac{3}{8}(-x^2)^2 \\cr&= 1 + \\dfrac{1}{2}x^2 + \\dfrac{3}{8}x^4\\end{aligned}",
                        "For Part (c), integrate this polynomial approximation from $0$ to $0.5$: \\begin{aligned}\\int_{0}^{0.5} \\left(1 + \\dfrac{1}{2}x^2 + \\dfrac{3}{8}x^4\\right) \\text{d}x &= \\left[x + \\dfrac{x^3}{6} + \\dfrac{3x^5}{40}\\right]_{0}^{0.5} \\cr&= 0.5 + \\dfrac{0.125}{6} + \\dfrac{0.09375}{40} \\approx 0.5231771\\end{aligned}",
                        "For Part (d)(i), notice that since $u = x^2 \\ge 0$ on the interval $[0,0.5]$, every term in the binomial series for $(1-u)^{-\\frac{1}{2}}$ is positive. Truncating the series removes positive terms, so Sarah's approximation is an underestimate.",
                        "For Part (d)(ii), the expansion converges only for $|u| < 1 \\implies |x^2| < 1 \\implies |x| < 1$. Since the lower limit is $x = -2$ and $|-2| = 2 \\ge 1$, the series does not converge on this interval.",
                        "Final Answer: $$\\text{Part (b): } 1 + \\dfrac{1}{2}x^2 + \\dfrac{3}{8}x^4,\\quad \\text{Part (c): } 0.5231771,\\quad \\text{Part (d)(i): Underestimate}$$"
                ],
                "pi_options": [
                        {
                                "ans": "$$\\text{Part (b): } 1 - \\dfrac{1}{2}x^2 + \\dfrac{3}{8}x^4,\\quad \\text{Part (c): } 0.4815104,\\quad \\text{Part (d)(i): Underestimate}$$",
                                "feedback": "In Part (b), you probably made a sign error when substituting $-x^2$ into the expansion. Substituting into $-\\frac{x}{2}$ yields $-\\frac{-x^2}{2} = +\\frac{x^2}{2}$. This also affects the integral calculation in Part (c)."
                        },
                        {
                                "ans": "$$\\text{Part (b): } 1 + \\dfrac{1}{2}x^2 + \\dfrac{3}{8}x^4,\\quad \\text{Part (c): } 0.5231771,\\quad \\text{Part (d)(i): Overestimate}$$",
                                "feedback": "In Part (d)(i), you probably assumed that adding more positive terms makes the approximation an overestimate. However, since all terms in the series are positive, truncating after finitely many terms leaves out positive values, meaning the approximation is smaller than the true value (an underestimate)."
                        },
                        {
                                "ans": "$$\\text{Part (b): } 1 + \\dfrac{1}{2}x^2 - \\dfrac{3}{8}x^4,\\quad \\text{Part (c): } 0.5184896,\\quad \\text{Part (d)(i): Underestimate}$$",
                                "feedback": "Check your signs in Part (b). Substituting $-x^2$ into $+3x^2/8$ yields $+3(-x^2)^2/8 = +3x^4/8$. Both terms must be positive, which also affects your integration in Part (c)."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Quick Integration Checks",
                        "content": "When integrating your binomial expansion, remember to increase the power of each term and divide by the new power. For example, integrating $x^4$ gives $\\frac{x^5}{5}$. It is probably easiest to write down each coefficient product clearly on your page before simplifying, as this prevents simple mental multiplication slips."
                }
        },
        {
                "id": "004098",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Sequences and series",
                "topic": "Binomial expansion",
                "subtopic": [
                        "Binomial Expansion",
                        "Numerical Integration"
                ],
                "img": false,
                "question": "(a) Find the first three terms, in ascending powers of $x$, of the binomial expansion of $\\dfrac{1}{\\sqrt{16+x}}$.<br><br>(b) Hence, find the first three terms of the binomial expansion of $\\dfrac{1}{\\sqrt{16-x^3}}$.<br><br>(c) Using your answer to part (b), find an approximation for $\\int_{0}^{1} \\dfrac{1}{\\sqrt{16-x^3}} \\text{d}x$, giving your answer to seven decimal places.<br><br>(d) (i) Ranjit, a student, decides to use this method to find a more accurate value for the integral by increasing the number of terms of the binomial expansion used. Explain clearly whether Ranjit's approximation will be an overestimate, an underestimate, or if it is impossible to tell.<br><br>(d) (ii) Ranjit goes on to use the expansion from part (b) to find an approximation for $\\int_{-3}^{0} \\dfrac{1}{\\sqrt{16-x^3}} \\text{d}x$. Explain why Ranjit's approximation is invalid.",
                "steps": [
                        "For Part (a), rewrite the function in index form and factor out $16$: \\begin{aligned}(16+x)^{-\\frac{1}{2}} &= 16^{-\\frac{1}{2}}\\left(1+\\dfrac{x}{16}\\right)^{-\\frac{1}{2}} \\cr&= \\dfrac{1}{4}\\left(1 - \\dfrac{1}{2}\\left(\\dfrac{x}{16}\\right) + \\dfrac{3}{8}\\left(\\dfrac{x}{16}\\right)^2 + \\dots\\right) \\cr&= \\dfrac{1}{4} - \\dfrac{x}{128} + \\dfrac{3x^2}{8192}\\end{aligned}",
                        "For Part (b), substitute $x \\implies -x^3$ into your Part (a) expansion: \\begin{aligned}\\dfrac{1}{\\sqrt{16-x^3}} &= \\dfrac{1}{4} - \\dfrac{-x^3}{128} + \\dfrac{3(-x^3)^2}{8192} \\cr&= \\dfrac{1}{4} + \\dfrac{x^3}{128} + \\dfrac{3x^6}{8192}\\end{aligned}",
                        "For Part (c), integrate this polynomial approximation from $0$ to $1$: \\begin{aligned}\\int_{0}^{1} \\left(\\dfrac{1}{4} + \\dfrac{x^3}{128} + \\dfrac{3x^6}{8192}\\right) \\text{d}x &= \\left[\\dfrac{x}{4} + \\dfrac{x^4}{512} + \\dfrac{3x^7}{57344}\\right]_{0}^{1} \\cr&= \\dfrac{1}{4} + \\dfrac{1}{512} + \\dfrac{3}{57344} \\approx 0.2520054\\end{aligned}",
                        "For Part (d)(i), notice that since $u = \\dfrac{x^3}{16} \\ge 0$ on the interval $[0,1]$, every term in the binomial series for $(1-u)^{-\\frac{1}{2}}$ is positive. Truncating the series removes positive terms, so Ranjit's approximation is an underestimate.",
                        "For Part (d)(ii), the expansion converges only for $|u| < 1 \\implies \\left|\\dfrac{x^3}{16}\\right| < 1 \\implies |x| < 16^{\\frac{1}{3}} \\approx 2.52$. Since the lower limit is $x = -3$ and $|-3| = 3 \\ge 2.52$, the series does not converge on this interval.",
                        "Final Answer: $$\\text{Part (b): } \\dfrac{1}{4} + \\dfrac{x^3}{128} + \\dfrac{3x^6}{8192},\\quad \\text{Part (c): } 0.2520054,\\quad \\text{Part (d)(i): Underestimate}$$"
                ],
                "pi_options": [
                        {
                                "ans": "$$\\text{Part (b): } \\dfrac{1}{4} - \\dfrac{x^3}{128} + \\dfrac{3x^6}{8192},\\quad \\text{Part (c): } 0.2481023,\\quad \\text{Part (d)(i): Underestimate}$$",
                                "feedback": "In Part (b), you probably made a sign error when substituting $-x^3$ into the expansion. Substituting into $-\\frac{x}{128}$ yields $-\\frac{-x^3}{128} = +\\frac{x^3}{128}$. This also affects the integral calculation in Part (c)."
                        },
                        {
                                "ans": "$$\\text{Part (b): } \\dfrac{1}{4} + \\dfrac{x^3}{128} + \\dfrac{3x^6}{8192},\\quad \\text{Part (c): } 0.2520054,\\quad \\text{Part (d)(i): Overestimate}$$",
                                "feedback": "In Part (d)(i), you probably assumed that adding more positive terms makes the approximation an overestimate. However, since all terms in the series are positive, truncating after finitely many terms leaves out positive values, meaning the approximation is smaller than the true value (an underestimate)."
                        },
                        {
                                "ans": "$$\\text{Part (b): } \\dfrac{1}{4} + \\dfrac{x^3}{128} - \\dfrac{3x^6}{8192},\\quad \\text{Part (c): } 0.2519008,\\quad \\text{Part (d)(i): Underestimate}$$",
                                "feedback": "Check your signs in Part (b). Substituting $-x^3$ into the third term yields $+3(-x^3)^2/8192 = +3x^6/8192$. Both terms must be positive, which also affects your integration in Part (c)."
                        }
                ],
                "bradley_insight": {
                        "type": "deeper",
                        "title": "The Head Teacher's Eye: Understanding Convergence Boundaries",
                        "content": "The validity range of a binomial expansion is defined by $|u| < 1$, where $u$ is the variable component. For the term $\\frac{x^3}{16}$, this gives $|x^3/16| < 1 \\implies |x| < 16^{1/3} \\approx 2.52$. When the lower limit of our integral lies outside this boundary (such as $x = -3$), the series fails to converge and is completely invalid, even if the original algebraic expression is defined there."
                }
        },
        {
                "id": "004099",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Sequences and series",
                "topic": "Binomial expansion",
                "subtopic": [
                        "Binomial Expansion",
                        "Numerical Integration"
                ],
                "img": false,
                "question": "(a) Find the first three terms, in ascending powers of $x$, of the binomial expansion of $\\dfrac{1}{\\sqrt{25+x}}$.<br><br>(b) Hence, find the first three terms of the binomial expansion of $\\dfrac{1}{\\sqrt{25-x^3}}$.<br><br>(c) Using your answer to part (b), find an approximation for $\\int_{0}^{1} \\dfrac{1}{\\sqrt{25-x^3}} \\text{d}x$, giving your answer to seven decimal places.<br><br>(d) (i) Jeevesh, a student, decides to use this method to find a more accurate value for the integral by increasing the number of terms of the binomial expansion used. Explain clearly whether Jeevesh's approximation will be an overestimate, an underestimate, or if it is impossible to tell.<br><br>(d) (ii) Jeevesh goes on to use the expansion from part (b) to find an approximation for $\\int_{-4}^{0} \\dfrac{1}{\\sqrt{25-x^3}} \\text{d}x$. Explain why Jeevesh's approximation is invalid.",
                "steps": [
                        "For Part (a), rewrite the function in index form and factor out $25$: \\begin{aligned}(25+x)^{-\\frac{1}{2}} &= 25^{-\\frac{1}{2}}\\left(1+\\dfrac{x}{25}\\right)^{-\\frac{1}{2}} \\cr&= \\dfrac{1}{5}\\left(1 - \\dfrac{1}{2}\\left(\\dfrac{x}{25}\\right) + \\dfrac{3}{8}\\left(\\dfrac{x}{25}\\right)^2 + \\dots\\right) \\cr&= \\dfrac{1}{5} - \\dfrac{x}{250} + \\dfrac{3x^2}{25000}\\end{aligned}",
                        "For Part (b), substitute $x \\implies -x^3$ into your Part (a) expansion: \\begin{aligned}\\dfrac{1}{\\sqrt{25-x^3}} &= \\dfrac{1}{5} - \\dfrac{-x^3}{250} + \\dfrac{3(-x^3)^2}{25000} \\cr&= \\dfrac{1}{5} + \\dfrac{x^3}{250} + \\dfrac{3x^6}{25000}\\end{aligned}",
                        "For Part (c), integrate this polynomial approximation from $0$ to $1$: \\begin{aligned}\\int_{0}^{1} \\left(\\dfrac{1}{5} + \\dfrac{x^3}{250} + \\dfrac{3x^6}{25000}\\right) \\text{d}x &= \\left[\\dfrac{x}{5} + \\dfrac{x^4}{1000} + \\dfrac{3x^7}{175000}\\right]_{0}^{1} \\cr&= 0.2 + 0.001 + 0.0000171 \\approx 0.2010171\\end{aligned}",
                        "For Part (d)(i), notice that since $u = \\dfrac{x^3}{25} \\ge 0$ on the interval $[0,1]$, every term in the binomial series for $(1-u)^{-\\frac{1}{2}}$ is positive. Truncating the series removes positive terms, so Jeevesh's approximation is an underestimate.",
                        "For Part (d)(ii), the expansion converges only for $|u| < 1 \\implies \\left|\\dfrac{x^3}{25}\\right| < 1 \\implies |x| < 25^{\\frac{1}{3}} \\approx 2.92$. Since the lower limit is $x = -4$ and $|-4| = 4 \\ge 2.92$, the series does not converge on this interval.",
                        "Final Answer: $$\\text{Part (b): } \\dfrac{1}{5} + \\dfrac{x^3}{250} + \\dfrac{3x^6}{25000},\\quad \\text{Part (c): } 0.2010171,\\quad \\text{Part (d)(i): Underestimate}$$"
                ],
                "pi_options": [
                        {
                                "ans": "$$\\text{Part (b): } \\dfrac{1}{5} - \\dfrac{x^3}{250} + \\dfrac{3x^6}{25000},\\quad \\text{Part (c): } 0.1990171,\\quad \\text{Part (d)(i): Underestimate}$$",
                                "feedback": "In Part (b), you probably made a sign error when substituting $-x^3$ into the expansion. Substituting into $-\\frac{x}{250}$ yields $-\\frac{-x^3}{250} = +\\frac{x^3}{250}$. This also affects the integral calculation in Part (c)."
                        },
                        {
                                "ans": "$$\\text{Part (b): } \\dfrac{1}{5} + \\dfrac{x^3}{250} + \\dfrac{3x^6}{25000},\\quad \\text{Part (c): } 0.2010171,\\quad \\text{Part (d)(i): Overestimate}$$",
                                "feedback": "In Part (d)(i), you probably assumed that adding more positive terms makes the approximation an overestimate. However, since all terms in the series are positive, truncating after finitely many terms leaves out positive values, meaning the approximation is smaller than the true value (an underestimate)."
                        },
                        {
                                "ans": "$$\\text{Part (b): } \\dfrac{1}{5} + \\dfrac{x^3}{250} - \\dfrac{3x^6}{25000},\\quad \\text{Part (c): } 0.2009829,\\quad \\text{Part (d)(i): Underestimate}$$",
                                "feedback": "Check your signs in Part (b). Substituting $-x^3$ into $+3x^2/25000$ yields $+3(-x^3)^2/25000 = +3x^6/25000$. Both terms must be positive, which also affects your integration in Part (c)."
                        }
                ],
                "bradley_insight": {
                        "type": "caution",
                        "title": "The Head Teacher's Eye: Constant Factor Pitfalls",
                        "content": "When expanding expressions like $(25+x)^{-1/2}$, never forget to factor out the constant term first as $25^{-1/2} = \\frac{1}{5}$. Many students write this factor as $5$ or completely forget to multiply it through the rest of the terms. Always write out the factorization step explicitly to prevent this classic slip."
                }
        },
        {
                "id": "004100",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Sequences and series",
                "topic": "Binomial expansion",
                "subtopic": [
                        "Binomial Expansion",
                        "Numerical Integration"
                ],
                "img": false,
                "question": "(a) Find the first three terms, in ascending powers of $x$, of the binomial expansion of $\\dfrac{1}{\\sqrt{4+x}}$.<br><br>(b) Hence, find the first three terms of the binomial expansion of $\\dfrac{1}{\\sqrt{4-x^4}}$.<br><br>(c) Using your answer to part (b), find an approximation for $\\int_{0}^{1} \\dfrac{1}{\\sqrt{4-x^4}} \\text{d}x$, giving your answer to seven decimal places.<br><br>(d) (i) Emma, a student, decides to use this method to find a more accurate value for the integral by increasing the number of terms of the binomial expansion used. Explain clearly whether Emma's approximation will be an overestimate, an underestimate, or if it is impossible to tell.<br><br>(d) (ii) Emma goes on to use the expansion from part (b) to find an approximation for $\\int_{-2}^{0} \\dfrac{1}{\\sqrt{4-x^4}} \\text{d}x$. Explain why Emma's approximation is invalid.",
                "steps": [
                        "For Part (a), rewrite the function in index form and factor out $4$: \\begin{aligned}(4+x)^{-\\frac{1}{2}} &= 4^{-\\frac{1}{2}}\\left(1+\\dfrac{x}{4}\\right)^{-\\frac{1}{2}} \\cr&= \\dfrac{1}{2}\\left(1 - \\dfrac{1}{2}\\left(\\dfrac{x}{4}\\right) + \\dfrac{3}{8}\\left(\\dfrac{x}{4}\\right)^2 + \\dots\\right) \\cr&= \\dfrac{1}{2} - \\dfrac{x}{16} + \\dfrac{3x^2}{256}\\end{aligned}",
                        "For Part (b), substitute $x \\implies -x^4$ into your Part (a) expansion: \\begin{aligned}\\dfrac{1}{\\sqrt{4-x^4}} &= \\dfrac{1}{2} - \\dfrac{-x^4}{16} + \\dfrac{3(-x^4)^2}{256} \\cr&= \\dfrac{1}{2} + \\dfrac{x^4}{16} + \\dfrac{3x^8}{256}\\end{aligned}",
                        "For Part (c), integrate this polynomial approximation from $0$ to $1$: \\begin{aligned}\\int_{0}^{1} \\left(\\dfrac{1}{2} + \\dfrac{x^4}{16} + \\dfrac{3x^8}{256}\\right) \\text{d}x &= \\left[\\dfrac{x}{2} + \\dfrac{x^5}{80} + \\dfrac{x^9}{768}\\right]_{0}^{1} \\cr&= \\dfrac{1}{2} + \\dfrac{1}{80} + \\dfrac{1}{768} \\approx 0.5138021\\end{aligned}",
                        "For Part (d)(i), notice that since $u = \\dfrac{x^4}{4} \\ge 0$ on the interval $[0,1]$, every term in the binomial series for $(1-u)^{-\\frac{1}{2}}$ is positive. Truncating the series removes positive terms, so Emma's approximation is an underestimate.",
                        "For Part (d)(ii), the expansion converges only for $|u| < 1 \\implies \\left|\\dfrac{x^4}{4}\\right| < 1 \\implies |x| < 4^{\\frac{1}{4}} \\approx 1.414$. Since the lower limit is $x = -2$ and $|-2| = 2 \\ge 1.414$, the series does not converge on this interval.",
                        "Final Answer: $$\\text{Part (b): } \\dfrac{1}{2} + \\dfrac{x^4}{16} + \\dfrac{3x^8}{256},\\quad \\text{Part (c): } 0.5138021,\\quad \\text{Part (d)(i): Underestimate}$$"
                ],
                "pi_options": [
                        {
                                "ans": "$$\\text{Part (b): } \\dfrac{1}{2} - \\dfrac{x^4}{16} + \\dfrac{3x^8}{256},\\quad \\text{Part (c): } 0.4888021,\\quad \\text{Part (d)(i): Underestimate}$$",
                                "feedback": "In Part (b), you probably made a sign error when substituting $-x^4$ into the expansion. Substituting into $-\\frac{x}{16}$ yields $-\\frac{-x^4}{16} = +\\frac{x^4}{16}$. This also affects the integral calculation in Part (c)."
                        },
                        {
                                "ans": "$$\\text{Part (b): } \\dfrac{1}{2} + \\dfrac{x^4}{16} + \\dfrac{3x^8}{256},\\quad \\text{Part (c): } 0.5138021,\\quad \\text{Part (d)(i): Overestimate}$$",
                                "feedback": "In Part (d)(i), you probably assumed that adding more positive terms makes the approximation an overestimate. However, since all terms in the series are positive, truncating after finitely many terms leaves out positive values, meaning the approximation is smaller than the true value (an underestimate)."
                        },
                        {
                                "ans": "$$\\text{Part (b): } \\dfrac{1}{2} + \\dfrac{x^4}{16} - \\dfrac{3x^8}{256},\\quad \\text{Part (c): } 0.5111979,\\quad \\text{Part (d)(i): Underestimate}$$",
                                "feedback": "Check your signs in Part (b). Substituting $-x^4$ into $+3x^2/256$ yields $+3(-x^4)^2/256 = +3x^8/256$. Both terms must be positive, which also affects your integration in Part (c)."
                        }
                ],
                "bradley_insight": {
                        "type": "pro-tip",
                        "title": "The Head Teacher's Eye: Analyzing Truncation Errors",
                        "content": "To determine whether your approximation is an overestimate or an underestimate, look at the signs of the terms you truncated. Since $u = \\frac{x^4}{4}$ is strictly positive on the interval of integration, every term in our series is positive. Removing positive terms means your finite sum is always smaller than the true infinite sum, which makes it an underestimate."
                }
        }
];
