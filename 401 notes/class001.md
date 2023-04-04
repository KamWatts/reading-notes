# Review: Node.js

## 1. How would I describe Node to a non-technical friend?

Node is a backend framework for JavaScript. This means that JavaScript depends heavily on the ability of Node JS to make things possible on the backend of a website or application that you cannot see with your own eyes. For instance, the speed at which your website is loading, or the way things are being processed may be effected by the implementation of a Node playground on the backend. Node.js has many packages within its framework called dependencies  in which can be installed into any application to use code that is pre-made and ready to be used by any developer that needs to use that package of code for a software they're building. So overall, Node is responsible for all the things in JavaScript that does not display on a webpage such as interactivity and reliablility. Node environments are also used to test code in real time. It can tell you at what speed your code is executing and also print out errors in code for a developer to troubleshoot. Hopefully, you understand Node.js just a little bit better than before you took the time to read this.

## 2. What does it mean that Node.js is a JavaScript runtime?

This means that Node.js is essentially a playground for JavaScript code. This is where JavaScript can be executed and tested prior to doing business on any computer screen. There's a V8 runtime extension that is compatible with JavaScript in most browsers modern browsers. This is powerful as most programming languages do not have this type of runtime tool in any browsers. This makes JavaScript a lot easier to manage than most other languages as there are tools to help JavaScript developers develop more efficient code. Ironically, this v* engine is written in C++. The V8 Chrome JavaScript engine is open-source and owned by Google (obviously). Here's a link to the V8 open source GitHub repository in case you'd like to contribute: V8 Open SourceLinks to an external site.

## 3. What do I look the most forward to learning?

I am looking forward to getting exposed to more complex data structures and ways to solving them. I want to become even more efficient at understanding problems and solving them better and knowing more than one way to solve coding challenges. This skill is going to be critical for acing technical interviews and I want to hone in and master this skill the best I can.

## 4. What are my learning goals?

To not fall behind during this course and prioritize what I study in order to submit lab assignments in a timely manner. I want to have a disciplined schedule for the amount of time I spend on coding challenges and submitting completed labs with high quality code. I want to continue to challenge myself and grow as a developer and be comfortable in a fast-paced environment that mimics the demands of an actual software development role. being exposed to this kind of pressure and high expectation will better prepare me for the future and whats to come.

---

## Beyond the Reading: In-class notes

### Our Environments

- Node, Jest, CI/CD

### Where does our code run?

In 201: Code ran in the browser.
In 301: Code ran in Node (runtime) then the Browser from React - Also known as compiling
In 401: Same as the above mentioned + Jest...

    - Jest is a test environment. Jest checks to see if a code is doing the job it's supposed to be doing prior to the code executing its condition.

    - A runtime is a place where code "runs"... Meaning that the code is executing and the result of the output is rendered.

## Testing

    - Requires knowledge of an end-goal

Node: String => function Capitalize => Same String but all caps [Capitalize code](./capitalize/capitalize.js) and [test](./capitalize/capitalize.test.js)

Jest: Gives access to a function called 'expect' which is a function for asserting values

Node is **Development** => Jest is **testing** (GitHub Actions )=> Render is **production** (Cloud computer)

Continuous Integration/Continuous Delivery

