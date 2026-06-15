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

        if (window.MathJax) MathJax.typesetPromise();
    },

    // ---------------------------------------------
    // CREATE A LEVEL PROBLEM CARD
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

        card.innerHTML = `
            <span class="widget-header">${headerText}</span>

            <div class="question-box">${prob.question}</div>

            ${imgHTML}

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

        if (window.MathJax) MathJax.typesetPromise();
    }
};
