# CRUD

## Status Codes Based on REST Methods

1. In your own words, descrive what each group of status codes represent:

100s: Informational for http info
200s: Success for a request that was made from the client
300s: Redirection - more action is required to complete the entire request
400s: Client side errors
500s: Server side errors

2. What is status code 202?

Indicates that a resource was created based off of the client-side request

3. What is a status code 308

Indicated the resource is permanently located at another URI.

4. What code would you use if an update did not return data to a client?

Code 204 - Known from experience

5. What code would you use if a resource used to exist but no longer does?

Code 401 - Indicates that the target is no longer available

6. What is the forbidden status code?

Code 403 - For example, this would appear if the server understands the request but the URL provided does not have the proper key.

## Build a REST API with Node.js, Express, & MongoDB

1. Why do we need to pull our MongoDB database string out of our server and put into our .env?

Because this adds an extra layer of protection so the database doesn't get hacked.

2. What is middleware?

Middleware is a request handler with access to the app's request-response cycle.

3. What does `app.use(express.json())` do?

This is used to parse the incoming requests with JSON payloads

4. What does `/:id` mean in a route?

This is assigned to every order that is protected by Route Package Protection

5. What is the difference between `PUT` and `PATCH`?

PUT alters resources when the client transmits data that revamps a whole resource. PATACH is for transforming resources when the client transmits partial data that will be updated without changing everything about the data.

6. How do you make a default value in a schema?

You can simply utilize the data keyword as a value for an item. The value of the default keyword can be set to anything.

7. What does a 500 status code mean?

Internal Service Error. Which means the server encountered an event that prevents it from completing its task.

8. What is the difference between a status 200 and a status 201?

The 200 status code indicates that the request has been fulfilled in its entirety. A 201 code reflects that a resource was created as a result of the successful request.