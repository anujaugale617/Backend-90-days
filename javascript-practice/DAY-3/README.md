

# 1. Functions

## What is a Function?

A **function** is a block of code that performs a specific task. It helps us avoid writing the same code again and again.

### Syntax

```javascript
function functionName() {
    // code
}
```

### Example

```javascript
function greet() {
    console.log("Hello!");
}

greet();
```

**Output**

```
Hello!
```

---

## Function with Parameters

Parameters are values passed into a function.

```javascript
function greet(name) {
    console.log("Hello " + name);
}

greet("Anu");
```

**Output**

```
Hello Anu
```

---

## Function with Return

The `return` keyword sends a value back.

```javascript
function add(a, b) {
    return a + b;
}

let result = add(10, 20);
console.log(result);
```

**Output**

```
30
```

---

# 2. Arrow Functions

Arrow functions are a short way to write functions.

### Syntax

```javascript
const functionName = () => {
    // code
}
```

### Example

```javascript
const greet = () => {
    console.log("Hello");
};

greet();
```

---

## Arrow Function with Parameters

```javascript
const add = (a, b) => {
    return a + b;
};

console.log(add(5, 3));
```

**Output**

```
8
```

---

## Short Arrow Function

If there is only one statement, you can write:

```javascript
const square = num => num * num;

console.log(square(5));
```

**Output**

```
25
```

---

## Normal Function vs Arrow Function

| Normal Function         | Arrow Function                   |
| ----------------------- | -------------------------------- |
| Uses `function` keyword | Uses `=>`                        |
| Longer syntax           | Short syntax                     |
| Easy for beginners      | Mostly used in modern JavaScript |

---

# 3. Arrays

## What is an Array?

An **array** stores multiple values in a single variable.

### Syntax

```javascript
let fruits = ["Apple", "Mango", "Banana"];
```

### Access Elements

```javascript
console.log(fruits[0]);
```

**Output**

```
Apple
```

---

## Change Value

```javascript
fruits[1] = "Orange";
```

---

## Array Length

```javascript
console.log(fruits.length);
```

---

# Common Array Methods

## 1. push()

Adds an element at the end.

```javascript
let arr = [1, 2];

arr.push(3);

console.log(arr);
```

Output:

```
[1,2,3]
```

---

## 2. pop()

Removes the last element.

```javascript
arr.pop();
```

Output:

```
[1,2]
```

---

## 3. unshift()

Adds an element at the beginning.

```javascript
arr.unshift(0);
```

Output:

```
[0,1,2]
```

---

## 4. shift()

Removes the first element.

```javascript
arr.shift();
```

Output:

```
[1,2]
```

---

## 5. includes()

Checks if an element exists.

```javascript
let fruits = ["Apple", "Mango"];

console.log(fruits.includes("Apple"));
```

Output:

```
true
```

---

## 6. indexOf()

Returns the position of an element.

```javascript
console.log(fruits.indexOf("Mango"));
```

Output:

```
1
```

---

## 7. slice()

Returns a part of an array (original array does not change).

```javascript
let arr = [10,20,30,40];

console.log(arr.slice(1,3));
```

Output:

```
[20,30]
```

---

## 8. splice()

Adds or removes elements (original array changes).

```javascript
let arr = [10,20,30];

arr.splice(1,1);

console.log(arr);
```

Output:

```
[10,30]
```

---

## 9. join()

Converts an array into a string.

```javascript
let arr = ["A","B","C"];

console.log(arr.join("-"));
```

Output:

```
A-B-C
```

---

## 10. reverse()

Reverses the array.

```javascript
let arr = [1,2,3];

console.log(arr.reverse());
```

Output:

```
[3,2,1]
```

---

# Important Array Methods

## map()

Creates a new array by modifying every element.

```javascript
let numbers = [1,2,3];

let result = numbers.map(num => num * 2);

console.log(result);
```

Output:

```
[2,4,6]
```

---

## filter()

Returns elements that satisfy a condition.

```javascript
let numbers = [10,20,30,40];

let result = numbers.filter(num => num > 20);

console.log(result);
```

Output:

```
[30,40]
```

---

## forEach()

Runs a function for every element.

```javascript
let numbers = [1,2,3];

numbers.forEach(num => {
    console.log(num);
});
```

Output:

```
1
2
3
```

---

# 4. Strings

## What is a String?

A **string** is text written inside quotes.

```javascript
let name = "Anu";
```

or

```javascript
let city = 'Pune';
```

---

## String Length

```javascript
let str = "JavaScript";

console.log(str.length);
```

Output:

```
10
```

---

# Common String Functions

## 1. toUpperCase()

Converts to uppercase.

```javascript
let str = "hello";

console.log(str.toUpperCase());
```

Output:

```
HELLO
```

---

## 2. toLowerCase()

Converts to lowercase.

```javascript
let str = "HELLO";

console.log(str.toLowerCase());
```

Output:

```
hello
```

---

## 3. trim()

Removes spaces from the beginning and end.

```javascript
let str = "  Hello  ";

console.log(str.trim());
```

Output:

```
Hello
```

---

## 4. includes()

Checks whether text exists.

```javascript
let str = "JavaScript";

console.log(str.includes("Script"));
```

Output:

```
true
```

---

## 5. indexOf()

Returns the position of a character or word.

```javascript
let str = "JavaScript";

console.log(str.indexOf("S"));
```

Output:

```
4
```

---

## 6. slice()

Returns part of a string.

```javascript
let str = "JavaScript";

console.log(str.slice(0,4));
```

Output:

```
Java
```

---

## 7. replace()

Replaces one word with another.

```javascript
let str = "I like Java";

console.log(str.replace("Java","JavaScript"));
```

Output:

```
I like JavaScript
```

---

## 8. split()

Converts a string into an array.

```javascript
let str = "Apple,Mango,Banana";

console.log(str.split(","));
```

Output:

```
["Apple","Mango","Banana"]
```

---

## 9. charAt()

Returns the character at a given position.

```javascript
let str = "Hello";

console.log(str.charAt(1));
```

Output:

```
e
```

---

## 10. concat()

Joins two strings.

```javascript
let first = "Hello";
let second = " World";

console.log(first.concat(second));
```

Output:

```
Hello World
```

---

