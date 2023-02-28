# State and Props

## React Lifecycle

1. 'render' comes before the 'componentDidMount' during the initial mounting phase.

2. The very first thing to happen in the lifecycle of React is `mount`

3. In order:
render, componentDIdMount, Statis getDerivedStatefromProps, getSnapshtBeforeUpdate, componentDidUpdate, componentWillUnmount

## React State vs. Props

1. What types of things can you pass in the props?

* "Props are used to pass data from component to component" - __by__ [Robert Weiruch](https://www.robinwieruch.de/react-pass-props-to-component/)

2. What is the big difference between props and state?

* Props and state are related. The `state` of one component will often become the `props` of a child component.

* Props are passed to  the child within the render method of the parent as the second argument to `React.createElement()`

* or `<MyChild name={this.state.childsName} />`

  * [Stack Oveflow](https://stackoverflow.com/questions/27991366/what-is-the-difference-between-state-and-props-in-react)

3. When do we re-render our application?

- React schedules a render every time state changes. Changing a state means React triggers an update when we call the useState function (useState is a Hook that allows you to have state variables in functional components).

4. What are some examples of things we could store in state?

- State is used to store the data of the components that have to be rendered to the view. [simplilearn.com](https://www.simplilearn.com/tutorials/reactjs-tutorial/reactjs-state).

State can contain as many properties as you like. Almost like an Object. It stores the attributes to a property.