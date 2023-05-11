# Advanced State with Reducers

## Extracting State Logic into a Reducer

The `useReducer` hook is for managing state in a structured manner. This allows extraction of state logic into a separate function. 

Actions are objects that describe a change to the state of a `useReducer` setup. An action would have a `type` property. A `type` consists of a string that relates to the type of action being performed and can have additional properties as needed to perform specific actions. When an action is used, it can trigger the reducer function and this will cause an update to the state and this is based on the action `type` and payload.

`useReduce` is named after the 'reduce' operation that iterates over a list of values and return a single value that is the accumulation of all original values of the list.
In the case of React and the `useReduce` hook, `useReduce` will take the current state and return a new state based on the action. The process is repeated for each action that is dispatched. This process reduces a list of actions into a final state.

There are a few reasons why developers may want to switch to `useReducer` over `useState` and this is when state logic is too complex to manage with `useState`. If there are many state variables that are interdependent, or needs complex updates that are based on asynchrounous events - `useReducer` is a great substitute. Also, if there is a need to pass down state and update functions to components that are deeply nested, `useReducer` can be used to pass down a dispatch function to any level of a component tree.
