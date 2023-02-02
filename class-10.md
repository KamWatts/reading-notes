# Debugging

## What Went Wrong?

1. The difference between a syntax error and a logical error is that `syntax` is in direct relation to the spelling of your code. There are plenty of extensions and tools in Chrome Dev Tools to help sort these issues out. `logical` errors is when the expected outcome of the code is not what it was intended to be. So in this case, the program is successful at executing but it is not executing the right thing.

2. I have experienced logical and syntax errors in every single project I have coded up to this point. I usually troubleshoot it by looking over my code carefully, taking suggestions from the built-in error finding engine in VSCode, analyzing my logic, writing downn my steps, and gettin a second set of eyes to help me find the problem and solution.

3. Knowing the differences in syntax and logical errors will allow me to navigate my troubleshooting progress in a methodical manner. The more experience I have with debugging, the better it will help me to avoid problems in the future, or correct them more efficiently.

## The JavaScript Debugger

1. The JavaScript Debugger is a Chrome Dev Tool that allows you to dynamically assess your JavaScript code. Your files are populated inside of the debugger and you can edit the codde, set breakpoints, and get feedback for what is going on with the code.

2. A breakpoint is manually set to let the debugger know when to stop executing a function. This is used to determine what is happening once your code gets to a certain point within the script.

3. The `call stack` section shows what code is being executed to get to the line of code that holds a breakpoint.