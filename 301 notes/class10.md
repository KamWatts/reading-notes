# In Memory Storage

## Understanding the JavaScript Call Stack

1. What is a `call`?
A `call is a function invocation.

2. How many `calls` can happen at once?
The `calls` happen one  at a time in an asynchronous fashion.

3. What does LIFO mean?
Last In, First Out

4. Draw an example of a call stack and the functions that would need to be invoked to generate that call stack.

function firstFunction() {
  throw new Error('Stack Trace Eror');
}
function secondFunction() {
  firstFunction();
}
function thirdFunction(){
  secondFunction();
}
thidFunction();

5. What causes a Stack Overflow?

A stack overflow happens when there is a recursive function that calls itself without an exit point.

## JavaScript Error Messages

1. What is a `reference error`?
When a variable is trying to be used but has not been declared.

2. What is a `syntax error`?
This occurs when you have something that cannot be parsed in terms of syntax.

3. What is a `range error`?
When an invalid length is associated with an object or array.

4. What is a `type error`?
Shows up when the data types (strings, numbers, arrays, etc.) that are trying to be used are incompatible with what's trying to be accessed are undefined.

5. What is a breakpoint?
A breakpoint is when you select a line in your code for the browser to parse through up until that breakpoint. The breakpoint is simply a reference for the debugger.

6. Whats does the word `debugger` do in your code?
If you use the word `debugger` in your code, this is an alternative way of adding a breakpoint.