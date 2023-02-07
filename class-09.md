# Forms and Events

## HTML Forms

### Structuring a Web Form

1. Forms are important in web development because it is a tool that collects data directly from user input. For instance, if a user wants to register for e-mail updates or create a profile on a website, this type of information goes into a form.

2. Some key things to keep in mind when building a form is to be clear what information you want the user to input. The UI should be simple and easy to navigate for anyone to understand what is expected of them while filling out the form. 

3. Five form elements:

* `<label>` : Labels define the form widget and its use case and adds accessibility for visually impaired users because the label element is compatible with screen readers. The `label` element is equivalent to using an `alt` text attribute on an image.

* `<legend>` : Represent the caption for the content within the fieldset.

* `<fieldset>` : A method to create groups of widgets that share the same purpose. 

* `<section>` : Splits the form into different stand-alone components to separate difference functions within the form.

* `<li>`: Buttons and text boxes are generally used to conveniently structure code to make styling easier.

## Learn JS

### Intro to Events

1. Events describe the actions a person may use to navigate webpages such as clicking, scrolling, typing, and hovering.

2. EventListeners take in two parameters. The name of the event to register and the code that comprises the handler function.

3. The event object targets the element that the event should take place on (i.e., button).

4. The difference between event bubbling and event capturing:

* `Event bubbling` describes how the browser handles events targeted at nested elements from the closests element to the farthest element.

* `Event capturing` is the process of propagating from the farthest eleent tot he closest element in the DOM.

* In summary, Event Capturing and Event Bubbling are the opposite of eachother. 

* Fun fact: Only certain browsers used to be compatible with either one or the other. In the early 2000s for instance, Netscape only used event capturing and could not support event bubbling and vice versa for Internet Explorer.

## Things I want to know more about

I would like to know more about contructing the second parameter of Event Listeners