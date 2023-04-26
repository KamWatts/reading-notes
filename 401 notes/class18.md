# AWS, API, Dynamo, Lambda

## AWS API Gateway Overview

API Gateway is an Amazon service for connecting AWS backend services like Lambda and EC2 to HTTP endpoints that can be used on the client side access to an API.

API Gateway is important because it enables developers to provide to access data, logic, and functionality from the front end. API Gateway can also ahndle authentication and authorization, rate limiting, caching, and req/res transformations. API Gateway makes it possible to create complax workflows without the extra task of managing the infrastructure.

API Gateway integrates with other AWS services through `integration types`. This defines how the API Gateway handles incoming requests and the way it maps to other AWS services.

## AWS API Gateway

Some benefits of using API Gateway is that it makes for an easy way to create and deplot APIs, provides security, monitoring and logging, and integration with other AWS services.

There are two type of APIs available and that includes REST APIs and WebSocket APIs.

## AWS DynamoDB

DynamoDB is a fully managed NoSQL database service. DynamoDB was created to provide high scalability, low-latency,and widely acccesible database solutions for apps.

The biggest difference between MongoDB and DynamoDB when it comes to figuring out what you need is if you want a serverless DB or not. When it comes to complex transactions, advanced querying, and data manipulation, MongoDB may be a better choice because of how flexible the design schema can be in comparison.

DynamoDB is like using a Kindle. It's a virtual book that stores information and makes the information searchable and easy to retrieve quickly. Coding a table in DynamoDb is like writing pages to a chapter in a book. Each page is its own item and you can add information to each item. When you want to add more information to the chapter you can simply add a new item (page) to the book. DynamoDB is powerful when it comes to organizing and storing large amounts of information.

## Dynamoose

Dynamoose is a Node.js object modeling tool. using object-oriented syntax, this is an intuitive way to interact with DynamoDB this making it easier to work with DynamoDB in Node applications.

Some key features include object modeling, hooks, query building, and type conversion.