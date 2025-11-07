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
    initHeroFunction();
    initFunctionFlowDemo();
    initExecutionDemo();
    initPassingDemo();
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
// Hero Function Animation //
// ==================== //

function initHeroFunction() {
    const container = document.getElementById('heroFunction');
    if (!container) return;

    container.style.cssText = `
        display: flex;
        flex-direction: column;
        gap: 2rem;
        align-items: center;
        padding: 2rem;
    `;

    // Create function visualization
    const functionBox = document.createElement('div');
    functionBox.style.cssText = `
        background: rgba(255, 255, 255, 0.1);
        border: 3px solid rgba(255, 255, 255, 0.3);
        border-radius: 16px;
        padding: 2rem;
        min-width: 300px;
        animation: fadeInUp 0.8s ease-out;
    `;

    functionBox.innerHTML = `
        <div style="text-align: center; color: white;">
            <div style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem;">
                ⚙️ Function Machine
            </div>
            <div style="display: flex; justify-content: space-around; margin-top: 1.5rem;">
                <div style="text-align: center;">
                    <div style="font-size: 0.875rem; opacity: 0.8;">Input</div>
                    <div style="font-size: 2rem; margin-top: 0.5rem;">📥</div>
                    <div style="margin-top: 0.5rem; font-weight: 600;">5</div>
                </div>
                <div style="text-align: center;">
                    <div style="font-size: 0.875rem; opacity: 0.8;">Process</div>
                    <div style="font-size: 2rem; margin-top: 0.5rem;">⚙️</div>
                    <div style="margin-top: 0.5rem; font-weight: 600;">× 2</div>
                </div>
                <div style="text-align: center;">
                    <div style="font-size: 0.875rem; opacity: 0.8;">Output</div>
                    <div style="font-size: 2rem; margin-top: 0.5rem;">📤</div>
                    <div style="margin-top: 0.5rem; font-weight: 600;">10</div>
                </div>
            </div>
        </div>
    `;

    container.appendChild(functionBox);
}

// ==================== //
// Function Flow Demo   //
// ==================== //

function initFunctionFlowDemo() {
    const container = document.getElementById('functionFlowDemo');
    if (!container) return;

    container.style.cssText = `
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        padding: 2rem;
        background: #0f172a;
        border-radius: 12px;
        min-height: 200px;
    `;

    const stages = [
        { icon: '📥', title: 'Input', desc: 'Parameters (a=5, b=10)', color: '#818cf8' },
        { icon: '⚙️', title: 'Process', desc: 'result = a + b', color: '#f472b6' },
        { icon: '📤', title: 'Output', desc: 'return result (15)', color: '#34d399' }
    ];

    const flowContainer = document.createElement('div');
    flowContainer.style.cssText = `
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        gap: 1rem;
    `;

    stages.forEach((stage, index) => {
        const stageDiv = document.createElement('div');
        stageDiv.style.cssText = `
            flex: 1;
            min-width: 150px;
            padding: 1.5rem;
            background: #1e293b;
            border: 2px solid ${stage.color};
            border-radius: 12px;
            text-align: center;
            transition: all 0.3s ease;
            animation: slideIn 0.5s ease-out ${index * 0.2}s both;
        `;

        stageDiv.innerHTML = `
            <div style="font-size: 3rem; margin-bottom: 0.5rem;">${stage.icon}</div>
            <div style="font-weight: 700; font-size: 1.25rem; color: ${stage.color}; margin-bottom: 0.5rem;">
                ${stage.title}
            </div>
            <div style="color: #cbd5e1; font-size: 0.875rem;">
                ${stage.desc}
            </div>
        `;

        stageDiv.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.05)';
            this.style.boxShadow = `0 12px 24px rgba(0, 0, 0, 0.5)`;
        });

        stageDiv.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = 'none';
        });

        flowContainer.appendChild(stageDiv);

        // Add arrow between stages (except last)
        if (index < stages.length - 1) {
            const arrow = document.createElement('div');
            arrow.style.cssText = `
                font-size: 2rem;
                color: #64748b;
                animation: pulse 2s ease-in-out infinite;
            `;
            arrow.textContent = '→';
            flowContainer.appendChild(arrow);
        }
    });

    container.appendChild(flowContainer);
}

// ==================== //
// Execution Model Demo //
// ==================== //

function initExecutionDemo() {
    const container = document.getElementById('executionDemo');
    if (!container) return;

    container.style.cssText = `
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 2rem;
        background: #0f172a;
        border-radius: 12px;
        min-height: 300px;
    `;

    const steps = [
        { num: 1, text: 'main() starts execution', location: 'main', color: '#818cf8' },
        { num: 2, text: 'Call double_value(5)', location: 'main → function', color: '#f472b6' },
        { num: 3, text: 'Execute: num = 5, result = 10', location: 'double_value', color: '#fbbf24' },
        { num: 4, text: 'Return 10 to main()', location: 'function → main', color: '#f472b6' },
        { num: 5, text: 'Continue main() with result', location: 'main', color: '#34d399' }
    ];

    let currentStep = 0;

    const stepContainer = document.createElement('div');
    stepContainer.style.cssText = `
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    `;

    steps.forEach((step, index) => {
        const stepDiv = document.createElement('div');
        stepDiv.className = 'execution-step';
        stepDiv.style.cssText = `
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 1rem;
            background: #1e293b;
            border-left: 4px solid ${step.color};
            border-radius: 8px;
            opacity: 0.3;
            transition: all 0.3s ease;
        `;

        stepDiv.innerHTML = `
            <div style="width: 40px; height: 40px; border-radius: 50%; background: ${step.color}; 
                        display: flex; align-items: center; justify-content: center; 
                        font-weight: 700; color: #0f172a; flex-shrink: 0;">
                ${step.num}
            </div>
            <div style="flex: 1;">
                <div style="font-weight: 600; color: #f1f5f9; margin-bottom: 0.25rem;">
                    ${step.text}
                </div>
                <div style="font-size: 0.875rem; color: #94a3b8;">
                    📍 ${step.location}
                </div>
            </div>
        `;

        stepContainer.appendChild(stepDiv);
    });

    container.appendChild(stepContainer);

    // Add control buttons
    const controls = document.createElement('div');
    controls.style.cssText = `
        display: flex;
        gap: 1rem;
        justify-content: center;
        margin-top: 1rem;
    `;

    const prevBtn = createButton('← Previous', () => {
        if (currentStep > 0) {
            currentStep--;
            updateExecution();
        }
    });

    const nextBtn = createButton('Next →', () => {
        if (currentStep < steps.length - 1) {
            currentStep++;
            updateExecution();
        }
    });

    const resetBtn = createButton('Reset', () => {
        currentStep = 0;
        updateExecution();
    });

    controls.appendChild(prevBtn);
    controls.appendChild(nextBtn);
    controls.appendChild(resetBtn);
    container.appendChild(controls);

    function updateExecution() {
        const stepDivs = stepContainer.querySelectorAll('.execution-step');
        stepDivs.forEach((div, index) => {
            if (index <= currentStep) {
                div.style.opacity = '1';
                div.style.transform = 'translateX(0)';
            } else {
                div.style.opacity = '0.3';
                div.style.transform = 'translateX(-10px)';
            }

            if (index === currentStep) {
                div.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.5)';
                div.style.transform = 'translateX(4px)';
            } else {
                div.style.boxShadow = 'none';
            }
        });
    }

    updateExecution();
}

// ==================== //
// Passing Demo         //
// ==================== //

function initPassingDemo() {
    const container = document.getElementById('passingDemo');
    if (!container) return;

    container.style.cssText = `
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        padding: 2rem;
        background: #0f172a;
        border-radius: 12px;
    `;

    // Pass by Value Demo
    const valueDemo = createPassingVisual(
        'Pass by Value',
        '📋',
        'Original: 5',
        'Copy modified: 100',
        'Original after: 5',
        '#818cf8',
        false
    );

    // Pass by Reference Demo
    const refDemo = createPassingVisual(
        'Pass by Reference',
        '🔗',
        'Original: 5',
        'Reference modified: 100',
        'Original after: 100',
        '#34d399',
        true
    );

    container.appendChild(valueDemo);
    container.appendChild(refDemo);
}

function createPassingVisual(title, icon, before, during, after, color, isReference) {
    const demo = document.createElement('div');
    demo.style.cssText = `
        padding: 1.5rem;
        background: #1e293b;
        border: 2px solid ${color};
        border-radius: 12px;
        transition: all 0.3s ease;
    `;

    demo.innerHTML = `
        <div style="text-align: center; margin-bottom: 1.5rem;">
            <div style="font-size: 2rem; margin-bottom: 0.5rem;">${icon}</div>
            <div style="font-weight: 700; font-size: 1.25rem; color: ${color};">
                ${title}
            </div>
        </div>
        <div style="display: flex; flex-direction: column; gap: 1rem;">
            <div class="stage" style="padding: 1rem; background: #0f172a; border-radius: 8px; border-left: 4px solid ${color};">
                <div style="color: #94a3b8; font-size: 0.875rem; margin-bottom: 0.25rem;">Before Call</div>
                <div style="color: #f1f5f9; font-weight: 600;">${before}</div>
            </div>
            <div class="stage" style="padding: 1rem; background: #0f172a; border-radius: 8px; border-left: 4px solid ${color};">
                <div style="color: #94a3b8; font-size: 0.875rem; margin-bottom: 0.25rem;">During Function</div>
                <div style="color: #f1f5f9; font-weight: 600;">${during}</div>
            </div>
            <div class="stage" style="padding: 1rem; background: #0f172a; border-radius: 8px; border-left: 4px solid ${color};">
                <div style="color: #94a3b8; font-size: 0.875rem; margin-bottom: 0.25rem;">After Call</div>
                <div style="color: ${isReference ? '#34d399' : '#818cf8'}; font-weight: 700; font-size: 1.125rem;">
                    ${after} ${isReference ? '✨' : ''}
                </div>
            </div>
        </div>
    `;

    demo.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-4px)';
        this.style.boxShadow = `0 12px 24px ${color}40`;
    });

    demo.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'none';
    });

    return demo;
}

// ==================== //
// Helper Functions     //
// ==================== //

function createButton(text, onClick) {
    const btn = document.createElement('button');
    btn.textContent = text;
    btn.style.cssText = `
        padding: 0.75rem 1.5rem;
        background: #818cf8;
        color: #0f172a;
        border: none;
        border-radius: 8px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
    `;

    btn.addEventListener('mouseenter', function() {
        this.style.background = '#6366f1';
        this.style.transform = 'translateY(-2px)';
        this.style.boxShadow = '0 8px 12px rgba(0, 0, 0, 0.4)';
    });

    btn.addEventListener('mouseleave', function() {
        this.style.background = '#818cf8';
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'none';
    });

    btn.addEventListener('click', onClick);

    return btn;
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

