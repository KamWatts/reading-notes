# Application State with Redux

## Dan Abramov Redux Tutorials

The first principle of Redux is the single source of truth. Meaning that the state of the whole application is stored in an object tree within a single store.

In Redux, a store is an object that contains the state of the application. It allows you to access state and dispatch actions to update it. This is where the concept of the `useReducer` hook derives from.

Reducers are used within the store to specify how the application's state changes in response to actions. A reducer is a pure function that takes the current state and an action as input to return the new state. This defines how the state should be updated based on the given action. The `combineReducers` function is used to combine reducers together to create the root reducer that will be used by the store.

The `createReducer` function provides three important methods for interacting with the store: 

1. `getState()`: Retrives the current state
2. `disptach(action)`: Dispatches an action to trigger a state change
3. `subscribe(listener)`: Registers a listener function for whenever the state changes in the store.

The main purpose of `useReducer`is to simplify the management of complex application state in Redux. it combines multiple smaller reducers into a single root reducer, making it easier to handle different parts of the state independently. This promotes better organization, reusability, and collaboration among developers working on difference aspects of state management.
