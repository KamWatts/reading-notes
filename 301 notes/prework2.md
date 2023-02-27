# ES6 Classes

## Objects and Inheritance

JavaScript objects use prototype-based inheritance. 

**When methods or properties are attached to object's prototypes, they become available for use on that object and its descendants, but not directly attached to them.** 

When `class` and `extends` keywords are used internally, JavaScript will use prototype-based inheritance.

## Prototypal Inheritance

`function Animal(name) {
  this.name = name;
}`
`Animal.protype.walk = function () {}`

`function Bird(name) {`

  `Animal.call(this, name);
}`

`Bird.prototype.fly = function() {}`

`let parrot = new Bird('parrot');
parrot.fly();
parrot.walk();`

## ES6 Classes

The same thing with classes (Much cleaner):

* `function()` becomes `class {}`
*  `call` becomes `extends`
* Classes are standalone, self-contained object (instance) factories

  * They ultimately result in a prototype
  * But for the developer, they are easier to work with and understand

`class Animal {`
`constructor(name) {`
`this.name = name`
`}
walk() {}
}`
