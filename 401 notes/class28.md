# React Component Lifecycle / `useEffect` Hook

## useEffect Hook

The intended case for the useEffect hook is to handle side effects in a functional component. A side effect is an operation that effects something outside of a component. This can be an operation like fetching data, updating state, or setting up a timer.

The effect's logic function interacts with components by modifying the syaye or other variables within the component.

The return value from effect's logic is important because it allows us to clean up any resources created by th effect. Like the above mentioned timer effect, we can write a function that clears the timer when the component unmounts or when the effect is re-run. This can help with prventing a memory leak and that a component is properly removed from the DOM.