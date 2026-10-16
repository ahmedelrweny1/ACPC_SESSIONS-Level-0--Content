# 🏆 Practice Problems: Conditions & Loops

**Track:** ACPC Level 0  
**Difficulty Legend:**
- 🟢 **Level 1 — Basics**: Direct applications of if-else and simple counting loops
- 🟡 **Level 2 — Application**: Accumulators, min/max, digit extraction, multiple test cases
- 🔴 **Level 3 — Challenge**: Nested loops, patterns, time complexity optimization, logarithmic tricks

---

## 🟢 Level 1: Basics

### 1. Watermelon
- **Platform:** Codeforces (4A)
- **Link:** [Codeforces 4A](https://codeforces.com/problemset/problem/4/A)
- **Difficulty:** 800
- **Concepts:** If-else, Modulo operator, Corner cases ($w = 2$)
- **Hint:** An even number can be partitioned into two even numbers only if the number itself is even AND strictly greater than 2.

### 2. Welcome for you with Conditions
- **Platform:** Assiut University Training Sheet #1 (Problem I)
- **Link:** [Assiut Sheet 1 - Problem I](https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/I)
- **Concepts:** Relational operator (`>=`)
- **Task:** Given $A$ and $B$, print "Yes" if $A \ge B$, otherwise "No".

### 3. Multiples
- **Platform:** Assiut University Training Sheet #1 (Problem J)
- **Link:** [Assiut Sheet 1 - Problem J](https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/J)
- **Concepts:** Modulo operator `%`, Logical OR `||`
- **Hint:** Check if `a % b == 0 || b % a == 0`.

### 4. 1 to N
- **Platform:** Assiut University Training Sheet #2 (Problem A)
- **Link:** [Assiut Sheet 2 - Problem A](https://codeforces.com/group/MWSDmqGsZm/contest/219432/problem/A)
- **Concepts:** Single for-loop from $1$ to $N$
- **Hint:** Use `\n` instead of `endl` for faster output.

### 5. Even Numbers
- **Platform:** Assiut University Training Sheet #2 (Problem B)
- **Link:** [Assiut Sheet 2 - Problem B](https://codeforces.com/group/MWSDmqGsZm/contest/219432/problem/B)
- **Concepts:** Loop step sizes, boundary conditions
- **Hint:** If $N < 2$, no even numbers exist; print -1. Otherwise loop with `i += 2`.

### 6. Multiplication Table
- **Platform:** Assiut University Training Sheet #2 (Problem F)
- **Link:** [Assiut Sheet 2 - Problem F](https://codeforces.com/group/MWSDmqGsZm/contest/219432/problem/F)
- **Concepts:** Fixed 12-iteration loop, formatted output

---

## 🟡 Level 2: Application

### 7. Max and Min
- **Platform:** Assiut University Training Sheet #1 (Problem K)
- **Link:** [Assiut Sheet 1 - Problem K](https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/K)
- **Concepts:** Finding min and max among 3 variables
- **Hint:** Use `min({a, b, c})` or nested `if-else`.

### 8. Capital or Small or Digit
- **Platform:** Assiut University Training Sheet #1 (Problem M)
- **Link:** [Assiut Sheet 1 - Problem M](https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/M)
- **Concepts:** ASCII comparisons (`'A' <= ch && ch <= 'Z'`)

### 9. Digits
- **Platform:** Assiut University Training Sheet #2 (Problem Q)
- **Link:** [Assiut Sheet 2 - Problem Q](https://codeforces.com/group/MWSDmqGsZm/contest/219432/problem/Q)
- **Concepts:** `while (t--)`, `% 10` and `/ 10`
- **Hint:** Be careful with number 0!

### 10. Even, Odd, Positive and Negative
- **Platform:** Assiut University Training Sheet #2 (Problem C)
- **Link:** [Assiut Sheet 2 - Problem C](https://codeforces.com/group/MWSDmqGsZm/contest/219432/problem/C)
- **Concepts:** 4 distinct counters inside a single loop

### 11. Factorial
- **Platform:** Assiut University Training Sheet #2 (Problem G)
- **Link:** [Assiut Sheet 2 - Problem G](https://codeforces.com/group/MWSDmqGsZm/contest/219432/problem/G)
- **Concepts:** Multiplicative accumulator, `long long` for $N!$, $0! = 1$

### 12. Palindrome
- **Platform:** Assiut University Training Sheet #2 (Problem I)
- **Link:** [Assiut Sheet 2 - Problem I](https://codeforces.com/group/MWSDmqGsZm/contest/219432/problem/I)
- **Concepts:** Integer reversal algorithm: `rev = rev * 10 + (n % 10)`

### 13. Team
- **Platform:** Codeforces (231A)
- **Link:** [Codeforces 231A](https://codeforces.com/problemset/problem/231/A)
- **Difficulty:** 800
- **Concepts:** Loop over $N$ lines, count if $a + b + c \ge 2$

### 14. Elephant
- **Platform:** Codeforces (617A)
- **Link:** [Codeforces 617A](https://codeforces.com/problemset/problem/617/A)
- **Difficulty:** 800
- **Concepts:** Math division ceiling or greedy steps: `(x + 4) / 5`

---

## 🔴 Level 3: Challenge

### 15. Shape 3 (Pyramid)
- **Platform:** Assiut University Training Sheet #2 (Problem W)
- **Link:** [Assiut Sheet 2 - Problem W](https://codeforces.com/group/MWSDmqGsZm/contest/219432/problem/W)
- **Concepts:** Nested loops, diamond pattern, spaces and stars formulas

### 16. Numbers Histogram
- **Platform:** Assiut University Training Sheet #2 (Problem N)
- **Link:** [Assiut Sheet 2 - Problem N](https://codeforces.com/group/MWSDmqGsZm/contest/219432/problem/N)
- **Concepts:** Outer loop reads values, inner loop prints symbol $K$ times

### 17. Hard Compare
- **Platform:** Assiut University Training Sheet #1 (Problem Z)
- **Link:** [Assiut Sheet 1 - Problem Z](https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/Z)
- **Concepts:** Logarithm trick: $A^B > C^D \iff B \cdot \ln(A) > D \cdot \ln(C)$
- **Hint:** Directly computing $A^B$ when $A, B \le 10^{12}$ causes catastrophic overflow!

### 18. One Prime
- **Platform:** Assiut University Training Sheet #2 (Problem H)
- **Link:** [Assiut Sheet 2 - Problem H](https://codeforces.com/group/MWSDmqGsZm/contest/219432/problem/H)
- **Concepts:** Primality testing in $O(\sqrt{X})$ time complexity:
  ```cpp
  bool isPrime = (x > 1);
  for (long long i = 2; i * i <= x; i++) {
      if (x % i == 0) { isPrime = false; break; }
  }
  ```

### 19. Sum of Consecutive Odd Numbers
- **Platform:** Assiut University Training Sheet #2 (Problem S)
- **Link:** [Assiut Sheet 2 - Problem S](https://codeforces.com/group/MWSDmqGsZm/contest/219432/problem/S)
- **Concepts:** Strict interval $(min(x, y), max(x, y))$, multiple test cases

### 20. Wrong Subtraction
- **Platform:** Codeforces (977A)
- **Link:** [Codeforces 977A](https://codeforces.com/problemset/problem/977/A)
- **Difficulty:** 800
- **Concepts:** Simulation loop with $K$ iterations, checking last digit with `% 10`
