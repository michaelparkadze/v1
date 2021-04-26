---
title: Var, Let, and Const – What's the Difference?
description: In this article, we'll discuss var, let and const  with respect to their scope, use, and hoisting. As you read, take note of the differences between them that I'll point out.
topic: JavaScript
date: 2021-04-26T09:37:50Z
---

A lot of new features came out with ECMAScript2015 (ES6). And now, since it's 2021, it's assumed that ES6 is pretty much awidely adopted at this point and a lot of JavaScript developers have started using these features.

While this assumption might be partially true, it's still possible that some of these features remain a unknown or unutilized to some of our fellow devs.

One of the additions that came with this "newer" JavaScript (ES6) is the `let` and `const` variables that allow you to declare variables other than the `var` type. But why should we start using them in addition to var? How are they different? If you are still not clear about this, then this article is for you.

In this article, we will be discussing var, let and const and how they different in respect to their use, scope and hoisting. As I point the differences between them I advise you to take note.

## Var

Before the arrival of ES6, the only variable declaration available was `var`. But declaring variables in such way have also led to some issues. Before I get into these issues, lets understand the `var` declaration.

Here we are declaring a variable called name and assigning it a string value called `"Michael"`

```js
var name = "Michael";

console.log(name); // 'Michael'
```

<br>

We can also write it as such. As you can see you can make a void `var` declaration and assign in a value on a different line. Works the same.

```js
var name;

name = "Michael";

console.log(name); // 'Michael'
```

<br>

Lastly we can also write it as such. This might look weird to newer developers that have used mostly `const` or `let` but this example works the same as the two above and all because of _hoisting_

```js
name = "Michael";

var name;

console.log(name); // 'Michael'
```

### Scope of var

Big word alert, lets define what is scope before we get into it.
The scope of a variable means in which parts of our program the variable is accessible for use.
`var` can be globally scoped or function scoped. This means it is accessible anywhere within their containing function or globally depending on where you declare it.

To understand further, look at the example below.

```js
var greet = "Hey there";

function newFunction() {
  var thanks = "Thanks for reading :)";

  return thanks; // returns 'Thanks for reading :)'
}

console.log(thanks); // thanks is not defined here
console.log(greet); // returns "Hey there"
```

<br>

Here, you can see that `greet` is globally scoped because it exists outside the function while `thanks` is function scoped. That means we can't access the thanks variable outside the function. We'll get an error as a result of `thanks` not being availble in our scope.

### Redclared var variables

So another thing with `var` variables is that they can be re-declared and updated. Lets take a look at an example that will work just fine.

```js
var name = "Michael";
var name = "Make me Mike";

console.log(name); // returns 'Make me Mike'

var age = 19;
age = 20;

console.log(age); // returns 20
```

<br>

As you can see we can redeclare the same variable and update it without resulting in an error. We can start to understand what kind of issues can arise from these types of behaviors and how easy that 2 variables with the same name can overwrite each other.

### Hoisting of var

Okay lets talk about hoisting. Many find hoisting a confusing topic but it is really pretty simple. The idea of hoisting is where variable and function declarations are 'moved' to the top of their scope before the code itself executes. This is the reason for why this code snippet works just fine.

```js
console.log(name);

var name = "Michael";
```

<br>

As we can see we are trying to console log the variable even before we declared it. This might look like it should result in an error but what is being executed is this 'modifed' version that JavaScript interprets.

```js
var name;
console.log("Hello" + name); // returns undefined

name = "Michael";
```

<br>

So to summarize hoisting, `var` variables are hoisted to the top of their scope and get the initial value of undefined.

### The problem

The main issue with var is the lack of block scope. `let` and `const` were introduced to provide the block scope that is less prone to errors. Lets take a look at this example:

```js
function printMatrix(matrix) {
  for (var i = 0; i < matrix.length; i++) {
    var line = matrix[i];
    for (var i = 0; i < line.length; i++) {
      var element = line[i];
      console.log(element);
    }
  }
}
var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

printMatrix(matrix); // Output => 1, 2, 3
```

<br>

All variables inside the printMatrix function are on the same level. The two for loops are actually using the same variable i!

> In Javascript, it doesn’t matter how many times you use the keyword “var”. If it’s the same name in the same function, you are pointing to the same variable.

This function scope can be a source of a lot of bugs. Fortunately, Javascript has been changing and now we have ES6 and more. There are these two “new” keywords, const and let, which allow you to define a constant and a variable, respectively. They both work with block scope, which means, if variables or constants are declared inside a block, they will not be available to the “parent” blocks.

## Let

`let` is now preferred for variable declaration. It's no surprise as it comes as an improvement to `var` declarations. It also solves the problem with `var` that we just covered. Let's consider why this is so.

### Let is blocked scoped

As we concluded at the end of the `var` section. let is block scoped. Lets define block scoped just to make sure everything is clear. A block is a chunck of code that is wrapped by `{}`. The block is everything inside the curly braces.

That means that a `let` variable declared in a block will only be availble fro use within that block. Lets take a look at an example:

```js
let greet = "Hello";

function newFunction() {
  let name = "Michael";
  console.log(name); // "Michael"
  return name;
}

console.log(name); // name is undefined
```

<br>

As we can tell from this example, using the `let` name variable inside its block will work just fine while trying to access name outside of its block scope will result in an error. This is because `let` variables are block scoped.

#### Let can be updated but no re-declared

Incommon with the `var` declaration, a `let` variable declaration can be updated whitin its scope. The difference except from the scope is that `let` can't be re-declared within its scope. Lets take a look at a working example where we update the variable:

```js
let age = 19;
age = 20;
```

While trying something like this will result in an error:

```js
let age = 19;
let age = 20; // error: Identifier 'age' has already been declared
```

As we said, this will error only when the `let` variable is being re-declared. If you want to have the same name for the `let` variables make sure they are in their own block scope. For example, this will work just fine:

```js
let age = 19;

if (true) {
  let age = 24;
  console.log(age); // 24
}

console.log(age); // 19
```

<br>

It seems like we have declared the same variable twice but in reality they are 2 different variables. The only reason this does not result in an error is because each variable lives in its own block scope.

This approach is far better than declaring `var` variables that might overwrite each other and cause annoying bugs. The larger the codebase the more difficult is fixing the bug.

### Let hoisting

Just to add, like `var`, `let` declarations are also hoisted to the top. Unlike `var` which is given the initial value of undefined, the `let` declaration will not be initialized. That means if you try to use a `let` variable before its initialized you will get a `Reference Error`.

## Const

So lets take a look at the `const` keyword and how it differs from `let`. The main difference which you can guess from its name is that `const` variables hold constant values. Meaning you can not update them in addition to re-declaring them.

#### Const is block scoped

Like `let` declarations, `const` declarations can only be accessed within the same block scope they were declared.

#### Const can't be updated nor re-declared

This means that the value of a variable declared with `const` remains the same within its scope. It can't be updated or re-declared. Lets take a look at these 2 examples that will both result in an error.

Updating example:

```js
const age = 19;
age = 20; // error: Assignment to constant variable.
```

<br>

Re-declaring example:

```js
const age = 19;
const age = 20; // error: Identifier 'age' has already been declared
```

<br>

Because of this, every `const` declaration must be initialized at the time of its declaration.

This behavior changes when it comes to objects and arrays declared with `const`. While a `const` object cannot be updated, the properties can. Therefore if we declare an object like this:

```js
const person = {
  name: "Michael",
  age: 19,
};
```

<br>

We might not be able to do this:

```js
const person = {
  name: "Michael",
  age: 19,
};

person = {
  name: "Mike",
  age: 20,
};
```

<br>

We can update the object like this:

```js
const person = {
  name: "Michael",
  age: 19,
};
console.log(person); // {name: "Michael", age: 19}

person.name = "Mike";
person.age = 20;
console.log(person); // {name: "Mike", age: 20}
```

<br>

This will update the object's name and age properties without causing any errors.

### Const hoisting

Just like its fellow `let`, `const` declarations are hoisted to the top but are not initialized.

## Summary

`let` and `const` are not just two new cool keywords, they also introduce block scope that allows us to write clean and less error-prone code. So lets have a quick recap in case you missed anything.

- `var` declarations are globally scoped or function scoped while `let` and `const` are block scoped.

- `var` variables can be updated and re-declared within its scope; `let` variables can be updated but not re-declared; `const` variables can neither be updated nor re-declared.

- They are all hoisted to the top of their scope. But while `var` variables are initialized with undefined, `let` and const variables are not initialized.

- While `var` and `let` can be declared without being initialized, `const` must be initialized during declaration.

<br>

Got any questions or just want to say hi? \
Feel free to send me an email or a connection request on linkedIn
