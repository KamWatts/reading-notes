# Readings: Passing Functions as Props

## Reast Docs - lists and keys

1. What does .map() return?

- Returns a new array

2. If I want to loop through an array and display each value in JSX, how do I do that in React?

- You can create a forEach method inside of a runction that returns the data from JSON. The data can be pushed into a new array that can be used to render on the webpage.

- In most cases the .map() method can get the job done. However, a key prop is always needed to render unique JSX elements. Doing this will also improve performance.

3. Each list item needs a unique what?

- Key value

4. What is the purpose of a key?

- To access a value based on its property name in an object literal.

## The Spread Operator

1. What is the spread operator?

- A spread operator consists of 3 ellipses (`...`) in which can be used for expanding an iterable object into a list of arguments.

2. List 4 things the spread operator can do:

* Combine arrays
* Combine objects
* Add to state in React
* Using Math functions

3. Give an example of how to use a spread operator to combine two arrays:

- `let letters = [a, b, c];`

- `let numbers = [1, 2, 3];`

- `let combinedCharacters = [letters..., numbers...]`

- `returned value:`

- `a b c 1 2 3`

4. Give an example of using the spread operator to add a new item to an array.

- [letters..., '...', numbers...]

5. Give an example of using the spread operator to combine two objects into one.

let characterObject = {letters..., numbers...}

## How to Pass FUnctions BEtween Components

1. First step to pass functions between components?

- Create two components: the parent and child

2. In my own words, what does the increment function do?

- The increment function uses an internal react `counter` using setState that changes the value on a state.

3. How can you pass a method from a parent component into a child component?

- Create a function inside parent component that accepts a callback as an argument.
- Pass the function name as props into the child component render function.
- Invoke the function from props inside the child component
- Don't forget to log the data when importing.

4. How does the child component invoke a method that was passed to it from a parent component?

- Pass the data (parent function) as an argument inside the child component as a prop and then call the parent function in a `props.parentFunction()`  function that executes the parent function and updates the count state variable.
