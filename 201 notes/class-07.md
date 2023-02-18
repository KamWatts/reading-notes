# Object-Oriented Programming, HTML Tables

## Domain Modeling

1. Domain modeling is needed because it creates a "conceptual model for a specific problem". In other words, it stores data in properties to define behaviors in methods. These methods are known as object-oriented models. Domain models are good for communication as it uses vocabulary that everyone understands but in a logical sense.

* According to [TechBeacon.com](https://techbeacon.com/app-dev-testing/why-you-need-domain-driven-design-even-though-you-think-you-dont) Domain Driven Design (DDD) gives your code intention that aligns with any business model. DDD provides the luxury of bridging the code language gap between technical and non-technical individuals.

## HTML Table Basics

1. Tables should not be used for page layouts because screen readers can misinterpret the layout and make the content confusing for those who are visually impaired. Tables contain a complex structure of elements that can result in code that is difficult to maintain and debug because of the often confusing readability of the code that constructs them. It is difficult to create a responsive webpage that contains a table. This greatly affects users on smaller devices such as cell phones and small tablets.

3. Three different semantic elements in an HTML `<table>`:

* `<td>`: Stands for `table data` and is used to input information. `<td>` is also used to construct new rows of cells by adding my `<td>` tags to the HTML.

* `<th>`: Stands for `table header` and goes at the start of each row or column to describe what the data of the column or row entails.

* `<tr>`: Stands for `table rows` and is used to nest `table data` elements to construct a group of cells for specific data types to be input.

## Introducing Constructors

1. A constructor is a function used to call an object. Objects are stored inside of constructors so each time an object alike needs to be created, it does not have to use the same repeated object data again. A constructor function is called using the `new` keyword. For instance, if a Person(object) was created earlier in the code sequence, but later in the sequence another Person needs to be created as an object, the new person can be created with the constructor to return the new Person (object). The big advantage is that this reduces the amount of code that would otherwise be needed to get the exact same task complete.

2. Based on a very detailed answer on [Stack Overflow](https://stackoverflow.com/questions/13441307/how-does-the-this-keyword-in-javascript-act-within-an-object-literal) by slebetman, when a function is called as a constructor, a new object is created and `this` is connected to that object. Versus when an object literal `this` refers to the object the method belongs to.

# Object Prototypes Using A Constructor

