# Redux Asynchronous Action

## Async Actions

One may consider using Redux middleware because it provides a way to qrite action creators that can perform asynchronous operations and dispatch a multitude of actions all based on results.

The Redux Async Dataflow describes the way data and action flow asynchronously throughout an application. The data gets fetched from an API and then a dispatch is created with a specific action type. The middleware is then used to intercept the action to handle it as a function. The inner thunk function simultaneously dispatches other actions with the fetched data that it recognizes while the async operationis in progress. Dispatched actions flow through the reducers and the subscribed Components are notified of the state changes and can update state accordingly.

Async functions in Redux are accomodated by the Redux Thunk middleware. This middleware recognizes objects as functions to perform asynchronous tasks. The tasks can be API calls and dispatched actions based on results.

The main reason to use Redux Thunk middleware is for the purpose of handling asynchronous operations within action creators. Thunks can dispatch actions to trigger the beginning of an async operation, show loading indicators, and  handle errors.

When the inner thunk function returns a value, it's made available through the return value of the dispatch function. Which lets components and middleware access the result of the async operation if they need it.