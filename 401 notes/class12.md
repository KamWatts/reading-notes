# All About  Socket.io

## Websockets

A websocket is a computer communications protocol that gives full-duplex capabilities for channels over a single Transmission Control Protocol.

Note: **Full-duplex systems allow communication in both directions to happen simultaneously**

During this communication handshake, the client sends the server HTTP headers for the websocket version being used along with a websocket key. The server then responds back with HTTP headers that consist of an Upgrade, Connection, and websocket-accept.

Web Sockets ultimately provide a standard method for server sto send content to a client without first receiving a request from that client.

## Socket.io Tutorial

In the context of Node.js and socket.io, io.on() is an event listener that listens for incoming connections from clients and triggers a callback function when a connection is established.

You can check to see if the socket code is working as expected by installing nodemon on the server and creating a listener for a connection that console.logs "Hello" world inside of a socket function.

`io.on` will start the connection and use a callback functon with the `console.log` output.

`socket.emit` creates and fires off a custom event. 

## Socket.io vs. Web Sockets

Similar to how GitHub compliments Git. Socket.io compliements Websockets. Web Sockets is the established way that TCP connections are handled to transmit data between the client and server bi-directionally (simultaneously). Socket,io is the library that makes the protocols easier to use. Socket.io supports broadcasting to multiple servers at one time ad provides event-based communication behind the server and browser.

I would use Socket.io if I were building anything that needs to happen in real-time. This could be in the form of a chatroom, multiplayer game, streaming, or constantly updated data platform like Robinhood or a game betting application.

Web Sockets are more of a lightweight communication for the client and server as opposed to using Socket.io. The communication is still in real-time but the communication is low-latency over a long-lived connection.

