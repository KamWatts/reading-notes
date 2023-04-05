# Express REST API

## ES6 Classes

Classes are a template for creating objects. Class declarations can be hoisted in JavaScript. Class declarations can **only** be hoisted once it is defined in the code.

Inside of a Class structure exists a constructor. A constructor consists of the 'genetic make up' of an object that can create other instances.

What does this compare to? At the GM plant in Detroit, blue prints for car models are created before actually physically constructing the car. The blue print is the `constructor` and every car that is built after that blueprint is an 'instance' of that blueprint. However, some models of thatcar may have unique attributes like a specific color, interior fabric, or drivetrain capabilities. The keyword 'this' defines the unique sets of 'genetics' that instance recieves. This is how a class is modified to separatethe difference of one model from another. 

## Using Express Routing

Routing refers to how HTTP methods influence URI endpoints. A route path is the URI endpoint while a route method is an HTTP request such as (get, put, post, or delete). It is appropriate to specify 'next' at the end of a route statement because this passes the request off to the next handler that needs to use it. If next is passed off to the next middleware as a parameter it needs to be called in the body of the function to hand off the control of the callback function.

## Express Routing

Express Router provides a set of APIs. However, there is a slight difference between just regular Express and Express Router. When you bring in Express Router, you're only importing a small piece of Express into your application. You are basically saying, "Hello Express, can I just use your Routing capabilities for this app? You can keep the other features you have to offer".

What does it mean to apply in an instance of the Router? This means you're assigning the router to a variable that can be manipulated within the different paths it is assigned to.

Route middleware is a set of directions that should be processed before the request is executed. This can be things such as logging a request or requiring auth0 prior to browsing a website. These are all the 'in-betweens' before processing the actual request.

