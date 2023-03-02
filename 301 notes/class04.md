# Readt and Forms

## React Docs - Forms

1. What is a 'Controlled Component'?

- A Controlled Component, considering a user's input, controls what happens after user input. This type of component usually exists in the rendering of a form.

2. Should we wait to store the users responses from the form into state when they submit the form OR should we update the state with their responses as soon as they enter them?

- This really depends on what the information is being used for. What is this user input information being used for? If the information is automatically needed in order to progress to the next step, then yes, update as they input, but on the contrary, if the information will be used later, store it until its needed.

3. How do we target what the user is entering if we have an event handler on an input field?

- You habe to add a name attribute to the input element and create a handler function based on the value of `event.target.name`

## The Conditional (Ternary) Operator Explained

1. Why would we use a ternary operator?

- Ternary operators are the shorthand way of writing conditional statements. It can be helpful when it comes to optimizing your code for performance. You can assign a value to a variable based on a certain condition.

- Ternary operators can also be used in place of if-else statements.

- Ternary operators can make code hard to understand when they are overused. It is important to keep the conditions simple and concise.

2. `let verifySame = x === y ? console.log(true) : console.log(false)`
