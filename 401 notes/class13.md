# Message Queues

## Socket.io Chat Docs

Tradtional chat apps have been slow and inefficent in the past, however, socket.io has been the resolving factor real-time communication between servers and clients. In the chat example from the socket.io docs, they use Node.js and Express on a simple HTML file. After Socket.io was installed, it was integrated by adding it to the index.js file so the server can listen for connections and send/receive messages between clients. The HTML file is served using `sendFile()` instead of just `send()` because `send()` is a part of the Express syntax and `sendFile` is distinct syntax for Socket.io.

In the docs, a proof of life was set up on the backend with an `app.listen` method that states what port the server is listening on.

To exclude a certain party from receiving a message during a socket `broadcast`, you can inclide the `except` option with the socket id inside of a set of brackets to specify which client should not get the message.

## Rooms with Socket.io

In Socket.io, a `Room` is a way to group clients together so that they can communicate with each other. Rooms are very useful for large-scale applications that have different uses. Good examples include Discord, Yahoo! Games, group messaging in the Meta Messenger app, etc.

To join a room:

```javascript
socket.join('chatRoom', () => {
  console.log('Joined chatRoom');
}):
```

To leave a room:

```javascript
  socket.leave('chatRoom');
```

## Namespaces in Socket.io

Namespaces is a `channel` that serves a specific purpose regarding a purpose or functionality. Namespaces are useful for organization of communication, modularization, and resolving conflicts between multiple sockets. Namespaces can also provide an extra layer of security and control with restricting access, connection limits, and authentication to enter the room.

Each namespace can be expected to have its own name, event listeners, and clients.

A possible use case for utilizing separate namespaces is when an organization needs chatrooms for supervisors that are detached from the stream of employees. This chat may contain talks regarding sensitive information and will require authentication prior to entering. Namespaces are very useful in this type of scenario.