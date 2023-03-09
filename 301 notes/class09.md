# Functional Programming

## Functional Programming Concepts

1. What is functional programming?

Pure functions to create maintainable software. This type of programming avoids shared state, mutable data and side-effects. [medium.com](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0)

2. What is a pure function and how do we know if something is a pure function?

Gives the same inputs, always returns the same output and has no side-effects. You can tell a pure function whenever it uses only the inputs of the function to get the return value. When you return a pure function it does not change anything outside of the value. [Web Dev Simplified](https://blog.webdevsimplified.com/2020-09/pure-functions/)

3. What are the benefits of a pure function?

Pure functions makes your code clean and reusable.  Pure functions also help with improving tests. Pure functions are also easier to read.

4. What is immutability?

When content cannot be changed without creating an entirely new value.

5. What is Referential transparency?

Means that a function call can be replaced by its value or another referentially transparent call with the same result.

## Node JS Tutorial for Beginners

1. What is a module?

A file containing related code.

2. What does the word 'require' do?

Facilitates a way to include a JavaScript module in your code.

3. How do we bring another module into the file we are working in?

`const cors = require('cors)`

4. What do we have to do to make a module available?

You have to export the module for examples:
`module.exports = exports`

The variable is explicitly passed into the new file.
