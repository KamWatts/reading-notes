# Event Driven Applications

The native Node.js model that allows Event-Driven Programming is the `event` module. This can be used to emit and handle events in Node.js apps.

Using Object-Oriented Programming(OOP) in conjuction with Event-Driven Programming(EDP) has many benefits. OOP has a focus on data and behavior within the browser. On the contrary, EDP is based on the idea of events and handlers that respond to events. Some key benfits to using them both in an app is flexibility, scalability, and modularity.

EDP is essentially the backend version of OOP. In simple terms, incoming requests from the client can be handled more efficiently by using single event loops to process those requests. When these requsts get passed to Node.js, they are placed in an event loop that allows an app to handle multiple requests at one time. Using EDP gives the advantage of making an application that can manage large amounts of data and requests without slowing down.
