# React Native

## Getting Started with React Native

The 3 core components of React Natibe is Text, Image, and View. Text allows you to utilie different styles of fonts with size, colors, and alightment. Image gives a way for loading and displaying local or remote images with ability to control its dimensions. View defines how the UI is laid out on the screen.

React Native aims to provide a way to build an app that is cross-platform across multiple devices. This reduces the development time and effort to deploy an app to both the App Store and Android app stores.

The building blocks of a React Native app consist of Components, State, and JSX. Much like React Apps the UI can be built out with a Component library. React Native recognizes JSX syntax and has State management.

## Expo

Expo provides tools that are built for React Native to help with building and deployment of the app. 

**Expo Workflow** refers to the management of all of the complexities of a React Native application.

The difference between React and React Native is that developers would have to create their own build configurations and dependencies with a supplied set of APIs and tools. However, Expo is an extension of React Native that provides tools for testing, building and deployment. There are services embedded into the Expo framework like SDKs and the Expo CLI that makes the experience even easier during the development of a mobile app.

## Expo Snack

Expo Snack allows you to interact with a preview of a React Native app being built - but in the web browser. With Expo Snack it supports collaboration, previews, and sharing snippets of code.

## Ejecting

Ejecting refers to the process of taking more control of what lies "behind the wall" of the Expo framework. Essentially this means you're ditching parts of the Expo library to dig into the lower level areas that Expo aims to make easier. This is another way to take more control of the way an app is built up.

There are some reasons why a developer should not eject. And this is when you're a beginner in building React Native apps, if the functionality is mainly reliant on the Expo framework, and when maintenance needs to remain simplified.

On the contrary, ejecting is appropriate in situations eher you will need to create custom native modules, optimize performance especially in apps that are complex in their graphics, and customization of the scripts under all of the tooling.