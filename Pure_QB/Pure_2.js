window.ALEVEL_QUESTIONS = [
        {
                "id": "004051",
                "group_id": "004051",
                "board": "Edexcel",
                "branch": "Pure",
                "level": "A",
                "major_area": "Sequences and Series",
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
                "group_id": "004051",
                "board": "Edexcel",
                "branch": "Pure",
                "level": "A",
                "major_area": "Sequences and Series",
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
                "group_id": "004051",
                "board": "Edexcel",
                "branch": "Pure",
                "level": "A",
                "major_area": "Sequences and Series",
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
                "group_id": "004051",
                "board": "Edexcel",
                "branch": "Pure",
                "level": "A",
                "major_area": "Sequences and Series",
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
                "group_id": "004051",
                "board": "Edexcel",
                "branch": "Pure",
                "level": "A",
                "major_area": "Sequences and Series",
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
                        "Using the sum formula, $S_N = \\dfrac{a(r_{\\text{gp}}^N - 1)}{r_{\\text{gp}} - 1}$:<br>\\begin{aligned}S_8 &= \\dfrac{8.32(1.04^8 - 1)}{1.04 - 1} \\cr&= \\dfrac{8.32(1.04^8 - 1)}{0.04} \\cr&= 208(1.04^8 - 1)\\cr & \\approx 208(1.368569 - 1)\\cr & \\approx 76.662\\text{ minutes}\\end{aligned}",
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
                "group_id": "004056",
                "board": "Edexcel",
                "branch": "Pure",
                "level": "A",
                "major_area": "Differentiation",
                "topic": "Differentiation",
                "subtopic": [
                        "Product Rule",
                        "Calculus Modelling"
                ],
                "img": "images/Pure_PNGs/004056.png",
                "question": "A curve has the equation:<br>$$f(x)  = 15\\text{e}^{-0.5x}\\sin x, \\quad x \\ge 0$$<br><strong>(a)</strong> Show that the $x$-coordinates of the turning points of the curve satisfy the equation $\\tan x = 2$.<br><br>The diagram shows a sketch of part of the curve with equation $y = f(x) $.<br><strong>(b)</strong> Sketch the graph of $H$ against $t$ where:<br>$$H(t) = \\left|15\\text{e}^{-0.5t}\\sin t\\right|, \\quad t \\ge 0$$<br>showing the long-term behaviour of this curve.<br><br>The function $H(t)$ is used to model the height, in metres, of a ball above the ground $t$ seconds after it has been kicked. Using this model, find:<br><strong>(c)</strong> the maximum height of the ball above the ground between the first and second bounce, giving your answer to 3 significant figures.<br><strong>(d)</strong> Explain why this model should not be used to predict the time of each bounce.",
                "steps": [
                        "<strong>Part (a):</strong> We find the derivative of $f(x) $ with respect to $x$ using the <strong>Product Rule</strong>, where $u = 15\\text{e}^{-0.5x}$ and $v = \\sin x$:<br>$$u' = -7.5\\text{e}^{-0.5x}$$<br>$$v' = \\cos x$$<br>\\begin{aligned}f'(x) &= u'v + uv' \\cr&= -7.5\\text{e}^{-0.5x}\\sin x\\cr & \\quad + 15\\text{e}^{-0.5x}\\cos x\\end{aligned}",
                        "Factorising out the exponential term:<br>$$f'(x) = 7.5\\text{e}^{-0.5x} \\left( 2\\cos x - \\sin x \\right)$$<br>At turning points, $f'(x) = 0$. Since $\\text{e}^{-0.5x} \\ne 0$ for all real $x$, we require:<br>\\begin{aligned}2\\cos x - \\sin x &= 0 \\cr2\\cos x &= \\sin x \\cr\\tan x &= 2\\end{aligned}",
                        "<strong>Part (b):</strong> The graph of \\begin{aligned}H(t) = \\left|15\\text{e}^{-0.5t}\\sin t\\right|\\end{aligned} is a damped sine wave with all its negative lobes reflected above the $t$-axis. This models the successive decreasing bounces of the ball tending to $0$ as $t \\to \\infty$.<br><br>Here is the completed sketch showing this long-term behaviour:<br><img src='images/Pure_PNGs/004056_ans.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'>",
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
                "group_id": "004056",
                "board": "Edexcel",
                "branch": "Pure",
                "level": "A",
                "major_area": "Differentiation",
                "topic": "Differentiation",
                "subtopic": [
                        "Product Rule",
                        "Calculus Modelling"
                ],
                "img": "images/Pure_PNGs/004057.png",
                "question": "A curve has the equation:<br>$$f(x)  = 8\\text{e}^{-0.2x}\\sin x, \\quad x \\ge 0$$<br><strong>(a)</strong> Show that the $x$-coordinates of the turning points of the curve satisfy the equation $\\tan x = 5$.<br><br>The diagram shows a sketch of part of the curve with equation $y = f(x) $.<br><strong>(b)</strong> Sketch the graph of $H$ against $t$ where:<br>$$H(t) = \\left|8\\text{e}^{-0.2t}\\sin t\\right|, \\quad t \\ge 0$$<br>showing the long-term behaviour of this curve.<br><br>The function $H(t)$ is used to model the height, in metres, of a ball above the ground $t$ seconds after it has been kicked. Using this model, find:<br><strong>(c)</strong> the maximum height of the ball above the ground between the first and second bounce, giving your answer to 3 significant figures.<br><strong>(d)</strong> Explain why this model should not be used to predict the time of each bounce.",
                "steps": [
                        "<strong>Part (a):</strong> We find the derivative of $f(x) $ with respect to $x$ using the <strong>Product Rule</strong>, where $u = 8\\text{e}^{-0.2x}$ and $v = \\sin x$:<br>$$u' = -1.6\\text{e}^{-0.2x}$$<br>$$v' = \\cos x$$<br>\\begin{aligned}f'(x) &= u'v + uv' \\cr&= -1.6\\text{e}^{-0.2x}\\sin x \\cr & \\quad + 8\\text{e}^{-0.2x}\\cos x\\end{aligned}",
                        "Factorising out the exponential term:<br>$$f'(x) = 1.6\\text{e}^{-0.2x} \\left( 5\\cos x - \\sin x \\right)$$<br>At turning points, $f'(x) = 0$. Since $\\text{e}^{-0.2x} \\ne 0$ for all real $x$, we require:<br>\\begin{aligned}5\\cos x - \\sin x &= 0 \\cr5\\cos x &= \\sin x \\cr\\tan x &= 5\\end{aligned}",
                        "<strong>Part (b):</strong> The graph of $H(t) = \\left|8\\text{e}^{-0.2t}\\sin t\\right|$ is a damped sine wave with all its negative lobes reflected above the $t$-axis. This models the successive decreasing bounces of the ball tending to $0$ as $t \\to \\infty$.<br><br>Here is the completed sketch showing this long-term behaviour:<br><img src='images/Pure_PNGs/004057_ans.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'>",
                        "<strong>Part (c):</strong> Bounces occur when \\begin(aligned}H(t) &= 0 \\cr \\implies \\sin t &= 0 \\cr\\implies &t = n\\pi\\end{aligned}.<br>The interval between the first bounce ($t = \\pi$) and the second bounce ($t = 2\\pi$) is $\\pi < t < 2\\pi$.<br>The turning point in this interval occurs where $\\tan t = 5$, which in the third quadrant is:\\begin{aligned}t &= \\pi + \\tan^{-1}(5)\\cr & \\approx 3.14159 + 1.37340\\cr & \\approx 4.51499\\text{ seconds}\\end{aligned}",
                        "Substituting this value into the model to find the maximum height:\\begin{aligned} & H(4.51499)\\cr & \\quad \\quad = \\left|8\\text{e}^{-0.2(4.51499)}\\sin(4.51499)\\right|\\cr & \\quad \\quad \\approx \\left|8(0.40535)(-0.980581)\\right|\\cr & \\quad \\quad \\approx 3.180\\text{ m}\\end{aligned}<br>Therefore, the maximum height is <strong>$3.18\\text{ m}$</strong> (to 3 significant figures).",
                        "<strong>Part (d):</strong> Under this model, the bounces are forced to occur at fixed intervals of exactly $\\pi$ seconds because of the $\\sin t$ term.<br>In reality, as the ball loses energy, the time between consecutive bounces decreases. Therefore, this model is physically unrealistic and must not be used to predict bounce times.",
                        "Final Answer: <strong>(a)</strong> $$\\tan x = 5 \\text{ is verified}$$ <strong>(b)</strong> $$\\text{Bouncing curves sketched }$$ $$\\text{above the }t\\text{-axis}$$ <strong>(c)</strong> $$3.18\\text{ m}$$ <strong>(d)</strong> $$\\text{Bounces are forced at}$$ $$\\text{constant intervals of } \\pi \\text{ seconds}$$"
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
                "group_id": "004056",
                "board": "Edexcel",
                "branch": "Pure",
                "level": "A",
                "major_area": "Differentiation",
                "topic": "Differentiation",
                "subtopic": [
                        "Product Rule",
                        "Calculus Modelling"
                ],
                "img": "images/Pure_PNGs/004058.png",
                "question": "A curve has the equation:<br>$$f(x)  = 12\\text{e}^{-\\frac{1}{3}x}\\sin x, \\quad x \\ge 0$$<br><strong>(a)</strong> Show that the $x$-coordinates of the turning points of the curve satisfy the equation $\\tan x = 3$.<br><br>The diagram shows a sketch of part of the curve with equation $y = f(x) $.<br><strong>(b)</strong> Sketch the graph of $H$ against $t$ where:<br>$$H(t) = \\left|12\\text{e}^{-\\frac{1}{3}t}\\sin t\\right|, \\quad t \\ge 0$$<br>showing the long-term behaviour of this curve.<br><br>The function $H(t)$ is used to model the height, in metres, of a ball above the ground $t$ seconds after it has been kicked. Using this model, find:<br><strong>(c)</strong> the maximum height of the ball above the ground between the first and second bounce, giving your answer to 3 significant figures.<br><strong>(d)</strong> Explain why this model should not be used to predict the time of each bounce.",
                "steps": [
                        "<strong>Part (a):</strong> We find the derivative of $f(x) $ with respect to $x$ using the <strong>Product Rule</strong>, where $u = 12\\text{e}^{-\\frac{1}{3}x}$ and $v = \\sin x$:<br>$$u' = -4\\text{e}^{-\\frac{1}{3}x}$$<br>$$v' = \\cos x$$<br>\\begin{aligned}f'(x) &= u'v + uv' \\cr&= -4\\text{e}^{-\\frac{1}{3}x}\\sin x\\cr & \\quad \\quad + 12\\text{e}^{-\\frac{1}{3}x}\\cos x\\end{aligned}",
                        "Factorising out the exponential term:<br>$$f'(x) = 4\\text{e}^{-\\frac{1}{3}x} \\left( 3\\cos x - \\sin x \\right)$$<br>At turning points, $f'(x) = 0$. Since $\\text{e}^{-\\frac{1}{3}x} \\ne 0$ for all real $x$, we require:<br>\\begin{aligned}3\\cos x - \\sin x &= 0 \\cr3\\cos x &= \\sin x \\cr\\tan x &= 3\\end{aligned}",
                        "<strong>Part (b):</strong> The graph of $H(t) = \\left|12\\text{e}^{-\\frac{1}{3}t}\\sin t\\right|$ is a damped sine wave with all its negative lobes reflected above the $t$-axis. This models the successive decreasing bounces of the ball tending to $0$ as $t \\to \\infty$.<br><br>Here is the completed sketch showing this long-term behaviour:<br><img src='images/Pure_PNGs/004058_ans.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'>",
                        "<strong>Part (c):</strong> Bounces occur when \\begin{aligned}H(t) &= 0\\cr\\implies \\sin t &= 0 \\cr\\implies t &= n\\pi\\end{aligned}.<br>The interval between the first bounce ($t = \\pi$) and the second bounce ($t = 2\\pi$) is $\\pi < t < 2\\pi$.<br>The turning point in this interval occurs where $\\tan t = 3$, which in the third quadrant is:\\begin{aligned}t &= \\pi + \\tan^{-1}(3) \\cr &\\approx 3.14159 + 1.24905\\cr & \\approx 4.39064\\text{ seconds}\\end{aligned}",
                        "Substituting this value into the model to find the maximum height:\\begin{aligned} & H(4.39064)\\cr & \\quad \\quad = \\left|12\\text{e}^{-\\frac{1}{3}(4.39064)}\\sin(4.39064)\\right|\\cr & \\quad \\quad \\approx \\left|12(0.231415)(-0.948683)\\right| \\cr & \\quad \\quad\\approx 2.634\\text{ m}\\end{aligned}Therefore, the maximum height is <strong>$2.63\\text{ m}$</strong> (to 3 significant figures).",
                        "<strong>Part (d):</strong> Under this model, the bounces are forced to occur at fixed intervals of exactly $\\pi$ seconds because of the $\\sin t$ term.<br>In reality, as the ball loses energy, the time between consecutive bounces decreases. Therefore, this model is physically unrealistic and must not be used to predict bounce times.",
                        "Final Answer: <strong>(a)</strong> $$\\tan x = 3\\\\\\ \\text{is verified}$$ <strong>(b)</strong>$$\\text{Bouncing curves sketched }$$ $$\\text{above the }t\\text{-axis}$$ <strong>(c)</strong> $$2.63\\text{ m}$$ <strong>(d)</strong> $$\\text{Bounces are forced at constant}$$ $$\\text{intervals of }\\pi \\text{ seconds}$$"
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
                "group_id": "004056",
                "board": "Edexcel",
                "branch": "Pure",
                "level": "A",
                "major_area": "Differentiation",
                "topic": "Differentiation",
                "subtopic": [
                        "Product Rule",
                        "Calculus Modelling"
                ],
                "img": "images/Pure_PNGs/004059.png",
                "question": "A curve has the equation:<br>$$f(x)  = 6\\text{e}^{-0.125x}\\sin x, \\quad x \\ge 0$$<br><strong>(a)</strong> Show that the $x$-coordinates of the turning points of the curve satisfy the equation $\\tan x = 8$.<br><br>The diagram shows a sketch of part of the curve with equation $y = f(x) $.<br><strong>(b)</strong> Sketch the graph of $H$ against $t$ where:<br>$$H(t) = \\left|6\\text{e}^{-0.125t}\\sin t\\right|, \\quad t \\ge 0$$<br>showing the long-term behaviour of this curve.<br><br>The function $H(t)$ is used to model the height, in metres, of a ball above the ground $t$ seconds after it has been kicked. Using this model, find:<br><strong>(c)</strong> the maximum height of the ball above the ground between the first and second bounce, giving your answer to 3 significant figures.<br><strong>(d)</strong> Explain why this model should not be used to predict the time of each bounce.",
                "steps": [
                        "<strong>Part (a):</strong> We find the derivative of $f(x) $ with respect to $x$ using the <strong>Product Rule</strong>, where $u = 6\\text{e}^{-0.125x}$ and $v = \\sin x$:<br>$$u' = -0.75\\text{e}^{-0.125x}$$<br>$$v' = \\cos x$$<br>\\begin{aligned}f'(x) &= u'v + uv' \\cr&= -0.75\\text{e}^{-0.125x}\\sin x\\cr & \\quad \\quad + 6\\text{e}^{-0.125x}\\cos x\\end{aligned}",
                        "Factorising out the exponential term:<br>$$f'(x) = 0.75\\text{e}^{-0.125x} \\left( 8\\cos x - \\sin x \\right)$$<br>At turning points, $f'(x) = 0$. Since $\\text{e}^{-0.125x} \\ne 0$ for all real $x$, we require:<br>\\begin{aligned}8\\cos x - \\sin x &= 0 \\cr8\\cos x &= \\sin x \\cr\\tan x &= 8\\end{aligned}",
                        "<strong>Part (b):</strong> The graph of $H(t) = \\left|6\\text{e}^{-0.125t}\\sin t\\right|$ is a damped sine wave with all its negative lobes reflected above the $t$-axis. This models the successive decreasing bounces of the ball tending to $0$ as $t \\to \\infty$.<br><br>Here is the completed sketch showing this long-term behaviour:<br><img src='images/Pure_PNGs/004059_ans.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'>",
                        "<strong>Part (c):</strong> Bounces occur when \\begin{aligned}H(t) &= 0 \\cr\\implies \\sin t & = 0\\cr \\implies t &= n\\pi\\end{aligned}The interval between the first bounce ($t = \\pi$) and the second bounce ($t = 2\\pi$) is $\\pi < t < 2\\pi$.<br>The turning point in this interval occurs where $\\tan t = 8$, which in the third quadrant is:\\begin{aligned}t &= \\pi + \\tan^{-1}(8)\\cr &\\approx 3.14159 + 1.44644\\cr &\\approx 4.58803\\text{ seconds}\\end{aligned}",
                        "Substituting this value into the model to find the maximum height:\\begin{aligned} & H(4.58803)\\cr & \\quad \\quad = \\left|6\\text{e}^{-0.125(4.58803)}\\sin(4.58803)\\right|\\cr & \\quad \\quad \\approx \\left|6(0.563546)(-0.992278)\\right|\\cr & \\quad \\quad \\approx 3.3551\\text{ m}\\end{aligned}<br>Therefore, the maximum height is <strong>$3.36\\text{ m}$</strong> (to 3 significant figures).",
                        "<strong>Part (d):</strong> Under this model, the bounces are forced to occur at fixed intervals of exactly $\\pi$ seconds because of the $\\sin t$ term.<br>In reality, as the ball loses energy, the time between consecutive bounces decreases. Therefore, this model is physically unrealistic and must not be used to predict bounce times.",
                        "Final Answer: <strong>(a)</strong> $$\\tan x = 8\\\\\\ \\text{is verified}$$ <strong>(b)</strong> $$\\text{Bouncing curves sketched }$$ $$\\text{above the }t\\text{-axis}$$ <strong>(c)</strong> $$3.36\\text{ m}$$ <strong>(d)</strong> $$\\text{Bounces are forced at}$$ $$\\text{constant intervals of } \\pi \\text{ seconds}$$"
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
        "branch": "Pure",
                "group_id": "004056",
                "board": "Edexcel",
                "major_area": "Differentiation",
                "level": "A",
                "topic": "Differentiation",
                "subtopic": [
                        "Product Rule",
                        "Calculus Modelling"
                ],
                "img": "images/Pure_PNGs/004060.png",
                "question": "A curve has the equation:<br>$$f(x)  = 20\\text{e}^{-\\frac{1}{6}x}\\sin x, \\quad x \\ge 0$$<br><strong>(a)</strong> Show that the $x$-coordinates of the turning points of the curve satisfy the equation $\\tan x = 6$.<br><br>The diagram shows a sketch of part of the curve with equation $y = f(x) $.<br><strong>(b)</strong> Sketch the graph of $H$ against $t$ where:<br>$$H(t) = \\left|20\\text{e}^{-\\frac{1}{6}t}\\sin t\\right|, \\quad t \\ge 0$$<br>showing the long-term behaviour of this curve.<br><br>The function $H(t)$ is used to model the height, in metres, of a ball above the ground $t$ seconds after it has been kicked. Using this model, find:<br><strong>(c)</strong> the maximum height of the ball above the ground between the first and second bounce, giving your answer to 3 significant figures.<br><strong>(d)</strong> Explain why this model should not be used to predict the time of each bounce.",
                "steps": [
                        "<strong>Part (a):</strong> We find the derivative of $f(x) $ with respect to $x$ using the <strong>Product Rule</strong>, where $u = 20\\text{e}^{-\\frac{1}{6}x}$ and $v = \\sin x$:<br>$$u' = -\\frac{10}{3}\\text{e}^{-\\frac{1}{6}x}$$<br>$$v' = \\cos x$$<br>\\begin{aligned}f'(x) &= u'v + uv' \\cr&= -\\frac{10}{3}\\text{e}^{-\\frac{1}{6}x}\\sin x \\cr& \\quad \\quad + 20\\text{e}^{-\\frac{1}{6}x}\\cos x\\end{aligned}",
                        "Factorising out the exponential term:<br>$$f'(x) = \\frac{10}{3}\\text{e}^{-\\frac{1}{6}x} \\left( 6\\cos x - \\sin x \\right)$$<br>At turning points, $f'(x) = 0$. Since $\\text{e}^{-\\frac{1}{6}x} \\ne 0$ for all real $x$, we require:<br>\\begin{aligned}6\\cos x - \\sin x &= 0 \\cr6\\cos x &= \\sin x \\cr\\tan x &= 6\\end{aligned}",
                        "<strong>Part (b):</strong> The graph of $H(t) = \\left|20\\text{e}^{-\\frac{1}{6}t}\\sin t\\right|$ is a damped sine wave with all its negative lobes reflected above the $t$-axis. This models the successive decreasing bounces of the ball tending to $0$ as $t \\to \\infty$.<br><br>Here is the completed sketch showing this long-term behaviour:<br><img src='images/Pure_PNGs/004060_ans.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'>",
                        "<strong>Part (c):</strong> Bounces occur when \\begin{aligned}H(t)& = 0\\cr \\implies \\sin t& = 0 \\cr\\implies t &= n\\pi\\end{aligned}The interval between the first bounce ($t = \\pi$) and the second bounce ($t = 2\\pi$) is $\\pi < t < 2\\pi$.<br>The turning point in this interval occurs where $\\tan t = 6$, which in the third quadrant is:\\begin{aligned}t &= \\pi + \\tan^{-1}(6)\\cr & \\approx 3.14159 + 1.40565\\cr & \\approx 4.54724\\text{ seconds}\\end{aligned}",
                        "Substituting this value into the model to find the maximum height:\\begin{aligned}H(4.54724)\\cr&\\quad \\quad = \\left|20\\text{e}^{-\\frac{1}{6}(4.54724)}\\sin(4.54724)\\right|)\\cr&\\quad \\quad \\approx \\left|20(0.468656)(-0.986394)\\right|)\\cr&\\quad \\quad \\approx 9.2464\\text{ m}\\end{aligned}<br>Therefore, the maximum height is <strong>$9.25\\text{ m}$</strong> (to 3 significant figures).",
                        "<strong>Part (d):</strong> Under this model, the bounces are forced to occur at fixed intervals of exactly $\\pi$ seconds because of the $\\sin t$ term.<br>In reality, as the ball loses energy, the time between consecutive bounces decreases. Therefore, this model is physically unrealistic and must not be used to predict bounce times.",
                        "Final Answer: <strong>(a)</strong> $$\\tan x = 6 \\text{ is verified}$$ <strong>(b)</strong> $$\\text{Bouncing curves sketched }$$ $$\\text{above the }t\\text{-axis}$$ <strong>(c)</strong> $$9.25\\text{ m}$$ <strong>(d)</strong> $$\\text{Bounces are forced at}$$ $$\\text{constant intervals of } \\pi \\text{ seconds}$$"
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
                "group_id": "004061",
                "board": "Edexcel",
                "branch": "Pure",
                "level": "A",
                "major_area": "Integration",
                "topic": "Integration",
                "subtopic": [
                        "Area Under a Curve",
                        "Partial Fractions"
                ],
                "img": "images/Pure_PNGs/004061.png",
                "question": "The curve $C$ with equation:$$y = \\dfrac{p - 2x}{(2x - q)(x + 2)},$$ $$\\text{Where: }\\left\\{ \\begin{aligned} x &\\in \\mathbb{R}, \\cr x &\\ne -2, \\cr x &\\ne 3 \\end{aligned} \\right.$$ and $p$ and $q$ are constants, passes through the point $(4, \\frac{1}{2})$ and has two vertical asymptotes with equations $x = 3$ and $x = -2$.<br><br><strong>(a)(i)</strong> Explain why you can deduce that $q = 6$.<br><strong>(a)(ii)</strong> Show that $p = 14$.<br><br>The diagram shows a sketch of part of the curve $C$. The region $R$, shown shaded in the diagram, is bounded by the curve $C$, the $x$-axis and the line with equation $x = 4$.<br><strong>(b)</strong> Show that the exact value of the area of $R$ is $a\\ln 2 + b\\ln 3 + c\\ln 7$, where $a$, $b$, and $c$ are rational constants to be found.",
                "steps": [
                        "<strong>Part (a)(i):</strong> Vertical asymptotes occur where the denominator of the rational function is equal to zero, which means:<br>\\begin{aligned}(2x - q)(x + 2) &= 0 \\cr x = \\frac{q}{2} \\quad &\\text{and} \\quad x = -2\\end{aligned}",
                        "Since we are given that the vertical asymptotes have equations $x = 3$ and $x = -2$, we can equate the root terms:\\begin{aligned}\\frac{q}{2} &= 3 \\cr q &= 6\\end{aligned}",
                        "<strong>Part (a)(ii):</strong> Substituting our calculated value of $q = 6$ into the curve's equation gives:<br>$$y = \\dfrac{p - 2x}{(2x - 6)(x + 2)}$$",
                        "Since the curve passes through the point $(4, \\frac{1}{2})$, we substitute $x = 4$ and $y = \\frac{1}{2}$ into the equation to solve for $p$:\\begin{aligned}\\frac{1}{2} &= \\dfrac{p - 2(4)}{(2(4) - 6)(4 + 2)} \\cr\\frac{1}{2} &= \\dfrac{p - 8}{(2)(6)}\\cr \\frac{1}{2} &= \\dfrac{p - 8}{12} \\cr6 &= p - 8 \\cr p &= 14\\end{aligned}",
                        "<strong>Part (b):</strong> To find the area of the region $R$, we must find where the curve crosses the $x$-axis (the $x$-intercept). Setting $y = 0$ in the numerator gives:<br>\\begin{aligned}14 - 2x &= 0 \\cr2x &= 14 \\cr x &= 7\\end{aligned}",
                        "Therefore, the region $R$ is bounded on the $x$-axis between $x = 4$ and $x = 7$.<br><br>Here is the completed diagram showing these key features and the vertical asymptote at $x = 3$:<br><img src='images/Pure_PNGs/004061_ans.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'><br>Since the curve lies above the $x$-axis in this interval ($y > 0$), the area of $R$ is given by the definite integral:<br>$$\\text{Area} = \\int_{4}^{7} \\dfrac{14 - 2x}{(2x - 6)(x + 2)} \\text{ d}x$$",
                        "We simplify the integrand by factorising and cancelling a common factor of $2$:<br>\\begin{aligned} &\\dfrac{14 - 2x}{(2x - 6)(x + 2)} \\cr & \\quad = \\dfrac{-2(x - 7)}{2(x - 3)(x + 2)} \\cr & \\quad = -\\dfrac{x - 7}{(x - 3)(x + 2)}\\end{aligned}",
                        "Now, we express this integrand in <strong>partial fractions</strong>:\\begin{aligned} & -\\dfrac{x - 7}{(x - 3)(x + 2)}\\cr & \\quad \\quad= \\dfrac{A}{x - 3} + \\dfrac{B}{x + 2}\\cr 14 - 2x &= A(x + 2) + B(x - 3)\\end{aligned}",
                        "Using the substitution method to solve for the coefficients:<br>1.  \\begin{aligned}x &= 3\\cr \\implies 14 - 2(3) &= A(3 + 2)\\cr \\implies 8 &= 5A\\cr \\implies A &= \\frac{4}{5}\\end{aligned} (noting the scale factor of $2$ cancelled earlier).<br>2. \\begin{aligned} x &= -2 \\cr \\implies 14 - 2(-2) &= B(-2 - 3)\\cr \\implies 18 &= -5B \\cr\\implies B &= -\\frac{9}{5}\\end{aligned}",
                        "Substituting these coefficients back into our integral gives:<br>\\begin{aligned}&\\text{Area} = \\int_{4}^{7} \\left( \\dfrac{4/5}{x - 3} - \\dfrac{9/5}{x + 2} \\right) \\text{ d}x \\cr & \\quad = \\left[ \\frac{4}{5}\\ln|x - 3| - \\frac{9}{5}\\ln|x + 2| \\right]_{4}^{7}\\end{aligned}",
                        "Evaluating this expression at our upper limit ($7$) and lower limit ($4$):<br>\\begin{aligned}\\text{Value at 7} &= \\frac{4}{5}\\ln(4) - \\frac{9}{5}\\ln(9) \\cr&= \\frac{8}{5}\\ln(2) - \\frac{18}{5}\\ln(3)\\end{aligned}<br>\\begin{aligned}\\text{Value at 4} &= \\frac{4}{5}\\ln(1) - \\frac{9}{5}\\ln(6) \\cr&= 0 - \\frac{9}{5}(\\ln 2 + \\ln 3) \\cr&= -\\frac{9}{5}\\ln(2) - \\frac{9}{5}\\ln(3)\\end{aligned}",
                        "Subtracting the lower limit value from the upper limit value yields:\\begin{aligned}\\text{Area} &= \\left( \\frac{8}{5}\\ln 2 - \\frac{18}{5}\\ln 3 \\right)\\cr & \\quad \\quad - \\left( -\\frac{9}{5}\\ln 2 - \\frac{9}{5}\\ln 3 \\right)\\cr &= \\left( \\frac{8 + 9}{5} \\right)\\ln 2\\cr & \\quad \\quad + \\left( \\frac{-18 + 9}{5} \\right)\\ln 3 \\cr&= \\frac{17}{5}\\ln 2 - \\frac{9}{5}\\ln 3\\end{aligned}<br>Therefore, the constants are $a = \\frac{17}{5}$, $b = -\\frac{9}{5}$, and $c = 0$.",
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
                "group_id": "004061",
                "board": "Edexcel",
                "branch": "Pure",
                "level": "A",
                "major_area": "Integration",
                "topic": "Integration",
                "subtopic": [
                        "Area Under a Curve",
                        "Partial Fractions"
                ],
                "img": "images/Pure_PNGs/004062.png",
                "question": "The curve $C$ with equation:<br>$$y = \\dfrac{p - 3x}{(3x - q)(x + 2)},$$ $$\\text{Where: }\\left\\{ \\begin{aligned} x &\\in \\mathbb{R},  \\cr x &\\ne -2, \\cr x &\\ne 1\\end{aligned} \\right.$$ and $p$ and $q$ are constants,passes through the point $(2, \\frac{1}{2})$ and has two vertical asymptotes with equations $x = 1$ and $x = -2$.<br><br><strong>(a)(i)</strong> Explain why you can deduce that $q = 3$.<br><strong>(a)(ii)</strong> Show that $p = 12$.<br><br>The diagram shows a sketch of part of the curve $C$. The region $R$, shown shaded in the diagram, is bounded by the curve $C$, the $x$-axis and the line with equation $x = 2$.<br><strong>(b)</strong> Show that the exact value of the area of $R$ is $a\\ln 2 + b\\ln 3$, where $a$ and $b$ are rational constants to be found.",
                "steps": [
                        "<strong>Part (a)(i):</strong> Vertical asymptotes occur where the denominator of the rational function is equal to zero, which means:<br>\\begin{aligned}(3x - q)(x + 2) &= 0 \\cr x = \\frac{q}{3} \\quad &\\text{and} \\quad x = -2\\end{aligned}",
                        "Since we are given that the vertical asymptotes have equations $x = 1$ and $x = -2$, we can equate the root terms:<br>\\begin{aligned}\\frac{q}{3} &= 1 \\cr q &= 3\\end{aligned}",
                        "<strong>Part (a)(ii):</strong> Substituting our calculated value of $q = 3$ into the curve's equation gives:<br>$$y = \\dfrac{p - 3x}{(3x - 3)(x + 2)}$$",
                        "Since the curve passes through the point $(2, \\frac{1}{2})$, we substitute $x = 2$ and $y = \\frac{1}{2}$ into the equation to solve for $p$:\\begin{aligned}\\frac{1}{2} &= \\dfrac{p - 3(2)}{(3(2) - 3)(2 + 2)} \\cr\\frac{1}{2} &= \\dfrac{p - 6}{(3)(4)}\\cr &= \\dfrac{p - 6}{12} \\cr 6 &= p - 6 \\cr p &= 12\\end{aligned}",
                        "<strong>Part (b):</strong> To find the area of the region $R$, we must find where the curve crosses the $x$-axis (the $x$-intercept). Setting $y = 0$ in the numerator gives:<br>\\begin{aligned}12 - 3x &= 0 \\cr3x &= 12 \\cr x &= 4\\end{aligned}",
                        "Therefore, the region $R$ is bounded on the $x$-axis between $x = 2$ and $x = 4$.<br><br>Here is the completed diagram showing these key features and the vertical asymptote at $x = 1$:<br><img src='images/Pure_PNGs/004062_ans.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'><br>Since the curve lies above the $x$-axis in this interval ($y > 0$), the area of $R$ is given by the definite integral:<br>$$\\text{Area} = \\int_{2}^{4} \\dfrac{12 - 3x}{(3x - 3)(x + 2)} \\text{ d}x$$",
                        "We simplify the integrand by factorising and cancelling a common factor of $3$:\\begin{aligned} & \\dfrac{12 - 3x}{(3x - 3)(x + 2)}\\cr & \\quad \\quad = \\dfrac{-3(x - 4)}{3(x - 1)(x + 2)} \\cr & \\quad \\quad = -\\dfrac{x - 4}{(x - 1)(x + 2)}\\end{aligned}",
                        "Now, we express this integrand in <strong>partial fractions</strong>:\\begin{aligned} & -\\dfrac{x - 4}{(x - 1)(x + 2)} \\cr & \\quad \\quad = \\dfrac{A}{x - 1} + \\dfrac{B}{x + 2}\\cr 4 - x &= A(x + 2) + B(x - 1)\\end{aligned}",
                        "Using the substitution method to solve for the coefficients:<br>1. \\begin{aligned} x &= 1\\cr \\implies 4 - (1) &= A(1 + 2)\\cr \\implies 3 &= 3A \\cr  \\implies A &= 1\\end{aligned}.<br>2. \\begin{aligned} x &= -2\\cr \\implies 4 - (-2) &= B(-2 - 1)\\cr \\implies 6 &= -3B\\cr \\implies B &= -2\\end{aligned}",
                        "Substituting these coefficients back into our integral gives:\\begin{aligned}\\text{Area} &= \\int_{2}^{4} \\left( \\dfrac{1}{x - 1} - \\dfrac{2}{x + 2} \\right) \\text{ d}x \\cr&= \\left[ \\ln|x - 1| - 2\\ln|x + 2| \\right]_{2}^{4}\\end{aligned}",
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
                "group_id": "004061",
                "board": "Edexcel",
                "branch": "Pure",
                "level": "A",
                "major_area": "Integration",
                "topic": "Integration",
                "subtopic": [
                        "Area Under a Curve",
                        "Partial Fractions"
                ],
                "img": "images/Pure_PNGs/004063.png",
                "question": "The curve $C$ with equation:$$y = \\dfrac{p - 4x}{(2x - q)(x + 1)},$$ $$\\text{Where: }\\left\\{ \\begin{aligned} x &\\in \\mathbb{R}, \\cr x &\\ne -1, \\cr x &\\ne 2 \\end{aligned} \\right.$$ and $p$ and $q$ are constants, passes through the point $(3, \\frac{1}{2})$ and has two vertical asymptotes with equations $x = 2$ and $x = -1$.<br><br><strong>(a)(i)</strong> Explain why you can deduce that $q = 4$.<br><strong>(a)(ii)</strong> Show that $p = 16$.<br><br>The diagram shows a sketch of part of the curve $C$. The region $R$, shown shaded in the diagram, is bounded by the curve $C$, the $x$-axis and the line with equation $x = 3$.<br><strong>(b)</strong> Show that the exact value of the area of $R$ is $a\\ln 2 + b\\ln 5$, where $a$ and $b$ are rational constants to be found.",
                "steps": [
                        "<strong>Part (a)(i):</strong> Vertical asymptotes occur where the denominator of the rational function is equal to zero, which means:\\begin{aligned}(2x - q)(x + 1) &= 0 \\cr x = \\frac{q}{2} \\quad &\\text{and} \\quad x = -1\\end{aligned}",
                        "Since we are given that the vertical asymptotes have equations $x = 2$ and $x = -1$, we can equate the root terms:<br>\\begin{aligned}\\frac{q}{2} &= 2 \\cr q &= 4\\end{aligned}",
                        "<strong>Part (a)(ii):</strong> Substituting our calculated value of $q = 4$ into the curve's equation gives:<br>$$y = \\dfrac{p - 4x}{(2x - 4)(x + 1)}$$",
                        "Since the curve passes through the point $(3, \\frac{1}{2})$, we substitute $x = 3$ and $y = \\frac{1}{2}$ into the equation to solve for $p$:\\begin{aligned}\\frac{1}{2} &= \\dfrac{p - 4(3)}{(2(3) - 4)(3 + 1)} \\cr\\frac{1}{2} &= \\dfrac{p - 12}{(2)(4)}\\cr \\frac{1}{2} &= \\dfrac{p - 12}{8} \\cr 4 &= p - 12 \\cr p &= 16\\end{aligned}",
                        "<strong>Part (b):</strong> To find the area of the region $R$, we must find where the curve crosses the $x$-axis (the $x$-intercept). Setting $y = 0$ in the numerator gives:<br>\\begin{aligned}16 - 4x &= 0 \\cr4x &= 16 \\cr x &= 4\\end{aligned}",
                        "Therefore, the region $R$ is bounded on the $x$-axis between $x = 3$ and $x = 4$.<br><br>Here is the completed diagram showing these key features and the vertical asymptote at $x = 2$:<br><img src='images/Pure_PNGs/004063_ans.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'><br>Since the curve lies above the $x$-axis in this interval ($y > 0$), the area of $R$ is given by the definite integral:<br>$$\\text{Area} = \\int_{3}^{4} \\dfrac{16 - 4x}{(2x - 4)(x + 1)} \\text{ d}x$$",
                        "We simplify the integrand by factorising and cancelling a common factor of $2$:\\begin{aligned} & \\dfrac{16 - 4x}{(2x - 4)(x + 1)} \\cr & \\quad \\quad = \\dfrac{-4(x - 4)}{2(x - 2)(x + 1)} \\cr & \\quad \\quad= -2\\dfrac{x - 4}{(x - 2)(x + 1)}\\end{aligned}",
                        "Now, we express this integrand in <strong>partial fractions</strong>:\\begin{aligned} & -2\\dfrac{x - 4}{(x - 2)(x + 1)}\\cr & \\quad \\quad = \\dfrac{A}{x - 2} + \\dfrac{B}{x + 1}\\cr 8 - 2x &= A(x + 1) + B(x - 2)\\end{aligned}",
                        "Using the substitution method to solve for the coefficients:<br>1. \\begin{aligned}x &= 2 \\cr \\implies 8 - 2(2) &= A(2 + 1)\\cr \\implies 4 &= 3A\\cr \\implies A &= \\frac{4}{3}\\end{aligned}<br>2. \\begin{aligned}x &= -1 \\cr\\implies 8 - 2(-1) &= B(-1 - 2) \\cr\\implies 10 &= -3B\\cr \\implies B &= -\\frac{10}{3}\\end{aligned}",
                        "Substituting these coefficients back into our integral gives:\\begin{aligned}&\\text{Area} = \\int_{3}^{4} \\left( \\dfrac{4/3}{x - 2} - \\dfrac{10/3}{x + 1} \\right) \\text{ d}x \\cr & \\quad  = \\left[ \\frac{4}{3}\\ln|x - 2| - \\frac{10}{3}\\ln|x + 1| \\right]_{3}^{4}\\end{aligned}",
                        "Evaluating this expression at our upper limit ($4$) and lower limit ($3$):<br>$$\\text{Value at 4} = \\frac{4}{3}\\ln(2) - \\frac{10}{3}\\ln(5)$$<br>\\begin{aligned}\\text{Value at 3} &= \\frac{4}{3}\\ln(1) - \\frac{10}{3}\\ln(4) \\cr&= 0 - \\frac{10}{3}(2\\ln 2) \\cr&= -\\frac{20}{3}\\ln(2)\\end{aligned}",
                        "Subtracting the lower limit value from the upper limit value yields:\\begin{aligned}\\text{Area} &= \\left( \\frac{4}{3}\\ln 2 - \\frac{10}{3}\\ln 5 \\right) \\cr & \\quad \\quad - \\left( -\\frac{20}{3}\\ln 2 \\right) \\cr & = \\left( \\frac{4 + 20}{3} \\right)\\ln 2 - \\frac{10}{3}\\ln 5 \\cr&= 8\\ln 2 - \\frac{10}{3}\\ln 5\\end{aligned}<br>Therefore, the constants are $a = 8$ and $b = -\\frac{10}{3}$.",
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
                "group_id": "004061",
                "board": "Edexcel",
                "branch": "Pure",
                "level": "A",
                "major_area": "Integration",
                "topic": "Integration",
                "subtopic": [
                        "Area Under a Curve",
                        "Partial Fractions"
                ],
                "img": "images/Pure_PNGs/004064.png",
                "question": "The curve $C$ with equation:$$y = \\dfrac{p - 2x}{(3x - q)(x + 1)},$$ $$\\text{Where: }\\left\\{ \\begin{aligned} x &\\in \\mathbb{R},\\cr x &\\ne 2 \\end{aligned} \\right.$$ and $p$ and $q$ are constants, passes through the point $(3, \\frac{1}{2})$ and has two vertical asymptotes with equations $x = 2$ and $x = -1$.<br><br><strong>(a)(i)</strong> Explain why you can deduce that $q = 6$.<br><strong>(a)(ii)</strong> Show that $p = 12$.<br><br>The diagram shows a sketch of part of the curve $C$. The region $R$, shown shaded in the diagram, is bounded by the curve $C$, the $x$-axis and the line with equation $x = 3$.<br><strong>(b)</strong> Show that the exact value of the area of $R$ is $a\\ln 2 + b\\ln 7$, where $a$ and $b$ are rational constants to be found.",
                "steps": [
                        "<strong>Part (a)(i):</strong> Vertical asymptotes occur where the denominator of the rational function is equal to zero, which means:<br>\\begin{aligned}(3x - q)(x + 1) &= 0 \\cr x = \\frac{q}{3} \\quad &\\text{and} \\quad x = -1\\end{aligned}",
                        "Since we are given that the vertical asymptotes have equations $x = 2$ and $x = -1$, we can equate the root terms:<br>\\begin{aligned}\\frac{q}{3} &= 2 \\cr q &= 6\\end{aligned}",
                        "<strong>Part (a)(ii):</strong> Substituting our calculated value of $q = 6$ into the curve's equation gives:<br>$$y = \\dfrac{p - 2x}{(3x - 6)(x + 1)}$$",
                        "Since the curve passes through the point $(3, \\frac{1}{2})$, we substitute $x = 3$ and $y = \\frac{1}{2}$ into the equation to solve for $p$:\\begin{aligned}\\frac{1}{2} &= \\dfrac{p - 2(3)}{(3(3) - 6)(3 + 1)} \\cr\\frac{1}{2} &= \\dfrac{p - 6}{(3)(4)}\\cr\\frac{1}{2} &= \\dfrac{p - 6}{12} \\cr6 &= p - 6 \\cr p &= 12\\end{aligned}",
                        "<strong>Part (b):</strong> To find the area of the region $R$, we must find where the curve crosses the $x$-axis (the $x$-intercept). Setting $y = 0$ in the numerator gives:<br>\\begin{aligned}12 - 2x &= 0 \\cr2x &= 12 \\cr x &= 6\\end{aligned}",
                        "Therefore, the region $R$ is bounded on the $x$-axis between $x = 3$ and $x = 6$.<br><br>Here is the completed diagram showing these key features and the vertical asymptote at $x = 2$:<br><img src='images/Pure_PNGs/004064_ans.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'><br>Since the curve lies above the $x$-axis in this interval ($y > 0$), the area of $R$ is given by the definite integral:<br>$$\\text{Area} = \\int_{3}^{6} \\dfrac{12 - 2x}{(3x - 6)(x + 1)} \\text{ d}x$$",
                        "We simplify the integrand by factorising:\\begin{aligned} & \\dfrac{12 - 2x}{(3x - 6)(x + 1)}\\cr & \\quad \\quad = \\dfrac{2(6 - x)}{3(x - 2)(x + 1)} \\cr & \\quad \\quad= \\dfrac{2}{3} \\dfrac{6 - x}{(x - 2)(x + 1)}\\end{aligned}",
                        "Now, we express this integrand in <strong>partial fractions</strong>:\\begin{aligned}\\dfrac{2}{3} &\\dfrac{6 - x}{(x - 2)(x + 1)} \\cr & \\quad \\quad= \\dfrac{A}{x - 2} + \\dfrac{B}{x + 1}\\cr 12 - 2x &= 3A(x + 1) + 3B(x - 2) \\cr&= 3(A + B)x + 3(A - 2B)\\end{aligned}",
                        "Using the substitution method to solve for the coefficients:<br>1. \\begin{aligned} x &= 2 \\cr \\implies 12 - 2(2) &= 3A(2 + 1)\\cr \\implies 8 &= 9A\\cr \\implies A &= \\frac{8}{9}\\end{aligned}<br>2. \\begin{aligned} x &= -1 \\cr \\implies 12 - 2(-1) &= 3B(-1 - 2) \\cr \\implies 14 &= -9B \\cr \\implies B &= -\\frac{14}{9}\\end{aligned}",
                        "Substituting these coefficients back into our integral gives:<br>\\begin{aligned} & \\text{Area} = \\int_{3}^{6} \\left( \\dfrac{8/9}{x - 2} - \\dfrac{14/9}{x + 1} \\right) \\text{ d}x \\cr & \\quad = \\left[ \\frac{8}{9}\\ln|x - 2| - \\frac{14}{9}\\ln|x + 1| \\right]_{3}^{6}\\end{aligned}",
                        "Evaluating this expression at our upper limit ($6$) and lower limit ($3$):<br>\\begin{aligned}\\text{Value at 6} &= \\frac{8}{9}\\ln(4) - \\frac{14}{9}\\ln(7) \\cr&= \\frac{16}{9}\\ln(2) - \\frac{14}{9}\\ln(7)\\end{aligned}<br>\\begin{aligned}\\text{Value at 3} &= \\frac{8}{9}\\ln(1) - \\frac{14}{9}\\ln(4) \\cr&= 0 - \\frac{14}{9}(2\\ln 2) \\cr&= -\\frac{28}{9}\\ln(2)\\end{aligned}",
                        "Subtracting the lower limit value from the upper limit value yields:\\begin{aligned} & \\text{Area} = \\left( \\frac{16}{9}\\ln 2 - \\frac{14}{9}\\ln 7 \\right)\\cr & \\quad \\quad - \\left( -\\frac{28}{9}\\ln 2 \\right)\\cr & \\quad \\quad = \\left( \\frac{16 + 28}{9} \\right)\\ln 2 - \\frac{14}{9}\\ln 7 \\cr & \\quad \\quad= \\frac{44}{9}\\ln 2 - \\frac{14}{9}\\ln 7\\end{aligned}<br>Therefore, the constants are $a = \\frac{44}{9}$ and $b = -\\frac{14}{9}$.",
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
                "group_id": "004061",
                "board": "Edexcel",
                "branch": "Pure",
                "level": "A",
                "major_area": "Integration",
                "topic": "Integration",
                "subtopic": [
                        "Area Under a Curve",
                        "Partial Fractions"
                ],
                "img": "images/Pure_PNGs/004065.png",
                "question": "The curve $C$ with equation:$$y = \\dfrac{p - 3x}{(2x - q)(x + 2)},$$ $$\\text{Where: }\\left\\{ \\begin{aligned} x &\\in \\mathbb{R}, \\cr x &\\ne -2, \\cr x &\\ne 3 \\end{aligned} \\right.$$ and $p$ and $q$ are constants, passes through the point $(4, \\frac{1}{2})$ and has two vertical asymptotes with equations $x = 3$ and $x = -2$.<br><br><strong>(a)(i)</strong> Explain why you can deduce that $q = 6$.<br><strong>(a)(ii)</strong> Show that $p = 18$.<br><br>The diagram shows a sketch of part of the curve $C$. The region $R$, shown shaded in the diagram, is bounded by the curve $C$, the $x$-axis and the line with equation $x = 4$.<br><strong>(b)</strong> Show that the exact value of the area of $R$ is $a\\ln 2 + b\\ln 3$, where $a$ and $b$ are rational constants to be found.",
                "steps": [
                        "<strong>Part (a)(i):</strong> Vertical asymptotes occur where the denominator of the rational function is equal to zero, which means:\\begin{aligned}(2x - q)(x + 2) &= 0 \\cr x = \\frac{q}{2} \\quad &\\text{and} \\quad x = -2\\end{aligned}",
                        "Since we are given that the vertical asymptotes have equations $x = 3$ and $x = -2$, we can equate the root terms:<br>\\begin{aligned}\\frac{q}{2} &= 3 \\cr q &= 6\\end{aligned}",
                        "<strong>Part (a)(ii):</strong> Substituting our calculated value of $q = 6$ into the curve's equation gives:<br>$$y = \\dfrac{p - 3x}{(2x - 6)(x + 2)}$$",
                        "Since the curve passes through the point $(4, \\frac{1}{2})$, we substitute $x = 4$ and $y = \\frac{1}{2}$ into the equation to solve for $p$:<br>\\begin{aligned}\\frac{1}{2} &= \\dfrac{p - 3(4)}{(2(4) - 6)(4 + 2)} \\cr\\frac{1}{2} &= \\dfrac{p - 12}{(2)(6)}\\cr\\frac{1}{2} &= \\dfrac{p - 12}{12} \\cr 6 &= p - 12 \\cr p &= 18\\end{aligned}",
                        "<strong>Part (b):</strong> To find the area of the region $R$, we must find where the curve crosses the $x$-axis (the $x$-intercept). Setting $y = 0$ in the numerator gives:<br>\\begin{aligned}18 - 3x &= 0 \\cr3x &= 18 \\cr x &= 6\\end{aligned}",
                        "Therefore, the region $R$ is bounded on the $x$-axis between $x = 4$ and $x = 6$.<br><br>Here is the completed diagram showing these key features and the vertical asymptote at $x = 3$:<br><img src='images/Pure_PNGs/004065_ans.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'><br>Since the curve lies above the $x$-axis in this interval ($y > 0$), the area of $R$ is given by the definite integral:<br>$$\\text{Area} = \\int_{4}^{6} \\dfrac{18 - 3x}{(2x - 6)(x + 2)} \\text{ d}x$$",
                        "We simplify the integrand by factorising:<br>\\begin{aligned}&\\dfrac{18 - 3x}{(2x - 6)(x + 2)}\\cr & \\quad = \\dfrac{3(6 - x)}{2(x - 3)(x + 2)} \\cr & \\quad= \\dfrac{3}{2} \\dfrac{6 - x}{(x - 3)(x + 2)}\\end{aligned}",
                        "Now, we express this integrand in <strong>partial fractions</strong>:<br>$$\\dfrac{3}{2} \\dfrac{6 - x}{(x - 3)(x + 2)} = \\dfrac{A}{x - 3} + \\dfrac{B}{x + 2}$$<br>\\begin{aligned}18 - 3x &= 2A(x + 2) + 2B(x - 3) \\cr&= 2(A + B)x + 2(2A - 3B)\\end{aligned}",
                        "Using the substitution method to solve for the coefficients:<br>1. \\begin{aligned} $x &= 3\\cr \\implies 18 - 3(3) &= 2A(3 + 2)\\cr \\implies 9 &= 10A\\cr \\implies A &= \\frac{9}{10}\\end{aligned}<br>2. \\begin{aligned} $x &= -2\\cr \\implies 18 - 3(-2) &= 2B(-2 - 3)\\cr \\implies 24 &= -10B\\cr \\implies B &= -\\frac{12}{5}\\end{aligned}",
                        "Substituting these coefficients back into our integral gives:<br>\\begin{aligned} & \\text{Area} = \\int_{4}^{6} \\left( \\dfrac{9/10}{x - 3} - \\dfrac{12/5}{x + 2} \\right) \\text{ d}x \\cr & \\quad \\quad= \\left[ \\frac{9}{10}\\ln|x - 3| - \\frac{12}{5}\\ln|x + 2| \\right]_{4}^{6}\\end{aligned}",
                        "Evaluating this expression at our upper limit ($6$) and lower limit ($4$):<br>\\begin{aligned}\\text{Value at 6} &= \\frac{9}{10}\\ln(3) - \\frac{12}{5}\\ln(8) \\cr&= \\frac{9}{10}\\ln(3) - \\frac{12}{5}(3\\ln 2) \\cr&= -\\frac{36}{5}\\ln(2) + \\frac{9}{10}\\ln(3)\\end{aligned}<br>\\begin{aligned}\\text{Value at 4} &= \\frac{9}{10}\\ln(1) - \\frac{12}{5}\\ln(6) \\cr&= 0 - \\frac{12}{5}(\\ln 2 + \\ln 3) \\cr&= -\\frac{12}{5}\\ln(2) - \\frac{12}{5}\\ln(3)\\end{aligned}",
                        "Subtracting the lower limit value from the upper limit value yields:\\begin{aligned}\\text{Area} &= \\left( -\\frac{36}{5}\\ln 2 + \\frac{9}{10}\\ln 3 \\right)\\cr & \\quad  - \\left( -\\frac{12}{5}\\ln 2 - \\frac{12}{5}\\ln 3 \\right)\\cr & = \\left( -\\frac{36}{5} + \\frac{12}{5} \\right)\\ln 2 \\cr & \\quad \\quad + \\left( \\frac{9}{10} + \\frac{24}{10} \\right)\\ln 3 \\cr&= -\\frac{24}{5}\\ln 2 + \\frac{33}{10}\\ln 3\\end{aligned}<br>Therefore, the constants are $a = -\\frac{24}{5}$ and $b = \\frac{33}{10}$.",
                        "Final Answer: <strong>(a)(i)</strong> $$q = 6$$ <strong>(a)(ii)</strong> $$p = 18$$ <strong>(b)</strong> $$-\\dfrac{24}{5}\\ln 2 + \\dfrac{33}{10}\\ln 3$$"
                ],
                "pi_options": [
                        {
                                "ans": "<strong>(a)(i)</strong> $$q = 3$$ <strong>(a)(ii)</strong> $$p = 18$$ <strong>(b)</strong> $$-\\dfrac{24}{5}\\ln 2 + \\dfrac{33}{10}\\ln 3$$",
                                "feedback": "You probably made a division slip in Part (a)(i). The denominator term $2x - q = 0$ yields $x = \\frac{q}{2}$. Equating this to the asymptote $x = 3$ gives $\\frac{q}{2} = 3 \\implies q = 6$, not $q = 3$."
                        },
                        {
                                "ans": "<strong>(a)(i)</strong> $$q = 6$$ <strong>(a)(ii)</strong> $$p = 18$$ <strong>(b)</strong> $$-\\dfrac{24}{5}\\ln 2 - \\dfrac{33}{10}\\ln 3$$",
                                "feedback": "Check your signs in Part (b). When subtracting the lower limit term, the double negative becomes a positive, yielding \\begin{align} & \\frac{9}{10}\\ln 3 - (-\\frac{12}{5}\\ln 3)\\cr &= \\frac{9}{10}\\ln 3 + \\frac{24}{10}\\ln 3\\cr &= \\frac{33}{10}\\ln 3\\end{align} Be careful when combining logarithm terms."
                        },
                        {
                                "ans": "<strong>(a)(i)</strong> $$q = 6$$ <strong>(a)(ii)</strong> $$p = 18$$ <strong>(b)</strong> $$-\\dfrac{36}{5}\\ln 2 + \\dfrac{9}{10}\\ln 3$$",
                                "feedback": "You probably forgot to subtract the lower limit value ($x=4$) at the end of Part (b). Remember to substitute both limits into your integrated function: \\text{Area} = \\text{F}(6) - \\text{F}(4)$."
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
    "group_id": "004066",
    "board": "Edexcel",
    "branch": "Pure",
    "level": "A",
    "major_area": "Differentiation",
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
      "Substituting this into the curve's equation:<br>\\begin{aligned}x \\approx 3(2y) &= 6y \\cr y \\approx \\dfrac{1}{6}x\\end{aligned}",
      "<strong>Part (b)(ii):</strong> The linear equation $y \\approx \\frac{1}{6}x$ represents the tangent line to the curve at the origin. The gradient of this straight line is $\\frac{1}{6}$, which is exactly equal to the value of the exact derivative $\\dfrac{\\text{d}y}{\\text{d}x}$ at the origin found in Part (a).",
      "<strong>Part (c):</strong> We start with our derivative expression from Part (a):<br>$$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{1}{6\\cos 2y}$$",
      "Using the fundamental identity $\\sin^2 2y + \\cos^2 2y = 1$, we can express $\\cos 2y$ in terms of sine:<br>$$\\cos 2y = \\sqrt{1 - \\sin^2 2y}$$<br>*(Note: Since $-\\frac{\\pi}{4} < y < \\frac{\\pi}{4}$, the angle lies in the interval $-\\frac{\\pi}{2} < 2y < \\frac{\\pi}{2}$, where cosine is strictly positive, so the positive root is correct).* ",
      "From the original curve equation, we have $\\sin 2y = \\frac{x}{3}$. Substituting this into our expression for $\\cos 2y$ gives:<br>\\begin{aligned}\\cos 2y &= \\sqrt{1 - \\left(\\frac{x}{3}\\right)^2} \\cr&= \\sqrt{1 - \\frac{x^2}{9}} \\cr&= \\sqrt{\\dfrac{9 - x^2}{9}} \\cr&= \\dfrac{\\sqrt{9 - x^2}}{3}\\end{aligned}",
      "Now, we substitute this back into our derivative expression:<br>\\begin{aligned}\\dfrac{\\text{d}y}{\\text{d}x} &= \\dfrac{1}{6 \\left( \\frac{\\sqrt{9 - x^2}}{3} \\right)} \\cr&= \\dfrac{1}{2\\sqrt{9 - x^2}}\\end{aligned}<br>Comparing this with the target form gives the constants as $a = 2$ and $b = 9$.",
      "<strong>Final Answer</strong><br><strong>(a)</strong> $\\dfrac{1}{6}$<br><strong>(b)(i)</strong> $y \\approx \\dfrac{1}{6}x$<br><strong>(b)(ii)</strong> The gradient of the linear approximation equals the exact derivative at the origin<br><strong>(c)</strong> $a = 2, b = 9$"
    ],
    "pi_options": [
      {
        "ans": "<strong>(a)</strong> $\\dfrac{1}{6}$<br><strong>(b)(i)</strong> $y \\approx \\dfrac{1}{6}x$<br><strong>(b)(ii)</strong> The gradient of the linear approximation equals the exact derivative at the origin<br><strong>(c)</strong> $a = 6, b = 9$",
        "feedback": "Check your final simplification in Part (c). When you substitute the cosine term, $6 \\cdot \\frac{\\sqrt{9-x^2}}{3}$ simplifies to $2\\sqrt{9-x^2}$ in the denominator, which gives $a = 2$, not $a = 6$."
      },
      {
        "ans": "<strong>(a)</strong> $\\dfrac{1}{3}$<br><strong>(b)(i)</strong> $y \\approx 3x$<br><strong>(b)(ii)</strong> The values are unrelated<br><strong>(c)</strong> $a = 2, b = 9$",
        "feedback": "Check your differentiation in Part (a). Differentiating $3\\sin 2y$ requires the Chain Rule, which results in $6\\cos 2y$ in the denominator, giving a derivative of $\\frac{1}{6}$ at the origin. This error also affects the gradient for Part (b)(i)."
      },
      {
        "ans": "<strong>(a)</strong> $\\dfrac{1}{6}$<br><strong>(b)(i)</strong> $y \\approx \\dfrac{1}{6}x$<br><strong>(b)(ii)</strong> The gradient of the linear approximation equals the exact derivative at the origin<br><strong>(c)</strong> $a = 2, b = 3$",
        "feedback": "Check the algebra in Part (c). When substituting $\\sin 2y = \\frac{x}{3}$ into the square root, you must square the entire term: $\\left(\\frac{x}{3}\\right)^2 = \\frac{x^2}{9}$. This results in $b = 9$ once the denominator is factored out."
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
  "group_id": "004066",
  "board": "Edexcel",
  "branch": "Pure",
  "level": "A",
  "major_area": "Differentiation",
  "topic": "Differentiation",
  "subtopic": [
    "Implicit Differentiation",
    "Small Angle Approximations"
  ],
  "img": false,
  "question": "The curve $C$ is defined by the equation:$$x = 2\\tan 3y \\quad -\\frac{\\pi}{6} < y < \\frac{\\pi}{6}$$The curve passes through the origin $O(0, 0)$.<br><br><strong>(a)</strong> Find the exact value of $\\dfrac{\\text{d}y}{\\text{d}x}$ at the origin.<br><br><strong>(b)(i)</strong> Use the small-angle approximation for $\\tan 3y$ to find an equation linking $x$ and $y$ for points close to the origin.<br><strong>(b)(ii)</strong> Explain the relationship between the answers to <strong>(a)</strong> and <strong>(b)(i)</strong>.<br><br><strong>(c)</strong> Show that, for all points on $C$,$$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{a}{b + cx^2}$$where $a$, $b$, and $c$ are integers to be found.",
  "steps": [
    "<strong>Part (a): Differentiating implicitly</strong><br><br>Differentiate both sides with respect to $x$:\\begin{aligned} \\dfrac{\\text{d}}{\\text{d}x}(x) &= \\dfrac{\\text{d}}{\\text{d}x}(2\\tan 3y) \\cr 1 &= 2(3\\sec^2 3y)\\dfrac{\\text{d}y}{\\text{d}x} \\cr 1 &= 6\\sec^2 3y \\dfrac{\\text{d}y}{\\text{d}x} \\cr \\dfrac{\\text{d}y}{\\text{d}x} &= \\dfrac{1}{6\\sec^2 3y} \\end{aligned}",
    "At the origin, $y = 0$. Since $\\sec(0) = 1$:\\begin{aligned} \\left. \\dfrac{\\text{d}y}{\\text{d}x} \\right|_{O} &= \\dfrac{1}{6(1)^2} \\cr &= \\dfrac{1}{6} \\end{aligned}",
    "<strong>Part (b)(i): Small-angle approximation</strong><br><br>For small angles in radians, $\\tan\\theta \\approx \\theta$. Therefore:\\begin{aligned} \\tan 3y &\\approx 3y \\cr x &\\approx 2(3y) \\cr x &\\approx 6y \\cr y &\\approx \\dfrac{1}{6}x \\end{aligned}",
    "<strong>Part (b)(ii): Geometric relationship</strong><br><br>The linear equation $y \\approx \\dfrac{1}{6}x$ is the tangent line to the curve at the origin. Its gradient ($\\frac{1}{6}$) is equal to the exact derivative $\\dfrac{\\text{d}y}{\\text{d}x}$ at $O(0, 0)$ found in Part (a).",
    "<strong>Part (c): Expressing derivative in terms of $x$</strong><br><br>Recall the derivative from Part (a):\\begin{aligned} \\dfrac{\\text{d}y}{\\text{d}x} &= \\dfrac{1}{6\\sec^2 3y} \\end{aligned}Use the Pythagorean identity $\\sec^2 3y = 1 + \\tan^2 3y$:\\begin{aligned} \\sec^2 3y &= 1 + \\tan^2 3y \\end{aligned}",
    "From the curve equation, $\\tan 3y = \\dfrac{x}{2}$. Substitute this in:\\begin{aligned} \\sec^2 3y &= 1 + \\left(\\dfrac{x}{2}\\right)^2 \\cr &= 1 + \\dfrac{x^2}{4} \\cr &= \\dfrac{4 + x^2}{4} \\end{aligned}",
    "Substitute $\\sec^2 3y$ into the derivative:\\begin{aligned} \\dfrac{\\text{d}y}{\\text{d}x} &= \\dfrac{1}{6\\left(\\dfrac{4 + x^2}{4}\\right)} \\cr &= \\dfrac{4}{6(4 + x^2)} \\cr &= \\dfrac{2}{3(4 + x^2)} \\cr &= \\dfrac{2}{12 + 3x^2} \\end{aligned}Comparing with $\\dfrac{a}{b + cx^2}$ gives $a = 2$, $b = 12$, and $c = 3$.",
    "<strong>Final Answer:</strong>\\begin{aligned} &\\textbf{(a) } \\dfrac{1}{6} \\cr &\\textbf{(b)(i) } y \\approx \\dfrac{1}{6}x \\cr &\\textbf{(b)(ii) } \\text{Linear approximation} \\cr &\\quad \\text{gradient equals exact derivative} \\cr &\\quad \\text{at the origin} \\cr &\\textbf{(c) } a = 2, \\, b = 12, \\, c = 3 \\end{aligned}"
  ],
  "pi_options": [
    {
      "ans": "\\begin{aligned} &\\textbf{(a) } \\dfrac{1}{2} \\cr &\\textbf{(b)(i) } y \\approx \\dfrac{1}{2}x \\cr &\\textbf{(b)(ii) } \\text{Linear approximation} \\cr &\\quad \\text{gradient equals exact derivative} \\cr &\\quad \\text{at the origin} \\cr &\\textbf{(c) } a = 2, \\, b = 4, \\, c = 1 \\end{aligned}",
      "feedback": "Check the Chain Rule when differentiating $2\\tan 3y$. The inner derivative of $3y$ contributes a factor of 3, giving $\\frac{\\text{d}x}{\\text{d}y} = 6\\sec^2 3y$, not $2\\sec^2 3y$."
    },
    {
      "ans": "\\begin{aligned} &\\textbf{(a) } \\dfrac{1}{6} \\cr &\\textbf{(b)(i) } y \\approx \\dfrac{1}{6}x \\cr &\\textbf{(b)(ii) } \\text{Linear approximation} \\cr &\\quad \\text{gradient equals exact derivative} \\cr &\\quad \\text{at the origin} \\cr &\\textbf{(c) } a = 2, \\, b = 12, \\, c = -3 \\end{aligned}",
      "feedback": "Check the trigonometric identity for $\\sec^2\\theta$. The correct Pythagorean identity is $\\sec^2\\theta = 1 + \\tan^2\\theta$, not $1 - \\tan^2\\theta$. This produces $+3x^2$ in the denominator."
    },
    {
      "ans": "\\begin{aligned} &\\textbf{(a) } \\dfrac{1}{6} \\cr &\\textbf{(b)(i) } y \\approx \\dfrac{1}{6}x \\cr &\\textbf{(b)(ii) } \\text{Linear approximation} \\cr &\\quad \\text{gradient equals exact derivative} \\cr &\\quad \\text{at the origin} \\cr &\\textbf{(c) } a = 1, \\, b = 6, \\, c = 3 \\end{aligned}",
      "feedback": "Check your squaring in Part (c). When substituting $\\tan 3y = \\frac{x}{2}$, squaring yields $\\left(\\frac{x}{2}\\right)^2 = \\frac{x^2}{4}$, not $\\frac{x^2}{2}$. Clearing the denominator produces $a = 2, b = 12, c = 3$."
    }
  ],
  "bradley_insight": {
    "type": "pro-tip",
    "title": "The Head Teacher's Eye: Inverse Trigonometric Derivatives",
    "content": "Notice that expressing $x = 2\\tan 3y$ is equivalent to writing $y = \\frac{1}{3}\\arctan\\left(\\frac{x}{2}\\right)$. Differentiating implicitly and using $\\sec^2\\theta = 1 + \\tan^2\\theta$ is the standard textbook derivation for the derivative of the inverse tangent function, yielding a rational algebraic denominator without square roots."
  }
},
 {
    "id": "004068",
    "group_id": "004066",
    "board": "Edexcel",
    "branch": "Pure",
    "level": "A",
    "major_area": "Differentiation",
    "topic": "Differentiation",
    "subtopic": [
      "Implicit Differentiation",
      "Tangents and Normals"
    ],
    "img": false,
    "question": "The curve $C$ is defined by the equation:$$x = 2\\sec 3y \\quad 0 \\le y < \\frac{\\pi}{6}$$The point $P$ lies on $C$ where $y = \\dfrac{\\pi}{12}$.<br><br><strong>(a)</strong> Find the exact value of $\\dfrac{\\text{d}y}{\\text{d}x}$ at $P$.<br><br><strong>(b)</strong> Find an exact equation for the tangent to $C$ at $P$, giving your answer in the form $\\sqrt{2}x + ay + b = 0$, where $a$ and $b$ are exact constants.<br><br><strong>(c)</strong> Show that, for all points on $C$,$$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{a}{bx\\sqrt{x^2 - c}}$$where $a$, $b$, and $c$ are integers to be found.",
    "steps": [
      "<strong>Part (a): Differentiating implicitly</strong><br><br>Differentiate $x = 2\\sec 3y$ with respect to $x$:\\begin{aligned} 1 &= 2(3\\sec 3y \\tan 3y)\\dfrac{\\text{d}y}{\\text{d}x} \\cr 1 &= 6\\sec 3y \\tan 3y \\dfrac{\\text{d}y}{\\text{d}x} \\cr \\dfrac{\\text{d}y}{\\text{d}x} &= \\dfrac{1}{6\\sec 3y \\tan 3y} \\end{aligned}",
      "At $P$, $y = \\dfrac{\\pi}{12}$, so $3y = \\dfrac{\\pi}{4}$:\\begin{aligned} \\sec\\left(\\dfrac{\\pi}{4}\\right) &= \\sqrt{2} \\cr \\tan\\left(\\dfrac{\\pi}{4}\\right) &= 1 \\end{aligned}Substitute these exact values:\\begin{aligned} \\left.\\dfrac{\\text{d}y}{\\text{d}x}\\right|_P &= \\dfrac{1}{6(\\sqrt{2})(1)} \\cr &= \\dfrac{1}{6\\sqrt{2}} \\cr &= \\dfrac{\\sqrt{2}}{12} \\end{aligned}",
      "<strong>Part (b): Equation of the tangent</strong><br><br>Find the $x$-coordinate of $P$:\\begin{aligned} x &= 2\\sec\\left(\\dfrac{\\pi}{4}\\right) \\cr &= 2\\sqrt{2} \\end{aligned}Using the point-slope formula with $P\\left(2\\sqrt{2}, \\dfrac{\\pi}{12}\\right)$ and $m = \\dfrac{\\sqrt{2}}{12}$:\\begin{aligned} y - \\dfrac{\\pi}{12} &= \\dfrac{\\sqrt{2}}{12}\\left(x - 2\\sqrt{2}\\right) \\cr 12y - \\pi &= \\sqrt{2}x - 4 \\cr \\sqrt{2}x - 12y &+ (\\pi - 4) = 0 \\end{aligned}Thus $a = -12$ and $b = \\pi - 4$.",
      "<strong>Part (c): Expressing derivative in terms of $x$</strong><br><br>From the curve equation, $\\sec 3y = \\dfrac{x}{2}$.<br><br>Use the identity $\\tan 3y = \\sqrt{\\sec^2 3y - 1}$:\\begin{aligned} \\tan 3y &= \\sqrt{\\left(\\dfrac{x}{2}\\right)^2 - 1} \\cr &= \\sqrt{\\dfrac{x^2 - 4}{4}} \\cr &= \\dfrac{\\sqrt{x^2 - 4}}{2} \\end{aligned}",
      "Substitute $\\sec 3y$ and $\\tan 3y$ into $\\dfrac{\\text{d}y}{\\text{d}x}$:\\begin{aligned} \\dfrac{\\text{d}y}{\\text{d}x} &= \\dfrac{1}{6\\left(\\dfrac{x}{2}\\right)\\left(\\dfrac{\\sqrt{x^2 - 4}}{2}\\right)} \\cr &= \\dfrac{1}{\\dfrac{3x\\sqrt{x^2 - 4}}{2}} \\cr &= \\dfrac{2}{3x\\sqrt{x^2 - 4}} \\end{aligned}Comparing with $\\dfrac{a}{bx\\sqrt{x^2 - c}}$ gives $a = 2$, $b = 3$, and $c = 4$.",
      "<strong>Final Answer:</strong>\\begin{aligned} &\\textbf{(a) } \\dfrac{\\sqrt{2}}{12} \\cr &\\textbf{(b) } a = -12, \\, b = \\pi - 4 \\cr &\\textbf{(c) } a = 2, \\, b = 3, \\, c = 4 \\end{aligned}"
    ],
    "pi_options": [
      {
        "ans": "\\begin{aligned} &\\textbf{(a) } \\dfrac{\\sqrt{2}}{4} \\cr &\\textbf{(b) } a = -4, \\, b = \\pi - 4 \\cr &\\textbf{(c) } a = 2, \\, b = 1, \\, c = 4 \\end{aligned}",
        "feedback": "Check the derivative of $\\sec 3y$. The chain rule inner derivative of $3y$ gives a factor of 3, leading to $6\\sec 3y \\tan 3y$ in the denominator, not $2\\sec 3y \\tan 3y$."
      },
      {
        "ans": "\\begin{aligned} &\\textbf{(a) } \\dfrac{\\sqrt{2}}{12} \\cr &\\textbf{(b) } a = -12, \\, b = 4 - \\pi \\cr &\\textbf{(c) } a = 2, \\, b = 3, \\, c = 4 \\end{aligned}",
        "feedback": "Check your signs in Part (b). Rearranging $12y - \\pi = \\sqrt{2}x - 4$ into the target form $\\sqrt{2}x + ay + b = 0$ gives $b = \\pi - 4$, not $4 - \\pi$."
      },
      {
        "ans": "\\begin{aligned} &\\textbf{(a) } \\dfrac{\\sqrt{2}}{12} \\cr &\\textbf{(b) } a = -12, \\, b = \\pi - 4 \\cr &\\textbf{(c) } a = 1, \\, b = 3, \\, c = 2 \\end{aligned}",
        "feedback": "Check the squaring in Part (c). When evaluating $\\left(\\frac{x}{2}\\right)^2 - 1$, squaring the denominator gives $4$, so factoring out produces $\\sqrt{x^2 - 4}$, which means $c = 4$, not $2$."
      }
    ],
    "bradley_insight": {
      "type": "pro-tip",
      "title": "The Head Teacher's Eye: Derivative of Arcsecant",
      "content": "This question walks through the standard derivation of $\\frac{\\text{d}}{\\text{d}x}(\\operatorname{arcsec} x)$. Using $\\tan\\theta = \\sqrt{\\sec^2\\theta - 1}$ introduces the characteristic $x\\sqrt{x^2 - a^2}$ term in the denominator."
    }
  },
  {
    "id": "004069",
    "group_id": "004066",
    "board": "Edexcel",
    "branch": "Pure",
    "level": "A",
    "major_area": "Differentiation",
    "topic": "Differentiation",
    "subtopic": [
      "Implicit Differentiation",
      "Small Angle Approximations"
    ],
    "img": false,
    "question": "The curve $C$ is defined by the equation:$$x = 3 - 3\\cos 2y \\quad 0 < y < \\frac{\\pi}{2}$$The curve passes through the origin $O(0, 0)$.<br><br><strong>(a)</strong> Find the exact value of $\\dfrac{\\text{d}y}{\\text{d}x}$ at the point where $y = \\dfrac{\\pi}{6}$.<br><br><strong>(b)(i)</strong> Use the small-angle approximation $\\cos\\theta \\approx 1 - \\dfrac{\\theta^2}{2}$ to find an equation linking $x$ and $y$ for points close to the origin.<br><strong>(b)(ii)</strong> Explain what this approximation indicates about the gradient of $C$ near the origin.<br><br><strong>(c)</strong> Show that, for all points on $C$,$$\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{1}{a\\sqrt{bx - x^2}}$$where $a$ and $b$ are integers to be found.",
    "steps": [
      "<strong>Part (a): Differentiating implicitly</strong><br><br>Differentiate $x = 3 - 3\\cos 2y$ with respect to $x$:\\begin{aligned} 1 &= -3(-2\\sin 2y)\\dfrac{\\text{d}y}{\\text{d}x} \\cr 1 &= 6\\sin 2y \\dfrac{\\text{d}y}{\\text{d}x} \\cr \\dfrac{\\text{d}y}{\\text{d}x} &= \\dfrac{1}{6\\sin 2y} \\end{aligned}",
      "At $y = \\dfrac{\\pi}{6}$, $2y = \\dfrac{\\pi}{3}$:\\begin{aligned} \\sin\\left(\\dfrac{\\pi}{3}\\right) &= \\dfrac{\\sqrt{3}}{2} \\cr \\left.\\dfrac{\\text{d}y}{\\text{d}x}\\right|_{y=\\frac{\\pi}{6}} &= \\dfrac{1}{6\\left(\\dfrac{\\sqrt{3}}{2}\\right)} \\cr &= \\dfrac{1}{3\\sqrt{3}} \\cr &= \\dfrac{\\sqrt{3}}{9} \\end{aligned}",
      "<strong>Part (b)(i): Quadratic small-angle approximation</strong><br><br>Using $\\cos 2y \\approx 1 - \\dfrac{(2y)^2}{2} = 1 - 2y^2$:\\begin{aligned} x &\\approx 3 - 3(1 - 2y^2) \\cr x &\\approx 3 - 3 + 6y^2 \\cr x &\\approx 6y^2 \\end{aligned}Rearranging gives $y \\approx \\dfrac{\\sqrt{x}}{\\sqrt{6}}$.",
      "<strong>Part (b)(ii): Geometric interpretation</strong><br><br>Since $x \\approx 6y^2$, as $x \\to 0$, $\\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{1}{12y} \\to \\infty$. This indicates that the curve has a vertical tangent at the origin.",
      "<strong>Part (c): Expressing derivative in terms of $x$</strong><br><br>From the curve equation:\\begin{aligned} 3\\cos 2y &= 3 - x \\cr \\cos 2y &= \\dfrac{3 - x}{3} \\end{aligned}Using $\\sin 2y = \\sqrt{1 - \\cos^2 2y}$:\\begin{aligned} \\sin 2y &= \\sqrt{1 - \\left(\\dfrac{3 - x}{3}\\right)^2} \\cr &= \\sqrt{1 - \\dfrac{9 - 6x + x^2}{9}} \\cr &= \\sqrt{\\dfrac{6x - x^2}{9}} \\cr &= \\dfrac{\\sqrt{6x - x^2}}{3} \\end{aligned}",
      "Substitute into the derivative expression:\\begin{aligned} \\dfrac{\\text{d}y}{\\text{d}x} &= \\dfrac{1}{6\\left(\\dfrac{\\sqrt{6x - x^2}}{3}\\right)} \\cr &= \\dfrac{1}{2\\sqrt{6x - x^2}} \\end{aligned}Comparing with $\\dfrac{1}{a\\sqrt{bx - x^2}}$ gives $a = 2$ and $b = 6$.",
      "<strong>Final Answer:</strong>\\begin{aligned} &\\textbf{(a) } \\dfrac{\\sqrt{3}}{9} \\cr &\\textbf{(b)(i) } x \\approx 6y^2 \\cr &\\textbf{(b)(ii) } \\text{Curve has a vertical} \\cr &\\quad \\text{tangent at the origin} \\cr &\\textbf{(c) } a = 2, \\, b = 6 \\end{aligned}"
    ],
    "pi_options": [
      {
        "ans": "\\begin{aligned} &\\textbf{(a) } \\dfrac{\\sqrt{3}}{9} \\cr &\\textbf{(b)(i) } x \\approx 3y^2 \\cr &\\textbf{(b)(ii) } \\text{Curve has a vertical} \\cr &\\quad \\text{tangent at the origin} \\cr &\\textbf{(c) } a = 2, \\, b = 6 \\end{aligned}",
        "feedback": "Remember to square the argument $2y$ fully in the cosine approximation: $\\frac{(2y)^2}{2} = \\frac{4y^2}{2} = 2y^2$. Multiplying by 3 gives $x \\approx 6y^2$, not $3y^2$."
      },
      {
        "ans": "\\begin{aligned} &\\textbf{(a) } \\dfrac{\\sqrt{3}}{18} \\cr &\\textbf{(b)(i) } x \\approx 6y^2 \\cr &\\textbf{(b)(ii) } \\text{Curve has a vertical} \\cr &\\quad \\text{tangent at the origin} \\cr &\\textbf{(c) } a = 2, \\, b = 6 \\end{aligned}",
        "feedback": "Check your evaluation of $\\sin\\left(\\frac{\\pi}{3}\\right)$. $\\sin\\left(\\frac{\\pi}{3}\\right) = \\frac{\\sqrt{3}}{2}$, so $6\\sin 2y = 3\\sqrt{3}$. The reciprocal rationalised is $\\frac{\\sqrt{3}}{9}$."
      },
      {
        "ans": "\\begin{aligned} &\\textbf{(a) } \\dfrac{\\sqrt{3}}{9} \\cr &\\textbf{(b)(i) } x \\approx 6y^2 \\cr &\\textbf{(b)(ii) } \\text{Curve has a vertical} \\cr &\\quad \\text{tangent at the origin} \\cr &\\textbf{(c) } a = 6, \\, b = 6 \\end{aligned}",
        "feedback": "Check the fraction simplification in Part (c). The denominator has $6 \\cdot \\frac{\\sqrt{6x-x^2}}{3} = 2\\sqrt{6x-x^2}$, which gives $a = 2$, not $6$."
      }
    ],
    "bradley_insight": {
      "type": "caution",
      "title": "The Head Teacher's Eye: Quadratic Approximations",
      "content": "Unlike $\\sin\\theta \\approx \\theta$ and $\\tan\\theta \\approx \\theta$, which are linear, the approximation for cosine $\\cos\\theta \\approx 1 - \\frac{1}{2}\\theta^2$ is quadratic. When applied to $x = 3 - 3\\cos 2y$, it reveals that the curve approximates a horizontal parabola $x \\approx 6y^2$ near the origin."
    }
  },
  {
    "id": "004070",
    "group_id": "004066",
    "board": "Edexcel",
    "branch": "Pure",
    "level": "A",
    "major_area": "Differentiation",
    "topic": "Differentiation",
    "subtopic": [
      "Implicit Differentiation",
      "Small Angle Approximations"
    ],
    "img": false,
    "question": "The curve $C$ is defined by the equation:$$x = 2\\sin 3y + 3\\tan 2y$$ $$-\\frac{\\pi}{6} < y < \\frac{\\pi}{6}$$The curve passes through the origin $O(0, 0)$.<br><br><strong>(a)</strong> Find the exact value of $\\dfrac{\\text{d}y}{\\text{d}x}$ at the origin.<br><br><strong>(b)</strong> Use small-angle approximations to find an equation for the tangent to $C$ at the origin.<br><br><strong>(c)</strong> Find an exact equation for the normal to $C$ at the origin, in the form $ax + by = 0$, where $a$ and $b$ are integers.<br><br><strong>(d)</strong> Find the exact value of $\\dfrac{\\text{d}y}{\\text{d}x}$ at the point where $y = \\dfrac{\\pi}{12}$, giving your answer in the form $\\dfrac{p - q\\sqrt{2}}{r}$, where $p$, $q$, and $r$ are positive integers.",
    "steps": [
      "<strong>Part (a): Differentiating implicitly</strong><br><br>Differentiate both sides with respect to $x$:\\begin{aligned} 1 &= \\left[2(3\\cos 3y) + 3(2\\sec^2 2y)\\right]\\dfrac{\\text{d}y}{\\text{d}x} \\cr 1 &= \\left(6\\cos 3y + 6\\sec^2 2y\\right)\\dfrac{\\text{d}y}{\\text{d}x} \\cr \\dfrac{\\text{d}y}{\\text{d}x} &= \\dfrac{1}{6\\cos 3y + 6\\sec^2 2y} \\end{aligned}",
      "At the origin $O(0, 0)$, $y = 0$:\\begin{aligned} \\cos(0) &= 1 \\cr \\sec(0) &= 1 \\cr \\left.\\dfrac{\\text{d}y}{\\text{d}x}\\right|_O &= \\dfrac{1}{6(1) + 6(1)} \\cr &= \\dfrac{1}{12} \\end{aligned}",
      "<strong>Part (b): Tangent via small-angle approximations</strong><br><br>Applying $\\sin 3y \\approx 3y$ and $\\tan 2y \\approx 2y$:\\begin{aligned} x &\\approx 2(3y) + 3(2y) \\cr x &\\approx 6y + 6y \\cr x &\\approx 12y \\cr y &\\approx \\dfrac{1}{12}x \\end{aligned}Since the gradient of this linear approximation matches $\\left.\\frac{\\text{d}y}{\\text{d}x}\\right|_O$, the tangent equation at the origin is $y = \\dfrac{1}{12}x$.",
      "<strong>Part (c): Equation of the normal at the origin</strong><br><br>The gradient of the normal $m_n$ is the negative reciprocal of the tangent gradient:\\begin{aligned} m_n &= -\\dfrac{1}{m_t} \\cr &= -12 \\end{aligned}Since the line passes through $(0, 0)$:\\begin{aligned} y &= -12x \\cr 12x + y &= 0 \\end{aligned}",
      "<strong>Part (d): Exact derivative at $y = \\dfrac{\\pi}{12}$</strong><br><br>Evaluate the trigonometric terms:\\begin{aligned} 3y &= \\dfrac{\\pi}{4}\\cr & \\implies \\cos\\left(\\dfrac{\\pi}{4}\\right) = \\dfrac{\\sqrt{2}}{2} \\cr 2y &= \\dfrac{\\pi}{6}\\cr & \\implies \\sec\\left(\\dfrac{\\pi}{6}\\right) = \\dfrac{2}{\\sqrt{3}}\\cr & \\implies \\sec^2\\left(\\dfrac{\\pi}{6}\\right) = \\dfrac{4}{3} \\end{aligned}",
      "Substitute these into the derivative denominator:\\begin{aligned}& 6\\cos 3y + 6\\sec^2 2y\\cr & \\qquad= 6\\left(\\dfrac{\\sqrt{2}}{2}\\right) + 6\\left(\\dfrac{4}{3}\\right) \\cr & \\qquad= 3\\sqrt{2} + 8 \\cr & \\qquad= 8 + 3\\sqrt{2} \\end{aligned}",
      "Rationalise the reciprocal:\\begin{aligned} \\dfrac{\\text{d}y}{\\text{d}x} &= \\dfrac{1}{8 + 3\\sqrt{2}} \\cr &= \\dfrac{8 - 3\\sqrt{2}}{(8 + 3\\sqrt{2})(8 - 3\\sqrt{2})} \\cr &= \\dfrac{8 - 3\\sqrt{2}}{64 - 18} \\cr &= \\dfrac{8 - 3\\sqrt{2}}{46} \\end{aligned}Comparing with $\\dfrac{p - q\\sqrt{2}}{r}$ gives $p = 8$, $q = 3$, and $r = 46$.",
      "<strong>Final Answer:</strong>\\begin{aligned} &\\textbf{(a) } \\dfrac{1}{12} \\cr &\\textbf{(b) } y = \\dfrac{1}{12}x \\cr &\\textbf{(c) } 12x + y = 0 \\cr &\\textbf{(d) } \\dfrac{8 - 3\\sqrt{2}}{46} \\end{aligned}"
    ],
    "pi_options": [
      {
        "ans": "\\begin{aligned} &\\textbf{(a) } \\dfrac{1}{5} \\cr &\\textbf{(b) } y = \\dfrac{1}{5}x \\cr &\\textbf{(c) } 5x + y = 0 \\cr &\\textbf{(d) } \\dfrac{8 - 3\\sqrt{2}}{46} \\end{aligned}",
        "feedback": "Don't forget the inner derivatives from the Chain Rule. Differentiating $\\sin 3y$ gives $3\\cos 3y$ (multiplied by 2 to give 6) and $\\tan 2y$ gives $2\\sec^2 2y$ (multiplied by 3 to give 6). The denominator is $6 + 6 = 12$, not $2 + 3 = 5$."
      },
      {
        "ans": "\\begin{aligned} &\\textbf{(a) } \\dfrac{1}{12} \\cr &\\textbf{(b) } y = \\dfrac{1}{12}x \\cr &\\textbf{(c) } x - 12y = 0 \\cr &\\textbf{(d) } \\dfrac{8 - 3\\sqrt{2}}{46} \\end{aligned}",
        "feedback": "Remember that the normal gradient is the negative reciprocal: $m_n = -\\frac{1}{1/12} = -12$. The equation is $y = -12x \\implies 12x + y = 0$, not $x - 12y = 0$."
      },
      {
        "ans": "\\begin{aligned} &\\textbf{(a) } \\dfrac{1}{12} \\cr &\\textbf{(b) } y = \\dfrac{1}{12}x \\cr &\\textbf{(c) } 12x + y = 0 \\cr &\\textbf{(d) } \\dfrac{8 - 3\\sqrt{2}}{50} \\end{aligned}",
        "feedback": "Check the difference of two squares in Part (d): $$(8 + 3\\sqrt{2})(8 - 3\\sqrt{2})$$ $$ = 8^2 - (3\\sqrt{2})^2$$ $$ = 64 - 18 = 46$$ Subtracting $14$ instead of $18$ gives an incorrect denominator of $50$."
      }
    ],
    "bradley_insight": {
      "type": "deeper",
      "title": "The Head Teacher's Eye: Small Angles and Linear Systems",
      "content": "Notice how the principle of superposition works for small angles. When a function is composed of multiple trigonometric terms, each can be replaced independently by its small-angle approximation. At the origin, the sum of their individual gradients equals the overall derivative."
    }
  },
        {
                "id": "004071",
                "group_id": "004071",
                "board": "AQA",
                "branch": "Pure",
                "level": "AS",
                "major_area": "Differentiation",
                "topic": "Differentiation",
                "subtopic": [
                        "Power Rule"
                ],
                "img": false,
                "question": "$$y = \\dfrac{1}{x^3}$$Find an expression for $$\\dfrac{dy}{dx}$$<br><br>Choose the correct answer from the options below:<br><br>(a) $$\\dfrac{dy}{dx} = -\\dfrac{3}{x^2}$$<br> (b)$$ \\dfrac{dy}{dx} = x^{-3}$$<br> (c)$$ \\dfrac{dy}{dx} = -\\dfrac{3}{x^4}$$<br>(d) $$\\dfrac{dy}{dx} = -\\dfrac{3}{x^3}$$",
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
    "group_id": "004071",
    "board": "AQA",
    "branch": "Pure",
    "level": "AS",
    "major_area": "Differentiation",
    "topic": "Differentiation",
    "subtopic": [
      "Power Rule"
    ],
    "img": false,
    "question": "A curve has the equation:$$y = \\dfrac{6}{\\sqrt{x}} \\quad (x > 0)$$Find an expression for $\\dfrac{\\text{d}y}{\\text{d}x}$, giving your answer in the form $-\\dfrac{a}{x\\sqrt{x}}$ where $a$ is a constant.",
    "steps": [
      "<strong>Step 1: Rewrite in index form</strong><br><br>Convert the surd into a negative fractional power:\\begin{aligned} y &= 6x^{-\\frac{1}{2}} \\end{aligned}",
      "<strong>Step 2: Apply the power rule</strong><br><br>Multiply by the power and subtract $1$:\\begin{aligned} \\dfrac{\\text{d}y}{\\text{d}x} &= 6\\left(-\\dfrac{1}{2}\\right)x^{-\\frac{1}{2} - 1} \\cr &= -3x^{-\\frac{3}{2}} \\end{aligned}",
      "<strong>Step 3: Convert back to surd form</strong><br><br>Express $x^{-\\frac{3}{2}}$ with positive indices in the denominator:\\begin{aligned} x^{-\\frac{3}{2}} &= \\dfrac{1}{x^{\\frac{3}{2}}} \\cr &= \\dfrac{1}{x^1 \\cdot x^{\\frac{1}{2}}} \\cr &= \\dfrac{1}{x\\sqrt{x}} \\end{aligned}Therefore:\\begin{aligned} \\dfrac{\\text{d}y}{\\text{d}x} &= -\\dfrac{3}{x\\sqrt{x}} \\end{aligned}",
      "<strong>Final Answer:</strong>\\begin{aligned} \\dfrac{\\text{d}y}{\\text{d}x} = -\\dfrac{3}{x\\sqrt{x}} \\end{aligned}"
    ],
    "pi_options": [
      {
        "ans": "\\begin{aligned} \\dfrac{\\text{d}y}{\\text{d}x} = -\\dfrac{3}{\\sqrt{x}} \\end{aligned}",
        "feedback": "Check your exponent subtraction: $-\\frac{1}{2} - 1 = -\\frac{3}{2}$, not $-\\frac{1}{2}$. The power of $x$ in the denominator must be $\\frac{3}{2}$, which is $x\\sqrt{x}$."
      },
      {
        "ans": "\\begin{aligned} \\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{3}{x\\sqrt{x}} \\end{aligned}",
        "feedback": "Don't forget the negative sign from the power rule: multiplying by the exponent $-\\frac{1}{2}$ introduces a negative coefficient: $6 \\times \\left(-\\frac{1}{2}\\right) = -3$."
      },
      {
        "ans": "\\begin{aligned} \\dfrac{\\text{d}y}{\\text{d}x} = -\\dfrac{6}{x\\sqrt{x}} \\end{aligned}",
        "feedback": "Remember to multiply the existing coefficient (6) by the power $\\left(-\\frac{1}{2}\\right)$. Multiplying gives $-3$, not $-6$."
      }
    ],
    "bradley_insight": {
      "type": "pro-tip",
      "title": "The Head Teacher's Eye: Fractional Index Subtraction",
      "content": "A frequent exam slip with terms like $x^{-1/2}$ is writing $-1/2 - 1 = +1/2$ or $0$. Always sketch a mental number line: moving 1 unit left from $-0.5$ lands at $-1.5 = -3/2$."
    }
  },
  {
    "id": "004073",
    "group_id": "004071",
    "board": "AQA",
    "branch": "Pure",
    "level": "AS",
    "major_area": "Differentiation",
    "topic": "Differentiation",
    "subtopic": [
      "Power Rule"
    ],
    "img": false,
    "question": "A curve has the equation:$$y = \\dfrac{4x^3 - 5}{2x^2} \\quad (x \\ne 0)$$Find an expression for $\\dfrac{\\text{d}y}{\\text{d}x}$.",
    "steps": [
      "<strong>Step 1: Divide each term separately</strong><br><br>Before differentiating, split the numerator over the single denominator:\\begin{aligned} y &= \\dfrac{4x^3}{2x^2} - \\dfrac{5}{2x^2} \\cr &= 2x - \\dfrac{5}{2}x^{-2} \\end{aligned}",
      "<strong>Step 2: Differentiate term by term</strong><br><br>Apply the power rule to each term:\\begin{aligned} \\dfrac{\\text{d}}{\\text{d}x}(2x) &= 2 \\cr \\dfrac{\\text{d}}{\\text{d}x}\\left(-\\dfrac{5}{2}x^{-2}\\right) &= -\\dfrac{5}{2}(-2x^{-3}) \\cr &= +5x^{-3} \\end{aligned}",
      "<strong>Step 3: Combine and format</strong><br><br>Combine the results and write in fractional form:\\begin{aligned} \\dfrac{\\text{d}y}{\\text{d}x} &= 2 + 5x^{-3} \\cr &= 2 + \\dfrac{5}{x^3} \\end{aligned}",
      "<strong>Final Answer:</strong>\\begin{aligned} \\dfrac{\\text{d}y}{\\text{d}x} = 2 + \\dfrac{5}{x^3} \\end{aligned}"
    ],
    "pi_options": [
      {
        "ans": "\\begin{aligned} \\dfrac{\\text{d}y}{\\text{d}x} = 2 - \\dfrac{5}{x^3} \\end{aligned}",
        "feedback": "Watch your negative signs carefully! Multiplying $-\\frac{5}{2}$ by the exponent $-2$ gives a positive coefficient: $\\left(-\\frac{5}{2}\\right) \\times (-2) = +5$."
      },
      {
        "ans": "\\begin{aligned} \\dfrac{\\text{d}y}{\\text{d}x} = 3x \\end{aligned}",
        "feedback": "You cannot differentiate the top and bottom of a fraction separately! $\\frac{\\frac{\\text{d}}{\\text{d}x}(4x^3-5)}{\\frac{\\text{d}}{\\text{d}x}(2x^2)} = \\frac{12x^2}{4x} = 3x$ is a serious algebraic fallacy. You must divide each term by $2x^2$ first."
      },
      {
        "ans": "\\begin{aligned} \\dfrac{\\text{d}y}{\\text{d}x} = 2 + \\dfrac{5}{x} \\end{aligned}",
        "feedback": "When differentiating $x^{-2}$, subtract 1 from the power: $-2 - 1 = -3$. This produces an $x^3$ term in the denominator, not $x$."
      }
    ],
    "bradley_insight": {
      "type": "caution",
      "title": "The Head Teacher's Eye: The Quotient Fallacy",
      "content": "At AS Level, students who haven't yet learned the Quotient Rule often invent their own 'rule' by differentiating numerator and denominator independently. Whenever the denominator is a single term, always divide each term in the numerator by it first."
    }
  },
  {
    "id": "004074",
    "group_id": "004071",
    "board": "AQA",
    "branch": "Pure",
    "level": "AS",
    "major_area": "Differentiation",
    "topic": "Differentiation",
    "subtopic": [
      "Power Rule"
    ],
    "img": false,
    "question": "A curve has the equation:$$y = \\sqrt{x}(3x - 4) \\quad (x > 0)$$Find an expression for $\\dfrac{\\text{d}y}{\\text{d}x}$, giving your answer in the form $\\dfrac{a\\sqrt{x}}{2} - \\dfrac{b}{\\sqrt{x}}$ where $a$ and $b$ are integers.",
    "steps": [
      "<strong>Step 1: Expand the brackets</strong><br><br>Rewrite $\\sqrt{x}$ as $x^{\\frac{1}{2}}$ and multiply through:\\begin{aligned} y &= x^{\\frac{1}{2}}(3x^1 - 4) \\cr &= 3x^{\\frac{1}{2} + 1} - 4x^{\\frac{1}{2}} \\cr &= 3x^{\\frac{3}{2}} - 4x^{\\frac{1}{2}} \\end{aligned}",
      "<strong>Step 2: Differentiate term by term</strong><br><br>Apply the power rule:\\begin{aligned} \\dfrac{\\text{d}y}{\\text{d}x} &= 3\\left(\\dfrac{3}{2}\\right)x^{\\frac{3}{2} - 1} - 4\\left(\\dfrac{1}{2}\\right)x^{\\frac{1}{2} - 1} \\cr &= \\dfrac{9}{2}x^{\\frac{1}{2}} - 2x^{-\\frac{1}{2}} \\end{aligned}",
      "<strong>Step 3: Convert to surds</strong><br><br>Express in surd notation:\\begin{aligned} \\dfrac{\\text{d}y}{\\text{d}x} &= \\dfrac{9\\sqrt{x}}{2} - \\dfrac{2}{\\sqrt{x}} \\end{aligned}Comparing with the required form gives $a = 9$ and $b = 2$.",
      "<strong>Final Answer:</strong>\\begin{aligned} \\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{9\\sqrt{x}}{2} - \\dfrac{2}{\\sqrt{x}} \\end{aligned}"
    ],
    "pi_options": [
      {
        "ans": "\\begin{aligned} \\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{3}{2\\sqrt{x}} \\end{aligned}",
        "feedback": "You cannot differentiate $\\sqrt{x}$ and $(3x-4)$ separately and multiply them! That is a product fallacy. Expand the brackets first to obtain $3x^{3/2} - 4x^{1/2}$ before differentiating."
      },
      {
        "ans": "\\begin{aligned} \\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{9\\sqrt{x}}{2} + \\dfrac{2}{\\sqrt{x}} \\end{aligned}",
        "feedback": "Check your sign on the second term: differentiating $-4x^{1/2}$ gives $-4\\left(\\frac{1}{2}\\right)x^{-1/2} = -2x^{-1/2}$, so the sign remains negative."
      },
      {
        "ans": "\\begin{aligned} \\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{9}{2\\sqrt{x}} - \\dfrac{2}{\\sqrt{x}} \\end{aligned}",
        "feedback": "Check the power on the first term: subtracting 1 from $\\frac{3}{2}$ gives $\\frac{3}{2} - 1 = +\\frac{1}{2}$, so the first term is $x^{1/2} = \\sqrt{x}$ in the numerator, not denominator."
      }
    ],
    "bradley_insight": {
      "type": "pro-tip",
      "title": "The Head Teacher's Eye: Expanding Before Differentiating",
      "content": "At AS Level, whenever you see a product involving surds or brackets like $\\sqrt{x}(3x - 4)$, always expand the brackets into individual powers of $x$ first. The Product Rule is Year 2 content; AS questions are designed to test your laws of indices."
    }
  },
  {
    "id": "004075",
    "group_id": "004071",
    "board": "AQA",
    "branch": "Pure",
    "level": "AS",
    "major_area": "Differentiation",
    "topic": "Differentiation",
    "subtopic": [
      "Power Rule",
      "Tangents and Normals"
    ],
    "img": false,
    "question": "A curve $C$ has the equation:$$y = \\dfrac{16}{x} + x\\sqrt{x} \\quad (x > 0)$$<strong>(a)</strong> Find an expression for $\\dfrac{\\text{d}y}{\\text{d}x}$.<br><br><strong>(b)</strong> Find the equation of the tangent to $C$ at the point where $x = 4$, giving your answer in the form $y = mx + c$.",
    "steps": [
      "<strong>Part (a): Differentiating the expression</strong><br><br>Rewrite both terms in index form:\\begin{aligned} y &= 16x^{-1} + x^1 \\cdot x^{\\frac{1}{2}} \\cr &= 16x^{-1} + x^{\\frac{3}{2}} \\end{aligned}",
      "Apply the power rule to both terms:\\begin{aligned} \\dfrac{\\text{d}y}{\\text{d}x} &= 16(-1x^{-2}) + \\dfrac{3}{2}x^{\\frac{3}{2} - 1} \\cr &= -16x^{-2} + \\dfrac{3}{2}x^{\\frac{1}{2}} \\cr &= -\\dfrac{16}{x^2} + \\dfrac{3\\sqrt{x}}{2} \\end{aligned}",
      "<strong>Part (b): Finding the tangent equation</strong><br><br>First, find the $y$-coordinate when $x = 4$:\\begin{aligned} y &= \\dfrac{16}{4} + 4\\sqrt{4} \\cr &= 4 + 4(2) \\cr &= 12 \\end{aligned}So the point on the curve is $(4, 12)$.",
      "Next, evaluate the gradient at $x = 4$:\\begin{aligned} m &= -\\dfrac{16}{4^2} + \\dfrac{3\\sqrt{4}}{2} \\cr &= -\\dfrac{16}{16} + \\dfrac{3(2)}{2} \\cr &= -1 + 3 \\cr &= 2 \\end{aligned}",
      "Use the point-slope formula with $(4, 12)$ and $m = 2$:\\begin{aligned} y - 12 &= 2(x - 4) \\cr y - 12 &= 2x - 8 \\cr y &= 2x + 4 \\end{aligned}",
      "<strong>Final Answer:</strong>\\begin{aligned} &\\textbf{(a) } \\dfrac{\\text{d}y}{\\text{d}x} = -\\dfrac{16}{x^2} + \\dfrac{3\\sqrt{x}}{2} \\cr &\\textbf{(b) } y = 2x + 4 \\end{aligned}"
    ],
    "pi_options": [
      {
        "ans": "\\begin{aligned} &\\textbf{(a) } \\dfrac{\\text{d}y}{\\text{d}x} = \\dfrac{16}{x^2} + \\dfrac{3\\sqrt{x}}{2} \\cr &\\textbf{(b) } y = 4x - 4 \\end{aligned}",
        "feedback": "Check your sign when differentiating $16x^{-1}$. Multiplying by $-1$ gives $-16x^{-2} = -\\frac{16}{x^2}$. A sign error here gives an incorrect gradient of $1 + 3 = 4$ at $x = 4$."
      },
      {
        "ans": "\\begin{aligned} &\\textbf{(a) } \\dfrac{\\text{d}y}{\\text{d}x} = -\\dfrac{16}{x^2} + \\dfrac{3\\sqrt{x}}{2} \\cr &\\textbf{(b) } y = -\\dfrac{1}{2}x + 14 \\end{aligned}",
        "feedback": "You have calculated the equation of the normal instead of the tangent! The tangent uses the gradient $m = 2$ directly, not the perpendicular gradient $-\\frac{1}{2}$."
      },
      {
        "ans": "\\begin{aligned} &\\textbf{(a) } \\dfrac{\\text{d}y}{\\text{d}x} = -\\dfrac{16}{x} + \\dfrac{3\\sqrt{x}}{2} \\cr &\\textbf{(b) } y = -x + 16 \\end{aligned}",
        "feedback": "Remember to decrease the power of $x^{-1}$ by 1: $-1 - 1 = -2$. This gives $-\\frac{16}{x^2}$, not $-\\frac{16}{x}$."
      }
    ],
    "bradley_insight": {
      "type": "pro-tip",
      "title": "The Head Teacher's Eye: Combining Term Types",
      "content": "This question brings together two staple AS skills: converting fractional/negative terms ($16x^{-1}$ and $x^{3/2}$) into index form, and finding geometric tangent equations. Always calculate the $y$-coordinate first so you don't lose track of your coordinates."
    }
  },
        {
                "id": "004076",
                "group_id": "004076",
                "board": "AQA",
                "branch": "Pure",
                "level": "AS",
                "major_area": "Algebra and Functions",
                "topic": "Graph transformations",
                "subtopic": [
                        "Transformations of Graphs"
                ],
                "img": false,
                "question": "The graph of $$y = 3^x$$ is transformed by a stretch in the $y$-direction, scale factor 3.<br><br>State the equation of the transformed graph.<br><br>Choose the correct answer from the options below:<br><br>(a)$$ y = 3^{3x}$$(b)$$ y = \\dfrac{1}{3} \\times 3^x$$(c)$$ y = 3^{\\frac{x}{3}}$$(d)$$ y = 3 \\times 3^x$$",
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
    "group_id": "004076",
    "board": "AQA",
    "branch": "Pure",
    "level": "AS",
    "major_area": "Algebra and Functions",
    "topic": "Graph transformations",
    "subtopic": [
      "Transformations of Graphs"
    ],
    "img": false,
    "question": "The curve with equation $y = f(x)$ has a maximum turning point at $P(-6, 4)$ and crosses the $y$-axis at $(0, 2)$.<br><br>The curve is transformed to the curve with equation:$$y = f(2x) - 3$$<strong>(a)</strong> State the coordinates of the transformed turning point $P'$.<br><br><strong>(b)</strong> State the coordinates of the new $y$-intercept.",
    "steps": [
      "<strong>Part (a): Transforming the turning point $P(-6, 4)$</strong><br><br>Break the transformation $y = f(2x) - 3$ into independent horizontal and vertical effects:",
      "1. <strong>Horizontal effect:</strong> $f(2x)$ represents a stretch in the $x$-direction with scale factor $\\dfrac{1}{2}$.<br>Divide the original $x$-coordinate by $2$:\\begin{aligned} x' &= \\dfrac{-6}{2} \\cr &= -3 \\end{aligned}",
      "2. <strong>Vertical effect:</strong> The $-3$ outside represents a translation by $\\begin{pmatrix} 0 \\\\ -3 \\end{pmatrix}$.<br>Subtract $3$ from the original $y$-coordinate:\\begin{aligned} y' &= 4 - 3 \\cr &= 1 \\end{aligned}Therefore, the transformed turning point is $P'(-3, 1)$.",
      "<strong>Part (b): Finding the new $y$-intercept</strong><br><br>The original $y$-intercept is at $x = 0$, where $f(0) = 2$.<br><br>Evaluate the transformed equation at $x = 0$:\\begin{aligned} y &= f(2(0)) - 3 \\cr &= f(0) - 3 \\cr &= 2 - 3 \\cr &= -1 \\end{aligned}Therefore, the new $y$-intercept is $(0, -1)$.",
      "<strong>Final Answer:</strong>\\begin{aligned} &\\textbf{(a) } P'(-3, 1) \\cr &\\textbf{(b) } (0, -1) \\end{aligned}"
    ],
    "pi_options": [
      {
        "ans": "\\begin{aligned} &\\textbf{(a) } P'(-12, 1) \\cr &\\textbf{(b) } (0, -1) \\end{aligned}",
        "feedback": "Remember that changes inside the function affect $x$ inversely! For $f(2x)$, you divide the $x$-coordinate by 2 (scale factor $\\frac{1}{2}$), giving $-6 \\div 2 = -3$, not $-6 \\times 2 = -12$."
      },
      {
        "ans": "\\begin{aligned} &\\textbf{(a) } P'(-3, 1) \\cr &\\textbf{(b) } (0, 2) \\end{aligned}",
        "feedback": "Don't forget to apply the vertical translation $-3$ to the $y$-intercept. While the horizontal stretch leaves $x = 0$ unchanged, the curve still shifts down by 3 units, so $2 - 3 = -1$."
      },
      {
        "ans": "\\begin{aligned} &\\textbf{(a) } P'(-3, 7) \\cr &\\textbf{(b) } (0, 5) \\end{aligned}",
        "feedback": "A minus sign outside the function means a downward shift: $y - 3$. You have added 3 instead of subtracting 3 from the $y$-coordinates."
      }
    ],
    "bradley_insight": {
      "type": "pro-tip",
      "title": "The Head Teacher's Eye: Coordinate Mapping",
      "content": "For any combined transformation $y = a f(bx + c) + d$, treat the coordinates independently: $x \\to \\frac{x - c}{b}$ and $y \\to ay + d$. Keeping $x$ (inside/inverse) and $y$ (outside/direct) separate prevents arithmetic slips on exam day."
    }
  },
  {
    "id": "004078",
    "group_id": "004076",
    "board": "AQA",
    "branch": "Pure",
    "level": "AS",
    "major_area": "Algebra and Functions",
    "topic": "Graph transformations",
    "subtopic": [
      "Transformations of Graphs"
    ],
    "img": false,
    "question": "The curve $C_1$ has equation $y = 2^x$.<br><br>The curve $C_2$ is obtained by translating $C_1$ by the vector $\\begin{pmatrix} -3 \\\\ 0 \\end{pmatrix}$.<br><br><strong>(a)</strong> Write down the equation of $C_2$ in the form $y = 2^{x+a}$.<br><br><strong>(b)</strong> Hence, show that $C_2$ can also be obtained from $C_1$ by a single stretch, stating the direction and scale factor.",
    "steps": [
      "<strong>Part (a): Applying the vector translation</strong><br><br>A horizontal translation by vector $\\begin{pmatrix} -3 \\\\ 0 \\end{pmatrix}$ shifts the graph $3$ units in the negative $x$-direction.<br><br>Replace $x$ with $(x - (-3)) = (x + 3)$:\\begin{aligned} y &= 2^{x+3} \\end{aligned}",
      "<strong>Part (b): Connecting to a stretch</strong><br><br>Apply the laws of indices to split the exponent:\\begin{aligned} y &= 2^{x+3} \\cr &= 2^3 \\times 2^x \\cr &= 8 \\times 2^x \\end{aligned}",
      "Comparing $y = 8 \\times 2^x$ to the standard stretch form $y = k f(x)$ shows that $k = 8$.<br><br>Therefore, $C_2$ can be obtained by a stretch in the $y$-direction with scale factor $8$.",
      "<strong>Final Answer:</strong>\\begin{aligned} &\\textbf{(a) } y = 2^{x+3} \\cr &\\textbf{(b) } \\text{Stretch in the } y\\text{-direction,} \\cr &\\quad \\text{scale factor } 8 \\end{aligned}"
    ],
    "pi_options": [
      {
        "ans": "\\begin{aligned} &\\textbf{(a) } y = 2^{x+3} \\cr &\\textbf{(b) } \\text{Stretch in the } y\\text{-direction,} \\cr &\\quad \\text{scale factor } 6 \\end{aligned}",
        "feedback": "Be careful with index laws: $2^3$ means $2 \\times 2 \\times 2 = 8$, not $2 \\times 3 = 6$. The scale factor of the vertical stretch is 8."
      },
      {
        "ans": "\\begin{aligned} &\\textbf{(a) } y = 2^{x-3} \\cr &\\textbf{(b) } \\text{Stretch in the } y\\text{-direction,} \\cr &\\quad \\text{scale factor } \\dfrac{1}{8} \\end{aligned}",
        "feedback": "A translation by vector $\\begin{pmatrix} -3 \\\\ 0 \\end{pmatrix}$ shifts the graph to the left, which requires replacing $x$ with $x + 3$, not $x - 3$."
      },
      {
        "ans": "\\begin{aligned} &\\textbf{(a) } y = 2^{x+3} \\cr &\\textbf{(b) } \\text{Stretch in the } x\\text{-direction,} \\cr &\\quad \\text{scale factor } 8 \\end{aligned}",
        "feedback": "Because the multiplier $8$ sits on the outside multiplying the entire function ($y = 8 \\times 2^x$), the stretch is in the $y$-direction (vertical), not the $x$-direction."
      }
    ],
    "bradley_insight": {
      "type": "deeper",
      "title": "The Head Teacher's Eye: Exponential Equivalence",
      "content": "For exponential functions $y = b^x$, a horizontal translation is algebraically identical to a vertical stretch! Because $b^{x+c} = b^c \\times b^x$, shifting left by $c$ units produces the exact same curve as stretching vertically by a factor of $b^c$."
    }
  },
  {
    "id": "004079",
    "group_id": "004076",
    "board": "AQA",
    "branch": "Pure",
    "level": "AS",
    "major_area": "Algebra and Functions",
    "topic": "Graph transformations",
    "subtopic": [
      "Transformations of Graphs"
    ],
    "img": false,
    "question": "The curve $C$ has equation:$$y = \\dfrac{1}{x - 2} + 3$$<strong>(a)</strong> State the equations of the two asymptotes of $C$.<br><br><strong>(b)</strong> Describe fully the single transformation that maps the curve $y = \\dfrac{1}{x}$ onto the curve $y = \\dfrac{1}{x - 2}$.<br><br><strong>(c)</strong> Find the coordinates of the point where $C$ intersects the $x$-axis.",
    "steps": [
      "<strong>Part (a): Finding the asymptotes</strong><br><br>The base curve $y = \\dfrac{1}{x}$ has asymptotes at $x = 0$ and $y = 0$.<br><br>For $y = \\dfrac{1}{x - 2} + 3$:",
      "1. The denominator cannot be zero, giving a vertical asymptote at:\\begin{aligned} x - 2 &= 0 \\implies x = 2 \\end{aligned}",
      "2. As $x \\to \\pm\\infty$, $\\dfrac{1}{x-2} \\to 0$, giving a horizontal asymptote at:\\begin{aligned} y = 3 \\end{aligned}",
      "<strong>Part (b): Describing the transformation</strong><br><br>Replacing $x$ with $x - 2$ shifts the curve $2$ units in the positive $x$-direction.<br><br>Full description: <strong>Translation by vector $\\begin{pmatrix} 2 \\\\ 0 \\end{pmatrix}$</strong>.",
      "<strong>Part (c): Intersecting the $x$-axis</strong><br><br>Set $y = 0$ and solve for $x$:\\begin{aligned} 0 &= \\dfrac{1}{x - 2} + 3 \\cr -3 &= \\dfrac{1}{x - 2} \\cr x - 2 &= -\\dfrac{1}{3} \\cr x &= 2 - \\dfrac{1}{3} \\cr x &= \\dfrac{5}{3} \\end{aligned}Therefore, the coordinates of the $x$-intercept are $\\left(\\dfrac{5}{3}, 0\\right)$.",
      "<strong>Final Answer:</strong>\\begin{aligned} &\\textbf{(a) } x = 2, \\, y = 3 \\cr &\\textbf{(b) } \\text{Translation by vector } \\begin{pmatrix} 2 \\\\ 0 \\end{pmatrix} \\cr &\\textbf{(c) } \\left(\\dfrac{5}{3}, 0\\right) \\end{aligned}"
    ],
    "pi_options": [
      {
        "ans": "\\begin{aligned} &\\textbf{(a) } x = -2, \\, y = 3 \\cr &\\textbf{(b) } \\text{Translation by vector } \\begin{pmatrix} -2 \\\\ 0 \\end{pmatrix} \\cr &\\textbf{(c) } \\left(\\dfrac{5}{3}, 0\\right) \\end{aligned}",
        "feedback": "Watch the direction of horizontal shifts: replacing $x$ with $x - 2$ shifts the graph 2 units to the right (positive $x$-direction), giving the vertical asymptote $x = 2$ and translation vector $\\begin{pmatrix} 2 \\\\ 0 \\end{pmatrix}$."
      },
      {
        "ans": "\\begin{aligned} &\\textbf{(a) } x = 2, \\, y = 3 \\cr &\\textbf{(b) } \\text{Translation by vector } \\begin{pmatrix} 2 \\\\ 0 \\end{pmatrix} \\cr &\\textbf{(c) } \\left(\\dfrac{7}{3}, 0\\right) \\end{aligned}",
        "feedback": "Check your algebra when solving $x - 2 = -\\frac{1}{3}$. Adding 2 to both sides gives $x = 2 - \\frac{1}{3} = \\frac{5}{3}$, not $2 + \\frac{1}{3} = \\frac{7}{3}$."
      },
      {
        "ans": "\\begin{aligned} &\\textbf{(a) } x = 3, \\, y = 2 \\cr &\\textbf{(b) } \\text{Translation by vector } \\begin{pmatrix} 0 \\\\ 2 \\end{pmatrix} \\cr &\\textbf{(c) } \\left(\\dfrac{5}{3}, 0\\right) \\end{aligned}",
        "feedback": "Don't swap the asymptotes: the vertical asymptote is governed by the denominator ($x = 2$) and the horizontal asymptote by the constant offset ($y = 3$)."
      }
    ],
    "bradley_insight": {
      "type": "pro-tip",
      "title": "The Head Teacher's Eye: Tracking Asymptotes",
      "content": "When translating reciprocal graphs, track the intersection of the asymptotes $(0,0)$. Shifting by $\\begin{pmatrix} h \\\\ k \\end{pmatrix}$ moves the asymptote intersection directly to $(h, k)$, giving you the lines $x = h$ and $y = k$ immediately."
    }
  },
  {
    "id": "004080",
    "group_id": "004076",
    "board": "AQA",
    "branch": "Pure",
    "level": "AS",
    "major_area": "Algebra and Functions",
    "topic": "Graph transformations",
    "subtopic": [
      "Transformations of Graphs"
    ],
    "img": false,
    "question": "The curve with equation $y = x^2 - 4x + 7$ is transformed onto the curve $y = g(x)$ by the following sequence of two transformations:<br><br>1. A stretch in the $x$-direction with scale factor $\\dfrac{1}{2}$, followed by<br>2. A reflection in the $x$-axis.<br><br><strong>(a)</strong> Find an expression for $g(x)$ in the form $ax^2 + bx + c$, where $a, b, c$ are integers.<br><br><strong>(b)</strong> State the coordinates of the turning point of $y = g(x)$, and determine whether it is a maximum or a minimum.",
    "steps": [
      "<strong>Part (a): Applying the sequence of transformations</strong><br><br><strong>Step 1: Stretch in the $x$-direction, scale factor $\\dfrac{1}{2}$</strong><br>Replace every $x$ with $2x$:\\begin{aligned} y_1 &= (2x)^2 - 4(2x) + 7 \\cr &= 4x^2 - 8x + 7 \\end{aligned}",
      "<strong>Step 2: Reflection in the $x$-axis</strong><br>Multiply the entire resulting function by $-1$:\\begin{aligned} g(x) &= -(4x^2 - 8x + 7) \\cr &= -4x^2 + 8x - 7 \\end{aligned}Comparing with $ax^2 + bx + c$ gives $a = -4, b = 8, c = -7$.",
      "<strong>Part (b): Finding the turning point</strong><br><br>Complete the square for $g(x)$:\\begin{aligned} g(x) &= -4(x^2 - 2x) - 7 \\cr &= -4\\left[(x - 1)^2 - 1\\right] - 7 \\cr &= -4(x - 1)^2 + 4 - 7 \\cr &= -4(x - 1)^2 - 3 \\end{aligned}",
      "From this form, the vertex is at $(1, -3)$.<br><br>Since the coefficient of $x^2$ is negative ($a = -4 < 0$), the parabola opens downwards, meaning the turning point is a <strong>maximum</strong>.",
      "<strong>Final Answer:</strong>\\begin{aligned} &\\textbf{(a) } g(x) = -4x^2 + 8x - 7 \\cr &\\textbf{(b) } \\text{Maximum at } (1, -3) \\end{aligned}"
    ],
    "pi_options": [
      {
        "ans": "\\begin{aligned} &\\textbf{(a) } g(x) = -2x^2 + 8x - 7 \\cr &\\textbf{(b) } \\text{Maximum at } (2, 1) \\end{aligned}",
        "feedback": "Remember to square the entire bracket: $(2x)^2 = 4x^2$, not $2x^2$. This error carries through to give an incorrect vertex."
      },
      {
        "ans": "\\begin{aligned} &\\textbf{(a) } g(x) = -4x^2 + 8x + 7 \\cr &\\textbf{(b) } \\text{Maximum at } (1, 11) \\end{aligned}",
        "feedback": "A reflection in the $x$-axis negates the ENTIRE function: $-(4x^2 - 8x + 7) = -4x^2 + 8x - 7$. You forgot to change the sign of the constant $+7$."
      },
      {
        "ans": "\\begin{aligned} &\\textbf{(a) } g(x) = -4x^2 + 8x - 7 \\cr &\\textbf{(b) } \\text{Minimum at } (1, -3) \\end{aligned}",
        "feedback": "Reflecting in the $x$-axis inverts the parabola: the original curve had a minimum vertex, so reflecting it turns the vertex into a maximum."
      }
    ],
    "bradley_insight": {
      "type": "pro-tip",
      "title": "The Head Teacher's Eye: Order of Transformations",
      "content": "Always follow the specified order of transformations step by step. When applying a reflection in the $x$-axis, place parentheses around the entire preceding expression: $y \\to -[f(x)]$. This ensures the minus sign distributes correctly across all terms, especially the constant."
    }
  },  
        {
                "id": "004081",
                "group_id": "004081",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Sequences and Series",
                "topic": "Sequences",
                "subtopic": [
                        "Periodic Sequences"
                ],
                "img": false,
                "question": "A periodic sequence is defined by $$U_n = \\cos(n\\pi)$$.<br><br>State the period of this sequence.",
                "steps": [
                        "First, write down the sequence formula: $$U_n = \\cos(n\\pi)$$.",
                        "Next, calculate the first few terms of the sequence to see the numerical pattern:\\begin{aligned} U_1 &= -1, \\cr U_2 &= 1, \\cr U_3 &= -1, \\cr U_4 &= 1\\end{aligned}",
                        "Finally, identify the repeating cycle of terms, which is $-1, 1$, and note that the cycle has a length of $2$.",
                        "Final Answer: $$ 2$$"
                ],
                "pi_options": [
                        {
                                "ans": "$$ 2\\pi$$",
                                "feedback": "This is a common error where the continuous period of a trigonometric function is confused with the discrete period of a sequence. The period of a sequence must be a positive integer $T$ representing the number of terms before the pattern repeats."
                        },
                        {
                                "ans": "$$ \\pi$$",
                                "feedback": "You have probably confused the period of the sequence with the period of a continuous trigonometric function such as $\\tan(x)$. The period of a sequence $U_n$ is the smallest integer $T$ such that $U_{n+T} = U_n$."
                        },
                        {
                                "ans": "$$ 4$$",
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
    "group_id": "004081",
    "board": "AQA",
    "branch": "Pure",
    "level": "A",
    "major_area": "Sequences and Series",
    "topic": "Sequences",
    "subtopic": [
      "Periodic Sequences"
    ],
    "img": false,
    "question": "A sequence is defined for $n \\ge 1$ by:$$U_n = \\sin\\left(\\dfrac{n\\pi}{2}\\right)$$<strong>(a)</strong> Write down the first $4$ terms of the sequence, and state its period $k$.<br><br><strong>(b)</strong> Hence, evaluate the finite sum:$$\\sum_{n=1}^{100} U_n$$",
    "steps": [
      "<strong>Part (a): Evaluating the first 4 terms</strong><br><br>Substitute $n = 1, 2, 3, 4$ into the formula:\\begin{aligned} U_1 &= \\sin\\left(\\dfrac{\\pi}{2}\\right) = 1 \\cr U_2 &= \\sin(\\pi) = 0 \\cr U_3 &= \\sin\\left(\\dfrac{3\\pi}{2}\\right) = -1 \\cr U_4 &= \\sin(2\\pi) = 0 \\end{aligned}The sequence repeats the cycle $1, 0, -1, 0$.<br><br>The smallest repeating length is $4$, so the period is $k = 4$.",
      "<strong>Part (b): Evaluating the sum of 100 terms</strong><br><br>Find the sum of one complete cycle of $4$ terms:\\begin{aligned} S_{\\text{cycle}} &= 1 + 0 + (-1) + 0 \\cr &= 0 \\end{aligned}",
      "The total number of terms is $100$.<br><br>Determine how many full cycles are contained in $100$ terms:\\begin{aligned} 100 \\div 4 &= 25 \\text{ full cycles} \\end{aligned}Since every complete cycle sums to $0$:\\begin{aligned} \\sum_{n=1}^{100} U_n &= 25 \\times 0 \\cr &= 0 \\end{aligned}",
      "<strong>Final Answer:</strong>\\begin{aligned} &\\textbf{(a) } 1, 0, -1, 0 \\quad (k = 4) \\cr &\\textbf{(b) } 0 \\end{aligned}"
    ],
    "pi_options": [
      {
        "ans": "\\begin{aligned} &\\textbf{(a) } 1, 0, -1, 0 \\quad (k = 2) \\cr &\\textbf{(b) } 0 \\end{aligned}",
        "feedback": "Check the period: although $0$ appears twice, the sequence alternates between $+1$ and $-1$ on odd terms. A complete cycle requires 4 terms ($1, 0, -1, 0$) before repeating, so $k = 4$, not $2$."
      },
      {
        "ans": "\\begin{aligned} &\\textbf{(a) } 1, 0, -1, 0 \\quad (k = 4) \\cr &\\textbf{(b) } 25 \\end{aligned}",
        "feedback": "Check the sum of one cycle: $1 + 0 + (-1) + 0 = 0$. The sum of each cycle is 0, not 1, so 25 cycles sum to $25 \\times 0 = 0$, not 25."
      },
      {
        "ans": "\\begin{aligned} &\\textbf{(a) } 1, 0, -1, 0 \\quad (k = 4) \\cr &\\textbf{(b) } 1 \\end{aligned}",
        "feedback": "Check your cycle count: $100$ divides exactly by $4$ with no remainder ($100 = 25 \\times 4$). There is no leftover $U_1$ term, so the sum is strictly $0$."
      }
    ],
    "bradley_insight": {
      "type": "pro-tip",
      "title": "The Head Teacher's Eye: Summing Periodic Sequences",
      "content": "To sum any periodic sequence $\\sum_{n=1}^{N} U_n$, calculate the sum of one full period first. Divide $N$ by the period length $k$: multiply the quotient by the cycle sum, then add any remaining terms individually."
    }
  },
  {
    "id": "004083",
    "group_id": "004081",
    "board": "AQA",
    "branch": "Pure",
    "level": "A",
    "major_area": "Sequences and Series",
    "topic": "Sequences",
    "subtopic": [
      "Periodic Sequences"
    ],
    "img": false,
    "question": "A sequence is defined by the recurrence relation:$$U_1 = 3,$$ $$ U_{n+1} = \\dfrac{1}{1 - U_n} \\quad (n \\ge 1)$$<strong>(a)</strong> Show that this sequence is periodic, and state its period.<br><br><strong>(b)</strong> Evaluate:$$\\sum_{n=1}^{50} U_n$$giving your answer as an exact simplified fraction.",
    "steps": [
      "<strong>Part (a): Finding the terms of the sequence</strong><br><br>Calculate the terms sequentially:\\begin{aligned} U_1 &= 3 \\cr U_2 &= \\dfrac{1}{1 - 3} = -\\dfrac{1}{2} \\cr U_3 &= \\dfrac{1}{1 - \\left(-\\frac{1}{2}\\right)} = \\dfrac{1}{\\frac{3}{2}} = \\dfrac{2}{3} \\cr U_4 &= \\dfrac{1}{1 - \\frac{2}{3}} = \\dfrac{1}{\\frac{1}{3}} = 3 \\end{aligned}Since $U_4 = U_1$, the terms repeat in cycles of $3$ ($3, -\\frac{1}{2}, \\frac{2}{3}$). The sequence is periodic with period $3$.",
      "<strong>Part (b): Evaluating the sum of 50 terms</strong><br><br>Calculate the sum of one complete cycle of $3$ terms:\\begin{aligned} S_{\\text{cycle}} &= 3 + \\left(-\\dfrac{1}{2}\\right) + \\dfrac{2}{3} \\cr &= \\dfrac{18 - 3 + 4}{6} \\cr &= \\dfrac{19}{6} \\end{aligned}",
      "Determine the number of full cycles in $50$ terms:\\begin{aligned} 50 &= 16 \\times 3 + 2 \\end{aligned}This gives $16$ full cycles, plus the first $2$ remainder terms ($U_1$ and $U_2$).",
      "Calculate the total sum:\\begin{aligned} \\sum_{n=1}^{50} U_n &= 16\\left(\\dfrac{19}{6}\\right) + U_1 + U_2 \\cr &= \\dfrac{152}{3} + 3 - \\dfrac{1}{2} \\cr &= \\dfrac{152}{3} + \\dfrac{5}{2} \\cr &= \\dfrac{304 + 15}{6} \\cr &= \\dfrac{319}{6} \\end{aligned}",
      "<strong>Final Answer:</strong>\\begin{aligned} &\\textbf{(a) } \\text{Period } = 3 \\cr &\\textbf{(b) } \\dfrac{319}{6} \\end{aligned}"
    ],
    "pi_options": [
      {
        "ans": "\\begin{aligned} &\\textbf{(a) } \\text{Period } = 3 \\cr &\\textbf{(b) } \\dfrac{152}{3} \\end{aligned}",
        "feedback": "You forgot the remainder terms! $50 = 16 \\times 3 + 2$, which leaves 2 extra terms. You must add $U_1 + U_2 = 3 - \\frac{1}{2} = \\frac{5}{2}$ to the 16 complete cycles."
      },
      {
        "ans": "\\begin{aligned} &\\textbf{(a) } \\text{Period } = 3 \\cr &\\textbf{(b) } \\dfrac{950}{6} \\end{aligned}",
        "feedback": "You multiplied the cycle sum by 50 instead of dividing 50 by the period 3! There are only 16 full cycles in 50 terms, not 50 full cycles."
      },
      {
        "ans": "\\begin{aligned} &\\textbf{(a) } \\text{Period } = 4 \\cr &\\textbf{(b) } \\dfrac{319}{6} \\end{aligned}",
        "feedback": "The period is the number of distinct terms before repetition begins. Here $U_4 = U_1$, meaning the cycle consists of 3 terms ($U_1, U_2, U_3$), so the period is 3, not 4."
      }
    ],
    "bradley_insight": {
      "type": "caution",
      "title": "The Head Teacher's Eye: Remainder Terms in Series",
      "content": "When evaluating $\\sum_{n=1}^{N} U_n$ for periodic sequences, always write down the division with remainder explicitly: $N = qk + r$. The most common exam error is forgetting to add the final $r$ terms ($U_1 + \\dots + U_r$) after summing the $q$ complete cycles."
    }
  },
  {
    "id": "004084",
    "group_id": "004081",
    "board": "AQA",
    "branch": "Pure",
    "level": "A",
    "major_area": "Sequences and Series",
    "topic": "Sequences",
    "subtopic": [
      "Periodic Sequences"
    ],
    "img": false,
    "question": "A sequence is generated by the recurrence relation:$$U_1 = p,$$ $$U_{n+1} = \\dfrac{k}{U_n} \\quad (n \\ge 1, \\, U_n \\ne 0)$$where $k$ and $p$ are non-zero real constants.<br><br><strong>(a)</strong> Find expressions for $U_2$ and $U_3$, and deduce the period of the sequence.<br><br><strong>(b)</strong> Given that $U_1 = 4$ and$$\\sum_{n=1}^{40} U_n = 100$$find the exact value of the constant $k$.",
    "steps": [
      "<strong>Part (a): Finding terms and deducing period</strong><br><br>Compute the next two terms:\\begin{aligned} U_2 &= \\dfrac{k}{U_1} = \\dfrac{k}{p} \\cr U_3 &= \\dfrac{k}{U_2} = \\dfrac{k}{\\frac{k}{p}} = p \\end{aligned}Since $U_3 = U_1 = p$, the sequence alternates between $p$ and $\\dfrac{k}{p}$.<br><br>The sequence is periodic with period $2$.",
      "<strong>Part (b): Solving for $k$</strong><br><br>Given $U_1 = 4$, the two alternating terms are:\\begin{aligned} U_1 &= 4 \\cr U_2 &= \\dfrac{k}{4} \\end{aligned}",
      "The sum of one cycle of $2$ terms is:\\begin{aligned} S_{\\text{cycle}} &= 4 + \\dfrac{k}{4} \\end{aligned}",
      "The first $40$ terms contain $40 \\div 2 = 20$ complete cycles:\\begin{aligned} \\sum_{n=1}^{40} U_n &= 20\\left(4 + \\dfrac{k}{4}\\right) \\cr 100 &= 20\\left(4 + \\dfrac{k}{4}\\right) \\cr 5 &= 4 + \\dfrac{k}{4} \\cr \\dfrac{k}{4} &= 1 \\cr k &= 4 \\end{aligned}",
      "<strong>Final Answer:</strong>\\begin{aligned} &\\textbf{(a) } U_2 = \\dfrac{k}{p}, \\, U_3 = p \\quad (\\text{period } = 2) \\cr &\\textbf{(b) } k = 4 \\end{aligned}"
    ],
    "pi_options": [
      {
        "ans": "\\begin{aligned} &\\textbf{(a) } U_2 = \\dfrac{k}{p}, \\, U_3 = p \\quad (\\text{period } = 2) \\cr &\\textbf{(b) } k = 1 \\end{aligned}",
        "feedback": "You found $\\frac{k}{4} = 1$ but forgot to multiply by 4 to solve for $k$. Since $\\frac{k}{4} = 1$, $k = 4$."
      },
      {
        "ans": "\\begin{aligned} &\\textbf{(a) } U_2 = \\dfrac{k}{p}, \\, U_3 = p \\quad (\\text{period } = 2) \\cr &\\textbf{(b) } k = 8 \\end{aligned}",
        "feedback": "Check your division: $100 \\div 20 = 5$, not $6$. Solving $4 + \\frac{k}{4} = 5$ gives $\\frac{k}{4} = 1 \\implies k = 4$."
      },
      {
        "ans": "\\begin{aligned} &\\textbf{(a) } U_2 = \\dfrac{k}{p}, \\, U_3 = p \\quad (\\text{period } = 2) \\cr &\\textbf{(b) } k = -60 \\end{aligned}",
        "feedback": "Check how many cycles are in 40 terms: there are $40 \\div 2 = 20$ cycles, not 40 cycles. Multiplying by 40 instead of 20 leads to an incorrect negative value."
      }
    ],
    "bradley_insight": {
      "type": "pro-tip",
      "title": "The Head Teacher's Eye: Alternating Recurrence Relations",
      "content": "Any relation of the form $U_{n+1} = \\frac{k}{U_n}$ naturally has period 2 because taking the reciprocal twice returns you to the original input: $\\frac{k}{k/p} = p$. Recognizing this immediate cycle saves valuable time on exam papers."
    }
  },
  {
    "id": "004085",
    "group_id": "004081",
    "board": "AQA",
    "branch": "Pure",
    "level": "A",
    "major_area": "Sequences and Series",
    "topic": "Sequences",
    "subtopic": [
      "Periodic Sequences"
    ],
    "img": false,
    "question": "A sequence is defined by the recurrence relation:$$U_1 = 2,$$  ££U_{n+1} = \\dfrac{1 + U_n}{1 - U_n} \\quad (n \\ge 1)$$<strong>(a)</strong> Prove that this sequence is periodic, and state its period.<br><br><strong>(b)</strong> Evaluate:$$\\sum_{n=1}^{101} U_n$$giving your answer as an exact simplified fraction.",
    "steps": [
      "<strong>Part (a): Proving periodicity</strong><br><br>Generate the terms step by step:\\begin{aligned} U_1 &= 2 \\cr U_2 &= \\dfrac{1 + 2}{1 - 2} = \\dfrac{3}{-1} = -3 \\cr U_3 &= \\dfrac{1 + (-3)}{1 - (-3)} = \\dfrac{-2}{4} = -\\dfrac{1}{2} \\cr U_4 &= \\dfrac{1 + \\left(-\\frac{1}{2}\\right)}{1 - \\left(-\\frac{1}{2}\\right)} = \\dfrac{\\frac{1}{2}}{\\frac{3}{2}} = \\dfrac{1}{3} \\cr U_5 &= \\dfrac{1 + \\frac{1}{3}}{1 - \\frac{1}{3}} = \\dfrac{\\frac{4}{3}}{\\frac{2}{3}} = 2 \\end{aligned}Since $U_5 = U_1 = 2$, the sequence repeats every $4$ terms ($2, -3, -\\frac{1}{2}, \\frac{1}{3}$). The sequence is periodic with period $4$.",
      "<strong>Part (b): Evaluating the sum of 101 terms</strong><br><br>Find the sum of one complete cycle of $4$ terms:\\begin{aligned} S_{\\text{cycle}} &= 2 + (-3) + \\left(-\\dfrac{1}{2}\\right) + \\dfrac{1}{3} \\cr &= -1 - \\dfrac{1}{2} + \\dfrac{1}{3} \\cr &= -\\dfrac{3}{2} + \\dfrac{1}{3} \\cr &= \\dfrac{-9 + 2}{6} \\cr &= -\\dfrac{7}{6} \\end{aligned}",
      "Determine the number of cycles in $101$ terms:\\begin{aligned} 101 &= 25 \\times 4 + 1 \\end{aligned}This gives $25$ complete cycles, plus $1$ remainder term ($U_1$).",
      "Calculate the total sum:\\begin{aligned} \\sum_{n=1}^{101} U_n &= 25\\left(-\\dfrac{7}{6}\\right) + U_1 \\cr &= -\\dfrac{175}{6} + 2 \\cr &= -\\dfrac{175}{6} + \\dfrac{12}{6} \\cr &= -\\dfrac{163}{6} \\end{aligned}",
      "<strong>Final Answer:</strong>\\begin{aligned} &\\textbf{(a) } \\text{Period } = 4 \\cr &\\textbf{(b) } -\\dfrac{163}{6} \\end{aligned}"
    ],
    "pi_options": [
      {
        "ans": "\\begin{aligned} &\\textbf{(a) } \\text{Period } = 4 \\cr &\\textbf{(b) } -\\dfrac{175}{6} \\end{aligned}",
        "feedback": "You forgot the single remainder term! $101 = 25 \\times 4 + 1$, which leaves $U_1 = 2$ at the end. Adding 2 to $-\\frac{175}{6}$ gives $-\\frac{163}{6}$."
      },
      {
        "ans": "\\begin{aligned} &\\textbf{(a) } \\text{Period } = 4 \\cr &\\textbf{(b) } -\\dfrac{187}{6} \\end{aligned}",
        "feedback": "Check your sign when adding the remainder term $U_1 = 2$. You must add $2 = +\\frac{12}{6}$ to $-\\frac{175}{6}$, giving $-\\frac{163}{6}$, not subtract 2."
      },
      {
        "ans": "\\begin{aligned} &\\textbf{(a) } \\text{Period } = 5 \\cr &\\textbf{(b) } -\\dfrac{163}{6} \\end{aligned}",
        "feedback": "The period is the cycle length before repetition. Since $U_5$ is the first repeated term ($U_5 = U_1$), the repeating cycle contains 4 unique terms, so the period is 4, not 5."
      }
    ],
    "bradley_insight": {
      "type": "deeper",
      "title": "The Head Teacher's Eye: Hidden Trigonometry in Recurrences",
      "content": "The recurrence $U_{n+1} = \\frac{1 + U_n}{1 - U_n}$ is actually the compound angle formula for $\\tan\\left(\\theta + \\frac{\\pi}{4}\\right)$! Because adding $\\frac{\\pi}{4}$ four times completes a full half-turn of $\\pi$ (where $\\tan$ repeats), the sequence is mathematically guaranteed to have a period of exactly 4."
    }
  },
        {
                "id": "004086",
                "group_id": "004086",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Algebra and Functions",
                "topic": "Functions",
                "subtopic": [
                        "Inverse Functions"
                ],
                "img": false,
                "question": "The function $f$ is defined by $f(x) = e^{x-3}$, $x \\in \\mathbb{R}$.<br><br>Find $f^{-1}(x)$ and state its domain.",
                "steps": [
                        "Set $y = e^{x-3}$.",
                        "Take the natural logarithm of both sides to rearrange for $x$: \\begin{aligned}\\ln(y) &= x - 3 \\cr x &= \\ln(y) + 3\\end{aligned}",
                        "Swap $x$ and $y$ to write the inverse function: $$f^{-1}(x) = \\ln(x) + 3$$",
                        "Since the domain of the inverse function is equal to the range of the original function, and the range of $f(x) = e^{x-3}$ is $y > 0$, the domain of $f^{-1}(x)$ is $x > 0$.",
                        "Final Answer: $$f^{-1}(x) = \\ln(x) + 3,\\quad  x > 0$$"
                ],
                "pi_options": [
                        {
                                "ans": "$$f^{-1}(x) = \\ln(x) - 3,\\quad  x > 0$$",
                                "feedback": "This incorrect answer results from a sign error when transposing the $-3$. When rearranging $\\ln(y) = x - 3$, adding $3$ to both sides gives $x = \\ln(y) + 3$."
                        },
                        { 
                                "ans": "$$f^{-1}(x) = \\ln(x) + 3,\\quad x \\in \\mathbb{R}$$",
                                "feedback": "This error is caused by copying the domain of the original function $f(x)$. The domain of the inverse function must be equal to the range of the original function. Since $e^{x-3} > 0$, the domain of $f^{-1}(x)$ is $x > 0$."
                        },
                        {
                                "ans": "$$f^{-1}(x) = \\ln(x) + 3,\\quad  x > 3$$",
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
    "group_id": "004086",
    "board": "AQA",
    "branch": "Pure",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Functions",
    "subtopic": [
      "Inverse Functions"
    ],
    "img": false,
    "question": "The function $f$ is defined by:$$f(x) = \\dfrac{2x + 5}{x - 3}, \\quad x \\in \\mathbb{R}, \\, x \\ne 3$$<strong>(a)</strong> Find an expression for $f^{-1}(x)$.<br><br><strong>(b)</strong> State the domain of $f^{-1}(x)$.",
    "steps": [
      "<strong>Part (a): Finding the inverse function</strong><br><br>Set $y = \\dfrac{2x + 5}{x - 3}$ and rearrange for $x$:\\begin{aligned} y(x - 3) &= 2x + 5 \\cr yx - 3y &= 2x + 5 \\cr yx - 2x &= 3y + 5 \\cr x(y - 2) &= 3y + 5 \\cr x &= \\dfrac{3y + 5}{y - 2} \\end{aligned}Interchanging $x$ and $y$ gives:\\begin{aligned} f^{-1}(x) &= \\dfrac{3x + 5}{x - 2} \\end{aligned}",
      "<strong>Part (b): Determining the domain of $f^{-1}(x)$</strong><br><br>The domain of $f^{-1}$ is the range of $f$.<br><br>Consider the horizontal asymptote of $f(x)$ as $x \\to \\pm\\infty$:\\begin{aligned} f(x) &= \\dfrac{2 + \\frac{5}{x}}{1 - \\frac{3}{x}} \\to 2 \\end{aligned}Since $f(x)$ can never equal $2$, the range of $f$ is $y \\ne 2$.<br><br>Alternatively, the denominator of $f^{-1}(x)$ cannot be zero:\\begin{aligned} x - 2 \\ne 0 \\implies x \\ne 2 \\end{aligned}Therefore, the domain of $f^{-1}(x)$ is $x \\in \\mathbb{R}, \\, x \\ne 2$.",
      "<strong>Final Answer:</strong>\\begin{aligned} &\\textbf{(a) } f^{-1}(x) = \\dfrac{3x + 5}{x - 2} \\cr &\\textbf{(b) } x \\in \\mathbb{R}, \\, x \\ne 2 \\end{aligned}"
    ],
    "pi_options": [
      {
        "ans": "\\begin{aligned} &\\textbf{(a) } f^{-1}(x) = \\dfrac{3x - 5}{x - 2} \\cr &\\textbf{(b) } x \\in \\mathbb{R}, \\, x \\ne 2 \\end{aligned}",
        "feedback": "Check your signs when grouping terms. Rearranging $yx - 3y = 2x + 5$ requires adding $3y$ to both sides, which gives $+3y + 5$ in the numerator, not $-5$."
      },
      {
        "ans": "\\begin{aligned} &\\textbf{(a) } f^{-1}(x) = \\dfrac{3x + 5}{x - 2} \\cr &\\textbf{(b) } x \\in \\mathbb{R}, \\, x \\ne 3 \\end{aligned}",
        "feedback": "You copied the domain restriction of the original function $f(x)$! The domain of $f^{-1}$ is the range of $f$. Because the denominator of $f^{-1}$ is $x - 2$, the domain is $x \\ne 2$."
      },
      {
        "ans": "\\begin{aligned} &\\textbf{(a) } f^{-1}(x) = \\dfrac{x - 3}{2x + 5} \\cr &\\textbf{(b) } x \\in \\mathbb{R}, \\, x \\ne -\\dfrac{5}{2} \\end{aligned}",
        "feedback": "An inverse function $f^{-1}(x)$ is NOT the reciprocal $\\frac{1}{f(x)}$! You must set $y = f(x)$ and rearrange algebraically to make $x$ the subject."
      }
    ],
    "bradley_insight": {
      "type": "pro-tip",
      "title": "The Head Teacher's Eye: Rational Function Inverses",
      "content": "For any linear fractional function $f(x) = \\frac{ax + b}{cx + d}$, its horizontal asymptote is $y = \\frac{a}{c}$, which immediately tells you the excluded value from its range. In turn, this defines the domain of its inverse: $x \\ne \\frac{a}{c}$."
    }
  },
  {
    "id": "004088",
    "group_id": "004086",
    "board": "AQA",
    "branch": "Pure",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Functions",
    "subtopic": [
      "Inverse Functions"
    ],
    "img": false,
    "question": "The function $g$ is defined by:$$g(x) = x^2 - 6x + 13, \\quad x \\in \\mathbb{R}, \\, x \\ge 3$$<strong>(a)</strong> Explain why the restriction $x \\ge 3$ is necessary for $g^{-1}(x)$ to exist.<br><br><strong>(b)</strong> Find an expression for $g^{-1}(x)$ and state its domain.",
    "steps": [
      "<strong>Part (a): Reason for the domain restriction</strong><br><br>Complete the square for $g(x)$:\\begin{aligned} g(x) &= (x - 3)^2 - 9 + 13 \\cr &= (x - 3)^2 + 4 \\end{aligned}The parabola has its minimum turning point at $(3, 4)$.<br><br>For all real numbers, a quadratic is a many-to-one function, which does not have an inverse. Restricting the domain to $x \\ge 3$ ensures $g$ is a <strong>one-to-one function</strong>, allowing an inverse to exist.",
      "<strong>Part (b): Finding $g^{-1}(x)$ and its domain</strong><br><br>Set $y = (x - 3)^2 + 4$ and rearrange for $x$:\\begin{aligned} y - 4 &= (x - 3)^2 \\cr x - 3 &= \\pm\\sqrt{y - 4} \\end{aligned}Since the domain of $g$ is $x \\ge 3$, we take the positive square root:\\begin{aligned} x &= 3 + \\sqrt{y - 4} \\end{aligned}Therefore:\\begin{aligned} g^{-1}(x) &= 3 + \\sqrt{x - 4} \\end{aligned}",
      "The domain of $g^{-1}$ is the range of $g$.<br><br>Since $(x - 3)^2 \\ge 0$, the minimum value of $g(x)$ is $4$, so the range of $g$ is $y \\ge 4$.<br><br>Therefore, the domain of $g^{-1}(x)$ is $x \\ge 4$.",
      "<strong>Final Answer:</strong>\\begin{aligned} &\\textbf{(a) } g \\text{ must be a one-to-one function} \\cr &\\textbf{(b) } g^{-1}(x) = 3 + \\sqrt{x - 4}, \\quad x \\ge 4 \\end{aligned}"
    ],
    "pi_options": [
      {
        "ans": "\\begin{aligned} &\\textbf{(a) } g \\text{ must be a one-to-one function} \\cr &\\textbf{(b) } g^{-1}(x) = 3 \\pm \\sqrt{x - 4}, \\quad x \\ge 4 \\end{aligned}",
        "feedback": "A function must have a single unique output for each input! Keeping $\\pm$ means $g^{-1}$ is not a valid function. Because the original domain is $x \\ge 3$, you must choose the positive root $+ \\sqrt{x - 4}$."
      },
      {
        "ans": "\\begin{aligned} &\\textbf{(a) } g \\text{ must be a one-to-one function} \\cr &\\textbf{(b) } g^{-1}(x) = 3 + \\sqrt{x - 4}, \\quad x \\ge 3 \\end{aligned}",
        "feedback": "Check the domain of $g^{-1}$: it equals the range of $g$. Because $g(x) = (x-3)^2 + 4$ has a minimum value of 4, the range is $y \\ge 4$, making the domain of $g^{-1}$ equal to $x \\ge 4$, not $x \\ge 3$."
      },
      {
        "ans": "\\begin{aligned} &\\textbf{(a) } \\text{To ensure the square root is real} \\cr &\\textbf{(b) } g^{-1}(x) = 3 + \\sqrt{x - 4}, \\quad x \\ge 4 \\end{aligned}",
        "feedback": "The fundamental mathematical reason an inverse exists is that the function is one-to-one. Without the domain restriction, two different $x$ values would produce the same $y$ value, making unique inversion impossible."
      }
    ],
    "bradley_insight": {
      "type": "caution",
      "title": "The Head Teacher's Eye: Inverting Quadratics",
      "content": "You cannot rearrange a quadratic $y = ax^2 + bx + c$ for $x$ while it has both $x^2$ and $x$ terms present. Always complete the square first! This gathers $x$ into a single bracket, allowing you to isolate $(x - p)^2$ and take the square root cleanly."
    }
  },
  {
    "id": "004089",
    "group_id": "004086",
    "board": "AQA",
    "branch": "Pure",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Functions",
    "subtopic": [
      "Inverse Functions"
    ],
    "img": false,
    "question": "The function $h$ is defined by:$$h(x) = 2\\ln(x + 1) - 4, \\quad x \\in \\mathbb{R}, \\, x > -1$$<strong>(a)</strong> State the range of $h(x)$.<br><br><strong>(b)</strong> Find an expression for $h^{-1}(x)$, and state its domain.<br><br><strong>(c)</strong> Find the exact value of $x$ for which $h^{-1}(x) = 0$.",
    "steps": [
      "<strong>Part (a): Stating the range of $h(x)$</strong><br><br>As $x \\to -1$, $\\ln(x + 1) \\to -\\infty$, and as $x \\to \\infty$, $\\ln(x + 1) \\to +\\infty$.<br><br>Therefore, the range of $h(x)$ is all real numbers:\\begin{aligned} h(x) \\in \\mathbb{R} \\end{aligned}",
      "<strong>Part (b): Finding $h^{-1}(x)$ and its domain</strong><br><br>Set $y = 2\\ln(x + 1) - 4$ and rearrange for $x$:\\begin{aligned} y + 4 &= 2\\ln(x + 1) \\cr \\dfrac{y + 4}{2} &= \\ln(x + 1) \\cr \\text{e}^{\\frac{y + 4}{2}} &= x + 1 \\cr x &= \\text{e}^{\\frac{y + 4}{2}} - 1 \\end{aligned}Therefore:\\begin{aligned} h^{-1}(x) &= \\text{e}^{\\frac{x + 4}{2}} - 1 \\end{aligned}Since the domain of $h^{-1}$ equals the range of $h$, the domain is $x \\in \\mathbb{R}$.",
      "<strong>Part (c): Solving $h^{-1}(x) = 0$</strong><br><br>Set the inverse expression equal to $0$:\\begin{aligned} \\text{e}^{\\frac{x + 4}{2}} - 1 &= 0 \\cr \\text{e}^{\\frac{x + 4}{2}} &= 1 \\cr \\dfrac{x + 4}{2} &= 0 \\cr x + 4 &= 0 \\cr x &= -4 \\end{aligned}",
      "<strong>Final Answer:</strong>\\begin{aligned} &\\textbf{(a) } h(x) \\in \\mathbb{R} \\cr &\\textbf{(b) } h^{-1}(x) = \\text{e}^{\\frac{x + 4}{2}} - 1, \\quad x \\in \\mathbb{R} \\cr &\\textbf{(c) } x = -4 \\end{aligned}"
    ],
    "pi_options": [
      {
        "ans": "\\begin{aligned} &\\textbf{(a) } h(x) > -4 \\cr &\\textbf{(b) } h^{-1}(x) = \\text{e}^{\\frac{x + 4}{2}} - 1, \\quad x > -4 \\cr &\\textbf{(c) } x = -4 \\end{aligned}",
        "feedback": "Do not confuse logarithmic functions with exponential functions! While $e^x > 0$, the natural log function $\\ln(x+1)$ approaches $-\\infty$ as $x \\to -1$. Therefore, the range is all real numbers, so the domain of $h^{-1}$ is $x \\in \\mathbb{R}$."
      },
      {
        "ans": "\\begin{aligned} &\\textbf{(a) } h(x) \\in \\mathbb{R} \\cr &\\textbf{(b) } h^{-1}(x) = \\text{e}^{\\frac{x - 4}{2}} + 1, \\quad x \\in \\mathbb{R} \\cr &\\textbf{(c) } x = 4 \\end{aligned}",
        "feedback": "Watch your rearrangement signs: adding 4 gives $y + 4 = 2\\ln(x+1)$, leading to exponent $\\frac{x+4}{2}$. Subtracting 1 gives $-1$, not $+1$."
      },
      {
        "ans": "\\begin{aligned} &\\textbf{(a) } h(x) \\in \\mathbb{R} \\cr &\\textbf{(b) } h^{-1}(x) = \\text{e}^{\\frac{x + 4}{2}} - 1, \\quad x \\in \\mathbb{R} \\cr &\\textbf{(c) } x = 0 \\end{aligned}",
        "feedback": "In Part (c), setting $e^{\\frac{x+4}{2}} = 1$ requires the power to equal zero: $\\frac{x+4}{2} = 0 \\implies x = -4$, not $x = 0$."
      }
    ],
    "bradley_insight": {
      "type": "pro-tip",
      "title": "The Head Teacher's Eye: Solving Inverse Roots Quickly",
      "content": "To solve $h^{-1}(x) = 0$, you can bypass the inverse equation entirely! By definition, $h^{-1}(x) = 0 \\iff h(0) = x$. Evaluating $h(0) = 2\\ln(1) - 4 = 0 - 4 = -4$ immediately gives $x = -4$ in a single line of working."
    }
  },
  {
    "id": "004090",
    "group_id": "004086",
    "board": "AQA",
    "branch": "Pure",
    "level": "A",
    "major_area": "Algebra and Functions",
    "topic": "Functions",
    "subtopic": [
      "Inverse Functions"
    ],
    "img": false,
    "question": "The function $f$ is defined by:$$f(x) = \\sqrt{2x + 15}, \\quad x \\in \\mathbb{R}, \\, x \\ge -\\frac{15}{2}$$<strong>(a)</strong> Find an expression for $f^{-1}(x)$ and state its domain.<br><br><strong>(b)</strong> State the geometric relationship between the graphs of $y = f(x)$ and $y = f^{-1}(x)$.<br><br><strong>(c)</strong> Hence, solve the equation $f(x) = f^{-1}(x)$.",
    "steps": [
      "<strong>Part (a): Finding $f^{-1}(x)$ and its domain</strong><br><br>Set $y = \\sqrt{2x + 15}$ and rearrange for $x$:\\begin{aligned} y^2 &= 2x + 15 \\cr 2x &= y^2 - 15 \\cr x &= \\dfrac{y^2 - 15}{2} \\end{aligned}Therefore:\\begin{aligned} f^{-1}(x) &= \\dfrac{x^2 - 15}{2} \\end{aligned}",
      "The principal square root yields non-negative values, so the range of $f$ is $y \\ge 0$.<br><br>Since the domain of $f^{-1}$ equals the range of $f$, the domain is $x \\ge 0$.",
      "<strong>Part (b): Geometric relationship</strong><br><br>The graphs of $y = f(x)$ and $y = f^{-1}(x)$ are <strong>reflections of each other in the line $y = x$</strong>.",
      "<strong>Part (c): Solving $f(x) = f^{-1}(x)$</strong><br><br>Since the curves reflect across $y = x$, any points of intersection must lie on the line $y = x$.<br><br>Instead of setting $f(x) = f^{-1}(x)$, we solve the simpler equation $f(x) = x$:\\begin{aligned} \\sqrt{2x + 15} &= x \\quad (x \\ge 0) \\cr 2x + 15 &= x^2 \\cr x^2 - 2x - 15 &= 0 \\cr (x - 5)(x + 3) &= 0 \\end{aligned}",
      "This gives $x = 5$ or $x = -3$.<br><br>Since the domain of $f^{-1}$ requires $x \\ge 0$, we reject $x = -3$.<br><br>Therefore, the unique solution is $x = 5$.",
      "<strong>Final Answer:</strong>\\begin{aligned} &\\textbf{(a) } f^{-1}(x) = \\dfrac{x^2 - 15}{2}, \\quad x \\ge 0 \\cr &\\textbf{(b) } \\text{Reflection in the line } y = x \\cr &\\textbf{(c) } x = 5 \\end{aligned}"
    ],
    "pi_options": [
      {
        "ans": "\\begin{aligned} &\\textbf{(a) } f^{-1}(x) = \\dfrac{x^2 - 15}{2}, \\quad x \\in \\mathbb{R} \\cr &\\textbf{(b) } \\text{Reflection in the line } y = x \\cr &\\textbf{(c) } x = 5 \\text{ and } x = -3 \\end{aligned}",
        "feedback": "Remember the domain restriction! Because $f(x) = \\sqrt{2x+15} \\ge 0$, the domain of $f^{-1}(x)$ is strictly $x \\ge 0$. This invalidates the negative root $x = -3$, leaving only $x = 5$."
      },
      {
        "ans": "\\begin{aligned} &\\textbf{(a) } f^{-1}(x) = \\dfrac{x^2 + 15}{2}, \\quad x \\ge 0 \\cr &\\textbf{(b) } \\text{Reflection in the line } y = x \\cr &\\textbf{(c) } x = 5 \\end{aligned}",
        "feedback": "Check your rearrangement signs in Part (a): squaring gives $y^2 = 2x + 15$. Subtracting 15 from both sides gives $2x = y^2 - 15$, not $y^2 + 15$."
      },
      {
        "ans": "\\begin{aligned} &\\textbf{(a) } f^{-1}(x) = \\dfrac{x^2 - 15}{2}, \\quad x \\ge 0 \\cr &\\textbf{(b) } \\text{Reflection in the line } y = -x \\cr &\\textbf{(c) } x = 5 \\end{aligned}",
        "feedback": "Inverse functions always reflect in the line $y = x$, not $y = -x$. Reflection in $y = -x$ swaps coordinates and inverts their signs."
      }
    ],
    "bradley_insight": {
      "type": "pro-tip",
      "title": "The Head Teacher's Eye: The Line y = x Shortcut",
      "content": "Never attempt to solve $f(x) = f^{-1}(x)$ by setting their formulas equal to each other—it usually creates an impossible quartic equation! Because inverse functions reflect across $y = x$, any intersection point must lie on the line $y = x$. Always solve $f(x) = x$ instead."
    }
  },
        {
                "id": "004091",
                "group_id": "004091",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Differentiation",
                "topic": "Differentiation",
                "subtopic": [
                        "Parametric Differentiation",
                        "Parametric Equations"
                ],
                "img": false,
                "question": "A curve is defined by the parametric equations:<br>$$x = 2 \\times 2^{-t} + 4$$<br>$$y = 5 \\times 2^t - 1$$<br><br><strong>(a)</strong> Find an expression for $\\dfrac{dy}{dx}$ <br><br><strong>(b)</strong> find the Cartesian equation of the curve in the form $xy + ax + by = c$, where $a$, $b$, and $c$ are integers.",
                "steps": [
                        "First, differentiate $y = 5 \\times 2^t - 1$ and $x = 2 \\times 2^{-t} + 4$ with respect to $t$: $$\\dfrac{dy}{dt} = 5 \\ln(2) 2^t$$ and $$\\dfrac{dx}{dt} = -2 \\ln(2) 2^{-t}$$",
                        "Next, use the chain rule, $$\\dfrac{dy}{dx} = \\dfrac{\\frac{dy}{dt}}{\\frac{dx}{dt}}$$, to obtain Part (a): \\begin{aligned}\\dfrac{dy}{dx} &= \\dfrac{5 \\ln(2) 2^t}{-2 \\ln(2) 2^{-t}} \\cr&= -\\dfrac{5}{2} \\times 2^{2t}\\end{aligned}",
                        "To find Part (b), rearrange the parametric equations to isolate the exponential terms: \\begin{aligned}2^{-t} &= \\dfrac{x-4}{2} \\cr2^t &= \\dfrac{2}{x-4}\\end{aligned}",
                        "Substitute this into the $y$ equation and expand: \\begin{aligned}y + 1 &= 5 \\times \\dfrac{2}{x-4} \\cr(y + 1)(x - 4) &= 10 \\cr xy + x - 4y &= 14\\end{aligned}",
                        "Final Answer: \\begin{aligned}\\text{(a) } \\dfrac{dy}{dx} &= -\\dfrac{5}{2} \\times 2^{2t},\\cr\\text{(b) } xy + x - 4y &= 14\\end{aligned}"
                ],
                "pi_options": [
                        {
                                "ans": "$$\\text{(a) } \\dfrac{dy}{dx} = -\\dfrac{5}{2} \\times 2^{t},$$ $$\\text{(b) } xy + x - 4y = 14$$",
                                "feedback": "In Part (a), you probably made a mistake with index division laws. Dividing $2^t$ by $2^{-t}$ yields $2^{t - (-t)} = 2^{2t}$ rather than $2^t$. Part (b) is correct."
                        },
                        {
                                "ans": "$$\\text{(a) } \\dfrac{dy}{dx} = -\\dfrac{5}{2} \\times 2^{2t},$$ $$\\text{(b) } xy - 4x + y = 14$$",
                                "feedback": "In Part (b), you probably made a sign error when expanding $(y + 1)(x - 4) = 10$. The expansion yields $xy - 4y + x - 4 = 10$, which rearranges to $xy + x - 4y = 14$. Part (a) is correct."
                        },
                        {
                                "ans": "$$\\text{(a) } \\dfrac{dy}{dx} = \\dfrac{5}{2} \\times 2^{2t},$$ $$\\text{(b) } xy + x - 4y = 6$$",
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
                "group_id": "004091",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Differentiation",
                "topic": "Differentiation",
                "subtopic": [
                        "Parametric Differentiation",
                        "Parametric Equations"
                ],
                "img": false,
                "question": "A curve is defined by the parametric equations:<br>$$x = 3 \\times 3^{-t} + 2$$<br>$$y = 2 \\times 3^t - 4$$<br><br><strong>(a)</strong> Find an expression for $\\dfrac{dy}{dx}$<br><br><strong>(b)</strong> find the Cartesian equation of the curve in the form $xy + ax + by = c$, where $a$, $b$, and $c$ are integers.",
                "steps": [
                        "First, differentiate $y = 2 \\times 3^t - 4$ and $x = 3 \\times 3^{-t} + 2$ with respect to $t$: $$\\dfrac{dy}{dt} = 2 \\ln(3) 3^t$$ and $$\\dfrac{dx}{dt} = -3 \\ln(3) 3^{-t}$$",
                        "Next, use the chain rule, $$\\dfrac{dy}{dx} = \\dfrac{\\frac{dy}{dt}}{\\frac{dx}{dt}}$$, to obtain Part (a): \\begin{aligned}\\dfrac{dy}{dx} &= \\dfrac{2 \\ln(3) 3^t}{-3 \\ln(3) 3^{-t}} \\cr&= -\\dfrac{2}{3} \\times 3^{2t}\\end{aligned}",
                        "To find Part (b), rearrange the parametric equations to isolate the exponential terms: \\begin{aligned}3^{-t} &= \\dfrac{x-2}{3} \\cr3^t &= \\dfrac{3}{x-2}\\end{aligned}",
                        "Substitute this into the $y$ equation and expand: \\begin{aligned}y + 4 &= 2 \\times \\dfrac{3}{x-2} \\cr(y + 4)(x - 2) &= 6 \\cr xy + 4x - 2y &= 14\\end{aligned}",
                        "Final Answer: \\begin{aligned}\\text{(a) } \\dfrac{dy}{dx} &= -\\dfrac{2}{3} \\times 3^{2t},\\cr\\text{(b) } xy + 4x - 2y &= 14\\end{aligned}"
                ],
                "pi_options": [
                        {
                                "ans": "$$\\text{(a) } \\dfrac{dy}{dx} = -\\dfrac{2}{3} \\times 3^{t},$$ $$\\text{(b) } xy + 4x - 2y = 14$$",
                                "feedback": "In Part (a), you probably made an index error during division. Since $3^t \\div 3^{-t} = 3^{t - (-t)} = 3^{2t}$, the power of the exponential term becomes $2t$. Part (b) is correct."
                        },
                        {
                                "ans": "$$\\text{(a) } \\dfrac{dy}{dx} = -\\dfrac{2}{3} \\times 3^{2t},$$ $$\\text{(b) } xy - 2x + 4y = 14$$",
                                "feedback": "In Part (b), you probably made a sign error or transposed the coefficients when expanding $(y + 4)(x - 2) = 6$. The correct expansion yields $xy - 2y + 4x - 8 = 6$, which simplifies to $xy + 4x - 2y = 14$. Part (a) is correct."
                        },
                        {
                                "ans": "$$\\text{(a) } \\dfrac{dy}{dx} = \\dfrac{2}{3} \\times 3^{2t},$$ $$\\text{(b) } xy + 4x - 2y = 6$$",
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
                "group_id": "004091",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Differentiation",
                "topic": "Differentiation",
                "subtopic": [
                        "Parametric Differentiation",
                        "Parametric Equations"
                ],
                "img": false,
                "question": "A curve is defined by the parametric equations:<br>$$x = 5 \\times 2^{-t} + 1$$<br>$$y = 4 \\times 2^t - 3$$<br><br><strong>(a)</strong> Find an expression for $\\dfrac{dy}{dx}$<br><br><strong>(b)</strong> find the Cartesian equation of the curve in the form $xy + ax + by = c$, where $a$, $b$, and $c$ are integers.",
                "steps": [
                        "First, differentiate $y = 4 \\times 2^t - 3$ and $x = 5 \\times 2^{-t} + 1$ with respect to $t$: $$\\dfrac{dy}{dt} = 4 \\ln(2) 2^t$$ and $$\\dfrac{dx}{dt} = -5 \\ln(2) 2^{-t}$$",
                        "Next, use the chain rule, $$\\dfrac{dy}{dx} = \\dfrac{\\frac{dy}{dt}}{\\frac{dx}{dt}}$$, to obtain Part (a): \\begin{aligned}\\dfrac{dy}{dx} &= \\dfrac{4 \\ln(2) 2^t}{-5 \\ln(2) 2^{-t}} \\cr&= -\\dfrac{4}{5} \\times 2^{2t}\\end{aligned}",
                        "To find Part (b), rearrange the parametric equations to isolate the exponential terms: \\begin{aligned}2^{-t} &= \\dfrac{x-1}{5} \\cr2^t &= \\dfrac{5}{x-1}\\end{aligned}",
                        "Substitute this into the $y$ equation and expand: \\begin{aligned}y + 3 &= 4 \\times \\dfrac{5}{x-1} \\cr(y + 3)(x - 1) &= 20 \\cr xy + 3x - y &= 23\\end{aligned}",
                        "Final Answer: \\begin{aligned}\\text{(a) } \\dfrac{dy}{dx} &= -\\dfrac{4}{5} \\times 2^{2t},\\cr \\text{(b) } xy + 3x - y r&= 23\\end{aligned}"
                ],
                "pi_options": [
                        {
                                "ans": "$$\\text{(a) } \\dfrac{dy}{dx} = -\\dfrac{4}{5} \\times 2^{t},$$ $$\\text{(b) } xy + 3x - y = 23$$",
                                "feedback": "In Part (a), you probably made an index calculation slip during division. Dividing $2^t$ by $2^{-t}$ results in $2^{t - (-t)} = 2^{2t}$, not $2^t$. Part (b) is correct."
                        },
                        {
                                "ans": "$$\\text{(a) } \\dfrac{dy}{dx} = -\\dfrac{4}{5} \\times 2^{2t},$$ $$\\text{(b) } xy + 3x - y = 17$$",
                                "feedback": "In Part (b), you probably made a sign error when expanding $(y + 3)(x - 1) = 20$. The expansion yields $xy - y + 3x - 3 = 20$, which rearranges to $xy + 3x - y = 23$. Part (a) is correct."
                        },
                        {
                                "ans": "$$\\text{(a) } \\dfrac{dy}{dx} = \\dfrac{4}{5} \\times 2^{2t},$$ $$\\text{(b) } xy - y + 3x = 17$$",
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
                "group_id": "004091",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Differentiation",
                "topic": "Differentiation",
                "subtopic": [
                        "Parametric Differentiation",
                        "Parametric Equations"
                ],
                "img": false,
                "question": "A curve is defined by the parametric equations:<br>$$x = 2 \\times 3^{-t} + 5$$<br>$$y = 4 \\times 3^t - 1$$<br><br><strong>(a)</strong> Find an expression for $\\dfrac{dy}{dx}$<br><br><strong>(b)</strong> find the Cartesian equation of the curve in the form $xy + ax + by = c$, where $a$, $b$, and $c$ are integers.",
                "steps": [
                        "First, differentiate $y = 4 \\times 3^t - 1$ and $x = 2 \\times 3^{-t} + 5$ with respect to $t$: $$\\dfrac{dy}{dt} = 4 \\ln(3) 3^t$$ and $$\\dfrac{dx}{dt} = -2 \\ln(3) 3^{-t}$$",
                        "Next, use the chain rule, $$\\dfrac{dy}{dx} = \\dfrac{\\frac{dy}{dt}}{\\frac{dx}{dt}}$$, to obtain Part (a): \\begin{aligned}\\dfrac{dy}{dx} &= \\dfrac{4 \\ln(3) 3^t}{-2 \\ln(3) 3^{-t}} \\cr&= -2 \\times 3^{2t}\\end{aligned}",
                        "To find Part (b), rearrange the parametric equations to isolate the exponential terms: \\begin{aligned}3^{-t} &= \\dfrac{x-5}{2} \\cr3^t &= \\dfrac{2}{x-5}\\end{aligned}",
                        "Substitute this into the $y$ equation and expand: \\begin{aligned}y + 1 &= 4 \\times \\dfrac{2}{x-5} \\cr(y + 1)(x - 5) &= 8 \\cr xy + x - 5y &= 13\\end{aligned}",
                        "Final Answer: \\begin{aligned}\\text{(a) } \\dfrac{dy}{dx} &= -2 \\times 3^{2t}, \\cr \\text{(b) } xy + x - 5y &= 13\\end{aligned}"
                ],
                "pi_options": [
                        {
                                "ans": "$$\\text{(a) } \\dfrac{dy}{dx} = -2 \\times 3^{t},$$ $$\\text{(b) } xy + x - 5y = 13$$",
                                "feedback": "In Part (a), you probably made an index division error. Since $3^t \\div 3^{-t} = 3^{t - (-t)} = 3^{2t}$, the exponent must be $2t$. Part (b) is correct."
                        },
                        {
                                "ans": "$$\\text{(a) } \\dfrac{dy}{dx} = -2 \\times 3^{2t},$$ $$\\text{(b) } xy + x - 5y = 3$$",
                                "feedback": "In Part (b), you probably made a sign error when expanding $(y + 1)(x - 5) = 8$. The expansion yields $xy - 5y + x - 5 = 8$, which simplifies to $xy + x - 5y = 13$. Part (a) is correct."
                        },
                        {
                                "ans": "$$\\text{(a) } \\dfrac{dy}{dx} = 2 \\times 3^{2t},$$ $$\\text{(b) } xy + x - 5y = 3$$",
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
                "group_id": "004091",
                "board": "AQA",
                "branch": "Pure",
                "level": "A",
                "major_area": "Differentiation",
                "topic": "Differentiation",
                "subtopic": [
                        "Parametric Differentiation",
                        "Parametric Equations"
                ],
                "img": false,
                "question": "A curve is defined by the parametric equations:<br>$$x = 3 \\times 2^{-t} + 2$$<br>$$y = 2 \\times 2^t - 6$$<br><br><strong>(a)</strong> Find an expression for $\\dfrac{dy}{dx}$<br><br><strong>(b)</strong> find the Cartesian equation of the curve in the form $xy + ax + by = c$, where $a$, $b$, and $c$ are integers.",
                "steps": [
                        "First, differentiate $y = 2 \\times 2^t - 6$ and $x = 3 \\times 2^{-t} + 2$ with respect to $t$: $$\\dfrac{dy}{dt} = 2 \\ln(2) 2^t$$ and $$\\dfrac{dx}{dt} = -3 \\ln(2) 2^{-t}$$",
                        "Next, use the chain rule, $$\\dfrac{dy}{dx} = \\dfrac{\\frac{dy}{dt}}{\\frac{dx}{dt}}$$, to obtain Part (a): \\begin{aligned}\\dfrac{dy}{dx} &= \\dfrac{2 \\ln(2) 2^t}{-3 \\ln(2) 2^{-t}} \\cr&= -\\dfrac{2}{3} \\times 2^{2t}\\end{aligned}",
                        "To find Part (b), rearrange the parametric equations to isolate the exponential terms: \\begin{aligned}2^{-t} &= \\dfrac{x-2}{3} \\cr2^t &= \\dfrac{3}{x-2}\\end{aligned}",
                        "Substitute this into the $y$ equation and expand: \\begin{aligned}y + 6 &= 2 \\times \\dfrac{3}{x-2} \\cr(y + 6)(x - 2) &= 6 \\cr xy + 6x - 2y &= 18\\end{aligned}",
                        "Final Answer: \\begin{aligned}\\text{(a) } \\dfrac{dy}{dx} &= -\\dfrac{2}{3} \\times 2^{2t},\\cr \\text{(b) } xy + 6x - 2y &= 18\\end{aligned}"
                ],
                "pi_options": [
                        {
                                "ans": "$$\\text{(a) } \\dfrac{dy}{dx} = -\\dfrac{2}{3} \\times 2^{t},$$ $$\\text{(b) } xy + 6x - 2y = 18$$",
                                "feedback": "In Part (a), you probably made an index division error. Since $2^t \\div 2^{-t} = 2^{t - (-t)} = 2^{2t}$, the exponent must be $2t$. Part (b) is correct."
                        },
                        {
                                "ans": "$$\\text{(a) } \\dfrac{dy}{dx} = -\\dfrac{2}{3} \\times 2^{2t},$$ $$\\text{(b) } xy + 6x - 2y = 6$$",
                                "feedback": "In Part (b), you probably made a sign error when expanding $(y + 6)(x - 2) = 6$. The expansion yields $xy - 2y + 6x - 12 = 6$, which simplifies to $xy + 6x - 2y = 18$. Part (a) is correct."
                        },
                        {
                                "ans": "$$\\text{(a) } \\dfrac{dy}{dx} = \\dfrac{2}{3} \\times 2^{2t},$$ $$\\text{(b) } xy - 2y + 6x = 6$$",
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
        "group_id": "004096",
        "board": "AQA",
        "branch": "Pure",
        "level": "A",
        "major_area": "Sequences and Series",
        "topic": "Binomial Expansion",
        "subtopic": [
                "Binomial Expansion",
                "Numerical Integration"
        ],
        "img": false,
        "question": "(a) Find the first three terms, in ascending powers of $x$, of the binomial expansion of $\\dfrac{1}{\\sqrt{9+x}}$.<br><br>(b) Hence, find the first three terms of the binomial expansion of $\\dfrac{1}{\\sqrt{9-x^3}}$.<br><br>(c) Using your answer to part (b), find an approximation for $\\int_{0}^{1} \\dfrac{1}{\\sqrt{9-x^3}} \\text{d}x$, giving your answer to seven decimal places.<br><br>(d) (i) Tom, a student, decides to use this method to find a more accurate value for the integral by increasing the number of terms of the binomial expansion used. Explain clearly whether Tom's approximation will be an overestimate, an underestimate, or if it is impossible to tell.<br><br>(d) (ii) Tom goes on to use the expansion from part (b) to find an approximation for $\\int_{-3}^{0} \\dfrac{1}{\\sqrt{9-x^3}} \\text{d}x$. Explain why Tom's approximation is invalid.",
        "steps": [
                "For Part (a), rewrite the function in index form, factor out $9$, and let the expansion be $E$:<br><br>\\begin{aligned} E &= ( 9 + x )^{-\\frac{ 1 }{ 2 }} \\cr &= 9^{-\\frac{ 1 }{ 2 }}\\left(1 + \\dfrac{ x }{ 9 }\\right)^{-\\frac{ 1 }{ 2 }} \\cr &= \\dfrac{ 1 }{ 3 }\\left(1 - \\dfrac{ 1 }{ 2 }\\left(\\dfrac{ x }{ 9 }\\right) + \\dfrac{ 3 }{ 8 }\\left(\\dfrac{ x }{ 9 }\\right)^2 + \\dots\\right) \\cr &= \\dfrac{ 1 }{ 3 } - \\dfrac{ x }{ 54 } + \\dfrac{ x^2 }{ 648 } \\end{aligned}",
                "For Part (b), substitute $x \\implies -x^3$ into your Part (a) expansion, and let the new expansion be $F$:<br><br>\\begin{aligned} F &= \\dfrac{ 1 }{ \\sqrt{ 9 - x^3 }} \\cr &= \\dfrac{ 1 }{ 3 } - \\dfrac{ -x^3 }{ 54 } + \\dfrac{ (-x^3)^2 }{ 648 } \\cr &= \\dfrac{ 1 }{ 3 } + \\dfrac{ x^3 }{ 54 } + \\dfrac{ x^6 }{ 648 } \\end{aligned}",
                "For Part (c), let the integral be $I$. We integrate the polynomial approximation from $0$ to $1$:<br><br>\\begin{aligned} I &= \\int_{ 0 }^{ 1 } \\left(\\dfrac{ 1 }{ 3 } + \\dfrac{ x^3 }{ 54 } + \\dfrac{ x^6 }{ 648 }\\right) \\mathrm{d}x \\cr &= \\left[\\dfrac{ x }{ 3 } + \\dfrac{ x^4 }{ 216 } + \\dfrac{ x^7 }{ 4536 }\\right]_{ 0 }^{ 1 } \\cr &= \\dfrac{ 1 }{ 3 } + \\dfrac{ 1 }{ 216 } + \\dfrac{ 1 }{ 4536 } \\cr &\\approx 0.3381834 \\end{aligned}",
                "For Part (d)(i), notice that since $u = \\dfrac{ x^3 }{ 9 } \\ge 0$ on the interval $[0, 1]$, every term in the binomial series for $( 1 - u )^{-\\frac{ 1 }{ 2 }}$ is positive. Truncating the series removes positive terms, so Tom's approximation is an underestimate.",
                "For Part (d)(ii), the expansion converges only for \\begin{aligned}|u| &< 1 \\cr \\implies \\left|\\dfrac{ x^3 }{ 9 }\\right| &< 1\\cr \\implies |x| &< 9^{\\frac{ 1 }{ 3 }}\\cr &\\approx 2.08\\end{aligned}  Since the lower limit is $x = -3$ and $| -3 | = 3 \\ge 2.08$, the series does not converge on this interval.",
                "<strong>Final Answer:</strong><br><br>\\begin{aligned} \\text{Part (b):} & \\quad \\dfrac{ 1 }{ 3 } + \\dfrac{ x^3 }{ 54 } + \\dfrac{ x^6 }{ 648 } \\cr \\text{Part (c):} & \\quad 0.3381834 \\cr \\text{Part (d)(i):} & \\quad \\text{Underestimate} \\end{aligned}"
        ],
        "pi_options": [
                {
                        "ans": "$\\begin{aligned} \\text{Part (b):} & \\quad \\dfrac{ 1 }{ 3 } - \\dfrac{ x^3 }{ 54 } + \\dfrac{ x^6 }{ 648 } \\cr \\text{Part (c):} & \\quad 0.3289243 \\cr \\text{Part (d)(i):} & \\quad \\text{Underestimate} \\end{aligned}$",
                        "feedback": "In Part (b), you probably made a sign error when substituting $-x^3$ into the expansion. Since we are substituting into $-\\dfrac{ x }{ 54 }$, we get $-\\dfrac{ -x^3 }{ 54 } = +\\dfrac{ x^3 }{ 54 }$. This also affects the integral in Part (c)."
                },
                {
                        "ans": "$\\begin{aligned} \\text{Part (b):} & \\quad \\dfrac{ 1 }{ 3 } + \\dfrac{ x^3 }{ 54 } + \\dfrac{ x^6 }{ 648 } \\cr \\text{Part (c):} & \\quad 0.3381834 \\cr \\text{Part (d)(i):} & \\quad \\text{Overestimate} \\end{aligned}$",
                        "feedback": "In Part (d)(i), you probably assumed that adding more positive terms makes the approximation an overestimate. However, since all terms in the series are positive, truncating after finitely many terms leaves out positive values, meaning the approximation is smaller than the true value (an underestimate)."
                },
                {
                        "ans": "$\\begin{aligned} \\text{Part (b):} & \\quad \\dfrac{ 1 }{ 3 } + \\dfrac{ x^3 }{ 54 } - \\dfrac{ x^6 }{ 648 } \\cr \\text{Part (c):} & \\quad 0.3377425 \\cr \\text{Part (d)(i):} & \\quad \\text{Underestimate} \\end{aligned}$",
                        "feedback": "Check your signs in Part (b). Substituting $-x^3$ into the third term $+\\dfrac{ x^2 }{ 648 }$ gives $+\\dfrac{ (-x^3)^2 }{ 648 } = +\\dfrac{ x^6 }{ 648 }$. Both terms must be positive, which also affects your integration in Part (c)."
                }
        ],
        "bradley_insight": {
                "type": "caution",
                "title": "The Head Teacher's Eye: Substituting Negative Powers",
                "content": "When substituting $-x^3$ into the expansion of $( 9 + x )^{-\\frac{ 1 }{ 2 }}$, pay close attention to the sign changes. For the $x$ term, we get $-\\dfrac{ -x^3 }{ 54 } = +\\dfrac{ x^3 }{ 54 }$, but for the $x^2$ term, the square removes the negative sign: $+(-x^3)^2/648 = +\\dfrac{ x^6 }{ 648 }$. Missing these sign reversals is a very common way to lose easy marks on this question."
        }
},
       {
        "id": "004097",
        "group_id": "004096",
        "board": "AQA",
        "branch": "Pure",
        "level": "A",
        "major_area": "Sequences and Series",
        "topic": "Binomial Expansion",
        "subtopic": [
                "Binomial Expansion",
                "Numerical Integration"
        ],
        "img": false,
        "question": "(a) Find the first three terms, in ascending powers of $x$, of the binomial expansion of $\\dfrac{1}{\\sqrt{1+x}}$.<br><br>(b) Hence, find the first three terms of the binomial expansion of $\\dfrac{1}{\\sqrt{1-x^2}}$.<br><br>(c) Using your answer to part (b), find an approximation for $\\int_{0}^{0.5} \\dfrac{1}{\\sqrt{1-x^2}} \\text{d}x$, giving your answer to seven decimal places.<br><br>(d) (i) Sarah, a student, decides to use this method to find a more accurate value for the integral by increasing the number of terms of the binomial expansion used. Explain clearly whether Sarah's approximation will be an overestimate, an underestimate, or if it is impossible to tell.<br><br>(d) (ii) Sarah goes on to use the expansion from part (b) to find an approximation for $\\int_{-2}^{0} \\dfrac{1}{\\sqrt{1-x^2}} \\text{d}x$. Explain why Sarah's approximation is invalid.<br><br><strong>Note:</strong> Select the option that matches your calculated results for <strong>Part (b)</strong>, <strong>Part (c)</strong>, and <strong>Part (d)(i)</strong>.",
        "steps": [
                "For Part (a), rewrite the function in index form and expand using $( 1 + x )^{-\\frac{ 1 }{ 2 }}$:<br><br>\\begin{aligned} &( 1 + x )^{-\\frac{ 1 }{ 2 }} \\cr &\\quad = 1 + \\left(-\\dfrac{ 1 }{ 2 }\\right)x\\cr & \\quad + \\dfrac{ \\left(-\\dfrac{ 1 }{ 2 }\\right)\\left(-\\dfrac{ 3 }{ 2 }\\right) }{ 2 }x^2 + \\dots \\cr &\\quad = 1 - \\dfrac{ 1 }{ 2 }x + \\dfrac{ 3 }{ 8 }x^2 \\end{aligned}",
                "For Part (b), substitute $x \\implies -x^2$ into your Part (a) expansion:<br><br>\\begin{aligned} &\\dfrac{ 1 }{ \\sqrt{ 1 - x^2 }} \\cr &\\quad = 1 - \\dfrac{ 1 }{ 2 }(-x^2) + \\dfrac{ 3 }{ 8 }(-x^2)^2 \\cr &\\quad = 1 + \\dfrac{ 1 }{ 2 }x^2 + \\dfrac{ 3 }{ 8 }x^4 \\end{aligned}",
                "For Part (c), integrate this polynomial approximation from $0$ to $0.5$:<br><br>\\begin{aligned} &\\int_{ 0 }^{ 0.5 } \\left(1 + \\dfrac{ 1 }{ 2 }x^2 + \\dfrac{ 3 }{ 8 }x^4\\right) \\mathrm{d}x \\cr &\\quad = \\left[x + \\dfrac{ x^3 }{ 6 } + \\dfrac{ 3x^5 }{ 40 }\\right]_{ 0 }^{ 0.5 } \\cr &\\quad = 0.5 + \\dfrac{ 0.125 }{ 6 } + \\dfrac{ 0.09375 }{ 40 } \\cr &\\quad \\approx 0.5231771 \\end{aligned}",
                "For Part (d)(i), notice that since $u = x^2 \\ge 0$ on the interval $[0, 0.5]$, every term in the binomial series for $( 1 - u )^{-\\frac{ 1 }{ 2 }}$ is positive. Truncating the series removes positive terms, so Sarah's approximation is an underestimate.",
                "For Part (d)(ii), the expansion converges only for \\begin{aligned}|u| & < 1 \\cr \\implies |x^2| & < 1 \\cr \\implies |x| &< 1\\end{aligned} Since the lower limit is $x = -2$ and $| -2 | = 2 \\ge 1$, the series does not converge on this interval.",
                "<strong>Final Answer:</strong><br><br>\\begin{aligned} \\text{Part (b):} & \\quad 1 + \\dfrac{ 1 }{ 2 }x^2 + \\dfrac{ 3 }{ 8 }x^4 \\cr \\text{Part (c):} & \\quad 0.5231771 \\cr \\text{Part (d)(i):} & \\quad \\text{Underestimate} \\end{aligned}"
        ],
        "pi_options": [
                {
                        "ans": "$\\begin{aligned} \\text{Part (b):} & \\quad 1 - \\dfrac{ 1 }{ 2 }x^2 + \\dfrac{ 3 }{ 8 }x^4 \\cr \\text{Part (c):} & \\quad 0.4815104 \\cr \\text{Part (d)(i):} & \\quad \\text{Underestimate} \\end{aligned}$",
                        "feedback": "In Part (b), you probably made a sign error when substituting $-x^2$ into the expansion. Substituting into $-\\dfrac{ x }{ 2 }$ yields $-\\dfrac{ -x^2 }{ 2 } = +\\dfrac{ x^2 }{ 2 }$. This also affects the integral calculation in Part (c)."
                },
                {
                        "ans": "$\\begin{aligned} \\text{Part (b):} & \\quad 1 + \\dfrac{ 1 }{ 2 }x^2 + \\dfrac{ 3 }{ 8 }x^4 \\cr \\text{Part (c):} & \\quad 0.5231771 \\cr \\text{Part (d)(i):} & \\quad \\text{Overestimate} \\end{aligned}$",
                        "feedback": "In Part (d)(i), you probably assumed that adding more positive terms makes the approximation an overestimate. However, since all terms in the series are positive, truncating after finitely many terms leaves out positive values, meaning the approximation is smaller than the true value (an underestimate)."
                },
                {
                        "ans": "$\\begin{aligned} \\text{Part (b):} & \\quad 1 + \\dfrac{ 1 }{ 2 }x^2 - \\dfrac{ 3 }{ 8 }x^4 \\cr \\text{Part (c):} & \\quad 0.5184896 \\cr \\text{Part (d)(i):} & \\quad \\text{Underestimate} \\end{aligned}$",
                        "feedback": "Check your signs in Part (b). Substituting $-x^2$ into $+\\dfrac{ 3x^2 }{ 8 }$ yields $+\\dfrac{ 3(-x^2)^2 }{ 8 } = +\\dfrac{ 3x^4 }{ 8 }$. Both terms must be positive, which also affects your integration in Part (c)."
                }
        ],
        "bradley_insight": {
                "type": "pro-tip",
                "title": "The Head Teacher's Eye: Quick Integration Checks",
                "content": "When integrating your binomial expansion, remember to increase the power of each term and divide by the new power. For example, integrating $x^4$ gives $\\dfrac{ x^5 }{ 5 }$. It is probably easiest to write down each coefficient product clearly on your page before simplifying, as this prevents simple mental multiplication slips."
        }
},
        {
        "id": "004098",
        "group_id": "004096",
        "board": "AQA",
        "branch": "Pure",
        "level": "A",
        "major_area": "Sequences and Series",
        "topic": "Binomial Expansion",
        "subtopic": [
                "Binomial Expansion",
                "Numerical Integration"
        ],
        "img": false,
        "question": "(a) Find the first three terms, in ascending powers of $x$, of the binomial expansion of $\\dfrac{1}{\\sqrt{16+x}}$.<br><br>(b) Hence, find the first three terms of the binomial expansion of $\\dfrac{1}{\\sqrt{16-x^3}}$.<br><br>(c) Using your answer to part (b), find an approximation for $\\int_{0}^{1} \\dfrac{1}{\\sqrt{16-x^3}} \\text{d}x$, giving your answer to seven decimal places.<br><br>(d) (i) Ranjit, a student, decides to use this method to find a more accurate value for the integral by increasing the number of terms of the binomial expansion used. Explain clearly whether Ranjit's approximation will be an overestimate, an underestimate, or if it is impossible to tell.<br><br>(d) (ii) Ranjit goes on to use the expansion from part (b) to find an approximation for $\\int_{-3}^{0} \\dfrac{1}{\\sqrt{16-x^3}} \\text{d}x$. Explain why Ranjit's approximation is invalid.<br><br><strong>Note:</strong> Select the option that matches your calculated results for <strong>Part (b)</strong>, <strong>Part (c)</strong>, and <strong>Part (d)(i)</strong>.",
        "steps": [
                "For Part (a), rewrite the function in index form and expand using $( 16 + x )^{-\\frac{ 1 }{ 2 }}$:<br><br>\\begin{aligned} &( 16 + x )^{-\\frac{ 1 }{ 2 }} \\cr &\\quad = 16^{-\\frac{ 1 }{ 2 }}\\left(1 + \\dfrac{ x }{ 16 }\\right)^{-\\frac{ 1 }{ 2 }} \\cr &\\quad = \\dfrac{ 1 }{ 4 }\\left[1 - \\dfrac{ 1 }{ 2 }\\left(\\dfrac{ x }{ 16 }\\right) + \\dfrac{ 3 }{ 8 }\\left(\\dfrac{ x }{ 16 }\\right)^2 + \\dots\\right] \\cr &\\quad = \\dfrac{ 1 }{ 4 } - \\dfrac{ x }{ 128 } + \\dfrac{ 3x^2 }{ 8192 } \\end{aligned}",
                "For Part (b), substitute $x \\implies -x^3$ into your Part (a) expansion:<br><br>\\begin{aligned} &\\dfrac{ 1 }{ \\sqrt{ 16 - x^3 }} \\cr &\\quad = \\dfrac{ 1 }{ 4 } - \\dfrac{ -x^3 }{ 128 } + \\dfrac{ 3(-x^3)^2 }{ 8192 } \\cr &\\quad = \\dfrac{ 1 }{ 4 } + \\dfrac{ x^3 }{ 128 } + \\dfrac{ 3x^6 }{ 8192 } \\end{aligned}",
                "For Part (c), integrate this polynomial approximation from $0$ to $1$:<br><br>\\begin{aligned} &\\int_{ 0  }^{ 1 } \\left(\\dfrac{ 1 }{ 4 } + \\dfrac{ x^3 }{ 128 } + \\dfrac{ 3x^6 }{ 8192 }\\right) \\mathrm{d}x \\cr &\\quad = \\left[\\dfrac{ x }{ 4 } + \\dfrac{ x^4 }{ 512 } + \\dfrac{ 3x^7 }{ 57344 }\\right]_{ 0 }^{ 1 } \\cr &\\quad = \\dfrac{ 1 }{ 4 } + \\dfrac{ 1 }{ 512 } + \\dfrac{ 3 }{ 57344 } \\cr &\\quad \\approx 0.2520054 \\end{aligned}",
                "For Part (d)(i), notice that since $u = \\dfrac{ x^3 }{ 16 } \\ge 0$ on the interval $[0, 1]$, every term in the binomial series for $( 1 - u )^{-\\frac{ 1 }{ 2 }}$ is positive. Truncating the series removes positive terms, so Ranjit's approximation is an underestimate.",
                "For Part (d)(ii), the expansion converges only for \\begin{aligned}|u| &< 1 \\cr \\implies \\left|\\dfrac{ x^3 }{ 16 }\\right| &< 1 \\cr\\implies |x| &< 16^{\\frac{ 1 }{ 3 }} \\cr &\\approx 2.52\\end{aligned} Since the lower limit is $x = -3$ and $| -3 | = 3 \\ge 2.52$, the series does not converge on this interval.",
                "<strong>Final Answer:</strong><br><br>\\begin{aligned} \\text{Part (b):} & \\quad \\dfrac{ 1 }{ 4 } + \\dfrac{ x^3 }{ 128 } + \\dfrac{ 3x^6 }{ 8192 } \\cr \\text{Part (c):} & \\quad 0.2520054 \\cr \\text{Part (d)(i):} & \\quad \\text{Underestimate} \\end{aligned}"
        ],
        "pi_options": [
                {
                        "ans": "$\\begin{aligned} \\text{Part (b):} & \\quad \\dfrac{ 1 }{ 4 } - \\dfrac{ x^3 }{ 128 } + \\dfrac{ 3x^6 }{ 8192 } \\cr \\text{Part (c):} & \\quad 0.2481023 \\cr \\text{Part (d)(i):} & \\quad \\text{Underestimate} \\end{aligned}$",
                        "feedback": "In Part (b), you probably made a sign error when substituting $-x^3$ into the expansion. Substituting into $-\\dfrac{ x }{ 128 }$ yields $-\\dfrac{ -x^3 }{ 128 } = +\\dfrac{ x^3 }{ 128 }$. This also affects the integral calculation in Part (c)."
                },
                {
                        "ans": "$\\begin{aligned} \\text{Part (b):} & \\quad \\dfrac{ 1 }{ 4 } + \\dfrac{ x^3 }{ 128 } + \\dfrac{ 3x^6 }{ 8192 } \\cr \\text{Part (c):} & \\quad 0.2520054 \\cr \\text{Part (d)(i):} & \\quad \\text{Overestimate} \\end{aligned}$",
                        "feedback": "In Part (d)(i), you probably assumed that adding more positive terms makes the approximation an overestimate. However, since all terms in the series are positive, truncating after finitely many terms leaves out positive values, meaning the approximation is smaller than the true value (an underestimate)."
                },
                {
                        "ans": "$\\begin{aligned} \\text{Part (b):} & \\quad \\dfrac{ 1 }{ 4 } + \\dfrac{ x^3 }{ 128 } - \\dfrac{ 3x^6 }{ 8192 } \\cr \\text{Part (c):} & \\quad 0.2519008 \\cr \\text{Part (d)(i):} & \\quad \\text{Underestimate} \\end{aligned}$",
                        "feedback": "Check your signs in Part (b). Substituting $-x^3$ into the third term yields $+\\dfrac{ 3(-x^3)^2 }{ 8192 } = +\\dfrac{ 3x^6 }{ 8192 }$. Both terms must be positive, which also affects your integration in Part (c)."
                }
        ],
        "bradley_insight": {
                "type": "deeper",
                "title": "The Head Teacher's Eye: Understanding Convergence Boundaries",
                "content": "The validity range of a binomial expansion is defined by $|u| < 1$, where $u$ is the variable component. For the term $\\dfrac{ x^3 }{ 16 }$, this gives $\\left|\\dfrac{ x^3 }{ 16 }\\right| < 1 \\implies |x| < 16^{\\frac{ 1 }{ 3 }} \\approx 2.52$. When the lower limit of our integral lies outside this boundary (such as $x = -3$), the series fails to converge and is completely invalid, even if the original algebraic expression is defined there."
        }
},
        {
        "id": "004099",
        "group_id": "004096",
        "board": "AQA",
        "branch": "Pure",
        "level": "A",
        "major_area": "Sequences and Series",
        "topic": "Binomial Expansion",
        "subtopic": [
                "Binomial Expansion",
                "Numerical Integration"
        ],
        "img": false,
        "question": "(a) Find the first three terms, in ascending powers of $x$, of the binomial expansion of $\\dfrac{1}{\\sqrt{25+x}}$.<br><br>(b) Hence, find the first three terms of the binomial expansion of $\\dfrac{1}{\\sqrt{25-x^3}}$.<br><br>(c) Using your answer to part (b), find an approximation for $\\int_{0}^{1} \\dfrac{1}{\\sqrt{25-x^3}} \\text{d}x$, giving your answer to seven decimal places.<br><br>(d) (i) Jeevesh, a student, decides to use this method to find a more accurate value for the integral by increasing the number of terms of the binomial expansion used. Explain clearly whether Jeevesh's approximation will be an overestimate, an underestimate, or if it is impossible to tell.<br><br>(d) (ii) Jeevesh goes on to use the expansion from part (b) to find an approximation for $\\int_{-4}^{0} \\dfrac{1}{\\sqrt{25-x^3}} \\text{d}x$. Explain why Jeevesh's approximation is invalid.<br><br><strong>Note:</strong> Select the option that matches your calculated results for <strong>Part (b)</strong>, <strong>Part (c)</strong>, and <strong>Part (d)(i)</strong>.",
        "steps": [
                "For Part (a), rewrite the function in index form and expand using $( 25 + x )^{-\\frac{ 1 }{ 2 }}$:<br><br>\\begin{aligned} &( 25 + x )^{-\\frac{ 1 }{ 2 }} \\cr &\\quad = 25^{-\\frac{ 1 }{ 2 }}\\left(1 + \\dfrac{ x }{ 25 }\\right)^{-\\frac{ 1 }{ 2 }} \\cr &\\quad = \\dfrac{ 1 }{ 5 }\\left[1 - \\dfrac{ 1 }{ 2 }\\left(\\dfrac{ x }{ 25 }\\right) + \\dfrac{ 3 }{ 8 }\\left(\\dfrac{ x }{ 25 }\\right)^2 + \\dots\\right] \\cr &\\quad = \\dfrac{ 1 }{ 5 } - \\dfrac{ x }{ 250 } + \\dfrac{ 3x^2 }{ 25000 } \\end{aligned}",
                "For Part (b), substitute $x \\implies -x^3$ into your Part (a) expansion:<br><br>\\begin{aligned} &\\dfrac{ 1 }{ \\sqrt{ 25 - x^3 }} \\cr &\\quad = \\dfrac{ 1 }{ 5 } - \\dfrac{ -x^3 }{ 250 } + \\dfrac{ 3(-x^3)^2 }{ 25000 } \\cr &\\quad = \\dfrac{ 1 }{ 5 } + \\dfrac{ x^3 }{ 250 } + \\dfrac{ 3x^6 }{ 25000 } \\end{aligned}",
                "For Part (c), integrate this polynomial approximation from $0$ to $1$:<br><br>\\begin{aligned} &\\int_{ 0 }^{ 1 } \\left(\\dfrac{ 1 }{ 5 } + \\dfrac{ x^3 }{ 250 } + \\dfrac{ 3x^6 }{ 25000 }\\right) \\mathrm{d}x \\cr &\\quad = \\left[\\dfrac{ x }{ 5 } + \\dfrac{ x^4 }{ 1000 } + \\dfrac{ 3x^7 }{ 175000 }\\right]_{ 0 }^{ 1 } \\cr &\\quad = 0.2 + 0.001 + 0.0000171 \\cr &\\quad \\approx 0.2010171 \\end{aligned}",
                "For Part (d)(i), notice that since $u = \\dfrac{ x^3 }{ 25 } \\ge 0$ on the interval $[0, 1]$, every term in the binomial series for $( 1 - u )^{-\\frac{ 1 }{ 2 }}$ is positive. Truncating the series removes positive terms, so Jeevesh's approximation is an underestimate.",
                "For Part (d)(ii), the expansion converges only for \\begin{aligned}|u| &< 1\\cr \\implies \\left|\\dfrac{ x^3 }{ 25 }\\right|&< 1 \\cr \\implies |x| &< 25^{\\frac{ 1 }{ 3 }} \\cr &\\approx 2.92\\end{aligned} Since the lower limit is $x = -4$ and $| -4 | = 4 \\ge 2.92$, the series does not converge on this interval.",
                "<strong>Final Answer:</strong><br><br>\\begin{aligned} \\text{Part (b):} & \\quad \\dfrac{ 1 }{ 5 } + \\dfrac{ x^3 }{ 250 } + \\dfrac{ 3x^6 }{ 25000 } \\cr \\text{Part (c):} & \\quad 0.2010171 \\cr \\text{Part (d)(i):} & \\quad \\text{Underestimate} \\end{aligned}"
        ],
        "pi_options": [
                {
                        "ans": "$\\begin{aligned} \\text{Part (b):} & \\quad \\dfrac{ 1 }{ 5 } - \\dfrac{ x^3 }{ 250 } + \\dfrac{ 3x^6 }{ 25000 } \\cr \\text{Part (c):} & \\quad 0.1990171 \\cr \\text{Part (d)(i):} & \\quad \\text{Underestimate} \\end{aligned}$",
                        "feedback": "In Part (b), you probably made a sign error when substituting $-x^3$ into the expansion. Substituting into $-\\dfrac{ x }{ 250 }$ yields $-\\dfrac{ -x^3 }{ 250 } = +\\dfrac{ x^3 }{ 250 }$. This also affects the integral calculation in Part (c)."
                },
                {
                        "ans": "$\\begin{aligned} \\text{Part (b):} & \\quad \\dfrac{ 1 }{ 5 } + \\dfrac{ x^3 }{ 250 } + \\dfrac{ 3x^6 }{ 25000 } \\cr \\text{Part (c):} & \\quad 0.2010171 \\cr \\text{Part (d)(i):} & \\quad \\text{Overestimate} \\end{aligned}$",
                        "feedback": "In Part (d)(i), you probably assumed that adding more positive terms makes the approximation an overestimate. However, since all terms in the series are positive, truncating after finitely many terms leaves out positive values, meaning the approximation is smaller than the true value (an underestimate)."
                },
                {
                        "ans": "$\\begin{aligned} \\text{Part (b):} & \\quad \\dfrac{ 1 }{ 5 } + \\dfrac{ x^3 }{ 250 } - \\dfrac{ 3x^6 }{ 25000 } \\cr \\text{Part (c):} & \\quad 0.2009829 \\cr \\text{Part (d)(i):} & \\quad \\text{Underestimate} \\end{aligned}$",
                        "feedback": "Check your signs in Part (b). Substituting $-x^3$ into $+\\dfrac{ 3x^2 }{ 25000 }$ yields $+\\dfrac{ 3(-x^3)^2 }{ 25000 } = +\\dfrac{ 3x^6 }{ 25000 }$. Both terms must be positive, which also affects your integration in Part (c)."
                }
        ],
        "bradley_insight": {
                "type": "caution",
                "title": "The Head Teacher's Eye: Constant Factor Pitfalls",
                "content": "When expanding expressions like $( 25 + x )^{-\\frac{ 1 }{ 2 }}$, never forget to factor out the constant term first as $25^{-\\frac{ 1 }{ 2 }} = \\dfrac{ 1 }{ 5 }$. Many students write this factor as $5$ or completely forget to multiply it through the rest of the terms. Always write out the factorization step explicitly to prevent this classic slip."
        }
},
        {
        "id": "004100",
        "group_id": "004096",
        "board": "AQA",
        "branch": "Pure",
        "level": "A",
        "major_area": "Sequences and Series",
        "topic": "Binomial Expansion",
        "subtopic": [
                "Binomial Expansion",
                "Numerical Integration"
        ],
        "img": false,
        "question": "(a) Find the first three terms, in ascending powers of $x$, of the binomial expansion of $\\dfrac{1}{\\sqrt{4+x}}$.<br><br>(b) Hence, find the first three terms of the binomial expansion of $\\dfrac{1}{\\sqrt{4-x^4}}$.<br><br>(c) Using your answer to part (b), find an approximation for $\\int_{0}^{1} \\dfrac{1}{\\sqrt{4-x^4}} \\text{d}x$, giving your answer to seven decimal places.<br><br>(d) (i) Emma, a student, decides to use this method to find a more accurate value for the integral by increasing the number of terms of the binomial expansion used. Explain clearly whether Emma's approximation will be an overestimate, an underestimate, or if it is impossible to tell.<br><br>(d) (ii) Emma goes on to use the expansion from part (b) to find an approximation for $\\int_{-2}^{0} \\dfrac{1}{\\sqrt{4-x^4}} \\text{d}x$. Explain why Emma's approximation is invalid.<br><br><strong>Note:</strong> Select the option that matches your calculated results for <strong>Part (b)</strong>, <strong>Part (c)</strong>, and <strong>Part (d)(i)</strong>.",
        "steps": [
                "For Part (a), rewrite the function in index form and expand using $( 4 + x )^{-\\frac{ 1 }{ 2 }}$:<br><br>\\begin{aligned} &( 4 + x )^{-\\frac{ 1 }{ 2 }} \\cr &\\quad = 4^{-\\frac{ 1 }{ 2 }}\\left(1 + \\dfrac{ x }{ 4 }\\right)^{-\\frac{ 1 }{ 2 }} \\cr &\\quad = \\dfrac{ 1 }{ 2 }\\left[1 - \\dfrac{ 1 }{ 2 }\\left(\\dfrac{ x }{ 4 }\\right) + \\dfrac{ 3 }{ 8 }\\left(\\dfrac{ x }{ 4 }\\right)^2 + \\dots\\right] \\cr &\\quad = \\dfrac{ 1 }{ 2 } - \\dfrac{ x }{ 16 } + \\dfrac{ 3x^2 }{ 256 } \\end{aligned}",
                "For Part (b), substitute $x \\implies -x^4$ into your Part (a) expansion:<br><br>\\begin{aligned} &\\dfrac{ 1 }{ \\sqrt{ 4 - x^4 }} \\cr &\\quad = \\dfrac{ 1 }{ 2 } - \\dfrac{ -x^4 }{ 16 } + \\dfrac{ 3(-x^4)^2 }{ 256 } \\cr &\\quad = \\dfrac{ 1 }{ 2 } + \\dfrac{ x^4 }{ 16 } + \\dfrac{ 3x^8 }{ 256 } \\end{aligned}",
                "For Part (c), integrate this polynomial approximation from $0$ to $1$:<br><br>\\begin{aligned} &\\int_{ 0 }^{ 1 } \\left(\\dfrac{ 1 }{ 2 } + \\dfrac{ x^4 }{ 16 } + \\dfrac{ 3x^8 }{ 256 }\\right) \\mathrm{d}x \\cr &\\quad = \\left[\\dfrac{ x }{ 2 } + \\dfrac{ x^5 }{ 80 } + \\dfrac{ x^9 }{ 768 }\\right]_{ 0 }^{ 1 } \\cr &\\quad = \\dfrac{ 1 }{ 2 } + \\dfrac{ 1 }{ 80 } + \\dfrac{ 1 }{ 768 } \\cr &\\quad \\approx 0.5138021 \\end{aligned}",
                "For Part (d)(i), notice that since $u = \\dfrac{ x^4 }{ 4 } \\ge 0$ on the interval $[0, 1]$, every term in the binomial series for $( 1 - u )^{-\\frac{ 1 }{ 2 }}$ is positive. Truncating the series removes positive terms, so Emma's approximation is an underestimate.",
                "For Part (d)(ii), the expansion converges only for \\begin{aligned}|u| &< 1 \\cr \\implies \\left|\\dfrac{ x^4 }{ 4 }\\right| &< 1 \\cr \\implies |x| &< 4^{\\frac{ 1 }{ 4 }}\\cr & \\approx 1.414\\end{aligned} Since the lower limit is $x = -2$ and $| -2 | = 2 \\ge 1.414$, the series does not converge on this interval.",
                "<strong>Final Answer:</strong><br><br>\\begin{aligned} \\text{Part (b):} & \\quad \\dfrac{ 1 }{ 2 } + \\dfrac{ x^4 }{ 16 } + \\dfrac{ 3x^8 }{ 256 } \\cr \\text{Part (c):} & \\quad 0.5138021 \\cr \\text{Part (d)(i):} & \\quad \\text{Underestimate} \\end{aligned}"
        ],
        "pi_options": [
                {
                        "ans": "$\\begin{aligned} \\text{Part (b):} & \\quad \\dfrac{ 1 }{ 2 } - \\dfrac{ x^4 }{ 16 } + \\dfrac{ 3x^8 }{ 256 } \\cr \\text{Part (c):} & \\quad 0.4888021 \\cr \\text{Part (d)(i):} & \\quad \\text{Underestimate} \\end{aligned}",
                        "feedback": "In Part (b), you probably made a sign error when substituting $-x^4$ into the expansion. Substituting into $-\\dfrac{ x }{ 16 }$ yields $-\\dfrac{ -x^4 }{ 16 } = +\\dfrac{ x^4 }{ 16 }$. This also affects the integral calculation in Part (c)."
                },
                {
                        "ans": "$\\begin{aligned} \\text{Part (b):} & \\quad \\dfrac{ 1 }{ 2 } + \\dfrac{ x^4 }{ 16 } + \\dfrac{ 3x^8 }{ 256 } \\cr \\text{Part (c):} & \\quad 0.5138021 \\cr \\text{Part (d)(i):} & \\quad \\text{Overestimate} \\end{aligned}",
                        "feedback": "In Part (d)(i), you probably assumed that adding more positive terms makes the approximation an overestimate. However, since all terms in the series are positive, truncating after finitely many terms leaves out positive values, meaning the approximation is smaller than the true value (an underestimate)."
                },
                {
                        "ans": "$\\begin{aligned} \\text{Part (b):} & \\quad \\dfrac{ 1 }{ 2 } + \\dfrac{ x^4 }{ 16 } - \\dfrac{ 3x^8 }{ 256 } \\cr \\text{Part (c):} & \\quad 0.5111979 \\cr \\text{Part (d)(i):} & \\quad \\text{Underestimate} \\end{aligned}",
                        "feedback": "Check your signs in Part (b). Substituting $-x^4$ into the third term yields $+\\dfrac{ 3(-x^4)^2 }{ 256 } = +\\dfrac{ 3x^8 }{ 256 }$. Both terms must be positive, which also affects your integration in Part (c)."
                }
        ],
        "bradley_insight": {
                "type": "pro-tip",
                "title": "The Head Teacher's Eye: Analyzing Truncation Errors",
                "content": "To determine whether your approximation is an overestimate or an underestimate, look at the signs of the terms you truncated. Since $u = \\dfrac{ x^4 }{ 4 }$ is strictly positive on the interval of integration, every term in our series is positive. Removing positive terms means your finite sum is always smaller than the true infinite sum, which makes it an underestimate."
        }
}
];
