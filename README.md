# Uncommon TypeScript Errors

This repository demonstrates a couple of uncommon errors that can occur in TypeScript, specifically related to:

1. Type inference issues in conditional types with string literal types.
2. Handling null or undefined values in function parameters.

## Type Inference in Conditional Types

The `operate` function showcases a scenario where TypeScript's type inference might not behave as expected with string literal types in conditional types. The solution involves explicitly specifying the type of the variable that is assigned the result of the function.

## Null or Undefined Checks

The `greet` and `greet2` functions highlight potential issues with checking for null or undefined values. In the `greet` function, checking for null is sufficient. However, in `greet2`, checking for both null and undefined is necessary and this can get error prone when there are more conditions. 

## How to Run

1. Clone the repository.
2. Navigate to the repository's directory.
3. Run `tsc` to compile the TypeScript files.
4. Run `node bug.js` to execute the code and observe the errors.
5. Run `node bugSolution.js` to see the corrected code.
