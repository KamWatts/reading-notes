# Context API

## Choosing the State Structure

The 5 principals of structuring state are:

1. Group related state: Merging states two or more states together that update at the exact same time.

2. Avoid contradictions in state: Avoid pieces of state that may contradict eachother so mistakes do not take place.

3. Avoid redundant state: if calculations can be made from a components prop or existing state, that information should not be in the component's state.

4. Avoid dupilcation in state: Reduce duplication when necessary becayse when the same data is duplicated between multiple state variables, or within nested objects, it is difficult to keep them in sync.

5. Avoid deeply nested state: A deeply heirarchal state is not very convenient to update. When possible, structure the state in the flattest way possible.

The main goal behind the principals of structuring state is to make state as easy to update as posible without introducing mistakes. The goal is to keep data in sync and to create some normalcy similar to the forming of a database sturcture to reduce or prevent bugs.

## Passing State Deeply with Context

Passing state with Context creates a more streamlined way of passing state to other components. So it strives to eliminate the complexity behind passing state down as a prop between multiple components to get to its final destination (child component).

One technique you could try before the `useContext` hook is passing props. If there you are not working with a complex component tree it may not serve a higher purpose for the `useContext` hook because there is nothing deeply nested in your component structure to where you actually need the `useContext` hook.

A hook that complements `useContext` for complex application builds is the createContex hook. This makes the useContext hook readable in any child component no matter how deep the child sits within the tree.
