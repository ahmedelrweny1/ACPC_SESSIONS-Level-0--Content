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
    initHeroArray();
    initArrayDemo1();
    initInitDemo();
    initIndexDemo();
    initOperationsDemo();
    initMatrix2DDemo();
    initFreqDemo();
    initMemoryDiagram();
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
// Hero Array Animation //
// ==================== //

function initHeroArray() {
    const container = document.getElementById('heroArray');
    if (!container) return;

    const values = [10, 25, 40, 55, 70, 85, 100];
    
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.style.gap = '10px';
    container.style.flexWrap = 'wrap';

    values.forEach((value, index) => {
        setTimeout(() => {
            const cell = createArrayCell(value, index, 'white', 'rgba(255,255,255,0.2)');
            cell.style.animation = `fadeInUp 0.5s ease-out ${index * 0.1}s both`;
            container.appendChild(cell);
        }, index * 100);
    });
}

// ==================== //
// Array Demo 1         //
// ==================== //

function initArrayDemo1() {
    const container = document.getElementById('arrayDemo1');
    if (!container) return;

    const values = [10, 20, 30, 40, 50];
    
    container.innerHTML = '';
    values.forEach((value, index) => {
        const cell = createArrayCell(value, index);
        container.appendChild(cell);
    });
}

// ==================== //
// Initialization Demo  //
// ==================== //

function initInitDemo() {
    const container = document.getElementById('initDemo');
    if (!container) return;

    const examples = [
        { title: 'Default (zeros)', values: [0, 0, 0, 0, 0], code: 'int arr[5] = {0};' },
        { title: 'Full Init', values: [10, 20, 30, 40, 50], code: 'int arr[5] = {10, 20, 30, 40, 50};' },
        { title: 'Partial Init', values: [1, 2, 0, 0, 0], code: 'int arr[5] = {1, 2};' },
        { title: 'Garbage', values: ['?', '?', '?', '?', '?'], code: 'int arr[5];  // Uninitialized!' }
    ];

    container.innerHTML = '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; width: 100%;"></div>';
    const grid = container.firstChild;

    examples.forEach((example, exIndex) => {
        const exampleDiv = document.createElement('div');
        exampleDiv.style.cssText = `
            padding: 1rem;
            background: #0f172a;
            border-radius: 12px;
            border: 2px solid #334155;
            transition: all 0.3s ease;
        `;
        
        exampleDiv.innerHTML = `
            <h4 style="margin-bottom: 0.75rem; color: #818cf8; font-size: 1rem;">${example.title}</h4>
            <div class="mini-array" style="display: flex; gap: 8px; margin-bottom: 0.75rem; justify-content: center; flex-wrap: wrap;"></div>
            <code style="font-size: 0.75rem; display: block; background: #1e293b; padding: 0.5rem; border-radius: 6px; overflow-x: auto; color: #cbd5e1;">${example.code}</code>
        `;

        const arrayContainer = exampleDiv.querySelector('.mini-array');
        example.values.forEach((value, index) => {
            const cell = document.createElement('div');
            cell.style.cssText = `
                width: 40px;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                border: 2px solid ${value === '?' ? '#f87171' : '#818cf8'};
                border-radius: 6px;
                font-weight: 700;
                color: ${value === '?' ? '#f87171' : '#a5b4fc'};
                background: ${value === '?' ? 'rgba(248, 113, 113, 0.15)' : '#1e293b'};
                animation: slideIn 0.4s ease-out ${index * 0.1}s both;
            `;
            cell.textContent = value;
            arrayContainer.appendChild(cell);
        });

        exampleDiv.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
            this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.5)';
            this.style.borderColor = '#818cf8';
        });

        exampleDiv.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
            this.style.borderColor = '#334155';
        });

        grid.appendChild(exampleDiv);
    });
}

// ==================== //
// Index Demo           //
// ==================== //

function initIndexDemo() {
    const container = document.getElementById('indexDemo');
    if (!container) return;

    const values = [100, 200, 300, 400, 500];
    
    container.innerHTML = `
        <div style="margin-bottom: 1rem;">
            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: #cbd5e1;">
                Select Index (0-${values.length - 1}):
            </label>
            <input type="number" id="indexSelector" min="0" max="${values.length - 1}" value="0" 
                   style="width: 100%; padding: 0.5rem; border: 2px solid #334155; border-radius: 8px; font-size: 1rem; background: #1e293b; color: #f1f5f9;">
        </div>
        <div id="indexArrayDisplay" style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; margin-bottom: 1rem;"></div>
        <div id="indexInfo" style="padding: 1rem; background: #1e293b; border-radius: 8px; text-align: center; font-weight: 600; color: #818cf8; border: 1px solid #334155;"></div>
    `;

    const arrayDisplay = container.querySelector('#indexArrayDisplay');
    const indexInfo = container.querySelector('#indexInfo');
    const indexSelector = container.querySelector('#indexSelector');

    const cells = [];
    values.forEach((value, index) => {
        const cell = createArrayCell(value, index);
        cells.push(cell);
        arrayDisplay.appendChild(cell);
    });

    function updateDisplay() {
        const selectedIndex = parseInt(indexSelector.value);
        
        cells.forEach((cell, index) => {
            if (index === selectedIndex) {
                cell.classList.add('active');
            } else {
                cell.classList.remove('active');
            }
        });

        indexInfo.innerHTML = `
            <div>arr[${selectedIndex}] = ${values[selectedIndex]}</div>
            <div style="font-size: 0.875rem; color: #94a3b8; margin-top: 0.25rem;">
                Memory Address: base + (${selectedIndex} × 4 bytes) = base + ${selectedIndex * 4}
            </div>
        `;
    }

    indexSelector.addEventListener('input', updateDisplay);
    updateDisplay();
}

// ==================== //
// Operations Demo      //
// ==================== //

function initOperationsDemo() {
    const container = document.getElementById('operationsDemo');
    if (!container) return;

    let currentArray = [45, 12, 78, 23, 67];
    
    container.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 1rem;">
            <div id="opsArrayDisplay" style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;"></div>
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; justify-content: center;">
                <button onclick="performOperation('sum')" class="op-btn">Calculate Sum</button>
                <button onclick="performOperation('max')" class="op-btn">Find Max</button>
                <button onclick="performOperation('min')" class="op-btn">Find Min</button>
                <button onclick="performOperation('avg')" class="op-btn">Calculate Average</button>
                <button onclick="performOperation('sort')" class="op-btn">Sort Array</button>
                <button onclick="performOperation('reverse')" class="op-btn">Reverse Array</button>
                <button onclick="performOperation('reset')" class="op-btn" style="background: #64748b;">Reset</button>
            </div>
            <div id="opsResult" style="padding: 1rem; background: #1e293b; border: 1px solid #334155; border-radius: 8px; text-align: center; font-weight: 600; min-height: 60px; display: flex; align-items: center; justify-content: center; color: #818cf8;"></div>
        </div>
    `;

    // Add button styles
    const style = document.createElement('style');
    style.textContent = `
        .op-btn {
            padding: 0.5rem 1rem;
            background: #818cf8;
            color: #0f172a;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-weight: 600;
            transition: all 0.3s ease;
        }
        .op-btn:hover {
            background: #6366f1;
            color: white;
            transform: translateY(-2px);
            box-shadow: 0 8px 12px rgba(0, 0, 0, 0.4);
        }
    `;
    document.head.appendChild(style);

    function displayArray() {
        const display = container.querySelector('#opsArrayDisplay');
        display.innerHTML = '';
        currentArray.forEach((value, index) => {
            const cell = createArrayCell(value, index);
            display.appendChild(cell);
        });
    }

    window.performOperation = function(operation) {
        const resultDiv = container.querySelector('#opsResult');
        
        switch(operation) {
            case 'sum':
                const sum = currentArray.reduce((a, b) => a + b, 0);
                resultDiv.innerHTML = `Sum of all elements: <strong>${sum}</strong>`;
                break;
            case 'max':
                const max = Math.max(...currentArray);
                resultDiv.innerHTML = `Maximum value: <strong>${max}</strong>`;
                highlightValue(max);
                break;
            case 'min':
                const min = Math.min(...currentArray);
                resultDiv.innerHTML = `Minimum value: <strong>${min}</strong>`;
                highlightValue(min);
                break;
            case 'avg':
                const avg = (currentArray.reduce((a, b) => a + b, 0) / currentArray.length).toFixed(2);
                resultDiv.innerHTML = `Average: <strong>${avg}</strong>`;
                break;
            case 'sort':
                currentArray.sort((a, b) => a - b);
                displayArray();
                resultDiv.innerHTML = `Array sorted in <strong>ascending order</strong>`;
                break;
            case 'reverse':
                currentArray.reverse();
                displayArray();
                resultDiv.innerHTML = `Array <strong>reversed</strong>`;
                break;
            case 'reset':
                currentArray = [45, 12, 78, 23, 67];
                displayArray();
                resultDiv.innerHTML = 'Array <strong>reset</strong> to original values';
                break;
        }
    };

    function highlightValue(value) {
        setTimeout(() => {
            const cells = container.querySelectorAll('.array-cell');
            cells.forEach(cell => {
                const cellValue = parseInt(cell.querySelector('.value').textContent);
                if (cellValue === value) {
                    cell.classList.add('active');
                    setTimeout(() => cell.classList.remove('active'), 2000);
                }
            });
        }, 100);
    }

    displayArray();
    container.querySelector('#opsResult').innerHTML = 'Select an operation to perform on the array';
}

// ==================== //
// 2D Array Demo        //
// ==================== //

function initMatrix2DDemo() {
    const container = document.getElementById('matrix2dDemo');
    if (!container) return;

    const matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];

    container.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 1rem;">
            <div id="matrixDisplay" style="display: inline-flex; flex-direction: column; gap: 8px; align-items: center; justify-content: center;"></div>
            <div id="matrixInfo" style="padding: 1rem; background: #1e293b; border: 1px solid #334155; border-radius: 8px; text-align: center; font-weight: 600; color: #818cf8;">
                Click on any cell to see its position
            </div>
        </div>
    `;

    const matrixDisplay = container.querySelector('#matrixDisplay');
    const matrixInfo = container.querySelector('#matrixInfo');

    matrix.forEach((row, i) => {
        const rowDiv = document.createElement('div');
        rowDiv.style.cssText = 'display: flex; gap: 8px;';
        
        row.forEach((value, j) => {
            const cell = document.createElement('div');
            cell.style.cssText = `
                width: 60px;
                height: 60px;
                display: flex;
                align-items: center;
                justify-content: center;
                border: 2px solid #818cf8;
                border-radius: 8px;
                font-weight: 700;
                color: #a5b4fc;
                background: #1e293b;
                cursor: pointer;
                transition: all 0.3s ease;
            `;
            cell.textContent = value;
            
            cell.addEventListener('click', function() {
                document.querySelectorAll('#matrixDisplay > div > div').forEach(c => {
                    c.style.background = '#1e293b';
                    c.style.color = '#a5b4fc';
                    c.style.transform = 'scale(1)';
                });
                
                this.style.background = '#818cf8';
                this.style.color = '#0f172a';
                this.style.transform = 'scale(1.1)';
                
                matrixInfo.innerHTML = `
                    <div>matrix[${i}][${j}] = ${value}</div>
                    <div style="font-size: 0.875rem; color: #94a3b8; margin-top: 0.25rem;">
                        Row ${i}, Column ${j}
                    </div>
                `;
            });

            cell.addEventListener('mouseenter', function() {
                if (this.style.background !== 'rgb(129, 140, 248)') {
                    this.style.transform = 'scale(1.05)';
                    this.style.boxShadow = '0 8px 12px rgba(0, 0, 0, 0.4)';
                }
            });

            cell.addEventListener('mouseleave', function() {
                if (this.style.background !== 'rgb(129, 140, 248)') {
                    this.style.transform = 'scale(1)';
                    this.style.boxShadow = 'none';
                }
            });

            rowDiv.appendChild(cell);
        });
        
        matrixDisplay.appendChild(rowDiv);
    });
}

// ==================== //
// Frequency Array Demo //
// ==================== //

function initFreqDemo() {
    const container = document.getElementById('freqDemo');
    if (!container) return;

    const originalArray = [1, 3, 2, 1, 4, 3, 1, 2];
    const freq = {};
    
    originalArray.forEach(num => {
        freq[num] = (freq[num] || 0) + 1;
    });

    container.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 1.5rem;">
            <div>
                <h4 style="margin-bottom: 0.75rem; color: #818cf8;">Original Array</h4>
                <div id="freqOriginal" style="display: flex; gap: 8px; justify-content: center; flex-wrap: wrap;"></div>
            </div>
            <div style="text-align: center; font-size: 1.5rem; color: #818cf8;">↓</div>
            <div>
                <h4 style="margin-bottom: 0.75rem; color: #818cf8;">Frequency Count</h4>
                <div id="freqCount" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1rem;"></div>
            </div>
            <div style="padding: 1rem; background: rgba(251, 191, 36, 0.15); border-radius: 8px; border-left: 4px solid #fbbf24; color: #fbbf24;">
                <strong>💡 Tip:</strong> freq[value] = count of how many times 'value' appears
            </div>
        </div>
    `;

    const originalDisplay = container.querySelector('#freqOriginal');
    originalArray.forEach((value, index) => {
        const cell = createArrayCell(value, index);
        originalDisplay.appendChild(cell);
    });

    const freqDisplay = container.querySelector('#freqCount');
    Object.keys(freq).sort((a, b) => a - b).forEach(key => {
        const freqCard = document.createElement('div');
        freqCard.style.cssText = `
            padding: 1rem;
            background: #1e293b;
            border: 2px solid #818cf8;
            border-radius: 12px;
            text-align: center;
            transition: all 0.3s ease;
        `;
        
        freqCard.innerHTML = `
            <div style="font-size: 1.5rem; font-weight: 700; color: #a5b4fc; margin-bottom: 0.5rem;">
                ${key}
            </div>
            <div style="font-size: 0.875rem; color: #94a3b8; margin-bottom: 0.5rem;">
                appears
            </div>
            <div style="font-size: 2rem; font-weight: 700; color: #f472b6;">
                ${freq[key]}
            </div>
            <div style="font-size: 0.875rem; color: #94a3b8;">
                ${freq[key] === 1 ? 'time' : 'times'}
            </div>
        `;

        freqCard.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
            this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.5)';
            this.style.background = '#818cf8';
            this.querySelectorAll('div').forEach(div => {
                if (div.style.color !== 'rgb(244, 114, 182)') {
                    div.style.color = '#0f172a';
                }
            });
            
            // Highlight original array
            const cells = originalDisplay.querySelectorAll('.array-cell');
            cells.forEach(cell => {
                if (parseInt(cell.querySelector('.value').textContent) === parseInt(key)) {
                    cell.classList.add('active');
                }
            });
        });

        freqCard.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
            this.style.background = '#1e293b';
            this.querySelectorAll('div').forEach((div, idx) => {
                if (idx === 0 || idx === 4) div.style.color = '#a5b4fc';
                else if (idx === 2) div.style.color = '#f472b6';
                else div.style.color = '#94a3b8';
            });
            
            // Remove highlights
            const cells = originalDisplay.querySelectorAll('.array-cell');
            cells.forEach(cell => cell.classList.remove('active'));
        });

        freqDisplay.appendChild(freqCard);
    });
}

// ==================== //
// Memory Diagram       //
// ==================== //

function initMemoryDiagram() {
    const container = document.getElementById('memoryDiagram');
    if (!container) return;

    const values = [10, 20, 30, 40, 50];
    const baseAddress = 0x1000;

    container.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 0.5rem;">
            ${values.map((value, index) => {
                const address = baseAddress + (index * 4);
                return `
                    <div style="display: grid; grid-template-columns: 100px 80px 100px auto; gap: 1rem; padding: 0.75rem; background: #1e293b; border-radius: 8px; border: 2px solid #334155; align-items: center; transition: all 0.3s ease;" 
                         onmouseenter="this.style.borderColor='#818cf8'; this.style.transform='translateX(4px)';"
                         onmouseleave="this.style.borderColor='#334155'; this.style.transform='translateX(0)';">
                        <div style="font-weight: 700; color: #a5b4fc;">arr[${index}]</div>
                        <div style="padding: 0.5rem; background: #0f172a; border-radius: 6px; text-align: center; font-weight: 700; color: #cbd5e1;">${value}</div>
                        <div style="font-family: monospace; color: #94a3b8; font-size: 0.875rem;">0x${address.toString(16)}</div>
                        <div style="font-size: 0.75rem; color: #64748b;">+${index * 4} bytes</div>
                    </div>
                `;
            }).join('')}
        </div>
        <div style="margin-top: 1rem; padding: 1rem; background: rgba(14, 165, 233, 0.15); border-radius: 8px; border-left: 4px solid #0ea5e9; color: #7dd3fc;">
            <strong>📍 Memory Layout:</strong> Each integer occupies 4 bytes, stored sequentially in memory
        </div>
    `;
}

// ==================== //
// Helper Functions     //
// ==================== //

function createArrayCell(value, index, textColor = '#6366f1', borderColor = '#6366f1') {
    const cell = document.createElement('div');
    cell.className = 'array-cell';
    cell.style.borderColor = borderColor;
    
    const valueSpan = document.createElement('span');
    valueSpan.className = 'value';
    valueSpan.textContent = value;
    valueSpan.style.color = textColor;
    
    const indexSpan = document.createElement('span');
    indexSpan.className = 'index';
    indexSpan.textContent = `[${index}]`;
    
    cell.appendChild(valueSpan);
    cell.appendChild(indexSpan);
    
    return cell;
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
