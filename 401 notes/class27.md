# React `useState` Hook

## Thinking in React: the Steps

1. Break the UI into components

    - Identify the parts of the UI to break into smaller components. The components need single responsibilities.

2. Build a static version of the UI

    - After the components are identified, a static version is created with props and no state. This for putting a focus on component structure alone.

3. Identify the state

    - Figure out which components need to manage state and what data should be stored in state. State is the memory of a component and should keep track of what data will be changed over time.

4. Determine the data flow

    - Once state is identified, determine the flow of data between the components. This process consists of finding which components should hold the state and which ones should get the props from state.

5. Implement the state

    - Implement state by utilizing the `useState` Hook to manage the state and update the UI based on the changes in state.

## State: A Component's Memory

A local variable is not sufficiant because they are not persistent across renders. When a component re-renders, the local variable does not refresh with a new value but instead reverts to its initial value.

The argument to the useState hook is the initial state of the component. `useState` returns an array with the current state and a function to update the state.

Component A can access state from Component B by passing the state down to B as a prop. For example: state gets produced by a parent. The parent drops the state off to the next component that needs it as a prop.
