# 💪 Practice Problems - String Manipulation

Additional exercises to complement the ACPC Strings Learning Hub.

---

## 📊 Problem Difficulty Legend
- 🟢 **Easy** - Direct application of concepts
- 🟡 **Medium** - Requires combining multiple concepts
- 🔴 **Hard** - Needs problem-solving thinking

---

## Section 1-2: Basic String Operations

### Problem 1.1: Name Formatter 🟢
**Input:** First name and last name on separate lines  
**Output:** Full name in format "Last, First"

**Example:**
```
Input: 
Ahmed
Ali

Output:
Ali, Ahmed
```

**Hint:** Use string concatenation with comma and space.

---

### Problem 1.2: Length Validator 🟢
**Input:** A string  
**Output:** "SHORT" if length < 5, "MEDIUM" if 5-10, "LONG" if > 10

**Example:**
```
Input: Programming
Output: LONG
```

---

### Problem 1.3: Email Username 🟡
**Input:** An email address  
**Output:** Just the username part (before @)

**Example:**
```
Input: ahmed@example.com
Output: ahmed
```

**Hint:** Loop until you find '@' character.

---

## Section 3: String Traversal

### Problem 3.1: Count Spaces 🟢
**Input:** A sentence  
**Output:** Number of spaces

**Example:**
```
Input: Hello World Programming
Output: 2
```

---

### Problem 3.2: Digit Sum 🟡
**Input:** A string containing letters and digits  
**Output:** Sum of all digits

**Example:**
```
Input: abc123def45
Output: 15
```

**Hint:** Check if character is digit, convert to int, add to sum.

---

### Problem 3.3: First Repeating Character 🟡
**Input:** A string  
**Output:** First character that appears more than once

**Example:**
```
Input: programming
Output: r
```

---

### Problem 3.4: Consonant Counter 🟢
**Input:** A string  
**Output:** Number of consonants (non-vowel letters)

**Example:**
```
Input: Hello World
Output: 7
```

---

## Section 4: String Manipulations

### Problem 4.1: Title Case 🟡
**Input:** A sentence in lowercase  
**Output:** Same sentence with first letter of each word capitalized

**Example:**
```
Input: hello world programming
Output: Hello World Programming
```

**Hint:** Capitalize after spaces and at position 0.

---

### Problem 4.2: Remove Consecutive Duplicates 🟡
**Input:** A string  
**Output:** String with consecutive duplicates removed

**Example:**
```
Input: aabbccddaa
Output: abcda
```

---

### Problem 4.3: Valid Palindrome (Ignore Spaces) 🟡
**Input:** A sentence  
**Output:** YES if palindrome (ignoring spaces), NO otherwise

**Example:**
```
Input: race car
Output: YES

Input: hello world
Output: NO
```

---

### Problem 4.4: Mirror String 🟢
**Input:** A string  
**Output:** Original string + space + reversed string

**Example:**
```
Input: ACPC
Output: ACPC CPCA
```

---

### Problem 4.5: Character Frequency 🟡
**Input:** A string and a character  
**Output:** How many times the character appears

**Example:**
```
Input: 
programming
g

Output: 2
```

---

## Section 5: String Conversion

### Problem 5.1: Number Words 🟢
**Input:** A digit (0-9)  
**Output:** Word representation

**Example:**
```
Input: 5
Output: Five
```

**Hint:** Use if-else or array of strings.

---

### Problem 5.2: Sum of Digits in String 🟡
**Input:** A string like "12abc34"  
**Output:** Sum of all digits (12 + 34 = 46)

**Example:**
```
Input: a1b2c3
Output: 6
```

---

### Problem 5.3: ROT13 Cipher 🟡
**Input:** A string  
**Output:** String encoded with ROT13 (shift by 13)

**Example:**
```
Input: HELLO
Output: URYYB
```

**Hint:** Similar to Caesar cipher with shift = 13.

---

### Problem 5.4: Binary to Decimal 🔴
**Input:** Binary string (e.g., "1010")  
**Output:** Decimal number

**Example:**
```
Input: 1010
Output: 10
```

---

## Section 6: Substrings & Patterns

### Problem 6.1: Word Count 🟢
**Input:** A sentence  
**Output:** Number of words

**Example:**
```
Input: I love programming
Output: 3
```

**Hint:** Count spaces + 1, or split by spaces.

---

### Problem 6.2: Find All Occurrences 🟡
**Input:** Text and pattern  
**Output:** All positions where pattern appears

**Example:**
```
Input:
abababa
aba

Output: 0 2 4
```

---

### Problem 6.3: Longest Common Prefix 🔴
**Input:** Two strings  
**Output:** Longest common starting substring

**Example:**
```
Input:
flower
flow

Output: flow
```

---

### Problem 6.4: Extract Domain 🟡
**Input:** URL (http://www.example.com/page)  
**Output:** Domain only (example.com)

**Example:**
```
Input: http://www.google.com/search
Output: google.com
```

---

### Problem 6.5: Abbreviation 🟢
**Input:** Full name  
**Output:** Initials

**Example:**
```
Input: Ahmed Mohamed Ali
Output: AMA
```

---

## Section 7: Advanced Problems

### Problem 7.1: Remove Vowels 🟢
**Input:** A string  
**Output:** String without vowels

**Example:**
```
Input: Programming
Output: Prgrmmng
```

---

### Problem 7.2: Reverse Words in Sentence 🟡
**Input:** A sentence  
**Output:** Same sentence with word order reversed

**Example:**
```
Input: I love programming
Output: programming love I
```

**Note:** Different from reversing each word!

---

### Problem 7.3: Compress String 🔴
**Input:** A string  
**Output:** Run-length encoded string

**Example:**
```
Input: aaabbcccc
Output: a3b2c4
```

---

### Problem 7.4: Expand String 🔴
**Input:** Compressed string  
**Output:** Original expanded string

**Example:**
```
Input: a3b2c4
Output: aaabbcccc
```

---

## Section 8: Problem Solving Challenges

### Problem 8.1: Valid Parentheses 🟡
**Input:** String with (, ), [, ], {, }  
**Output:** YES if balanced, NO otherwise

**Example:**
```
Input: ({[]})
Output: YES

Input: ({[}])
Output: NO
```

---

### Problem 8.2: Anagram Groups 🔴
**Input:** Array of strings  
**Output:** Group anagrams together

**Example:**
```
Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
Output: 
Group 1: eat tea ate
Group 2: tan nat
Group 3: bat
```

---

### Problem 8.3: Unique Characters Check 🟢
**Input:** A string  
**Output:** YES if all characters are unique, NO otherwise

**Example:**
```
Input: abcdef
Output: YES

Input: hello
Output: NO
```

---

### Problem 8.4: Most Frequent Character 🟡
**Input:** A string  
**Output:** Character that appears most often

**Example:**
```
Input: programming
Output: g
```

---

### Problem 8.5: Reverse Only Letters 🟡
**Input:** String with letters and other characters  
**Output:** Only letters reversed, other characters in same position

**Example:**
```
Input: a-bC-dEf-ghIj
Output: j-Ih-gfE-dCba
```

---

### Problem 8.6: First Non-Repeating Character 🟡
**Input:** A string  
**Output:** First character that appears only once

**Example:**
```
Input: programming
Output: p
```

---

### Problem 8.7: String Permutation Check 🔴
**Input:** Two strings  
**Output:** YES if second is a permutation of substring of first

**Example:**
```
Input:
hello
llo

Output: YES
```

---

### Problem 8.8: Longest Palindromic Substring 🔴
**Input:** A string  
**Output:** Longest substring that is a palindrome

**Example:**
```
Input: babad
Output: bab (or aba)
```

---

## 🎯 Contest-Style Problems

### Problem C1: Password Validator 🟡
A valid password must:
- Have at least 8 characters
- Contain at least one uppercase letter
- Contain at least one digit
- Contain at least one special character (!@#$%^&*)

**Input:** A password string  
**Output:** VALID or INVALID

---

### Problem C2: Substring Sum 🔴
**Input:** A string of digits  
**Output:** Maximum sum of any substring

**Example:**
```
Input: 123
Output: 6 (1+2+3)
```

---

### Problem C3: Word Pattern Matching 🔴
**Input:** Pattern and string  
**Output:** YES if string follows pattern, NO otherwise

**Example:**
```
Input:
aba
dog cat dog

Output: YES
(a→dog, b→cat, a→dog)
```

---

### Problem C4: Minimum Window Substring 🔴
**Input:** String s and string t  
**Output:** Smallest substring of s containing all characters of t

**Example:**
```
Input:
ADOBECODEBANC
ABC

Output: BANC
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
   - What string operations?

3. **Implement Step by Step**
   - Write pseudocode first
   - Test with examples
   - Handle edge cases

4. **Common Patterns**
   - **Counting**: Use frequency array or counter variable
   - **Searching**: Loop with if condition
   - **Transformation**: Build new string character by character
   - **Validation**: Check conditions one by one
   - **Two Pointers**: For palindrome, reversal problems

---

## 🏆 Challenge Levels

### Beginner Track (Complete 10 problems)
- All 🟢 Easy problems
- Focus on basic operations
- Build confidence

### Intermediate Track (Complete 15 problems)
- Mix of 🟢 and 🟡 problems
- Start combining concepts
- Develop problem-solving

### Advanced Track (Complete 20+ problems)
- All difficulty levels
- Include contest problems
- Master string manipulation

---

## 💡 Tips for Success

1. **Start Simple** - Don't jump to hard problems
2. **Test Edge Cases** - Empty string, single character, spaces
3. **Debug Step by Step** - Print intermediate results
4. **Learn from Mistakes** - Understand why solution failed
5. **Practice Daily** - Solve at least one problem per day
6. **Review Solutions** - Learn different approaches
7. **Time Yourself** - Build speed for contests

---

## 📚 Additional Resources

After mastering these problems:
1. **Codeforces** - String problems with difficulty ratings
2. **HackerRank** - String manipulation track
3. **LeetCode** - Easy and Medium string problems
4. **AtCoder** - Beginner Contest string problems

---

**Happy Problem Solving! 🚀**

Remember: The interactive learning hub helps you understand concepts. These problems help you apply them!

