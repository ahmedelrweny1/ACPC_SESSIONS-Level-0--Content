// Navigation and Progress Tracking
let currentSection = 1;
const totalSections = 8;

document.addEventListener('DOMContentLoaded', function() {
    // Initialize navigation
    setupNavigation();
    updateProgress();
});

function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionNum = parseInt(this.getAttribute('data-section'));
            goToSection(sectionNum);
        });
    });
}

function goToSection(sectionNum) {
    if (sectionNum < 1 || sectionNum > totalSections) return;
    
    // Hide all sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show target section
    document.getElementById(`section${sectionNum}`).classList.add('active');
    
    // Update navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    document.querySelector(`[data-section="${sectionNum}"]`).classList.add('active');
    
    // Update current section
    currentSection = sectionNum;
    updateProgress();
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateProgress() {
    const progress = (currentSection / totalSections) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
}

function resetProgress() {
    goToSection(1);
}

// Section 1: Introduction Interactive Demos

function testCinInput() {
    const input = document.getElementById('inputDemo1').value;
    const firstWord = input.split(' ')[0];
    const output = document.getElementById('inputDemoOutput');
    
    output.innerHTML = `
        <strong>Using cin >> s;</strong><br>
        Input: "${input}"<br>
        Stored: "${firstWord}"<br>
        <span style="color: #f5a623;">⚠️ Only reads until the first whitespace!</span>
    `;
}

function testGetlineInput() {
    const input = document.getElementById('inputDemo1').value;
    const output = document.getElementById('inputDemoOutput');
    
    output.innerHTML = `
        <strong>Using getline(cin, s);</strong><br>
        Input: "${input}"<br>
        Stored: "${input}"<br>
        <span style="color: #7ed321;">✅ Reads the entire line!</span>
    `;
}

function checkAnswer(button, isCorrect) {
    const options = button.parentElement.querySelectorAll('.quiz-option');
    const feedback = button.parentElement.nextElementSibling;
    
    // Disable all options
    options.forEach(opt => opt.disabled = true);
    
    if (isCorrect) {
        button.classList.add('correct');
        feedback.className = 'quiz-feedback show correct';
        feedback.textContent = '✅ Correct! cin stops reading at the first whitespace.';
    } else {
        button.classList.add('incorrect');
        feedback.className = 'quiz-feedback show incorrect';
        feedback.textContent = '❌ Not quite. cin stops at whitespace, so only "Hello" is stored.';
    }
}

// Section 2: Basic Operations

function accessCharacter() {
    const str = document.getElementById('stringInput').value;
    const index = parseInt(document.getElementById('indexInput').value);
    const output = document.getElementById('charAccessOutput');
    const visual = document.getElementById('charAccessVisual');
    
    // Clear previous display
    visual.innerHTML = '';
    
    if (index < 0 || index >= str.length) {
        output.className = 'demo-output error';
        output.textContent = `❌ Error: Index ${index} is out of bounds! String length is ${str.length}.`;
        return;
    }
    
    // Create visual representation
    for (let i = 0; i < str.length; i++) {
        const cell = document.createElement('div');
        cell.className = 'memory-cell';
        if (i === index) {
            cell.classList.add('highlighted');
        }
        cell.innerHTML = `
            <div class="cell-value">${str[i]}</div>
            <div class="cell-index">${i}</div>
        `;
        visual.appendChild(cell);
    }
    
    output.className = 'demo-output success';
    output.textContent = `✅ s[${index}] = '${str[index]}'`;
}

function calculateLength() {
    const str = document.getElementById('lengthInput').value;
    const output = document.getElementById('lengthOutput');
    
    output.className = 'demo-output success';
    output.innerHTML = `
        <strong>String:</strong> "${str}"<br>
        <strong>Length:</strong> ${str.length}<br>
        <strong>s.length():</strong> ${str.length}<br>
        <strong>s.size():</strong> ${str.length}
    `;
}

function concatenateStrings() {
    const str1 = document.getElementById('concat1').value;
    const str2 = document.getElementById('concat2').value;
    const output = document.getElementById('concatOutput');
    
    const result = str1 + str2;
    
    output.className = 'demo-output success';
    output.innerHTML = `
        <strong>First String:</strong> "${str1}"<br>
        <strong>Second String:</strong> "${str2}"<br>
        <strong>Result:</strong> "${result}"<br>
        <strong>Code:</strong> string result = first + second;
    `;
}

function compareStrings() {
    const str1 = document.getElementById('compare1').value;
    const str2 = document.getElementById('compare2').value;
    const op = document.getElementById('compareOp').value;
    const output = document.getElementById('compareOutput');
    
    let result;
    switch(op) {
        case '==':
            result = str1 === str2;
            break;
        case '!=':
            result = str1 !== str2;
            break;
        case '<':
            result = str1 < str2;
            break;
        case '>':
            result = str1 > str2;
            break;
    }
    
    output.className = 'demo-output success';
    output.innerHTML = `
        <strong>Expression:</strong> "${str1}" ${op} "${str2}"<br>
        <strong>Result:</strong> ${result}<br>
        <strong>Explanation:</strong> ${getComparisonExplanation(str1, str2, op, result)}
    `;
}

function getComparisonExplanation(str1, str2, op, result) {
    if (op === '==' || op === '!=') {
        return result ? 'The strings are identical' : 'The strings are different';
    } else {
        return result ? 
            `"${str1}" comes before "${str2}" alphabetically` :
            `"${str2}" comes before "${str1}" alphabetically`;
    }
}

function toggleHint(hintId) {
    const hint = document.getElementById(hintId);
    hint.classList.toggle('show');
}

// Section 3: String Traversal

let traversalInterval = null;

function animateTraversal() {
    stopTraversal();
    
    const str = document.getElementById('traversalInput').value;
    const visual = document.getElementById('traversalVisual');
    const output = document.getElementById('traversalOutput');
    
    visual.innerHTML = '';
    output.innerHTML = 'Characters: ';
    
    let index = 0;
    
    traversalInterval = setInterval(() => {
        if (index >= str.length) {
            stopTraversal();
            return;
        }
        
        const cell = document.createElement('div');
        cell.className = 'memory-cell highlighted';
        cell.innerHTML = `
            <div class="cell-value">${str[index]}</div>
            <div class="cell-index">${index}</div>
        `;
        visual.appendChild(cell);
        
        output.innerHTML += str[index] + ' ';
        
        // Remove highlight after delay
        setTimeout(() => {
            cell.classList.remove('highlighted');
        }, 500);
        
        index++;
    }, 600);
}

function stopTraversal() {
    if (traversalInterval) {
        clearInterval(traversalInterval);
        traversalInterval = null;
    }
}

function countVowels() {
    const str = document.getElementById('countInput').value;
    const vowels = 'aeiouAEIOU';
    let count = 0;
    let found = [];
    
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
            found.push(char);
        }
    }
    
    const output = document.getElementById('countOutput');
    output.className = 'demo-output success';
    output.innerHTML = `
        <strong>String:</strong> "${str}"<br>
        <strong>Vowels found:</strong> [${found.join(', ')}]<br>
        <strong>Total count:</strong> ${count}
    `;
}

function countDigits() {
    const str = document.getElementById('countInput').value;
    let count = 0;
    let found = [];
    
    for (let char of str) {
        if (char >= '0' && char <= '9') {
            count++;
            found.push(char);
        }
    }
    
    const output = document.getElementById('countOutput');
    output.className = 'demo-output success';
    output.innerHTML = `
        <strong>String:</strong> "${str}"<br>
        <strong>Digits found:</strong> [${found.join(', ')}]<br>
        <strong>Total count:</strong> ${count}
    `;
}

function countUppercase() {
    const str = document.getElementById('countInput').value;
    let count = 0;
    let found = [];
    
    for (let char of str) {
        if (char >= 'A' && char <= 'Z') {
            count++;
            found.push(char);
        }
    }
    
    const output = document.getElementById('countOutput');
    output.className = 'demo-output success';
    output.innerHTML = `
        <strong>String:</strong> "${str}"<br>
        <strong>Uppercase letters:</strong> [${found.join(', ')}]<br>
        <strong>Total count:</strong> ${count}
    `;
}

function findCharacter() {
    const str = document.getElementById('findStringInput').value;
    const target = document.getElementById('findCharInput').value;
    const visual = document.getElementById('findVisual');
    const output = document.getElementById('findOutput');
    
    visual.innerHTML = '';
    
    let position = -1;
    for (let i = 0; i < str.length; i++) {
        const cell = document.createElement('div');
        cell.className = 'memory-cell';
        
        if (str[i] === target && position === -1) {
            position = i;
            cell.classList.add('highlighted');
        }
        
        cell.innerHTML = `
            <div class="cell-value">${str[i]}</div>
            <div class="cell-index">${i}</div>
        `;
        visual.appendChild(cell);
    }
    
    if (position !== -1) {
        output.className = 'demo-output success';
        output.textContent = `✅ Found '${target}' at index ${position}`;
    } else {
        output.className = 'demo-output error';
        output.textContent = `❌ Character '${target}' not found`;
    }
}

function runChallenge1() {
    const output = document.getElementById('challenge1Output');
    output.className = 'demo-output success';
    output.innerHTML = `
        <strong>Solution:</strong><br><br>
        string s = "banana";<br>
        char target = 'a';<br>
        int count = 0;<br><br>
        for(int i = 0; i < s.length(); i++) {<br>
        &nbsp;&nbsp;&nbsp;&nbsp;if(s[i] == target)<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;count++;<br>
        }<br><br>
        <strong>Answer: 3</strong> (positions: 1, 3, 5)
    `;
}

// Section 4: Common Manipulations

function toUpperCase() {
    const str = document.getElementById('caseInput').value;
    const result = str.toUpperCase();
    const output = document.getElementById('caseOutput');
    
    output.className = 'demo-output success';
    output.innerHTML = `
        <strong>Original:</strong> "${str}"<br>
        <strong>Uppercase:</strong> "${result}"<br>
        <strong>Code:</strong> transform(s.begin(), s.end(), s.begin(), ::toupper);
    `;
}

function toLowerCase() {
    const str = document.getElementById('caseInput').value;
    const result = str.toLowerCase();
    const output = document.getElementById('caseOutput');
    
    output.className = 'demo-output success';
    output.innerHTML = `
        <strong>Original:</strong> "${str}"<br>
        <strong>Lowercase:</strong> "${result}"<br>
        <strong>Code:</strong> transform(s.begin(), s.end(), s.begin(), ::tolower);
    `;
}

function reverseString() {
    const str = document.getElementById('reverseInput').value;
    const result = str.split('').reverse().join('');
    const visual = document.getElementById('reverseVisual');
    const output = document.getElementById('reverseOutput');
    
    visual.innerHTML = '';
    
    // Show original
    const originalDiv = document.createElement('div');
    originalDiv.className = 'memory-cells';
    for (let char of str) {
        const cell = document.createElement('div');
        cell.className = 'memory-cell';
        cell.innerHTML = `<div class="cell-value">${char}</div>`;
        originalDiv.appendChild(cell);
    }
    visual.appendChild(originalDiv);
    
    // Arrow
    const arrow = document.createElement('div');
    arrow.style.fontSize = '2rem';
    arrow.textContent = '↓';
    visual.appendChild(arrow);
    
    // Show reversed
    const reversedDiv = document.createElement('div');
    reversedDiv.className = 'memory-cells';
    for (let char of result) {
        const cell = document.createElement('div');
        cell.className = 'memory-cell highlighted';
        cell.innerHTML = `<div class="cell-value">${char}</div>`;
        reversedDiv.appendChild(cell);
    }
    visual.appendChild(reversedDiv);
    
    output.className = 'demo-output success';
    output.innerHTML = `
        <strong>Original:</strong> "${str}"<br>
        <strong>Reversed:</strong> "${result}"
    `;
}

function checkPalindrome() {
    const str = document.getElementById('palindromeInput').value.toLowerCase();
    const reversed = str.split('').reverse().join('');
    const isPalindrome = str === reversed;
    const visual = document.getElementById('palindromeVisual');
    const output = document.getElementById('palindromeOutput');
    
    visual.innerHTML = '';
    
    // Show comparison
    const cells1 = document.createElement('div');
    cells1.className = 'memory-cells';
    for (let i = 0; i < str.length; i++) {
        const cell = document.createElement('div');
        cell.className = 'memory-cell';
        if (str[i] === str[str.length - 1 - i]) {
            cell.classList.add('highlighted');
        }
        cell.innerHTML = `
            <div class="cell-value">${str[i]}</div>
            <div class="cell-index">${i}</div>
        `;
        cells1.appendChild(cell);
    }
    visual.appendChild(cells1);
    
    if (isPalindrome) {
        output.className = 'demo-output success';
        output.innerHTML = `✅ <strong>"${str}"</strong> is a palindrome!<br>It reads the same forwards and backwards.`;
    } else {
        output.className = 'demo-output error';
        output.innerHTML = `❌ <strong>"${str}"</strong> is NOT a palindrome.<br>Forward: "${str}" | Backward: "${reversed}"`;
    }
}

function removeSpaces() {
    const str = document.getElementById('removeInput').value;
    const result = str.replace(/ /g, '');
    const output = document.getElementById('removeOutput');
    
    output.className = 'demo-output success';
    output.innerHTML = `
        <strong>Original:</strong> "${str}"<br>
        <strong>After removing spaces:</strong> "${result}"<br>
        <strong>Removed ${str.length - result.length} spaces</strong>
    `;
}

function removeVowels() {
    const str = document.getElementById('removeInput').value;
    const vowels = 'aeiouAEIOU';
    let result = '';
    
    for (let char of str) {
        if (!vowels.includes(char)) {
            result += char;
        }
    }
    
    const output = document.getElementById('removeOutput');
    output.className = 'demo-output success';
    output.innerHTML = `
        <strong>Original:</strong> "${str}"<br>
        <strong>After removing vowels:</strong> "${result}"<br>
        <strong>Removed ${str.length - result.length} vowels</strong>
    `;
}

function calculateFrequency() {
    const str = document.getElementById('freqInput').value;
    const freq = {};
    
    for (let char of str) {
        freq[char] = (freq[char] || 0) + 1;
    }
    
    const output = document.getElementById('freqOutput');
    output.className = 'demo-output success';
    
    let html = `<strong>Character Frequency for "${str}":</strong><br><br>`;
    html += '<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); gap: 10px;">';
    
    for (let char in freq) {
        html += `<div style="background: #4a90e2; color: white; padding: 10px; border-radius: 6px; text-align: center;">
                    <strong>'${char}'</strong>: ${freq[char]}
                 </div>`;
    }
    
    html += '</div>';
    output.innerHTML = html;
}

// Section 5: String Conversion

function convertNumToString() {
    const num = document.getElementById('numToStrInput').value;
    const output = document.getElementById('numToStrOutput');
    
    output.className = 'demo-output success';
    output.innerHTML = `
        <strong>Number:</strong> ${num}<br>
        <strong>Type:</strong> ${typeof parseFloat(num)}<br>
        <strong>String:</strong> "${num}"<br>
        <strong>Type:</strong> ${typeof num.toString()}<br>
        <strong>Code:</strong> string str = to_string(${num});
    `;
}

function convertStrToNum() {
    const str = document.getElementById('strToNumInput').value;
    const output = document.getElementById('strToNumOutput');
    
    const num = parseFloat(str);
    
    if (isNaN(num)) {
        output.className = 'demo-output error';
        output.textContent = `❌ Error: "${str}" cannot be converted to a number!`;
        return;
    }
    
    output.className = 'demo-output success';
    output.innerHTML = `
        <strong>String:</strong> "${str}"<br>
        <strong>Type:</strong> string<br>
        <strong>Number:</strong> ${num}<br>
        <strong>Type:</strong> ${Number.isInteger(num) ? 'int' : 'double'}<br>
        <strong>Code:</strong> ${Number.isInteger(num) ? 'int num = stoi(str);' : 'double num = stod(str);'}
    `;
}

function charToAscii() {
    const char = document.getElementById('asciiCharInput').value;
    const output = document.getElementById('asciiOutput');
    
    if (char.length !== 1) {
        output.className = 'demo-output error';
        output.textContent = '❌ Please enter exactly one character!';
        return;
    }
    
    const ascii = char.charCodeAt(0);
    
    output.className = 'demo-output success';
    output.innerHTML = `
        <strong>Character:</strong> '${char}'<br>
        <strong>ASCII Value:</strong> ${ascii}<br>
        <strong>Code:</strong> int ascii = (int)'${char}';
    `;
}

function asciiToChar() {
    const ascii = parseInt(document.getElementById('asciiNumInput').value);
    const output = document.getElementById('asciiOutput');
    
    if (ascii < 0 || ascii > 127) {
        output.className = 'demo-output error';
        output.textContent = '❌ ASCII value must be between 0 and 127!';
        return;
    }
    
    const char = String.fromCharCode(ascii);
    
    output.className = 'demo-output success';
    output.innerHTML = `
        <strong>ASCII Value:</strong> ${ascii}<br>
        <strong>Character:</strong> '${char}'<br>
        <strong>Code:</strong> char c = (char)${ascii};
    `;
}

function encodeString() {
    const str = document.getElementById('encodeInput').value;
    const shift = parseInt(document.getElementById('shiftInput').value);
    let result = '';
    
    for (let char of str) {
        if (char >= 'A' && char <= 'Z') {
            result += String.fromCharCode((char.charCodeAt(0) - 65 + shift) % 26 + 65);
        } else if (char >= 'a' && char <= 'z') {
            result += String.fromCharCode((char.charCodeAt(0) - 97 + shift) % 26 + 97);
        } else {
            result += char;
        }
    }
    
    const output = document.getElementById('encodeOutput');
    output.className = 'demo-output success';
    output.innerHTML = `
        <strong>Original:</strong> "${str}"<br>
        <strong>Shift:</strong> ${shift}<br>
        <strong>Encoded:</strong> "${result}"<br>
        <strong>Algorithm:</strong> Caesar Cipher
    `;
}

function decodeString() {
    const str = document.getElementById('encodeInput').value;
    const shift = parseInt(document.getElementById('shiftInput').value);
    let result = '';
    
    for (let char of str) {
        if (char >= 'A' && char <= 'Z') {
            result += String.fromCharCode((char.charCodeAt(0) - 65 - shift + 26) % 26 + 65);
        } else if (char >= 'a' && char <= 'z') {
            result += String.fromCharCode((char.charCodeAt(0) - 97 - shift + 26) % 26 + 97);
        } else {
            result += char;
        }
    }
    
    const output = document.getElementById('encodeOutput');
    output.className = 'demo-output success';
    output.innerHTML = `
        <strong>Encoded:</strong> "${str}"<br>
        <strong>Shift:</strong> ${shift}<br>
        <strong>Decoded:</strong> "${result}"<br>
        <strong>Algorithm:</strong> Caesar Cipher (Reverse)
    `;
}

// Section 6: Substrings & Patterns

function extractSubstring() {
    const str = document.getElementById('substrInput').value;
    const start = parseInt(document.getElementById('substrStart').value);
    const length = parseInt(document.getElementById('substrLength').value);
    const visual = document.getElementById('substrVisual');
    const output = document.getElementById('substrOutput');
    
    visual.innerHTML = '';
    
    if (start < 0 || start >= str.length) {
        output.className = 'demo-output error';
        output.textContent = '❌ Start index is out of bounds!';
        return;
    }
    
    const result = str.substr(start, length);
    
    for (let i = 0; i < str.length; i++) {
        const cell = document.createElement('div');
        cell.className = 'memory-cell';
        
        if (i >= start && i < start + length) {
            cell.classList.add('highlighted');
        }
        
        cell.innerHTML = `
            <div class="cell-value">${str[i]}</div>
            <div class="cell-index">${i}</div>
        `;
        visual.appendChild(cell);
    }
    
    output.className = 'demo-output success';
    output.innerHTML = `
        <strong>Original:</strong> "${str}"<br>
        <strong>Substring:</strong> "${result}"<br>
        <strong>Code:</strong> s.substr(${start}, ${length})
    `;
}

function searchSubstring() {
    const text = document.getElementById('searchTextInput').value;
    const pattern = document.getElementById('searchPatternInput').value;
    const visual = document.getElementById('searchVisual');
    const output = document.getElementById('searchOutput');
    
    const index = text.indexOf(pattern);
    
    visual.innerHTML = '';
    
    if (index !== -1) {
        const cells = document.createElement('div');
        cells.className = 'memory-cells';
        
        for (let i = 0; i < text.length; i++) {
            const cell = document.createElement('div');
            cell.className = 'memory-cell';
            
            if (i >= index && i < index + pattern.length) {
                cell.classList.add('highlighted');
            }
            
            cell.innerHTML = `
                <div class="cell-value">${text[i]}</div>
                <div class="cell-index">${i}</div>
            `;
            cells.appendChild(cell);
        }
        visual.appendChild(cells);
        
        output.className = 'demo-output success';
        output.innerHTML = `
            ✅ Pattern "${pattern}" found at index ${index}<br>
            <strong>Code:</strong> size_t pos = s.find("${pattern}");
        `;
    } else {
        output.className = 'demo-output error';
        output.textContent = `❌ Pattern "${pattern}" not found in the text!`;
    }
}

function checkPrefix() {
    const str = document.getElementById('prefixString').value;
    const pattern = document.getElementById('prefixPattern').value;
    const output = document.getElementById('prefixOutput');
    
    const hasPrefix = str.startsWith(pattern);
    
    if (hasPrefix) {
        output.className = 'demo-output success';
        output.innerHTML = `
            ✅ "${str}" starts with "${pattern}"<br>
            <strong>Code:</strong> s.substr(0, ${pattern.length}) == "${pattern}"
        `;
    } else {
        output.className = 'demo-output error';
        output.innerHTML = `
            ❌ "${str}" does NOT start with "${pattern}"
        `;
    }
}

function checkSuffix() {
    const str = document.getElementById('prefixString').value;
    const pattern = document.getElementById('prefixPattern').value;
    const output = document.getElementById('prefixOutput');
    
    const hasSuffix = str.endsWith(pattern);
    
    if (hasSuffix) {
        output.className = 'demo-output success';
        output.innerHTML = `
            ✅ "${str}" ends with "${pattern}"<br>
            <strong>Code:</strong> s.substr(s.length() - ${pattern.length}) == "${pattern}"
        `;
    } else {
        output.className = 'demo-output error';
        output.innerHTML = `
            ❌ "${str}" does NOT end with "${pattern}"
        `;
    }
}

// Section 7: Advanced STL Functions

function eraseDemo() {
    const str = document.getElementById('eraseInput').value;
    const pos = parseInt(document.getElementById('erasePos').value);
    const count = parseInt(document.getElementById('eraseCount').value);
    const output = document.getElementById('eraseOutput');
    
    if (pos < 0 || pos >= str.length) {
        output.className = 'demo-output error';
        output.textContent = '❌ Position is out of bounds!';
        return;
    }
    
    const result = str.slice(0, pos) + str.slice(pos + count);
    
    output.className = 'demo-output success';
    output.innerHTML = `
        <strong>Original:</strong> "${str}"<br>
        <strong>After erase(${pos}, ${count}):</strong> "${result}"<br>
        <strong>Removed:</strong> "${str.substr(pos, count)}"
    `;
}

function insertDemo() {
    const str = document.getElementById('insertInput').value;
    const pos = parseInt(document.getElementById('insertPos').value);
    const text = document.getElementById('insertText').value;
    const output = document.getElementById('insertOutput');
    
    if (pos < 0 || pos > str.length) {
        output.className = 'demo-output error';
        output.textContent = '❌ Position is out of bounds!';
        return;
    }
    
    const result = str.slice(0, pos) + text + str.slice(pos);
    
    output.className = 'demo-output success';
    output.innerHTML = `
        <strong>Original:</strong> "${str}"<br>
        <strong>After insert(${pos}, "${text}"):</strong> "${result}"<br>
        <strong>Code:</strong> s.insert(${pos}, "${text}");
    `;
}

function replaceDemo() {
    const str = document.getElementById('replaceInput').value;
    const from = document.getElementById('replaceFrom').value;
    const to = document.getElementById('replaceTo').value;
    const output = document.getElementById('replaceOutput');
    
    const result = str.replace(new RegExp(from, 'g'), to);
    
    output.className = 'demo-output success';
    output.innerHTML = `
        <strong>Original:</strong> "${str}"<br>
        <strong>Replace:</strong> "${from}" → "${to}"<br>
        <strong>Result:</strong> "${result}"<br>
        <strong>Replacements:</strong> ${(str.match(new RegExp(from, 'g')) || []).length}
    `;
}

function sortString() {
    const str = document.getElementById('algoInput').value;
    const result = str.split('').sort().join('');
    const output = document.getElementById('algoOutput');
    
    output.className = 'demo-output success';
    output.innerHTML = `
        <strong>Original:</strong> "${str}"<br>
        <strong>Sorted:</strong> "${result}"<br>
        <strong>Code:</strong> sort(s.begin(), s.end());
    `;
}

function reverseStringAlgo() {
    const str = document.getElementById('algoInput').value;
    const result = str.split('').reverse().join('');
    const output = document.getElementById('algoOutput');
    
    output.className = 'demo-output success';
    output.innerHTML = `
        <strong>Original:</strong> "${str}"<br>
        <strong>Reversed:</strong> "${result}"<br>
        <strong>Code:</strong> reverse(s.begin(), s.end());
    `;
}

function uniqueChars() {
    const str = document.getElementById('algoInput').value;
    const result = [...new Set(str)].join('');
    const output = document.getElementById('algoOutput');
    
    output.className = 'demo-output success';
    output.innerHTML = `
        <strong>Original:</strong> "${str}"<br>
        <strong>Unique Characters:</strong> "${result}"<br>
        <strong>Duplicates Removed:</strong> ${str.length - result.length}
    `;
}

// Section 8: Problem Solving

function checkAnagram() {
    const str1 = document.getElementById('anagram1').value.toLowerCase();
    const str2 = document.getElementById('anagram2').value.toLowerCase();
    const output = document.getElementById('anagramOutput');
    
    if (str1.length !== str2.length) {
        output.className = 'demo-output error';
        output.innerHTML = `❌ NOT anagrams<br>Different lengths: ${str1.length} vs ${str2.length}`;
        return;
    }
    
    const sorted1 = str1.split('').sort().join('');
    const sorted2 = str2.split('').sort().join('');
    
    if (sorted1 === sorted2) {
        output.className = 'demo-output success';
        output.innerHTML = `
            ✅ <strong>These ARE anagrams!</strong><br>
            "${str1}" and "${str2}"<br>
            Sorted: "${sorted1}"
        `;
    } else {
        output.className = 'demo-output error';
        output.innerHTML = `
            ❌ <strong>NOT anagrams</strong><br>
            "${str1}" → "${sorted1}"<br>
            "${str2}" → "${sorted2}"
        `;
    }
}

function removeDuplicates() {
    const str = document.getElementById('dupInput').value;
    const result = [...new Set(str)].join('');
    const output = document.getElementById('dupOutput');
    
    output.className = 'demo-output success';
    output.innerHTML = `
        <strong>Original:</strong> "${str}"<br>
        <strong>After removing duplicates:</strong> "${result}"<br>
        <strong>Length:</strong> ${str.length} → ${result.length}<br>
        <strong>Removed:</strong> ${str.length - result.length} characters
    `;
}

function findLongestWord() {
    const sentence = document.getElementById('wordInput').value;
    const words = sentence.split(' ');
    let longest = '';
    
    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    
    const output = document.getElementById('wordOutput');
    output.className = 'demo-output success';
    output.innerHTML = `
        <strong>Sentence:</strong> "${sentence}"<br>
        <strong>Words:</strong> [${words.join(', ')}]<br>
        <strong>Longest word:</strong> "${longest}"<br>
        <strong>Length:</strong> ${longest.length}
    `;
}

function reverseWords() {
    const sentence = document.getElementById('revWordInput').value;
    const words = sentence.split(' ');
    const reversed = words.map(word => word.split('').reverse().join('')).join(' ');
    const output = document.getElementById('revWordOutput');
    
    output.className = 'demo-output success';
    output.innerHTML = `
        <strong>Original:</strong> "${sentence}"<br>
        <strong>Reversed words:</strong> "${reversed}"<br>
        <strong>Each word is reversed individually</strong>
    `;
}

