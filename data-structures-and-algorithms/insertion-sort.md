# Insertion Sort Project
---
[22,27,16,2,18,6] 

It findes the smallest element in the pattern and replace it with first element. 
Then it findes the second smallest element and replace it with the 2nd row. If element in second row is smallest, don't touch it.Jump to row 3, 4, 5 the series is over. 



1.Show the steps of sorting the array above

2.Big-O notation.

3.Write three cases below
    
    Average case:

    Worst case:

    Best case: 

4.What case is correct for the number 18 after the array is sorted?

5.Write the first 4 steps of [7,3,5,8,2,9,4,15.6] according to Insertion Sort.


# Answers
---
1. [22,27,16,2,18,6] -> n-1
2. [2,27,16,22,18,6] -> n-2
3. [2,6,16,22,18,27] -> n-3
4. [2,6,16,22,18,27] -> n-4
5. [2,6,16,22,18,27] -> 1
6. [2,6,16,18,22,27] -> READY

Big-O-Notation = O(n^2)

Average Case = O
Best Case = The array is already sorted.
Worst Case = The array is sorted in reverse order.

Average case

---



-[7,3,5,8,2,9,4,15,6]  write first four step of insertion sort of this array.

1. [2,3,5,8,7,9,4,15,6] 7-2
2. [2,3,5,8,7,9,4,15,6] 3-
3. [2,3,4,8,7,9,5,15,6] 5-4
4. [2,3,4,5,7,9,8,15,6] 8-5
