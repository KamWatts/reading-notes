# Arrow Functions in ES2015

An arrow function is a compact alternative to the traditional way of writing functions in JavaScript.

Some key differences:

* Arrow functions do not have their own bindings to `this`, `aruguments`, or `super`. Arrows functions should not be used as methods.

* Arrow functions cannot be used as constructors. If you try to make instances out of a constructor made with an arrow function then you will get a **type error**. Arrows functions do not have access to the new.target keyword either.

* Arrow functions cannot use yield within their body and cannot be created as a generator function.

## Examples of Arrow Function Syntax

`
// Tradition anonymous funtion

(function (a, b) {
  return a + b + 100;
});

// Arrow function
(a, b) => a + b + 100;

// Traditional anonymous function (no parameters)
(function () {
  return a + b + 100;
});

// Arrow function (no aruguments)
() => a + b + 100;
`

What if the arrow function needs a name?

`
// Traditional function
function kam(a) {
  return a + 100;
}

// Arrow function

const kam = (a) => a + 100;
`
In a concise body, only single expressions are specified, which becomes the implicit return value. In a block body, you have to use an explicit return statement.

## Concise body vs. Block body

The body type of a function influences the syntax being used. 

The **concise** body syntax does not use the `return` keyword and the curly braces.

For instance, if you have a one-line arrow function, then the value is implicitly returned. The `return` keyword and the curly brackets can be omitted.

On the other hand, the **block body** syntax, uses curly brackets and the `return` keyword. 

## Naming Arrow Functions

Arrow functions cannot be names, thus giving them the title of `anonymous functions`; howeber, functions can be passed into variable names. Now in order to call an arrow function you just declare the variable with a value inside of the parameters. 

