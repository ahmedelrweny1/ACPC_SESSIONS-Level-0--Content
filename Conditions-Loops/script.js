// ==========================================================================
// ACPC Training Community - Conditions & Loops Interactive Script
// ==========================================================================

document.addEventListener('DOMContentLoaded', function () {
    initNavigation();
    initCopyButtons();
    initHeroAnimation();
    initConditionChecker();
    initLoopStepper();
    initPatternGenerator();
    initPracticeFilters();
});

// ==================== //
// Navigation & Scroll  //
// ==================== //
function initNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function () {
            navMenu.classList.toggle('active');
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (navMenu) navMenu.classList.remove('active');
        });
    });

    // Scroll spy
    window.addEventListener('scroll', function () {
        const sections = document.querySelectorAll('.section, .hero, .part-divider');
        const scrollPos = window.scrollY + 120;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (sectionId && scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
}

// ==================== //
// Copy Code Buttons    //
// ==================== //
function initCopyButtons() {
    window.copyCode = function (button) {
        const codeBlock = button.closest('.code-content')?.querySelector('code') ||
            button.closest('.pattern-preview-box')?.querySelector('.pattern-output');

        if (!codeBlock) return;
        const codeText = codeBlock.innerText || codeBlock.textContent;

        navigator.clipboard.writeText(codeText).then(() => {
            const originalText = button.textContent;
            button.textContent = 'Copied! ✓';
            button.classList.add('copied');

            setTimeout(() => {
                button.textContent = originalText;
                button.classList.remove('copied');
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    };
}

// ==================== //
// Hero Loop Animation  //
// ==================== //
function initHeroAnimation() {
    const steps = document.querySelectorAll('.flow-step-item');
    if (!steps || steps.length === 0) return;

    let currentStep = 0;
    setInterval(() => {
        steps.forEach(step => step.classList.remove('active'));
        currentStep = (currentStep + 1) % steps.length;
        steps[currentStep].classList.add('active');
    }, 1800);
}

// ==========================================================================
// DEMO 1: Condition Checker & Boolean Evaluator
// ==========================================================================
function initConditionChecker() {
    const inputA = document.getElementById('checkerA');
    const inputB = document.getElementById('checkerB');
    const opButtons = document.querySelectorAll('.op-btn');
    const exprDisplay = document.getElementById('checkerExpression');
    const branchTrue = document.getElementById('branchTrue');
    const branchFalse = document.getElementById('branchFalse');
    const consoleOut = document.getElementById('checkerConsole');

    if (!inputA || !inputB || !exprDisplay) return;

    let selectedOp = '>';

    opButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            opButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            selectedOp = this.getAttribute('data-op');
            updateConditionChecker();
        });
    });

    inputA.addEventListener('input', updateConditionChecker);
    inputB.addEventListener('input', updateConditionChecker);

    function updateConditionChecker() {
        const valA = parseFloat(inputA.value) || 0;
        const valB = parseFloat(inputB.value) || 0;

        let isTrue = false;
        switch (selectedOp) {
            case '>': isTrue = valA > valB; break;
            case '<': isTrue = valA < valB; break;
            case '>=': isTrue = valA >= valB; break;
            case '<=': isTrue = valA <= valB; break;
            case '==': isTrue = valA === valB; break;
            case '!=': isTrue = valA !== valB; break;
        }

        exprDisplay.innerHTML = `<span style="color: #f472b6;">if</span> (<strong>${valA}</strong> <span style="color: #fbbf24;">${selectedOp}</span> <strong>${valB}</strong>)`;

        if (isTrue) {
            branchTrue.classList.add('selected');
            branchTrue.classList.remove('selected-false');
            branchFalse.classList.remove('selected', 'selected-false');
            branchTrue.style.opacity = '1';
            branchFalse.style.opacity = '0.35';
            consoleOut.innerHTML = `&gt; Condition Evaluated: <span style="color: #34d399; font-weight: bold;">TRUE (1)</span><br>&gt; cout &lt;&lt; "Condition passed!" &lt;&lt; endl;`;
        } else {
            branchFalse.classList.add('selected-false');
            branchFalse.classList.remove('selected');
            branchTrue.classList.remove('selected', 'selected-false');
            branchFalse.style.opacity = '1';
            branchTrue.style.opacity = '0.35';
            consoleOut.innerHTML = `&gt; Condition Evaluated: <span style="color: #f87171; font-weight: bold;">FALSE (0)</span><br>&gt; cout &lt;&lt; "Condition failed!" &lt;&lt; endl;`;
        }
    }

    updateConditionChecker();
}

// ==========================================================================
// DEMO 2: Loop Stepper & Variable Tracer
// ==========================================================================
function initLoopStepper() {
    const presetSelect = document.getElementById('stepperPreset');
    const nInput = document.getElementById('stepperN');
    const btnNext = document.getElementById('stepNextBtn');
    const btnPrev = document.getElementById('stepPrevBtn');
    const btnPlay = document.getElementById('stepPlayBtn');
    const btnReset = document.getElementById('stepResetBtn');
    const tracerLines = document.querySelectorAll('.trace-line');
    const iterDisplay = document.getElementById('traceIter');
    const var1Display = document.getElementById('traceVar1');
    const var2Display = document.getElementById('traceVar2');
    const condDisplay = document.getElementById('traceCond');
    const consoleDisplay = document.getElementById('traceConsole');

    if (!btnNext || !btnReset) return;

    let executionHistory = [];
    let currentStepIndex = 0;
    let isPlaying = false;
    let playInterval = null;

    function buildExecutionTrace() {
        const preset = presetSelect ? presetSelect.value : 'sum';
        const N = Math.min(Math.max(parseInt(nInput.value) || 4, 1), 7);
        executionHistory = [];

        if (preset === 'sum') {
            // Line 1: int sum = 0;
            // Line 2: for (int i = 1; i <= N; i++)
            // Line 3:     sum += i;
            // Line 4: cout << "Total: " << sum;
            let sum = 0;
            executionHistory.push({
                line: 1, iter: 0, v1: '-', v2: sum,
                cond: 'Initial setup', out: ''
            });

            for (let i = 1; i <= N; i++) {
                // Check condition
                executionHistory.push({
                    line: 2, iter: i, v1: i, v2: sum,
                    cond: `${i} <= ${N} → TRUE`, out: ''
                });
                // Execute body
                sum += i;
                executionHistory.push({
                    line: 3, iter: i, v1: i, v2: sum,
                    cond: `sum becomes ${sum}`, out: `Added ${i} (sum = ${sum})`
                });
            }
            // Final check that terminates
            executionHistory.push({
                line: 2, iter: N + 1, v1: N + 1, v2: sum,
                cond: `${N + 1} <= ${N} → FALSE (Exit)`, out: ''
            });
            // Line 4: output
            executionHistory.push({
                line: 4, iter: N + 1, v1: N + 1, v2: sum,
                cond: 'Finished', out: `Total: ${sum}`
            });
        } else if (preset === 'digits') {
            // Digit extractor preset
            let num = Math.min(Math.max(parseInt(nInput.value) * 123 || 542, 10), 999);
            let original = num;
            let rev = 0;
            let iter = 1;

            executionHistory.push({
                line: 1, iter: 0, v1: num, v2: rev,
                cond: 'Start with n = ' + num, out: ''
            });

            while (num > 0) {
                executionHistory.push({
                    line: 2, iter: iter, v1: num, v2: rev,
                    cond: `${num} > 0 → TRUE`, out: ''
                });
                let digit = num % 10;
                rev = rev * 10 + digit;
                num = Math.floor(num / 10);
                executionHistory.push({
                    line: 3, iter: iter, v1: num, v2: rev,
                    cond: `extracted: ${digit}`, out: `Extracted digit ${digit}`
                });
                iter++;
            }
            executionHistory.push({
                line: 2, iter: iter, v1: num, v2: rev,
                cond: `0 > 0 → FALSE (Exit)`, out: ''
            });
            executionHistory.push({
                line: 4, iter: iter, v1: num, v2: rev,
                cond: 'Reversal complete', out: `Reversed: ${rev}`
            });
        }

        currentStepIndex = 0;
        renderCurrentStep();
    }

    function renderCurrentStep() {
        if (executionHistory.length === 0) return;
        const step = executionHistory[currentStepIndex];

        // Highlight tracer line
        tracerLines.forEach(line => {
            const lineNum = parseInt(line.getAttribute('data-line'));
            if (lineNum === step.line) {
                line.classList.add('highlight');
            } else {
                line.classList.remove('highlight');
            }
        });

        if (iterDisplay) iterDisplay.textContent = step.iter;
        if (var1Display) var1Display.textContent = step.v1;
        if (var2Display) var2Display.textContent = step.v2;
        if (condDisplay) condDisplay.textContent = step.cond;

        // Build accumulated output
        let consoleLines = [];
        for (let s = 0; s <= currentStepIndex; s++) {
            if (executionHistory[s].out) {
                consoleLines.push(executionHistory[s].out);
            }
        }
        if (consoleDisplay) {
            consoleDisplay.innerHTML = consoleLines.length > 0
                ? consoleLines.map(l => `&gt; ${l}`).join('<br>')
                : '&gt; Program started...';
        }

        if (btnPrev) btnPrev.disabled = currentStepIndex === 0;
        if (btnNext) btnNext.disabled = currentStepIndex >= executionHistory.length - 1;
    }

    btnNext.addEventListener('click', () => {
        if (currentStepIndex < executionHistory.length - 1) {
            currentStepIndex++;
            renderCurrentStep();
        }
    });

    btnPrev.addEventListener('click', () => {
        if (currentStepIndex > 0) {
            currentStepIndex--;
            renderCurrentStep();
        }
    });

    btnReset.addEventListener('click', () => {
        stopAutoPlay();
        currentStepIndex = 0;
        renderCurrentStep();
    });

    btnPlay.addEventListener('click', () => {
        if (isPlaying) {
            stopAutoPlay();
        } else {
            startAutoPlay();
        }
    });

    function startAutoPlay() {
        isPlaying = true;
        btnPlay.innerHTML = '<span>⏸</span> Pause';
        btnPlay.classList.add('primary');

        playInterval = setInterval(() => {
            if (currentStepIndex < executionHistory.length - 1) {
                currentStepIndex++;
                renderCurrentStep();
            } else {
                stopAutoPlay();
            }
        }, 1100);
    }

    function stopAutoPlay() {
        isPlaying = false;
        clearInterval(playInterval);
        btnPlay.innerHTML = '<span>▶</span> Auto Play';
        btnPlay.classList.remove('primary');
    }

    if (presetSelect) presetSelect.addEventListener('change', buildExecutionTrace);
    if (nInput) nInput.addEventListener('change', buildExecutionTrace);

    buildExecutionTrace();
}

// ==========================================================================
// DEMO 3: Pattern Generator (Nested Loops Visualizer)
// ==========================================================================
function initPatternGenerator() {
    const patternTypeSelect = document.getElementById('patternType');
    const rowsSlider = document.getElementById('patternRows');
    const rowsValue = document.getElementById('patternRowsValue');
    const charSelect = document.getElementById('patternChar');
    const outputContainer = document.getElementById('patternOutput');
    const codeContainer = document.getElementById('patternCppCode');

    if (!patternTypeSelect || !rowsSlider || !outputContainer) return;

    function renderPattern() {
        const type = patternTypeSelect.value;
        const n = parseInt(rowsSlider.value) || 5;
        const ch = charSelect ? charSelect.value : '*';
        if (rowsValue) rowsValue.textContent = n;

        let asciiResult = '';
        let cppSnippet = '';

        switch (type) {
            case 'triangle':
                for (let r = 1; r <= n; r++) {
                    asciiResult += ch.repeat(r) + '\n';
                }
                cppSnippet = `// Right-Angled Triangle (${n} rows)
for (int i = 1; i <= ${n}; i++) {
    for (int j = 1; j <= i; j++) {
        cout << "${ch}";
    }
    cout << "\\n";
}`;
                break;

            case 'inverted':
                for (let r = n; r >= 1; r--) {
                    asciiResult += ch.repeat(r) + '\n';
                }
                cppSnippet = `// Inverted Triangle (${n} rows)
for (int i = ${n}; i >= 1; i--) {
    for (int j = 1; j <= i; j++) {
        cout << "${ch}";
    }
    cout << "\\n";
}`;
                break;

            case 'pyramid':
                for (let r = 1; r <= n; r++) {
                    const spaces = ' '.repeat(n - r);
                    const stars = ch.repeat(2 * r - 1);
                    asciiResult += spaces + stars + '\n';
                }
                cppSnippet = `// Full Centered Pyramid (Assiut Sheet 2 Shape3)
for (int i = 1; i <= ${n}; i++) {
    // Print leading spaces
    for (int s = 1; s <= ${n} - i; s++) {
        cout << " ";
    }
    // Print characters
    for (int j = 1; j <= 2 * i - 1; j++) {
        cout << "${ch}";
    }
    cout << "\\n";
}`;
                break;

            case 'floyd':
                let num = 1;
                for (let r = 1; r <= n; r++) {
                    let rowStr = '';
                    for (let c = 1; c <= r; c++) {
                        rowStr += (num++) + ' ';
                    }
                    asciiResult += rowStr + '\n';
                }
                cppSnippet = `// Floyd's Triangle (${n} rows)
int count = 1;
for (int i = 1; i <= ${n}; i++) {
    for (int j = 1; j <= i; j++) {
        cout << count++ << " ";
    }
    cout << "\\n";
}`;
                break;

            case 'hollow_square':
                for (let r = 1; r <= n; r++) {
                    if (r === 1 || r === n) {
                        asciiResult += (ch + ' ').repeat(n) + '\n';
                    } else {
                        asciiResult += ch + ' ' + '  '.repeat(n - 2) + ch + '\n';
                    }
                }
                cppSnippet = `// Hollow Square (${n}x${n})
for (int i = 1; i <= ${n}; i++) {
    for (int j = 1; j <= ${n}; j++) {
        if (i == 1 || i == ${n} || j == 1 || j == ${n}) {
            cout << "${ch} ";
        } else {
            cout << "  ";
        }
    }
    cout << "\\n";
}`;
                break;

            case 'checker':
                for (let r = 1; r <= n; r++) {
                    let rowStr = '';
                    for (let c = 1; c <= n; c++) {
                        rowStr += ((r + c) % 2 === 0 ? ch : '.') + ' ';
                    }
                    asciiResult += rowStr + '\n';
                }
                cppSnippet = `// Checkerboard Pattern (${n}x${n})
for (int i = 1; i <= ${n}; i++) {
    for (int j = 1; j <= ${n}; j++) {
        if ((i + j) % 2 == 0) {
            cout << "${ch} ";
        } else {
            cout << ". ";
        }
    }
    cout << "\\n";
}`;
                break;
        }

        outputContainer.textContent = asciiResult.trimEnd();
        if (codeContainer) {
            codeContainer.textContent = cppSnippet;
            if (window.Prism) {
                Prism.highlightElement(codeContainer);
            }
        }
    }

    patternTypeSelect.addEventListener('change', renderPattern);
    rowsSlider.addEventListener('input', renderPattern);
    if (charSelect) charSelect.addEventListener('change', renderPattern);

    renderPattern();
}

// ==========================================================================
// Practice Problem Filters
// ==========================================================================
function initPracticeFilters() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const problemCards = document.querySelectorAll('.problem-card');

    if (!tabButtons || tabButtons.length === 0) return;

    tabButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            tabButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');

            problemCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-level') === filter) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}
