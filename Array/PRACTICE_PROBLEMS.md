# 💪 Practice Problems - Array Manipulation

Additional exercises to complement the ACPC Arrays Learning Hub.

---

## 📊 Problem Difficulty Legend
- 🟢 **Easy** - Direct application of concepts
- 🟡 **Medium** - Requires combining multiple concepts
- 🔴 **Hard** - Needs problem-solving thinking

---

## Section 1-3: Array Basics & Memory

### Problem 1.1: Array Sum 🟢
**Input:** An integer n, followed by n integers  
**Output:** Sum of all elements

**Example:**
```
Input:
5
10 20 30 40 50

Output:
150
```

**Hint:** Use a loop to accumulate sum.

---

### Problem 1.2: Array Average 🟢
**Input:** An integer n, followed by n floating-point numbers  
**Output:** Average of all elements (2 decimal places)

**Example:**
```
Input:
4
85.5 90.0 78.5 88.0

Output:
85.50
```

---

### Problem 1.3: Count Positive Numbers 🟢
**Input:** An integer n, followed by n integers  
**Output:** Count of positive numbers

**Example:**
```
Input:
6
-5 10 -3 0 8 -2

Output:
2
```

**Hint:** Use if condition to check if element > 0.

---

## Section 4-5: Declaration & Indexing

### Problem 4.1: First and Last 🟢
**Input:** An integer n, followed by n integers  
**Output:** First and last element

**Example:**
```
Input:
5
10 20 30 40 50

Output:
First: 10
Last: 50
```

---

### Problem 4.2: Element at Position 🟢
**Input:** An integer n, followed by n integers, then an index k  
**Output:** Element at index k, or "Invalid index" if out of bounds

**Example:**
```
Input:
5
10 20 30 40 50
2

Output:
30
```

---

### Problem 4.3: Swap First and Last 🟡
**Input:** An integer n, followed by n integers  
**Output:** Array with first and last elements swapped

**Example:**
```
Input:
4
1 2 3 4

Output:
4 2 3 1
```

---

## Section 6: Looping

### Problem 6.1: Print in Reverse 🟢
**Input:** An integer n, followed by n integers  
**Output:** Elements in reverse order

**Example:**
```
Input:
5
10 20 30 40 50

Output:
50 40 30 20 10
```

---

### Problem 6.2: Print Even Indices 🟢
**Input:** An integer n, followed by n integers  
**Output:** Elements at even indices (0, 2, 4, ...)

**Example:**
```
Input:
6
10 20 30 40 50 60

Output:
10 30 50
```

---

### Problem 6.3: Print Alternate Elements 🟢
**Input:** An integer n, followed by n integers  
**Output:** Every other element starting from index 0

**Example:**
```
Input:
7
1 2 3 4 5 6 7

Output:
1 3 5 7
```

---

## Section 7: Common Operations

### Problem 7.1: Find Maximum 🟢
**Input:** An integer n, followed by n integers  
**Output:** Maximum element and its index

**Example:**
```
Input:
5
45 12 78 23 67

Output:
Max: 78
Index: 2
```

---

### Problem 7.2: Find Minimum 🟢
**Input:** An integer n, followed by n integers  
**Output:** Minimum element and its index

**Example:**
```
Input:
5
45 12 78 23 67

Output:
Min: 12
Index: 1
```

---

### Problem 7.3: Search Element 🟢
**Input:** An integer n, followed by n integers, then a target value  
**Output:** Index of target, or "Not found"

**Example:**
```
Input:
5
10 25 30 45 60
30

Output:
Found at index: 2
```

---

### Problem 7.4: Count Occurrences 🟡
**Input:** An integer n, followed by n integers, then a target value  
**Output:** Number of times target appears

**Example:**
```
Input:
8
1 3 2 1 4 3 1 2
1

Output:
3
```

---

### Problem 7.5: Second Largest 🟡
**Input:** An integer n, followed by n integers  
**Output:** Second largest element

**Example:**
```
Input:
5
45 12 78 23 67

Output:
67
```

**Hint:** Keep track of both largest and second largest.

---

## Section 8: Built-in Functions

### Problem 8.1: Sort and Print 🟢
**Input:** An integer n, followed by n integers  
**Output:** Sorted array in ascending order

**Example:**
```
Input:
5
45 12 78 23 67

Output:
12 23 45 67 78
```

---

### Problem 8.2: Median Value 🟡
**Input:** An integer n, followed by n integers  
**Output:** Median (middle value after sorting)

**Example:**
```
Input:
5
45 12 78 23 67

Output:
45
```

**Hint:** Sort first, then take middle element.

---

### Problem 8.3: Range (Max - Min) 🟢
**Input:** An integer n, followed by n integers  
**Output:** Difference between max and min

**Example:**
```
Input:
5
45 12 78 23 67

Output:
66
```

---

## Section 9: 2D Arrays

### Problem 9.1: Sum of Matrix 🟢
**Input:** rows, cols, then matrix elements  
**Output:** Sum of all elements

**Example:**
```
Input:
2 3
1 2 3
4 5 6

Output:
21
```

---

### Problem 9.2: Row Sums 🟢
**Input:** rows, cols, then matrix elements  
**Output:** Sum of each row

**Example:**
```
Input:
3 3
1 2 3
4 5 6
7 8 9

Output:
Row 0: 6
Row 1: 15
Row 2: 24
```

---

### Problem 9.3: Column Sums 🟡
**Input:** rows, cols, then matrix elements  
**Output:** Sum of each column

**Example:**
```
Input:
3 3
1 2 3
4 5 6
7 8 9

Output:
Col 0: 12
Col 1: 15
Col 2: 18
```

---

### Problem 9.4: Diagonal Sum 🟡
**Input:** n (square matrix size), then matrix elements  
**Output:** Sum of main diagonal

**Example:**
```
Input:
3
1 2 3
4 5 6
7 8 9

Output:
15
```

**Hint:** Main diagonal elements are at [i][i].

---

### Problem 9.5: Transpose Matrix 🟡
**Input:** rows, cols, then matrix elements  
**Output:** Transposed matrix

**Example:**
```
Input:
2 3
1 2 3
4 5 6

Output:
1 4
2 5
3 6
```

---

## Section 10: Frequency Arrays

### Problem 10.1: Most Frequent Element 🟡
**Input:** An integer n, followed by n integers  
**Output:** Most frequent element

**Example:**
```
Input:
8
1 3 2 1 4 3 1 2

Output:
1
```

---

### Problem 10.2: Unique Elements 🟢
**Input:** An integer n, followed by n integers  
**Output:** Count of unique elements

**Example:**
```
Input:
8
1 3 2 1 4 3 1 2

Output:
4
```

**Hint:** Use frequency array, count non-zero frequencies.

---

### Problem 10.3: Missing Number 🟡
**Input:** n-1 integers from range [1, n]  
**Output:** The missing number

**Example:**
```
Input:
5
1 2 4 5

Output:
3
```

**Hint:** Use frequency array or sum formula.

---

### Problem 10.4: Duplicate Elements 🟡
**Input:** An integer n, followed by n integers  
**Output:** All elements that appear more than once

**Example:**
```
Input:
8
1 3 2 1 4 3 1 2

Output:
1 2 3
```

---

## Advanced Problems

### Problem A1: Palindrome Array 🟡
**Input:** An integer n, followed by n integers  
**Output:** YES if array is palindrome, NO otherwise

**Example:**
```
Input:
5
1 2 3 2 1

Output:
YES
```

---

### Problem A2: Left Rotation 🟡
**Input:** An integer n, followed by n integers, then k (rotations)  
**Output:** Array rotated left by k positions

**Example:**
```
Input:
5
1 2 3 4 5
2

Output:
3 4 5 1 2
```

---

### Problem A3: Right Rotation 🟡
**Input:** An integer n, followed by n integers, then k (rotations)  
**Output:** Array rotated right by k positions

**Example:**
```
Input:
5
1 2 3 4 5
2

Output:
4 5 1 2 3
```

---

### Problem A4: Merge Two Arrays 🟡
**Input:** n1, array1, n2, array2  
**Output:** Merged and sorted array

**Example:**
```
Input:
3
1 3 5
3
2 4 6

Output:
1 2 3 4 5 6
```

---

### Problem A5: Remove Duplicates 🟡
**Input:** A sorted array  
**Output:** Array with duplicates removed

**Example:**
```
Input:
7
1 1 2 2 3 4 4

Output:
1 2 3 4
```

---

### Problem A6: Move Zeros to End 🟡
**Input:** An integer n, followed by n integers  
**Output:** Array with all zeros moved to end

**Example:**
```
Input:
6
0 1 0 3 12 0

Output:
1 3 12 0 0 0
```

---

### Problem A7: Leaders in Array 🔴
**Input:** An integer n, followed by n integers  
**Output:** All leader elements (elements greater than all to the right)

**Example:**
```
Input:
6
16 17 4 3 5 2

Output:
17 5 2
```

---

### Problem A8: Maximum Subarray Sum 🔴
**Input:** An integer n, followed by n integers  
**Output:** Maximum sum of contiguous subarray

**Example:**
```
Input:
8
-2 1 -3 4 -1 2 1 -5

Output:
6
```

**Hint:** Use Kadane's algorithm.

---

### Problem A9: Equilibrium Index 🔴
**Input:** An integer n, followed by n integers  
**Output:** Index where sum of left elements = sum of right elements

**Example:**
```
Input:
7
-7 1 5 2 -4 3 0

Output:
3
```

---

### Problem A10: Stock Buy-Sell 🔴
**Input:** n days of stock prices  
**Output:** Maximum profit from one transaction

**Example:**
```
Input:
6
7 1 5 3 6 4

Output:
5
```

**Hint:** Buy at 1, sell at 6 → profit = 5.

---

## 🎯 Contest-Style Problems

### Problem C1: Frequency Sort 🔴
**Input:** An array of integers  
**Output:** Array sorted by frequency (most frequent first)

**Example:**
```
Input:
8
1 1 1 2 2 3 4 4

Output:
1 1 1 2 2 4 4 3
```

---

### Problem C2: Longest Consecutive Sequence 🔴
**Input:** An array of integers  
**Output:** Length of longest consecutive elements sequence

**Example:**
```
Input:
6
100 4 200 1 3 2

Output:
4
```

**Explanation:** [1, 2, 3, 4]

---

### Problem C3: Trapping Rain Water 🔴
**Input:** n heights representing elevation map  
**Output:** Total water trapped

**Example:**
```
Input:
12
0 1 0 2 1 0 1 3 2 1 2 1

Output:
6
```

---

## 📝 Solutions Guide

### How to Approach Problems:

1. **Understand the Problem**
   - Read carefully
   - Check examples
   - Identify edge cases

2. **Plan Your Solution**
   - What loop do I need?
   - What variables to track?
   - What operations needed?

3. **Implement Step by Step**
   - Declare array correctly
   - Handle input properly
   - Test with examples
   - Handle edge cases

4. **Common Patterns**
   - **Counting**: Use frequency array or counter variable
   - **Searching**: Linear search with loop
   - **Finding**: Track min/max while iterating
   - **Transformation**: Build new array
   - **Two Pointers**: For palindrome, reversal
   - **Sorting**: Use STL sort() or manual

---

## 🏆 Challenge Levels

### Beginner Track (Complete 15 problems)
- All 🟢 Easy problems
- Focus on basic operations
- Build confidence

### Intermediate Track (Complete 25 problems)
- Mix of 🟢 and 🟡 problems
- Start combining concepts
- Develop problem-solving

### Advanced Track (Complete 35+ problems)
- All difficulty levels
- Include contest problems
- Master array manipulation

---

## 💡 Tips for Success

1. **Start Simple** - Begin with easy problems
2. **Test Edge Cases** - Empty array, single element, all same
3. **Debug Step by Step** - Print intermediate results
4. **Learn from Mistakes** - Understand why solution failed
5. **Practice Daily** - Solve at least one problem per day
6. **Review Solutions** - Learn different approaches
7. **Time Yourself** - Build speed for contests
8. **Draw Diagrams** - Visualize array operations

---

## 📚 Additional Resources

After mastering these problems:
1. **Codeforces** - Array problems with ratings
2. **HackerRank** - Array manipulation track
3. **LeetCode** - Easy and Medium array problems
4. **AtCoder** - Beginner Contest array problems
5. **CSES Problem Set** - Sorting and Searching

---

**Happy Problem Solving! 🚀**

Remember: The interactive learning hub helps you understand concepts. These problems help you apply them!

