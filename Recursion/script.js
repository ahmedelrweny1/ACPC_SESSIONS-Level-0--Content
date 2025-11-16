// ==================== //
// Navigation & Scrolling //
// ==================== //

document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Update active link based on scroll position
        updateActiveLink();
    });

    // Mobile menu toggle
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });

    // Update active navigation link
    function updateActiveLink() {
        const sections = document.querySelectorAll('.section');
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // Initialize all visualizations
    initHeroRecursion();
    initRecursiveFlowDemo();
    initCallStackDemo();
    initRecursionStepDemo();
    initPatternMatchingDemo();
    initMistakeSimulatorDemo();
});

// ==================== //
// Copy Code Functionality //
// ==================== //

function copyCode(button) {
    const codeBlock = button.closest('.code-content').querySelector('code') || 
                     button.parentElement.nextElementSibling.querySelector('code');
    
    const code = codeBlock.textContent;
    
    navigator.clipboard.writeText(code).then(function() {
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        button.classList.add('copied');
        
        setTimeout(function() {
            button.textContent = originalText;
            button.classList.remove('copied');
        }, 2000);
    }).catch(function(err) {
        console.error('Failed to copy code: ', err);
    });
}

// ==================== //
// Hero Recursion Animation //
// ==================== //

function initHeroRecursion() {
    const container = document.getElementById('heroRecursion');
    if (!container) return;

    container.style.cssText = `
        display: flex;
        flex-direction: column;
        gap: 2rem;
        align-items: center;
        padding: 2rem;
    `;

    // Create main container with flex layout
    const recursionBox = document.createElement('div');
    recursionBox.style.cssText = `
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 2rem;
        background: rgba(255, 255, 255, 0.1);
        border: 3px solid rgba(255, 255, 255, 0.3);
        border-radius: 20px;
        padding: 2rem;
        min-width: 600px;
        animation: fadeInUp 0.8s ease-out;
    `;

    // Create container for nested boxes (left side)
    const nestContainer = document.createElement('div');
    nestContainer.style.cssText = `
        position: relative;
        height: 220px;
        width: 320px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        overflow: visible;
    `;

    // Create properly nested boxes using DOM elements
    const colors = ['#818cf8', '#f472b6', '#fbbf24', '#34d399']; // blue, pink, yellow, green
    const labels = ['solve(5)', 'solve(4)', 'solve(3)', 'solve(2)'];
    // Sizes need to account for borders (3px each side = 6px total) and ensure proper nesting
    const sizes = [260, 200, 140, 80];
    const heights = [130, 100, 70, 40];
    
    // Build from inside out using actual DOM elements
    let currentBox = null;
    for (let i = 3; i >= 0; i--) {
        const box = document.createElement('div');
        const isOuter = (i === 0);
        
        box.style.cssText = `
            position: ${isOuter ? 'relative' : 'absolute'};
            top: ${isOuter ? '0' : '50%'};
            left: ${isOuter ? '0' : '50%'};
            transform: ${isOuter ? 'none' : 'translate(-50%, -50%)'};
            width: ${sizes[i]}px;
            height: ${heights[i]}px;
            border: 3px solid ${colors[i]};
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(${i === 0 ? '129, 140, 248' : i === 1 ? '244, 114, 182' : i === 2 ? '251, 191, 36' : '52, 211, 153'}, 0.2);
            font-weight: 700;
            font-size: ${1.0 - i * 0.1}rem;
            color: ${colors[i]};
            animation: scaleIn 0.5s ease-out ${(3 - i) * 0.2}s both;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
            z-index: ${4 - i};
            pointer-events: none;
            overflow: hidden;
            box-sizing: border-box;
        `;
        box.textContent = labels[i];
        
        // If there's a previous box, nest it inside this one
        if (currentBox) {
            box.appendChild(currentBox);
        }
        
        currentBox = box;
    }
    
    // Add the outermost box to container
    nestContainer.appendChild(currentBox);
    recursionBox.appendChild(nestContainer);

    // Create title card (right side)
    const titleCard = document.createElement('div');
    titleCard.style.cssText = `
        background: rgba(255, 255, 255, 0.1);
        border-radius: 16px;
        padding: 2rem;
        text-align: center;
        color: white;
        flex: 1;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    `;
    titleCard.innerHTML = `
        <div style="font-size: 2rem; margin-bottom: 0.75rem;">🔄</div>
        <div style="font-size: 1.5rem; font-weight: 700; margin-bottom: 0.5rem;">
            Recursive Nesting
        </div>
        <div style="font-size: 0.875rem; opacity: 0.9; line-height: 1.5;">
            Each call contains a smaller version
        </div>
    `;
    recursionBox.appendChild(titleCard);

    // Add CSS for animations
    if (!document.getElementById('heroRecursionStyle')) {
        const style = document.createElement('style');
        style.id = 'heroRecursionStyle';
        style.textContent = `
            @keyframes scaleIn {
                from {
                    transform: translate(-50%, -50%) scale(0.3);
                    opacity: 0;
                }
                to {
                    transform: translate(-50%, -50%) scale(1);
                    opacity: 1;
                }
            }
        `;
        document.head.appendChild(style);
    }

    container.appendChild(recursionBox);
}

// ==================== //
// Recursive Flow Demo  //
// ==================== //

function initRecursiveFlowDemo() {
    const container = document.getElementById('recursiveFlowDemo');
    if (!container) return;

    container.style.cssText = `
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding: 2rem;
        background: #0f172a;
        border-radius: 12px;
        min-height: 300px;
    `;

    const demoHTML = `
        <div style="display: flex; gap: 1rem; justify-content: center; margin-bottom: 2rem;">
            <button id="runIterative" class="demo-btn">🔁 Run Iterative</button>
            <button id="runRecursive" class="demo-btn">🔄 Run Recursive</button>
            <button id="resetDemo" class="demo-btn">🔄 Reset</button>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
            <div>
                <h4 style="color: #818cf8; margin-bottom: 1rem; text-align: center;">Iterative: sum(5)</h4>
                <div id="iterativeSteps" style="display: flex; flex-direction: column; gap: 0.5rem; min-height: 200px;"></div>
            </div>
            <div>
                <h4 style="color: #f472b6; margin-bottom: 1rem; text-align: center;">Recursive: sum(5)</h4>
                <div id="recursiveSteps" style="display: flex; flex-direction: column; gap: 0.5rem; min-height: 200px;"></div>
            </div>
        </div>
        
        <div id="result" style="text-align: center; font-size: 1.25rem; font-weight: 700; color: #34d399; margin-top: 1rem; min-height: 30px;"></div>
    `;

    container.innerHTML = demoHTML;

    // Add button styles
    const style = document.createElement('style');
    style.textContent = `
        .demo-btn {
            padding: 0.75rem 1.5rem;
            background: #818cf8;
            color: #0f172a;
            border: none;
            border-radius: 8px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        .demo-btn:hover {
            background: #6366f1;
            transform: translateY(-2px);
        }
        .step-item {
            padding: 0.75rem 1rem;
            background: #1e293b;
            border-radius: 8px;
            border-left: 4px solid;
            transition: all 0.3s ease;
            opacity: 0;
            transform: translateX(-20px);
        }
        .step-item.active {
            opacity: 1;
            transform: translateX(0);
        }
    `;
    document.head.appendChild(style);

    const iterativeSteps = container.querySelector('#iterativeSteps');
    const recursiveSteps = container.querySelector('#recursiveSteps');
    const resultDiv = container.querySelector('#result');

    let iterativeData = [
        { text: 'total = 0', color: '#818cf8' },
        { text: 'i=1: total = 0 + 1 = 1', color: '#818cf8' },
        { text: 'i=2: total = 1 + 2 = 3', color: '#818cf8' },
        { text: 'i=3: total = 3 + 3 = 6', color: '#818cf8' },
        { text: 'i=4: total = 6 + 4 = 10', color: '#818cf8' },
        { text: 'i=5: total = 10 + 5 = 15', color: '#818cf8' },
        { text: 'Return 15', color: '#34d399' }
    ];

    let recursiveData = [
        { text: 'sum(5) recursive call', color: '#f472b6', indent: 0 },
        { text: '5 + sum(4) recursive call', color: '#f472b6', indent: 1 },
        { text: '4 + sum(3) recursive call', color: '#f472b6', indent: 2 },
        { text: '3 + sum(2) recursive call', color: '#f472b6', indent: 3 },
        { text: '2 + sum(1) recursive call', color: '#f472b6', indent: 4 },
        { text: 'sum(1) returns 1 (base case)', color: '#34d399', indent: 4 },
        { text: '2 + 1 = 3 returned', color: '#34d399', indent: 3 },
        { text: '3 + 3 = 6 returned', color: '#34d399', indent: 2 },
        { text: '4 + 6 = 10 returned', color: '#34d399', indent: 1 },
        { text: '5 + 10 = 15 returned', color: '#34d399', indent: 0 }
    ];

    function animateSteps(stepsArray, container, delay = 500) {
        container.innerHTML = '';
        stepsArray.forEach((step, index) => {
            setTimeout(() => {
                const stepDiv = document.createElement('div');
                stepDiv.className = 'step-item';
                stepDiv.style.borderLeftColor = step.color;
                stepDiv.style.marginLeft = `${(step.indent || 0) * 20}px`;
                stepDiv.innerHTML = `<div style="color: ${step.color};">${step.text}</div>`;
                container.appendChild(stepDiv);
                
                setTimeout(() => stepDiv.classList.add('active'), 50);
            }, index * delay);
        });
    }

    document.getElementById('runIterative').onclick = () => {
        resultDiv.textContent = '';
        animateSteps(iterativeData, iterativeSteps);
        setTimeout(() => {
            resultDiv.textContent = 'Iterative Result: 15';
        }, iterativeData.length * 500);
    };

    document.getElementById('runRecursive').onclick = () => {
        resultDiv.textContent = '';
        animateSteps(recursiveData, recursiveSteps);
        setTimeout(() => {
            resultDiv.textContent = 'Recursive Result: 15';
        }, recursiveData.length * 500);
    };

    document.getElementById('resetDemo').onclick = () => {
        iterativeSteps.innerHTML = '';
        recursiveSteps.innerHTML = '';
        resultDiv.textContent = '';
    };
}

// ==================== //
// Call Stack Demo      //
// ==================== //

function initCallStackDemo() {
    const container = document.getElementById('callStackDemo');
    if (!container) return;

    container.style.cssText = `
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding: 2rem;
        background: #0f172a;
        border-radius: 12px;
        min-height: 400px;
    `;

    const demoHTML = `
        <div style="text-align: center; margin-bottom: 2rem;">
            <h4 style="color: #818cf8; margin-bottom: 1rem;">Call Stack: factorial(4)</h4>
            <div style="display: flex; gap: 1rem; justify-content: center;">
                <button id="stepForward" class="demo-btn">➡️ Step Forward</button>
                <button id="stepBack" class="demo-btn">⬅️ Step Back</button>
                <button id="resetStack" class="demo-btn">🔄 Reset</button>
            </div>
        </div>
        
        <div style="display: grid; grid-template-columns: 1fr 300px; gap: 2rem; align-items: start;">
            <div>
                <h4 style="color: #f472b6; margin-bottom: 1rem;">Current Action</h4>
                <div id="currentAction" style="padding: 1.5rem; background: #1e293b; border-radius: 12px; border: 2px solid #f472b6; min-height: 100px; display: flex; align-items: center; justify-content: center; font-size: 1.25rem; color: #f1f5f9; text-align: center;"></div>
            </div>
            
            <div>
                <h4 style="color: #34d399; margin-bottom: 1rem; text-align: center;">Call Stack</h4>
                <div id="callStack" style="display: flex; flex-direction: column-reverse; gap: 0.5rem; min-height: 250px; padding: 1rem; background: #1e293b; border-radius: 12px; border: 2px solid #34d399;"></div>
            </div>
        </div>
        
        <div id="explanation" style="padding: 1rem; background: rgba(251, 191, 36, 0.15); border-left: 4px solid #fbbf24; border-radius: 8px; color: #fbbf24;">
            <strong>💡 Tip:</strong> Watch how function calls stack up like plates, then unwind in reverse order!
        </div>
    `;

    container.innerHTML = demoHTML;

    const currentActionDiv = container.querySelector('#currentAction');
    const callStackDiv = container.querySelector('#callStack');
    const explanationDiv = container.querySelector('#explanation');

    let currentStep = 0;
    const steps = [
        {
            action: "Call factorial(4)",
            stack: ["factorial(4)"],
            explanation: "First call added to stack. Waiting for factorial(3)..."
        },
        {
            action: "Call factorial(3)",
            stack: ["factorial(4)", "factorial(3)"],
            explanation: "Second call stacked. factorial(4) waits for factorial(3)..."
        },
        {
            action: "Call factorial(2)",
            stack: ["factorial(4)", "factorial(3)", "factorial(2)"],
            explanation: "Third call stacked. Each call waits for the next..."
        },
        {
            action: "Call factorial(1)",
            stack: ["factorial(4)", "factorial(3)", "factorial(2)", "factorial(1)"],
            explanation: "Base case reached! factorial(1) returns 1..."
        },
        {
            action: "factorial(1) returns 1",
            stack: ["factorial(4)", "factorial(3)", "factorial(2)"],
            explanation: "factorial(1) finished. factorial(2) can now complete..."
        },
        {
            action: "factorial(2) returns 2",
            stack: ["factorial(4)", "factorial(3)"],
            explanation: "factorial(2) = 2 * 1 = 2. factorial(3) can now complete..."
        },
        {
            action: "factorial(3) returns 6",
            stack: ["factorial(4)"],
            explanation: "factorial(3) = 3 * 2 = 6. factorial(4) can now complete..."
        },
        {
            action: "factorial(4) returns 24",
            stack: [],
            explanation: "factorial(4) = 4 * 6 = 24. All done! Stack is empty."
        }
    ];

    function updateDisplay() {
        const step = steps[currentStep];
        currentActionDiv.textContent = step.action;
        explanationDiv.innerHTML = `<strong>💡 Step ${currentStep + 1}:</strong> ${step.explanation}`;
        
        // Update call stack
        callStackDiv.innerHTML = '';
        step.stack.forEach((call, index) => {
            const stackItem = document.createElement('div');
            stackItem.style.cssText = `
                padding: 0.75rem 1rem;
                background: #0f172a;
                border: 2px solid #34d399;
                border-radius: 8px;
                color: #f1f5f9;
                font-weight: 600;
                text-align: center;
                animation: stackPush 0.3s ease-out;
                margin-bottom: 0.25rem;
            `;
            stackItem.textContent = call;
            callStackDiv.appendChild(stackItem);
        });
    }

    document.getElementById('stepForward').onclick = () => {
        if (currentStep < steps.length - 1) {
            currentStep++;
            updateDisplay();
        }
    };

    document.getElementById('stepBack').onclick = () => {
        if (currentStep > 0) {
            currentStep--;
            updateDisplay();
        }
    };

    document.getElementById('resetStack').onclick = () => {
        currentStep = 0;
        updateDisplay();
    };

    // Initialize display
    updateDisplay();

    // Add stack animation CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes stackPush {
            from {
                transform: translateY(10px);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);
}

// ==================== //
// Recursion Step Demo  //
// ==================== //

function initRecursionStepDemo() {
    const container = document.getElementById('recursionStepDemo');
    if (!container) return;

    container.style.cssText = `
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding: 2rem;
        background: #0f172a;
        border-radius: 12px;
        min-height: 300px;
    `;

    const demoHTML = `
        <div style="text-align: center; margin-bottom: 1rem;">
            <h4 style="color: #818cf8; margin-bottom: 1rem;">Watch Different Recursion Problems</h4>
            <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                <button onclick="runCountdown()" class="demo-btn">🔢 Countdown(5)</button>
                <button onclick="runSum()" class="demo-btn">➕ Sum(4)</button>
                <button onclick="runFactorial()" class="demo-btn">❗ Factorial(4)</button>
                <button onclick="runDigitSum()" class="demo-btn">🔢 DigitSum(123)</button>
                <button onclick="clearDemo()" class="demo-btn">🗑️ Clear</button>
            </div>
        </div>
        
        <div id="demoOutput" style="background: #1e293b; padding: 1.5rem; border-radius: 12px; min-height: 200px; font-family: monospace; color: #f1f5f9; overflow-y: auto; border: 2px solid #334155;"></div>
    `;

    container.innerHTML = demoHTML;

    const output = container.querySelector('#demoOutput');

    function addLine(text, color = '#f1f5f9', delay = 0) {
        setTimeout(() => {
            const line = document.createElement('div');
            line.style.cssText = `
                color: ${color};
                margin-bottom: 0.5rem;
                padding: 0.25rem;
                animation: fadeInLeft 0.3s ease-out;
            `;
            line.textContent = text;
            output.appendChild(line);
            output.scrollTop = output.scrollHeight;
        }, delay);
    }

    window.runCountdown = () => {
        output.innerHTML = '';
        addLine("Running countdown(5):", '#818cf8', 0);
        addLine("→ countdown(5): prints 5", '#f1f5f9', 500);
        addLine("  → countdown(4): prints 4", '#f1f5f9', 1000);
        addLine("    → countdown(3): prints 3", '#f1f5f9', 1500);
        addLine("      → countdown(2): prints 2", '#f1f5f9', 2000);
        addLine("        → countdown(1): prints 1", '#f1f5f9', 2500);
        addLine("        ← countdown(1): done (base case)", '#34d399', 3000);
        addLine("      ← countdown(2): done", '#34d399', 3500);
        addLine("    ← countdown(3): done", '#34d399', 4000);
        addLine("  ← countdown(4): done", '#34d399', 4500);
        addLine("← countdown(5): done", '#34d399', 5000);
        addLine("Output: 5 4 3 2 1", '#fbbf24', 5500);
    };

    window.runSum = () => {
        output.innerHTML = '';
        addLine("Running sum(4):", '#818cf8', 0);
        addLine("→ sum(4): needs sum(3)", '#f1f5f9', 500);
        addLine("  → sum(3): needs sum(2)", '#f1f5f9', 1000);
        addLine("    → sum(2): needs sum(1)", '#f1f5f9', 1500);
        addLine("      → sum(1): returns 1 (base case)", '#34d399', 2000);
        addLine("    ← sum(2): 2 + 1 = 3", '#34d399', 2500);
        addLine("  ← sum(3): 3 + 3 = 6", '#34d399', 3000);
        addLine("← sum(4): 4 + 6 = 10", '#34d399', 3500);
        addLine("Result: 10", '#fbbf24', 4000);
    };

    window.runFactorial = () => {
        output.innerHTML = '';
        addLine("Running factorial(4):", '#818cf8', 0);
        addLine("→ factorial(4): 4 * factorial(3)", '#f1f5f9', 500);
        addLine("  → factorial(3): 3 * factorial(2)", '#f1f5f9', 1000);
        addLine("    → factorial(2): 2 * factorial(1)", '#f1f5f9', 1500);
        addLine("      → factorial(1): returns 1 (base case)", '#34d399', 2000);
        addLine("    ← factorial(2): 2 * 1 = 2", '#34d399', 2500);
        addLine("  ← factorial(3): 3 * 2 = 6", '#34d399', 3000);
        addLine("← factorial(4): 4 * 6 = 24", '#34d399', 3500);
        addLine("Result: 24", '#fbbf24', 4000);
    };

    window.runDigitSum = () => {
        output.innerHTML = '';
        addLine("Running digitSum(123):", '#818cf8', 0);
        addLine("→ digitSum(123): 3 + digitSum(12)", '#f1f5f9', 500);
        addLine("  → digitSum(12): 2 + digitSum(1)", '#f1f5f9', 1000);
        addLine("    → digitSum(1): returns 1 (base case)", '#34d399', 1500);
        addLine("  ← digitSum(12): 2 + 1 = 3", '#34d399', 2000);
        addLine("← digitSum(123): 3 + 3 = 6", '#34d399', 2500);
        addLine("Result: 6 (1 + 2 + 3)", '#fbbf24', 3000);
    };

    window.clearDemo = () => {
        output.innerHTML = '<div style="color: #94a3b8; text-align: center; margin-top: 2rem;">Click a button above to see recursion in action!</div>';
    };

    // Initialize with empty state
    window.clearDemo();

    // Add animation CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInLeft {
            from {
                opacity: 0;
                transform: translateX(-20px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
    `;
    document.head.appendChild(style);
}

// ==================== //
// Pattern Matching Demo //
// ==================== //

function initPatternMatchingDemo() {
    const container = document.getElementById('patternMatchingDemo');
    if (!container) return;

    container.style.cssText = `
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding: 2rem;
        background: #0f172a;
        border-radius: 12px;
        min-height: 300px;
    `;

    const patterns = [
        {
            name: "Shrinking Numbers",
            example: "factorial(n) = n * factorial(n-1)",
            description: "Reduce number by 1 each time",
            color: "#818cf8"
        },
        {
            name: "Moving Index",
            example: "printArray(arr, size, i+1)",
            description: "Move through array elements",
            color: "#f472b6"
        },
        {
            name: "Peeling Data",
            example: "sumDigits(n/10) + n%10",
            description: "Process one piece, recurse on rest",
            color: "#fbbf24"
        },
        {
            name: "Branching",
            example: "fib(n-1) + fib(n-2)",
            description: "Multiple recursive calls",
            color: "#34d399"
        }
    ];

    const problems = [
        { problem: "Count down from n to 1", answer: 0, explanation: "Shrinking Numbers: n → n-1" },
        { problem: "Find max in array", answer: 1, explanation: "Moving Index: process arr[i], then arr[i+1...]" },
        { problem: "Reverse a number", answer: 2, explanation: "Peeling Data: last digit + reverse(rest)" },
        { problem: "Tree traversal", answer: 3, explanation: "Branching: process(left) + process(right)" }
    ];

    let currentProblem = 0;
    let score = 0;

    const demoHTML = `
        <div style="text-align: center; margin-bottom: 2rem;">
            <h4 style="color: #818cf8; margin-bottom: 1rem;">Pattern Recognition Quiz</h4>
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <div style="color: #34d399; font-weight: 600;">Score: <span id="score">0</span>/${problems.length}</div>
                <button onclick="resetQuiz()" class="demo-btn">🔄 Reset Quiz</button>
            </div>
        </div>
        
        <div id="problemArea" style="text-align: center; margin-bottom: 2rem;">
            <div style="font-size: 1.25rem; font-weight: 600; color: #f1f5f9; margin-bottom: 1rem;">
                Problem <span id="problemNum">1</span>: <span id="problemText"></span>
            </div>
            <div style="font-size: 0.875rem; color: #94a3b8;">
                Which recursion pattern does this follow?
            </div>
        </div>
        
        <div id="patternsGrid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 2rem;"></div>
        
        <div id="feedback" style="min-height: 60px; padding: 1rem; border-radius: 8px; text-align: center; font-weight: 600;"></div>
    `;

    container.innerHTML = demoHTML;

    const scoreSpan = container.querySelector('#score');
    const problemNumSpan = container.querySelector('#problemNum');
    const problemTextSpan = container.querySelector('#problemText');
    const patternsGrid = container.querySelector('#patternsGrid');
    const feedback = container.querySelector('#feedback');

    function displayProblem() {
        if (currentProblem >= problems.length) {
            showFinalScore();
            return;
        }

        const problem = problems[currentProblem];
        problemNumSpan.textContent = currentProblem + 1;
        problemTextSpan.textContent = problem.problem;
        
        // Clear previous patterns
        patternsGrid.innerHTML = '';
        
        // Add pattern options
        patterns.forEach((pattern, index) => {
            const patternCard = document.createElement('div');
            patternCard.style.cssText = `
                padding: 1.5rem;
                background: #1e293b;
                border: 2px solid ${pattern.color};
                border-radius: 12px;
                cursor: pointer;
                transition: all 0.3s ease;
                text-align: center;
            `;
            
            patternCard.innerHTML = `
                <div style="color: ${pattern.color}; font-weight: 700; margin-bottom: 0.5rem;">
                    ${pattern.name}
                </div>
                <div style="font-size: 0.875rem; color: #cbd5e1; margin-bottom: 0.75rem;">
                    ${pattern.description}
                </div>
                <div style="font-family: monospace; font-size: 0.75rem; color: #94a3b8;">
                    ${pattern.example}
                </div>
            `;
            
            patternCard.onclick = () => selectPattern(index);
            patternsGrid.appendChild(patternCard);
            
            // Add hover effect
            patternCard.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-4px)';
                this.style.boxShadow = `0 8px 16px ${pattern.color}40`;
            });
            
            patternCard.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = 'none';
            });
        });
        
        feedback.style.background = 'transparent';
        feedback.innerHTML = '';
    }

    function selectPattern(selectedIndex) {
        const problem = problems[currentProblem];
        const isCorrect = selectedIndex === problem.answer;
        
        if (isCorrect) {
            score++;
            scoreSpan.textContent = score;
            feedback.style.background = 'rgba(52, 211, 153, 0.2)';
            feedback.style.color = '#34d399';
            feedback.innerHTML = `✅ Correct! ${problem.explanation}`;
        } else {
            feedback.style.background = 'rgba(248, 113, 113, 0.2)';
            feedback.style.color = '#f87171';
            feedback.innerHTML = `❌ Not quite. ${problem.explanation}`;
        }
        
        // Disable clicking for 2 seconds
        const cards = patternsGrid.querySelectorAll('div');
        cards.forEach(card => card.style.pointerEvents = 'none');
        
        setTimeout(() => {
            currentProblem++;
            cards.forEach(card => card.style.pointerEvents = 'auto');
            displayProblem();
        }, 2500);
    }

    function showFinalScore() {
        patternsGrid.innerHTML = '';
        problemTextSpan.textContent = 'Quiz Complete!';
        feedback.style.background = 'rgba(129, 140, 248, 0.2)';
        feedback.style.color = '#818cf8';
        
        let message = '';
        if (score === problems.length) {
            message = '🎉 Perfect! You understand recursion patterns!';
        } else if (score >= problems.length * 0.7) {
            message = '👍 Great job! You have a good grasp of recursion!';
        } else {
            message = '📚 Keep practicing! Recursion patterns will become clearer.';
        }
        
        feedback.innerHTML = `${message}<br><br>Final Score: ${score}/${problems.length}`;
    }

    window.resetQuiz = () => {
        currentProblem = 0;
        score = 0;
        scoreSpan.textContent = '0';
        displayProblem();
    };

    // Initialize
    displayProblem();
}

// ==================== //
// Mistake Simulator    //
// ==================== //

function initMistakeSimulatorDemo() {
    const container = document.getElementById('mistakeSimulatorDemo');
    if (!container) return;

    container.style.cssText = `
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding: 2rem;
        background: #0f172a;
        border-radius: 12px;
        min-height: 400px;
    `;

    const mistakes = [
        {
            title: "Missing Base Case",
            code: `int badFactorial(int n) {\n    return n * badFactorial(n-1);  // No base case!\n}`,
            problem: "Stack Overflow - infinite recursion",
            simulation: ["badFactorial(3)", "badFactorial(2)", "badFactorial(1)", "badFactorial(0)", "badFactorial(-1)", "...", "CRASH! 💥"]
        },
        {
            title: "Not Shrinking Problem",
            code: `int badSum(int n) {\n    if (n == 1) return 1;\n    return n + badSum(n);  // Still n, not n-1!\n}`,
            problem: "Stack Overflow - same size problem",
            simulation: ["badSum(3)", "badSum(3)", "badSum(3)", "badSum(3)", "...", "CRASH! 💥"]
        },
        {
            title: "Unreachable Base Case",
            code: `int badCountdown(int n) {\n    if (n == 0) return 0;\n    return badCountdown(n + 1);  // Moving away!\n}`,
            problem: "Stack Overflow - never reaches base case",
            simulation: ["badCountdown(5)", "badCountdown(6)", "badCountdown(7)", "badCountdown(8)", "...", "CRASH! 💥"]
        },
        {
            title: "Forgetting Return",
            code: `int badSum(int n) {\n    if (n == 1) return 1;\n    n + badSum(n-1);  // Missing 'return'!\n}`,
            problem: "Undefined behavior - function doesn't return value",
            simulation: ["badSum(3) → undefined", "⚠️ Compiler warning", "Random garbage value returned"]
        }
    ];

    let currentMistake = 0;

    const demoHTML = `
        <div style="text-align: center; margin-bottom: 2rem;">
            <h4 style="color: #f87171; margin-bottom: 1rem;">🐛 Common Recursion Mistakes</h4>
            <div style="display: flex; gap: 1rem; justify-content: center;">
                <button onclick="showMistake(0)" class="demo-btn" id="btn0">Missing Base Case</button>
                <button onclick="showMistake(1)" class="demo-btn" id="btn1">Not Shrinking</button>
                <button onclick="showMistake(2)" class="demo-btn" id="btn2">Unreachable Base</button>
                <button onclick="showMistake(3)" class="demo-btn" id="btn3">No Return</button>
            </div>
        </div>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
            <div>
                <h4 style="color: #f87171; margin-bottom: 1rem;">❌ Problematic Code</h4>
                <pre id="mistakeCode" style="background: #1e293b; padding: 1.5rem; border-radius: 12px; border: 2px solid #f87171; color: #f1f5f9; font-size: 0.875rem; line-height: 1.5; overflow-x: auto;"></pre>
                <div id="mistakeProblem" style="margin-top: 1rem; padding: 1rem; background: rgba(248, 113, 113, 0.2); border-left: 4px solid #f87171; border-radius: 8px; color: #f87171; font-weight: 600;"></div>
            </div>
            
            <div>
                <h4 style="color: #34d399; margin-bottom: 1rem;">🔍 What Happens</h4>
                <div id="simulationArea" style="background: #1e293b; padding: 1.5rem; border-radius: 12px; border: 2px solid #34d399; min-height: 250px;">
                    <button onclick="runSimulation()" class="demo-btn" style="margin-bottom: 1rem; width: 100%;">▶️ Run Simulation</button>
                    <div id="simulationSteps" style="font-family: monospace; color: #f1f5f9;"></div>
                </div>
            </div>
        </div>
    `;

    container.innerHTML = demoHTML;

    const codeArea = container.querySelector('#mistakeCode');
    const problemArea = container.querySelector('#mistakeProblem');
    const simulationSteps = container.querySelector('#simulationSteps');

    function updateButtons() {
        for (let i = 0; i < 4; i++) {
            const btn = document.getElementById(`btn${i}`);
            if (i === currentMistake) {
                btn.style.background = '#f87171';
                btn.style.color = '#0f172a';
            } else {
                btn.style.background = '#818cf8';
                btn.style.color = '#0f172a';
            }
        }
    }

    window.showMistake = (index) => {
        currentMistake = index;
        const mistake = mistakes[index];
        
        codeArea.textContent = mistake.code;
        problemArea.textContent = `🚨 ${mistake.problem}`;
        simulationSteps.innerHTML = '<div style="color: #94a3b8; text-align: center;">Click "Run Simulation" to see what happens</div>';
        
        updateButtons();
    };

    window.runSimulation = () => {
        const mistake = mistakes[currentMistake];
        simulationSteps.innerHTML = '';
        
        mistake.simulation.forEach((step, index) => {
            setTimeout(() => {
                const stepDiv = document.createElement('div');
                stepDiv.style.cssText = `
                    margin-bottom: 0.5rem;
                    padding: 0.5rem;
                    background: ${step.includes('CRASH') ? 'rgba(248, 113, 113, 0.2)' : 
                                step.includes('⚠️') ? 'rgba(251, 191, 36, 0.2)' : 
                                'rgba(52, 211, 153, 0.1)'};
                    border-radius: 6px;
                    color: ${step.includes('CRASH') ? '#f87171' : 
                            step.includes('⚠️') ? '#fbbf24' : '#f1f5f9'};
                    animation: slideInRight 0.3s ease-out;
                `;
                
                if (step.includes('CRASH')) {
                    stepDiv.style.fontWeight = '700';
                    stepDiv.style.fontSize = '1.1rem';
                }
                
                stepDiv.textContent = step;
                simulationSteps.appendChild(stepDiv);
                
                // Auto-scroll to bottom
                simulationSteps.scrollTop = simulationSteps.scrollHeight;
            }, index * 800);
        });
    };

    // Add animation CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                opacity: 0;
                transform: translateX(20px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
    `;
    document.head.appendChild(style);

    // Initialize with first mistake
    window.showMistake(0);
}

// ==================== //
// Smooth Scroll Offset //
// ==================== //

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ==================== //
// Intersection Observer for Animations //
// ==================== //

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(section);
});

// ==================== //
// Loading Animation    //
// ==================== //

window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease-in';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});
