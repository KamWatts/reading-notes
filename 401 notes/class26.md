# Component Based UI

## React Quick Start

The building nlocks of react are Components, Props, State, and lifecycle methods thyat allow components to render or execute code at certain points of its lifecycle.

The differenc between an HTML element and React Component is that HTML elements are predefined tags that forms or describes the structure of webpage content. But React Components are reusable pieces of UI that have their own functionality and styling.

JSX is a syntax for JavaScript that has an HTML-like structure. It's mainly used to bring some familiarity into building the structure of a webpage while using React so it integrates well with known HTML syntax.

Embedded JavaScript expressions is how regular vanilla JavaScript is executed within a React file. The code is usually nested inside of a set of curly braces. This lets the file know to execute the code the way a regular JS file would instead misinterpreting it as React logic.

There are some special features of iteration and conditional logic when it comes to the behavior of React UI components. For instance, a `map` method can be used to iterate over an array of data and create a new array of React components.

React uses event handlers to know when to respond to user inputs. Event handlers are usually described as methods of a component class, and they are bound to specific UI elements using props. 

A word that indicates that a React component manages data with a Hook is `UseState` which is a built-in Hook that allows a component to declare and update state variables.

Two react components can share data through the use of props. When one React component needs to pass data to another, it can do this by passing the data as props to the child component. The child component can then access the data through its props object and use to render its own content.

## Render and Commit

The three steps of refreshing a React UI are:

- The component receives new props or state
- React calculates the difference between previous and new state or props
- React updates the DOM to reflect the new state or props

To trigger updates to a component after the initial render - the use of Hooks such as `setState` and `useEffect` can be used. `setState` is avaliable to class components for updating the components state on re-render. `useEffect` allows you to perform a side effect after after the intial render.

React does not recreate DOM nodes on re-renders. React uses a virtual DOM to  calculate the differences between previous and new state or props.

The process of updating the DOM with React is called painting or rendering. This happens automatically when the DOM is updated. The speed of a user's device and the time it takes for changes to become visible is dependent on the speed of the device being used.
