# 🔀 Session: Conditions & Loops

**Track:** ACPC Level 0  
**Language:** C++  
**Target Audience:** Competitive Programming Beginners & ACPC Contestants  
**Goal:** Master decision-making constructs, loops, digit manipulation, nested star patterns, and essential problem-solving algorithms.

---

## 📑 Syllabus Overview

### Part 1: Conditions & Logic
1. **Conditional Statements**
   - `if`, `if-else`, and `else if` ladder
   - Nested `if` statements
   - Curly braces `{ }`, execution flow, and the dangling else trap
   - Common pitfalls: `=` vs `==`, accidental semicolon `if (...);`, chained comparisons
2. **Ternary Operator (`? :`)**
   - Syntax: `condition ? value_if_true : value_if_false`
   - Choosing between two values inline
   - CP shorthand for `YES`/`NO` and `EVEN`/`ODD` outputs
3. **Switch Statement**
   - `switch`, `case`, `break`, and `default`
   - When to use `switch` vs `if-else`
   - Fall-through mechanics and missing `break`
4. **Condition-Based Problem Solving**
   - Positive, negative, or zero
   - Even or odd
   - Maximum/minimum of two or three numbers
   - Divisibility checks (`a % b == 0`)
   - Interval range checks (`x >= L && x <= R`)

---

### Part 2: Loops & Iterations
5. **Introduction to Loops**
   - Why do we need loops? (Eliminating repetitive code, processing $N$ inputs)
   - The 3 Pillars of every loop: *Initialization*, *Condition*, *Update*
6. **The `for` Loop**
   - Syntax and execution flow
   - Counting from $1$ to $N$, counting backward, step sizes
   - Iteration calculation formula: $\lfloor (End - Start) / Step \rfloor + 1$
7. **The `while` Loop**
   - Syntax and condition-driven execution
   - Reading until End-of-File: `while (cin >> x)`
8. **Loop Control**
   - `break`: immediate loop termination
   - `continue`: skip current pass
   - Infinite loops and how to detect & avoid them
9. **Understanding Loop Execution**
   - Trace tables and dry runs
   - Off-by-one errors (OBOE)

---

### Part 3: Common Problem-Solving Patterns
10. **Counters & Accumulators**
    - Counting items meeting criteria (`cnt++`)
    - Sums and products (avoiding integer overflow with `long long`)
    - Finding minimum and maximum on-the-fly in $O(1)$ auxiliary space
11. **Multiple Test Cases**
    - The standard `while (t--)` idiom
    - Avoiding variable bleeding between test cases
12. **Digit Manipulation**
    - Extracting rightmost digit: `n % 10`
    - Discarding rightmost digit: `n / 10`
    - Summing digits, counting digits, reversing numbers, palindrome check
13. **Nested Loops**
    - Outer vs inner loop execution mechanics
    - Grid traversal (rows and columns)
    - Star patterns (Right-Angled Triangle, Pyramid, Inverted, Floyd's Triangle)

---

### Part 4: Complexity & Common Mistakes
14. **Time Complexity Basics**
    - $10^8$ operations per second rule of thumb in C++
    - $O(1)$, $O(\log N)$, $O(N)$, and $O(N^2)$
    - Why nested loops get Time Limit Exceeded (TLE) when $N = 10^5$
15. **Common Mistakes Hall of Fame**
    - Semicolon after loop headers
    - Integer overflow with sums and factorials
    - Backward loops with `unsigned` types

---

### Part 5: Interactive Learning & Practice
16. **Interactive Demos**
    - **Condition Checker:** Live Boolean expression evaluator & branch visualizer
    - **Loop Stepper:** Line-by-line tracer with live memory and console inspection
    - **Pattern Generator:** Interactive ASCII star pattern builder and C++ code generator
17. **Practice Problems**
    - Curated problems from Codeforces and Assiut University Training Sheet 1 & 2.

---

## 🚀 Getting Started

Open [`index.html`](file:///d:/ACPC/Content/Conditions-Loops/index.html) in your browser to launch the interactive learning hub.
