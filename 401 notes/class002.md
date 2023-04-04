# Express.js, NPM, TDD, CI/CD

## An introduction to Node.js and Express.js

Middleware in software development... Think of middleware as a bridge. On either side of the bridge is a database, and on the other side is the application. In order for both sides to communicate, they have to deliver packages or messages to eachother through the use of requests. 

Middleware is the delivery service that makes it possible for the requests and responses to reach their desired destination. The middleware is familiar with the addresses involved with the requests and packages up what its told to package to get the request to the address specified.

Express is the most popular web framework in the Node ecosystem. It's popular because of its many use cases when it comes to handling communication from databases to the production-end of the server. Widely known for its flexibility and speed with HTTP requests. Express is the backbone of intercommunication between APIs and the systems that make use of the APIs that its connected with.

Express is an unopinionated framework. This means that Express is very flexible in how it can be manipulated to work best for those that use it. Rules are not strict with set ways on how to do different tasks. For those that do not need structure and favor the role of engineering new possibilities with HTTP requests, Express is a peerfect match.

Modules are important when it comes to software development. Packaging code into modularized files is what makes the backend so flexible. Importing modules makes it possible for developers to not have to re-invent the wheel on methods that are commonly used and widely needed across the development world. Modules also helps when it comes to speed and efficiency in code. Usually when you import a file that has a lot of code behind it, this shortens up the amount of code you have to write and you can depend on the module you imported to carry the heavy load for you.

## What is NPM (Node Package Manager)

Node Package Manager (NPM) is an open-source network of several models of code. NPM is used in a variety of ways from the ability to have access to downloadable standalone tools, manage code dependencies, share code with others, and even restrict code to specific organizations (or people) to use, etc..

NPM is basically stores heaps of modules like we talked about earlier. NPM installs are being implemented millions of times per day all around the world.

An example of how you world install a file names `jshint`:

`npm install jshint`

And just like that you just installed a dependency that you can use. Make sure to refer to the dependencies you use in an effective manner.

## What is TDD (Test Driven Development)

When you order a service, do you have certain expectations on how that service will fulfill its purpose? You want the provided service to be efficient and meet your needs. You're invested in it, and so you have the right to have quality standards as the end result.

This is the philosphy behind Test Driven Development. This is to ensure the code that is being written is doing the job it is meant to do. Test Driven Development is the guiding principle behind code before the code is used in execution.

The three expected benfits of testing code is the fact that developers have a self-checking assistant right at their fingertips (quite literally dependning on how you code). Test driven development can also ensure that your code is being executed at desired speeds and can steer you in the right direction to optimize your code for better performance in real time. Another benfit is the improved design quality of codebases from teams that have a disciplined approach to test driven development.

Happy tests, happy end-user!

Some pitfalls when it comes to testing is poorly designed test suites. Depending on the efficiency of the written tests, test suites can take a long time to run and parse through your code to return error or success messages. Some tests can be over trivial as well. This means that the test suite may check for too many unnecessary edge cases that do not have a negative effect on the rest of the product. One other pitfall is when a developer may not test their code frequently. If code is not tested frequently, it may cause you to backtrack on your code, when you could have been progressing forward with continuous confirmation along the way.

## What is CI/CD?

There are several benfits to continuous integration and some of the few are:

    * More test reliability
    * An increase in transparency with your development team
    * Customer satisfaction because of an app that stays up-to-date with their evolving needs

Continuous Delivery vs. Continuous Deployment:

Both phases of CI and CD are automated. The difference is that Continuous Delivery is the automation of releases to staging and Continous Deployment is the automation of the release to production.

GitHub serves as an amazing tool in the CI/CD pipeline. There are many toold on GitHub that creates effective ways to troubleshoot and communicate your way through a codebase to ensure quality integrations to production. GitHub has measures in place to resolve issues, add commentary, and keep track of your updates in case you have to roll back a previous version due to a mistake that could have been pushed up to production. GitHub is an amazing safe-fail system to aid in the development process.