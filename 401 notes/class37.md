# Redux - Combined Reducers

## Mutiple Reducers example

Creating multiple reducers in Redux is benficial because it modularizes, scales, and creates reusability in state. 

To combine the reducers, Redux has a built-in `combineReducers` function that takes a function argument where the key:value pairs represent a piece of the state and its corresponding reducer function.

Managing state as an immutable object in Redux you have to create a new state object, avoid mutating nested object and arrays, and use immutability libraries. This all provides the a predictable, efficient, and robust state management approach.

`combineReducers` is a utility function to simplify the most common use case when writing Redux reducers.

The `combineReducers` function assembles the new state tree by invoking each reducer with the current state and the corresponding action.

You can define initial state by assigning an initial value to each slice of the state within their respective reucer functions.

You want to split the reducers when the state logic gets more complex. This gives an advantage when it comes to debugging, testing, and maintaining the codebase.

