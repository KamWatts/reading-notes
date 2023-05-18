# API Integration

## Review of building an API server

The difference between a path parameter and a query string parameter is that path parameters are used to identify a specific resource while query parameters are used to filter and sort the data. Path params are used for retrieveing a sinfle resource, while wuery parameters are used when retrieveing multiple resources. Based on an article on[Alibaba Cloud](https://www.alibabacloud.com/topic-center/dev-faq/ghgfdxwc43-when-do-i-use-path-params-vs-query-params-in-a-restful-api#:~:text=Path%20params%20are%20used%20to,used%20when%20retrieving%20multiple%20resources.)

To bring this all into perspective of how they work together: The path parameter always refers to the resource that the data of the query string parameter will coome from. It's like referring to a data table to get a value out of it.

An API URL with an id parameter would look like this: `http://our-site.com/stuff/v3/things`

An **interface** is the interactive part of an application that the end-user can actually use. AWS explains it as a contract between two applications which defines the way they communicate with each other. Another way to think about an interface is the analogy of a pool and the swimmer. The pool is the interface and the one swimmer is the API inside of it.

## Review of an auth server build

Using middleware to implement basic and bearer auth, I would separate the two into their own files and export them. When I actually need to use them, I can include them into the parameters wheneveer a request and response comes into play. This is because auth is needed in between a request and response executing so the response knows that the requestor is who they say they are and is safe to hand over the data being requested.

To complete an Oauth handshake it is necessary to have an authorization request and the access token request.

Role-Based Control Access is similar to how your access to different rooms in a school or secured building may be. For instance, you may be issued a key card which gives you access to the entire building just like every other employee. However, when you get inside of the building, your access card may only work for the rooms that you have direct responsibility inside of.