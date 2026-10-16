# 🧑‍🏫 Teacher & Mentor Guide: Conditions & Loops

**Track:** ACPC Level 0  
**Recommended Session Duration:** 2.5 to 3.0 Hours  
**Prerequisites:** Basic C++ syntax, variable declaration, data types, standard I/O (`cin`, `cout`), basic arithmetic operators.

---

## 🎯 Learning Objectives

By the end of this session, trainees will be able to:
1. Write bug-free conditional statements (`if`, `if-else`, `else if`, `switch`, ternary).
2. Understand loop lifecycle mechanics (Initialization, Condition, Body, Update).
3. Choose appropriately between `for` and `while` loops.
4. Implement standard CP patterns: counters, accumulators, on-the-fly min/max, multiple test cases (`while (t--)`).
5. Master digit extraction algorithms using `% 10` and `/ 10`.
6. Construct nested loops for grid traversal and geometric star patterns.
7. Estimate algorithm running time using the $10^8$ operations/second benchmark and diagnose Time Limit Exceeded (TLE).

---

## ⏱️ Recommended Timeline

| Segment | Duration | Topic | Format |
|---|---|---|---|
| **00:00 - 00:30** | 30 mins | **Conditions & Branching**<br>• `if`, `else if`, `else`<br>• Dangling else & curly brace rules<br>• Common traps (`=` vs `==`) | Live Coding & Trainee Q&A |
| **00:30 - 00:50** | 20 mins | **Ternary & Switch**<br>• Inline `? :`<br>• `switch` statement & fall-through | Interactive Demo 1 (Condition Checker) |
| **00:50 - 01:25** | 35 mins | **Loops Fundamentals**<br>• `for` vs `while`<br>• Tracing loop execution & variables<br>• `break` and `continue` | Interactive Demo 2 (Loop Stepper) |
| **01:25 - 01:35** | 10 mins | **Break / Coffee** ☕ | Rest |
| **01:35 - 02:15** | 40 mins | **CP Core Patterns**<br>• Multiple test cases: `while (t--)`<br>• Digit manipulation (`% 10`, `/ 10`)<br>• Min/Max without arrays | Problem Solving Walkthrough |
| **02:15 - 02:40** | 25 mins | **Nested Loops & Complexity**<br>• Rows & columns<br>• Patterns (Pyramids, Triangles)<br>• $O(N)$ vs $O(N^2)$ and TLE | Interactive Demo 3 (Pattern Generator) |
| **02:40 - 03:00** | 20 mins | **Hands-On Contest Practice**<br>• Solve Watermelon & Digits live | Trainees Solitary Coding |

---

## 💡 Teaching Tips & Common Trainee Misconceptions

### 1. The Assignment in `if` Trap
- **Misconception:** Trainees often write `if (x = 5)` instead of `if (x == 5)`.
- **Teaching Strategy:** Demonstrate what happens when this runs. Explain that `x = 5` evaluates to `5`, which C++ treats as `true`. Teach them compiler warnings or the Yoda condition `if (5 == x)`.

### 2. Forgetting to Re-initialize in `while (t--)`
- **Misconception:** Declaring accumulators (e.g. `sum = 0`) before the `while (t--)` loop.
- **Teaching Strategy:** Run a test case on the projector with two tests. Show how Test #2 gets the leftover sum from Test #1, producing Wrong Answer.

### 3. Digit Extraction Direction
- **Misconception:** Expecting `% 10` to yield digits from left to right.
- **Teaching Strategy:** Draw the number 427 on the whiteboard. Physically wipe off the 7 (`427 % 10 = 7`), leaving 42 (`427 / 10 = 42`). Show how it works like a stack (LIFO).

### 4. Nested Loops Mechanics
- **Misconception:** Trainees get confused about when the inner loop resets.
- **Teaching Strategy:** Use the **Clock Metaphor**: The outer loop is the **hour hand**, and the inner loop is the **minute hand**. The minute hand must do a complete 60-minute circle before the hour hand advances by 1!

---

## 📝 Practice Problem Assignments

### Mandatory In-Class:
1. [Watermelon (CF 4A)](https://codeforces.com/problemset/problem/4/A)
2. [Multiples (Assiut 1-J)](https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/J)
3. [Digits (Assiut 2-Q)](https://codeforces.com/group/MWSDmqGsZm/contest/219432/problem/Q)
4. [Shape 3 - Pyramid (Assiut 2-W)](https://codeforces.com/group/MWSDmqGsZm/contest/219432/problem/W)

### Homework:
- Solve the remaining Level 1 & Level 2 problems in [`PRACTICE_PROBLEMS.md`](file:///d:/ACPC/Content/Conditions-Loops/PRACTICE_PROBLEMS.md).
