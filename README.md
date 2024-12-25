# Type 'string[]' is not assignable to type 'string'
This bug demonstrates a common type error in TypeScript where an array of strings is passed to a function expecting a single string.
The function `greeter` expects a single string argument but receives an array of strings. This leads to a type error. The solution involves either modifying the function signature to accept an array or adjusting the function call to pass only a single string.
## Steps to reproduce
1.  Save the code in `bug.ts`.
2.  Compile using the TypeScript compiler (tsc bug.ts).