# 👨‍🏫 Teacher's Guide - C++ Basics Session

A comprehensive guide for instructors teaching C++ fundamentals as the first ACPC session.

---

## 📅 Session Overview

**Duration:** 2 hours  
**Format:** Single session  
**Prerequisites:** None (absolute beginners welcome)  
**Target:** ACPC Level 1 — First session ever

---

## 🎯 Learning Objectives

By the end of this session, students will be able to:

1. ✅ Write and run a basic C++ program
2. ✅ Use `cout` and `cin` for input/output
3. ✅ Declare variables with correct data types
4. ✅ Use arithmetic, comparison, and logical operators
5. ✅ Understand type casting and avoid common pitfalls
6. ✅ Know when to use `long long` vs `int`
7. ✅ Control decimal precision with `fixed` and `setprecision`

---

## 📚 Session Breakdown

### Part 1: Welcome & First Program (25 minutes)

**Section 01 — Welcome to C++**

- Open `index.html`, navigate to Basics course
- Open Section 1
- **Discuss:** What is C++ and why we use it for competitive programming
  - Speed, STL, control, widely used in competitions
- **Demo:** Program structure
  - Walk through: `#include`, `using namespace std`, `int main()`, `return 0`
  - Explain each line's purpose
- **Live Code:** Write Hello World together
  - Open IDE (CLion/VS Code/online judge)
  - Type it, compile, run — students see the output
  - Let students do it on their machines
- **Activity:** Students modify the message to print their own name

---

### Part 2: Input & Output (25 minutes)

**Section 02 — I/O Operations**

- Navigate to Section 2
- **Demo:** `cout` basics
  - Print text, numbers, variables
  - Chain with `<<`
  - Show `endl` vs `\n` (mention `\n` is faster for CP)
- **Demo:** `cin` basics
  - Read a single value
  - Read multiple values with `cin >> a >> b`
  - Show that cin skips whitespace automatically
- **Interactive Demo:** Click through the I/O examples
  - Hello World → Read Name → Math Calculation → Multiple Values
  - Students predict output before clicking
- **Live Code:** Read two numbers and print their sum
  - Students code along
- **Practice:** Read a student's name and age, print a greeting

---

### Part 3: Variables & Data Types (25 minutes)

**Section 03 — Variables & Data Types**

- Navigate to Section 3
- **Discuss:** What is a variable?
  - A named box in memory
  - Has a type, a name, and a value
- **Demo:** Interactive Data Types cards
  - Click through each type
  - Focus on: `int`, `long long`, `double`, `char`, `bool`, `string`
  - Explain when to use each
- **Key Points to Emphasize:**
  - `int` for most whole numbers
  - `long long` when values > 2 billion
  - `double` for decimals (not `float`)
  - `char` uses single quotes, `string` uses double quotes
  - `bool` is 0 or 1 (false/true)
- **Live Code:** Declare variables of each type
  - Students practice declaring and printing variables
- **⚠️ Warning:** Uninitialized variables = garbage values!

---

### ☕ Break (10 minutes)

---

### Part 4: Operators (20 minutes)

**Section 04 — Operators**

- Navigate to Section 4
- **Demo:** Arithmetic operators cards
  - `+`, `-`, `*`, `/`, `%`
  - **Critical:** Integer division! `7 / 2 = 3` not 3.5!
  - Modulus `%` — very useful in CP (even/odd, last digit)
- **Demo:** Interactive Operator Calculator
  - Try different values and operators
  - Show integer division vs double division
  - Try `%` with various numbers
- **Demo:** Comparison operators
  - Returns 0 (false) or 1 (true)
  - `==`, `!=`, `<`, `>`, `<=`, `>=`
- **Demo:** Logical operators
  - `&&` (AND), `||` (OR), `!` (NOT)
  - Real example: `(age >= 18) && (gpa >= 3.0)`
- **Demo:** Assignment shortcuts
  - `+=`, `-=`, `*=`, `/=`, `%=`
  - `++`, `--` (increment, decrement)
- **Practice:** Calculate area and perimeter of a rectangle

---

### Part 5: Type Casting & Precision (15 minutes)

**Section 05 — Type Casting**

- Navigate to Section 5
- **Demo:** Interactive Casting comparison
  - Show all 3 examples: integer division, implicit casting, overflow
  - Students predict before seeing the answer
- **Key Points:**
  - Integer division pitfall → cast to `(double)` before dividing
  - Overflow → use `long long` for big numbers
  - `fixed << setprecision(n)` for decimal precision
- **Live Code:** Fix the buggy code challenge
  - Show the buggy code
  - Ask students to identify the bugs
  - Fix together
- **CP Rule of Thumb:**
  - Read constraints carefully
  - If n ≤ 10⁹ → product might be 10¹⁸ → use `long long`
  - When in doubt, use `long long`

---

## 🎓 Teaching Strategies

### Before Class
1. **Test the platform** — Open Basics session in browser, click all demos
2. **Prepare IDE** — Have CLion/VS Code ready with a blank C++ file
3. **Test compilation** — Make sure g++/compiler works on your machine
4. **Prepare whiteboard** — Draw memory boxes for variables

### During Class
1. **Code Together** — Students type every example on their machines
2. **Predict First** — Ask "What will this print?" before running
3. **Use the Demos** — The interactive demos are your best friend
4. **Common Mistakes** — When a student makes a mistake, show it to everyone
5. **Encourage Questions** — "No question is too basic in Session 1!"

### After Class
1. **Share the platform** — Students can revisit the interactive content
2. **Assign practice** — Codeforces problems rated 800
3. **Preview next session** — "Next time we'll learn conditions and loops!"

---

## 🐛 Common Student Mistakes

### Mistake 1: Missing Semicolons
**Symptom:** Compilation error  
**Fix:** Every statement must end with `;`  
**Tip:** Read the error message — it usually points to the right line

### Mistake 2: Using `=` Instead of `==`
**Symptom:** Condition always true  
**Fix:** `=` assigns, `==` compares  
**Demo:** Show `if(x = 5)` vs `if(x == 5)`

### Mistake 3: Integer Division
**Symptom:** Getting 0 or wrong decimal result  
**Fix:** Cast one operand to `double`: `(double)a / b`  
**This is the #1 bug in beginner CP submissions!**

### Mistake 4: Overflow
**Symptom:** Random negative numbers or wrong answers  
**Fix:** Use `long long` when values can exceed 2×10⁹  
**Example:** `1000000 * 1000000` overflows `int`

### Mistake 5: Uninitialized Variables
**Symptom:** Random output each run  
**Fix:** Always initialize: `int x = 0;`

### Mistake 6: Using `float` Instead of `double`
**Symptom:** Precision errors in calculations  
**Fix:** Always use `double` in CP — more precision, same speed

---

## 💬 Sample Opening Script

> "Welcome to your first C++ session! Today you'll write your first program.
>
> C++ might look scary at first, but trust me — by the end of today, you'll be reading input, doing calculations, and printing output like a pro.
>
> Why C++? Two words: speed and power. It's the language that wins competitions. Almost every top competitive programmer uses C++.
>
> Let's start with the classic first program that every programmer in history has written... Hello, World!"

---

## 📝 Suggested Practice Problems

After the session, assign these Codeforces problems:

| # | Problem | Rating | Concept |
|---|---------|--------|---------|
| 1 | [Watermelon](https://codeforces.com/problemset/problem/4/A) | 800 | I/O, conditions |
| 2 | [Way Too Long Words](https://codeforces.com/problemset/problem/71/A) | 800 | Strings, I/O |
| 3 | [Next Round](https://codeforces.com/problemset/problem/158/A) | 800 | Loops, conditions |
| 4 | [Team](https://codeforces.com/problemset/problem/231/A) | 800 | Loops, conditions |
| 5 | [Boy or Girl](https://codeforces.com/problemset/problem/236/A) | 800 | Strings, sets |

---

## ✅ Pre-Class Checklist

**Technology:**
- [ ] Projector tested
- [ ] Browser tested with demos
- [ ] IDE ready (CLion/VS Code)
- [ ] Compiler working (g++)

**Materials:**
- [ ] Basics session platform ready
- [ ] Practice problems selected
- [ ] Whiteboard markers

**Preparation:**
- [ ] All interactive demos tested
- [ ] Code examples ready
- [ ] Timing planned (2 hours)

---

**Good luck with your first session! You're setting the foundation for everything that comes next! 🚀**

Happy Teaching! 🎓✨
