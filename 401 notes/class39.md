# Redux Additional Topics

## Redux Tool Kit (RTK)

Some concerns that are addressed by RTK is boilerplate reduction, immutable state updates,, simplified state updates, and a simplified way of using Asynchronous logic to name a few.

`configureStore()` is a function in RTK that's used to create a Redux store with defaults and configurations.This function brings together the reducer, middleware, and DevTools into this solo function.

If you want to use `createSlice()` in RTX, you have to define a slice of the Redux store that includes the reducer and associated actions for a specific part within the application's state.

## MobX

MobX is a library for managing state in applications. This is a reactive tool for creating observable data structures. Any alteration made to the data in Mobx state will automatically update components that depend on that state.

MoxX makes sures state remains consistent by monitoring dependencies between observables and reactions. For instance, whenever an observable value gets changed, the reactions that are depend on it are changed as well.

When it comes to building a user interface with MobX, it's essential to follow these steps: 

* Define the observables
* Create reactions
* Use the observables in the UI
* Track the dependencies
