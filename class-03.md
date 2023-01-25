# HTML Lists, Control Flow with JS, and the CSS Box Model

## Learn HTML

### When should you use an unordered list in HTML?

- An unordered list should be used when the list does not need to be in any particular chronological order.

### How do you change the bullet style of unordered list items?

- You can use different symbols such as the "*" or "-" characters to represent bullets.

### When should you use an ordered list vs an unordered list in your HTML document?

- When the order of the list is meaningful such as a set of steps and instructions that needs to be followed, is when an ordered list is necessary.

- The unordered list can be used for lists where step-by-step instructions are not needed.

### Describe two ways you can change the numbers on list items provided by an ordered list?

- You can change the numbers by specifying the "type" with an attribute inside of the opening ordered list item element. You can set the type as a number (1), roman numeral(i), or letter type(a).

## Learn CSS

### Describe the CSS properties of `margin and padding`

- Margin adds spacing outside of the border of the content.

- Padding adds spacing inside of the border.

In general margin and padding properties are used for spacing between items in reference to the border that surrounds it.

### List and describe _four_ parts of an HTML element box as referred to by the **`box model`**

Four parts:

- margin
- padding
- border
- content

## Learn JS

### What `data types` can be stored in an array?

- strings
- numbers
- objects
- other arrays

### Is the `people` array a valid array? And how can data inside of an array be accessed?

- The array is valid
- Data can be accessed using bracket or dot notation. bracket notation targets the index of an item depending on its placement in an array. It is important to note that the first data set in an array starts at 0 and not 1.

### List 5 `shorthand operators` in JS and describe its use

1. x += f()  ----> x = x + f()

- Adds the value of the right operand to the variable

2. x &= f() ----> x = x & f()

- the Bitwise AND assignment uses the binary representation of both operands, does a Bitwise AND operation on them and assigns the result to the variable

3. x ^= f() ----> x = x ^ f()

- Uses the binary expression on both operands, does a Bitwise XOR operation on them and assigns the value to the variable

4. x ||= f() ----> x || (x = f())

- Only assigns a value if `x` is falsy

5. x **= f() ----> x** f()

- Raises the value of a variable to the power of the right operand

### The last expression

The result of the last expression will be `10dog` being that the false and true value were in parenthesis and evaluated together, the true expression will pair with the other true expression outside of the parenthesis. However, if the false statement were outside of the parenthesis, all of the variables would mash together for the result.

### Real world use case for a conditional statement

- A real world example is when you have to decide if you can go to the gym or not. You have to evaluate if you will get off of work in time and if the gym will be open when you get off of work. If both of those conditions are `true` then the condition will execute and you will be able to exercise at the gym!

### When are loops useful?

- Loops are useful when a code needs to be repeated over and over again without needing to type the code out multiple times for the function to execute.
