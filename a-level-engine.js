// =====================================================
// A LEVEL AUDIT ENGINE
// =====================================================

const ALevelHub = {

    state: {
        masterVault: []   // all loaded questions
    },

    // ---------------------------------------------
    // INIT
    // ---------------------------------------------
    async init() {
        await this.loadQuestionBank();
        this.renderAuditList();
    },

    // ---------------------------------------------
    // LOAD P1 QUESTIONS
    // ---------------------------------------------
    async loadQuestionBank() {
        try {
            // p1.js must define: window.ALEVEL_QUESTIONS = [ ... ]
            if (window.ALEVEL_QUESTIONS && Array.isArray(window.ALEVEL_QUESTIONS)) {
                this.state.masterVault = window.ALEVEL_QUESTIONS;
            } else {
                console.error("A Level question bank not found.");
            }
        } catch (err) {
            console.error("Error loading A Level questions:", err);
        }
    },

    // ---------------------------------------------
    // RENDER ALL QUESTIONS (AUDIT MODE)
    // ---------------------------------------------
    renderAuditList() {
        const container = document.getElementById('audit-container');
        if (!container) return;

        container.innerHTML = '';

        this.state.masterVault.forEach(prob => {
            container.appendChild(this.createProblemCard(prob));
        });

       if (typeof MathJax !== "undefined") {
    if (typeof MathJax.typesetPromise === "function") {
        MathJax.typesetPromise(); // MathJax v3
    } else if (MathJax.Hub && typeof MathJax.Hub.Queue === "function") {
        MathJax.Hub.Queue(["Typeset", MathJax.Hub]); // MathJax v2
    }
}
    },

    
    // ---------------------------------------------
    // CREATE A LEVEL PROBLEM CARD (WITH PI AUDIT)
    // ---------------------------------------------
    createProblemCard(prob) {
        const card = document.createElement('div');
        card.className = 'daily-widget';
        card.style.borderLeft = "8px solid #3367d6";

        const headerText = `
            ${prob.major_area} |
            ${prob.topic} |
            ${Array.isArray(prob.subtopic) ? prob.subtopic.join(', ') : prob.subtopic}
        `;

        let imgHTML = '';
        if (prob.img && prob.img !== "") {
            imgHTML = `<img src="${prob.img}" class="question-img" style="margin:20px auto; display:block;">`;
        }

        // Build the PI Options preview HTML
        let piAuditHTML = '';
        if (prob.pi_options && Array.isArray(prob.pi_options)) {
            piAuditHTML = `
                <div class="pi-audit-container" style="margin-top: 20px; padding: 15px; background: #fff5f5; border-left: 4px solid #ef4444; border-radius: 6px; text-align: left;">
                    <h4 style="margin: 0 0 10px 0; color: #b91c1c; font-family: 'Merriweather', serif;">Plausibly Incorrect (PI) Options Audit</h4>
                    ${prob.pi_options.map((opt, idx) => `
                        <div style="margin-bottom: 12px; font-size: 0.95rem;">
                            <strong>Distractor ${idx + 1}:</strong> ${opt.ans}
                            <div style="margin-top: 4px; font-size: 0.85rem; color: #4b5563; font-style: italic; padding-left: 10px; border-left: 2px solid #fca5a5;">
                                <strong>Feedback:</strong> ${opt.feedback}
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        }

        card.innerHTML = `
            <span class="widget-header">${headerText}</span>

            <div class="question-box">${prob.question}</div>

            ${imgHTML}

            <!-- Render the PI Options with their feedback right below the question -->
            ${piAuditHTML}

            <div id="action-${prob.id}" style="margin-top:20px;">
                <button class="reveal-btn" onclick="ALevelHub.revealSolution('${prob.id}')">
                    Show Model Answer
                </button>
            </div>

            <div id="sol-${prob.id}" class="step-container" style="display:none; margin-top:20px;">
                <h3 style="color:#1a3d8f;">Model Solution</h3>

                ${prob.steps.map(s => `
                    <div class="step" style="margin-bottom:12px;">
                        <span class="step-text" style="font-weight:bold; color:#1a3d8f;">Step</span>
                        ${s}
                    </div>
                `).join('')}

                <div class="bradley-insight-box insight-${prob.bradley_insight.type}" style="margin-top:20px;">
                    <span class="insight-title">The Head Teacher's Eye</span>
                    ${prob.bradley_insight.content}
                </div>
            </div>
        `;

        return card;
    },

    // ---------------------------------------------
    // REVEAL SOLUTION
    // ---------------------------------------------
    revealSolution(id) {
        const sol = document.getElementById(`sol-${id}`);
        if (sol) sol.style.display = "block";

        const btn = document.getElementById(`action-${id}`);
        if (btn) btn.style.display = "none";

       if (typeof MathJax !== "undefined") {
    if (typeof MathJax.typesetPromise === "function") {
        MathJax.typesetPromise(); // MathJax v3
    } else if (MathJax.Hub && typeof MathJax.Hub.Queue === "function") {
        MathJax.Hub.Queue(["Typeset", MathJax.Hub]); // MathJax v2
    }
}
    }
};
