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

    // Initialize all demos
    initHeroAnimation();
    initIODemo();
    initDataTypesDemo();
    initOperatorDemo();
    initTypeCastingDemo();
});

// ==================== //
// Copy Code Functionality //
// ==================== //

function copyCode(button) {
    const codeBlock = button.closest('.code-content')?.querySelector('code') || 
                     button.parentElement.nextElementSibling?.querySelector('code');
    
    if (!codeBlock) return;
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
// Hero Animation        //
// ==================== //

function initHeroAnimation() {
    const container = document.getElementById('heroAnimation');
    if (!container) return;

    const codeSnippets = [
        { code: '<span class="keyword">int</span> x = <span class="number">42</span>;', delay: 0 },
        { code: 'cout &lt;&lt; <span class="string">"Hello!"</span>;', delay: 1 },
        { code: '<span class="keyword">double</span> pi = <span class="number">3.14</span>;', delay: 2 },
        { code: 'cin &gt;&gt; <span class="function">name</span>;', delay: 3 },
        { code: '<span class="keyword">char</span> grade = <span class="string">\'A\'</span>;', delay: 4 },
    ];

    codeSnippets.forEach((snippet, index) => {
        const block = document.createElement('div');
        block.className = 'hero-code-block';
        block.style.animationDelay = `${0.6 + index * 0.15}s`;
        block.innerHTML = snippet.code;
        container.appendChild(block);
    });
}

// ==================== //
// I/O Demo              //
// ==================== //

function initIODemo() {
    const container = document.getElementById('ioDemo');
    if (!container) return;

    container.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 1rem; width: 100%;">
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; justify-content: center;" class="demo-btn-group">
                <button class="demo-btn" onclick="runIOExample('hello')">Hello World</button>
                <button class="demo-btn" onclick="runIOExample('name')">Read Name</button>
                <button class="demo-btn" onclick="runIOExample('math')">Math Calculation</button>
                <button class="demo-btn" onclick="runIOExample('multi')">Multiple Values</button>
            </div>
            <div id="ioCode" style="margin-bottom: 0.5rem;"></div>
            <div class="output-console">
                <div class="console-header">
                    <span class="console-dot red"></span>
                    <span class="console-dot yellow"></span>
                    <span class="console-dot green"></span>
                    <span class="console-title">Output</span>
                </div>
                <div class="console-body" id="ioOutput">
                    <span class="prompt">Click a button above to see the output →</span>
                </div>
            </div>
        </div>
    `;

    // Auto-run first example
    setTimeout(() => runIOExample('hello'), 300);
}

const ioExamples = {
    hello: {
        code: `#include &lt;iostream&gt;
using namespace std;

int main() {
    cout &lt;&lt; "Hello, World!" &lt;&lt; endl;
    cout &lt;&lt; "Welcome to C++!" &lt;&lt; endl;
    return 0;
}`,
        output: `<span class="output-val">Hello, World!</span>\n<span class="output-val">Welcome to C++!</span>`
    },
    name: {
        code: `#include &lt;iostream&gt;
using namespace std;

int main() {
    string name;
    cout &lt;&lt; "Enter your name: ";
    cin &gt;&gt; name;
    cout &lt;&lt; "Hello, " &lt;&lt; name &lt;&lt; "!" &lt;&lt; endl;
    return 0;
}`,
        output: `<span class="prompt">Enter your name: </span><span class="input-val">Ahmed</span>\n<span class="output-val">Hello, Ahmed!</span>`
    },
    math: {
        code: `#include &lt;iostream&gt;
using namespace std;

int main() {
    int a, b;
    cout &lt;&lt; "Enter two numbers: ";
    cin &gt;&gt; a &gt;&gt; b;
    cout &lt;&lt; "Sum = " &lt;&lt; a + b &lt;&lt; endl;
    cout &lt;&lt; "Product = " &lt;&lt; a * b &lt;&lt; endl;
    return 0;
}`,
        output: `<span class="prompt">Enter two numbers: </span><span class="input-val">7 5</span>\n<span class="output-val">Sum = 12</span>\n<span class="output-val">Product = 35</span>`
    },
    multi: {
        code: `#include &lt;iostream&gt;
using namespace std;

int main() {
    string name;
    int age;
    cout &lt;&lt; "Enter name and age: ";
    cin &gt;&gt; name &gt;&gt; age;
    cout &lt;&lt; name &lt;&lt; " is " &lt;&lt; age 
         &lt;&lt; " years old." &lt;&lt; endl;
    return 0;
}`,
        output: `<span class="prompt">Enter name and age: </span><span class="input-val">Sara 20</span>\n<span class="output-val">Sara is 20 years old.</span>`
    }
};

function runIOExample(key) {
    const example = ioExamples[key];
    if (!example) return;

    const codeDiv = document.getElementById('ioCode');
    const outputDiv = document.getElementById('ioOutput');

    codeDiv.innerHTML = `
        <div class="code-header">
            <span class="code-language">C++</span>
            <button class="copy-btn" onclick="copyCode(this)">Copy</button>
        </div>
        <pre><code class="language-cpp">${example.code}</code></pre>
    `;

    // Animate output
    outputDiv.innerHTML = '';
    const lines = example.output.split('\n');
    lines.forEach((line, i) => {
        setTimeout(() => {
            const div = document.createElement('div');
            div.innerHTML = line;
            div.style.animation = 'fadeIn 0.3s ease-out';
            outputDiv.appendChild(div);
        }, i * 400);
    });

    // Highlight syntax
    if (window.Prism) {
        setTimeout(() => Prism.highlightAll(), 50);
    }

    // Update button states
    document.querySelectorAll('#ioDemo .demo-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}

// ==================== //
// Data Types Demo       //
// ==================== //

function initDataTypesDemo() {
    const container = document.getElementById('typesDemo');
    if (!container) return;

    const types = [
        { name: 'int', icon: '🔢', size: '4 bytes', range: '-2,147,483,648 to 2,147,483,647', desc: 'Whole numbers (most common)', color: '#818cf8' },
        { name: 'long long', icon: '🔢', size: '8 bytes', range: '±9.2 × 10¹⁸', desc: 'Very large whole numbers', color: '#a78bfa' },
        { name: 'double', icon: '🔣', size: '8 bytes', range: '±1.7 × 10³⁰⁸', desc: 'Decimal numbers (most common)', color: '#f472b6' },
        { name: 'float', icon: '🔣', size: '4 bytes', range: '±3.4 × 10³⁸', desc: 'Decimal (less precision)', color: '#fb7185' },
        { name: 'char', icon: '🔤', size: '1 byte', range: '-128 to 127 / ASCII', desc: 'Single character: \'A\', \'z\', \'9\'', color: '#34d399' },
        { name: 'bool', icon: '✅', size: '1 byte', range: 'true (1) or false (0)', desc: 'Logical true/false', color: '#fbbf24' },
        { name: 'string', icon: '📝', size: 'Dynamic', range: 'Any text', desc: 'Text (needs #include <string>)', color: '#38bdf8' },
    ];

    container.innerHTML = `
        <div class="types-grid" style="grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));">
            ${types.map((type, i) => `
                <div class="type-card" style="animation: fadeInUp 0.5s ease-out ${i * 0.1}s both; border-color: ${type.color}30;">
                    <div class="type-icon">${type.icon}</div>
                    <div class="type-name" style="color: ${type.color};">${type.name}</div>
                    <div class="type-size">${type.size}</div>
                    <div class="type-range">${type.range}</div>
                    <div class="type-desc">${type.desc}</div>
                </div>
            `).join('')}
        </div>
        <div class="tip-box" style="margin-top: 1rem;">
            <strong>💡 CP Tip:</strong> In competitive programming, use <code>int</code> for most cases. Use <code>long long</code> when values can exceed 2×10⁹. Use <code>double</code> for decimal calculations.
        </div>
    `;
}

// ==================== //
// Operator Demo         //
// ==================== //

function initOperatorDemo() {
    const container = document.getElementById('operatorDemo');
    if (!container) return;

    container.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 1.5rem; width: 100%;">
            <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: flex-end; justify-content: center;">
                <div>
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: var(--text-secondary); font-size: 0.875rem;">Value A</label>
                    <input type="number" id="opValueA" value="17" 
                           style="width: 100px; padding: 0.6rem; border: 2px solid var(--border); border-radius: 8px; font-size: 1.1rem; background: var(--bg-primary); color: var(--text-primary); text-align: center; font-weight: 700;">
                </div>
                <div>
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: var(--text-secondary); font-size: 0.875rem;">Operator</label>
                    <select id="opSelect" 
                            style="padding: 0.6rem 1rem; border: 2px solid var(--primary); border-radius: 8px; font-size: 1.1rem; background: var(--bg-primary); color: var(--primary-light); font-weight: 700; cursor: pointer;">
                        <option value="+">+  (Add)</option>
                        <option value="-">-  (Subtract)</option>
                        <option value="*">*  (Multiply)</option>
                        <option value="/">/  (Divide)</option>
                        <option value="%">%  (Modulus)</option>
                        <option value="==">== (Equal)</option>
                        <option value="!=">!= (Not Equal)</option>
                        <option value="<">< (Less)</option>
                        <option value=">"> > (Greater)</option>
                        <option value="&&">&& (AND)</option>
                        <option value="||">|| (OR)</option>
                    </select>
                </div>
                <div>
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: var(--text-secondary); font-size: 0.875rem;">Value B</label>
                    <input type="number" id="opValueB" value="5" 
                           style="width: 100px; padding: 0.6rem; border: 2px solid var(--border); border-radius: 8px; font-size: 1.1rem; background: var(--bg-primary); color: var(--text-primary); text-align: center; font-weight: 700;">
                </div>
                <button class="demo-btn" onclick="calculateResult()" style="margin-bottom: 2px;">Calculate</button>
            </div>
            <div class="output-console">
                <div class="console-header">
                    <span class="console-dot red"></span>
                    <span class="console-dot yellow"></span>
                    <span class="console-dot green"></span>
                    <span class="console-title">Result</span>
                </div>
                <div class="console-body" id="opResult">
                    <span class="prompt">Select values and click Calculate →</span>
                </div>
            </div>
        </div>
    `;

    // Auto-calculate on input change
    document.getElementById('opValueA').addEventListener('input', calculateResult);
    document.getElementById('opValueB').addEventListener('input', calculateResult);
    document.getElementById('opSelect').addEventListener('change', calculateResult);
    
    // Initial calculation
    setTimeout(calculateResult, 300);
}

function calculateResult() {
    const a = parseFloat(document.getElementById('opValueA').value) || 0;
    const b = parseFloat(document.getElementById('opValueB').value) || 0;
    const op = document.getElementById('opSelect').value;
    const resultDiv = document.getElementById('opResult');
    
    let result, cppCode, explanation;

    switch(op) {
        case '+':
            result = a + b;
            cppCode = `${a} + ${b}`;
            explanation = 'Addition';
            break;
        case '-':
            result = a - b;
            cppCode = `${a} - ${b}`;
            explanation = 'Subtraction';
            break;
        case '*':
            result = a * b;
            cppCode = `${a} * ${b}`;
            explanation = 'Multiplication';
            break;
        case '/':
            if (b === 0) {
                resultDiv.innerHTML = `<span style="color: #f87171;">⚠️ Division by zero is undefined!</span>`;
                return;
            }
            // Show both integer and double division
            const intResult = Math.trunc(a / b);
            const doubleResult = (a / b).toFixed(4);
            resultDiv.innerHTML = `
                <div><span class="output-val">${a} / ${b}</span></div>
                <div style="margin-top: 0.5rem;"><span class="prompt">int result    = </span><span class="output-val" style="font-size: 1.25rem;">${intResult}</span> <span class="prompt">(integer division truncates)</span></div>
                <div><span class="prompt">double result = </span><span class="output-val" style="font-size: 1.25rem; color: #f472b6;">${doubleResult}</span> <span class="prompt">(full precision)</span></div>
            `;
            return;
        case '%':
            if (b === 0) {
                resultDiv.innerHTML = `<span style="color: #f87171;">⚠️ Modulus by zero is undefined!</span>`;
                return;
            }
            result = Math.trunc(a) % Math.trunc(b);
            cppCode = `${Math.trunc(a)} % ${Math.trunc(b)}`;
            explanation = 'Modulus (remainder)';
            break;
        case '==':
            result = a === b ? 'true (1)' : 'false (0)';
            cppCode = `${a} == ${b}`;
            explanation = 'Equal to';
            break;
        case '!=':
            result = a !== b ? 'true (1)' : 'false (0)';
            cppCode = `${a} != ${b}`;
            explanation = 'Not equal to';
            break;
        case '<':
            result = a < b ? 'true (1)' : 'false (0)';
            cppCode = `${a} < ${b}`;
            explanation = 'Less than';
            break;
        case '>':
            result = a > b ? 'true (1)' : 'false (0)';
            cppCode = `${a} > ${b}`;
            explanation = 'Greater than';
            break;
        case '&&':
            result = (a && b) ? 'true (1)' : 'false (0)';
            cppCode = `${a} && ${b}`;
            explanation = `Logical AND (both non-zero? ${a !== 0 ? '✅' : '❌'} && ${b !== 0 ? '✅' : '❌'})`;
            break;
        case '||':
            result = (a || b) ? 'true (1)' : 'false (0)';
            cppCode = `${a} || ${b}`;
            explanation = `Logical OR (any non-zero? ${a !== 0 ? '✅' : '❌'} || ${b !== 0 ? '✅' : '❌'})`;
            break;
    }

    resultDiv.innerHTML = `
        <div><span class="prompt">${explanation}: </span><span class="output-val">${cppCode}</span></div>
        <div style="margin-top: 0.5rem;"><span class="prompt">Result = </span><span class="output-val" style="font-size: 1.25rem;">${result}</span></div>
    `;
}

// ==================== //
// Type Casting Demo     //
// ==================== //

function initTypeCastingDemo() {
    const container = document.getElementById('castingDemo');
    if (!container) return;

    const examples = [
        {
            title: '⚠️ Integer Division Pitfall',
            bad: { code: 'int a = 7, b = 2;\nint result = a / b;', output: 'result = 3', note: 'Decimal part lost!' },
            good: { code: 'int a = 7, b = 2;\ndouble result = (double)a / b;', output: 'result = 3.5', note: 'Cast to double first!' }
        },
        {
            title: '🔄 Implicit Casting (Automatic)',
            bad: { code: 'int x = 10;\ndouble y = x;  // int → double', output: 'y = 10.0', note: 'Safe: no data loss' },
            good: { code: 'double x = 9.7;\nint y = x;  // double → int', output: 'y = 9', note: '⚠️ Data loss: .7 gone!' }
        },
        {
            title: '💥 Overflow Danger',
            bad: { code: 'int a = 1000000;\nint b = a * a;  // overflow!', output: 'b = garbage value', note: 'int can\'t hold 10¹²' },
            good: { code: 'long long a = 1000000;\nlong long b = a * a;', output: 'b = 1000000000000', note: 'Use long long for big nums!' }
        }
    ];

    container.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 1.5rem; width: 100%;">
            ${examples.map((ex, i) => `
                <div style="animation: fadeInUp 0.5s ease-out ${i * 0.15}s both;">
                    <h4 style="margin-bottom: 0.75rem; color: var(--primary-light);">${ex.title}</h4>
                    <div class="comparison-container" style="margin-bottom: 0;">
                        <div class="comparison-box bad" style="padding: 1rem;">
                            <h3 style="font-size: 1rem;">❌ Common Mistake</h3>
                            <pre style="border-radius: 8px;"><code class="language-cpp">${ex.bad.code}</code></pre>
                            <div style="margin-top: 0.75rem; padding: 0.5rem; background: rgba(0,0,0,0.2); border-radius: 6px;">
                                <span style="color: #f87171; font-weight: 600;">${ex.bad.output}</span>
                                <div style="font-size: 0.8rem; color: var(--text-tertiary); margin-top: 0.25rem;">${ex.bad.note}</div>
                            </div>
                        </div>
                        <div class="comparison-box good" style="padding: 1rem;">
                            <h3 style="font-size: 1rem;">✅ Correct Way</h3>
                            <pre style="border-radius: 8px;"><code class="language-cpp">${ex.good.code}</code></pre>
                            <div style="margin-top: 0.75rem; padding: 0.5rem; background: rgba(0,0,0,0.2); border-radius: 6px;">
                                <span style="color: #34d399; font-weight: 600;">${ex.good.output}</span>
                                <div style="font-size: 0.8rem; color: var(--text-tertiary); margin-top: 0.25rem;">${ex.good.note}</div>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;

    // Re-highlight code
    if (window.Prism) {
        setTimeout(() => Prism.highlightAll(), 100);
    }
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
// Intersection Observer //
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
// Loading Animation     //
// ==================== //

window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease-in';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});
