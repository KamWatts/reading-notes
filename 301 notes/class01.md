# Intro to React and Components

## Component-Based Architecture

1. What is a "component"?

- A component is a software object that interacts with other components. A software component is a unit of composition with a specific interface. These components can be reused and modified anywhere by third parties.

2. What are the characteristics of a component?

- Reusability: Designed to be used in different sitatuions in different applications. Can be modified for a different task than created for.

- Replaceable: Can be freely substituted with other similar components.

- Not content specific: Designed to operate in different environments

- Extensible: A component can be extended from existing components to provide new behavior

- Encapsulated: Depicts the interfaces, which allow the caller to use its functionality, and do not expose details of the internal processes or any internal variables or state.

- Independent: Composes minimal dependencies on other components.

3. Advantages of component-based architectures?

- Ease of deployment: Easy to replace existin versions with no impact on other components as new versions become available.

- Reduced cost: Using third-party components allows the spread of cost for development and maintenance

- Ease of development: Components implement well-known interfaces to provide deined functionality, allowing development without impacting other parts of the system.

- Reusable: the use of reusable components means that they can be used to spread the development and maintenance cost across several applications or systems.

- Modification of technical complexity: A component modified the complexity through the use of a component enhances the reliability of the whole system via reuse.

- System maintenance and evolution: Easy to change and update the implementation without affecting the rest of the system.

- Independent: Independency and flexible connectivity of components. Independent development of components by different group in parallel. Productivity for the software development and future software development.

## What is Props and How to Use it in React

1. What is "props" short for?

- Properties

2. How are props used in React?

- Props are used to store data that can be accessed by the children of a React component.

- Props act as a channel for component communication. Props are passed from parent to child and help your child access properties that made it into the parent's tree. [freeCodeCamp.com](https://www.freecodecamp.org/news/beginners-guide-to-props-in-react/#:~:text=Props%20are%20used%20to%20store%20data%20that%20can,to%20create%20consistent%20interfaces%20across%20the%20component%20hierarchy.)

3. What is the flow of props?

- Prop --> Parent --> Child
