// =====================================================
// A LEVEL AUDIT ENGINE — MODULAR VERSION
// =====================================================

const ALevelHub = {

    state: {
        masterVault: [],
        currentScript: null
    },

    // ---------------------------------------------
    // INIT — load default set (P1_1)
    // ---------------------------------------------
    async init() {
        await this.loadSet("p1_1");
    },

    // ---------------------------------------------
    // LOAD ANY SET (p1_1, p1_2, p1_3, ...)
    // ---------------------------------------------
    async loadSet(setName) {
        this.state.masterVault = [];

        // Remove previous script if it exists
        if (this.state.currentScript) {
            document.body.removeChild(this.state.currentScript);
            this.state.currentScript = null;
        }

        // Create new script tag
        const script = document.createElement("script");
        script.src = `${setName}.js`;
        script.async = true;

        this.state.currentScript = script;

        script.onload = () => {
            if (window.ALEVEL_QUESTIONS && Array.isArray(window.ALEVEL_QUESTIONS)) {
                this.state.masterVault = window.ALEVEL_QUESTIONS;
                this.renderAuditList();
            } else {
                this.renderError(`No questions found in ${setName}.js`);
            }
        };

        script.onerror = () => {
            this.renderError(`Could not load ${setName}.js`);
        };

        document.body.appendChild(script);
    },

    // ---------------------------------------------
    // RENDER ERROR MESSAGE
    // ---------------------------------------------
    renderError(msg) {
        const container = document.getElementById('audit-container');
        container.innerHTML = `
            <div style="padding:20px; background:#ffecec; border-left:5px solid #d9534f; border-radius:6px;">
                <h3 style="color:#b52b27;">Error</h3>
                <p>${msg}</p>
            </div>
        `;
    },

    // ---------------------------------------------
    // RENDER ALL QUESTIONS
    // ---------------------------------------------
    renderAuditList() {
        const container = document.getElementById('audit-container');
        if (!container) return;

        container.innerHTML = '';

        this.state.masterVault.forEach(prob => {
            container.appendChild(this.createProblemCard(prob));
        });

        // Safe MathJax rendering execution
        if (window.MathJax && typeof MathJax.typesetPromise === "function") {
            MathJax.typesetPromise();
        }
    },

    // ---------------------------------------------
    // CREATE PROBLEM CARD
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

        if (typeof MathJax !== "undefined" && typeof MathJax.typesetPromise === "function") {
            MathJax.typesetPromise();
        }
    }
};