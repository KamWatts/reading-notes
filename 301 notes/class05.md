# Putting it all together

## React Docs - Thinking in React

1. What is the `single  responsibility principle` and how does it apply to components?

- A component that only does ONE thing. 

2. What does it mean to build a `static` version of your application?

- A static application reuses other components and passes data using props. The big takeaway from building a static app is that there is no interactivity within the app. This means that the data on the app does not change over time. Nothing on the page needs to be maniupilated using state, therefore it is `static`.

3. Once you have a static application, what do you need to have?

- You have to identify where UI State will be represented. This data model should be able to trigger the underlying data model to update and interact with your application.  Overall, figure out the absolute minimal representation of state that your application needs and compute everything else you need on-demand (as time goes on).

4. What are the three questions you can ask to determine if something is state?

i. Is it passed from parent via props? If so, it's probably not a state.

ii. Does it remain unchanged over time If so, it's probably not a state.

iii. Can you compute it based on any other state or props in your component? If so, it's probably not a state.

How can you identify where state needs to live?

- Identify every component that renders something based on that state

- Find a common owner component (single component above all the components that need the state in the hierarchy).

- Either the common owner of another component higher up in the heirarchy should own the state.

- If you can't find a component where it makes sense to own the state. create a new component solely for holding the state and add it somewher ein the heirarchy above the common owner component.

## Higher-order Functions

1. What is a higher-order function?

- These are functions that operate on other functions, either by taking them as arguments or by returning them.

2. Explore the `greaterThan` function as defined in the [reading](https://webcache.googleusercontent.com/search?q=cache:tCw29Dck1IEJ:https://eloquentjavascript.net/05_higher_order.html&cd=10&hl=en&ct=clnk&gl=us). What is line 2 of this function doing?

- In line 2 it's gonna return a number(m) only if the number is greater than another value(n).

3. Explain how `map` or `reduce` operates, with regard to higher-order functions.

- `map` is a function that takes in another function to return a new array of data.

- `reduce` is a function that takes in a another function, declared with a variable that represents an initial value. You can then iterate of an array that returns the new values to the variable.