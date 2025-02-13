# Firebase Data Write Issue: Asynchronous Operations and Promises

This repository demonstrates a common issue when working with Firebase's asynchronous operations and promises. The problem is that the data wasn't being written to the database although the code looked correct.

## Bug
The original code (bug.js) incorrectly handles the asynchronous nature of Firebase's `set()` method. This leads to the data not being written to the database.

## Solution
The solution (bugSolution.js) correctly handles the asynchronous operation using promises. This ensures that the data is written to the database before the function proceeds.