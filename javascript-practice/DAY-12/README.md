# JavaScript Classes & Object-Oriented Programming (OOP) Notes

# 1. What is OOP (Object-Oriented Programming)?

**OOP** is a **programming style (paradigm)** used to organize code.

It helps to:

* Write clean code
* Reuse code
* Make projects easy to manage
* Avoid repeating code

> **Remember:** OOP is a coding style, not a programming language.

---

# 2. Does JavaScript have Classes?

### Answer:

**Yes, but not exactly.**

* JavaScript introduced the **class** keyword in **ES6 (2015)**.
* Internally, JavaScript is still a **Prototype-Based Language**.
* Classes are only **syntactic sugar** (an easier syntax).

**Important Interview Point**

> JavaScript is **Prototype-Based**, not truly Class-Based.

---

# 3. What is an Object?

An **Object** is a collection of:

* Properties (Variables/Data)
* Methods (Functions)

### Example

```javascript
const user = {
    name: "Anu",
    age: 20,

    greet() {
        console.log("Hello");
    }
}
```

Here,

Properties:

* name
* age

Method:

* greet()

---

# 4. Why do we use OOP?

Without OOP,

* Code becomes messy
* Same code is written again and again
* Difficult to manage large projects

OOP helps by:

* Organizing code
* Reusing code
* Making maintenance easier

---

# 5. Important OOP Terms

### Object Literal

Creating an object directly.

```javascript
const user = {
    username: "Anu"
}
```

---

### Constructor Function

Used to create **multiple objects** without repeating code.

---

### Prototype

JavaScript objects inherit properties and methods using **Prototype**.

> JavaScript works internally using Prototypes.

---

### Class

A cleaner way to create objects.

Introduced in ES6.

---

### new Keyword

Creates a **new object (instance)**.

Example

```javascript
const user = new User();
```

---

# 6. Four Pillars of OOP

## 1. Abstraction

Hide unnecessary details.

Example:

```javascript
fetch()
```

You use it without knowing how it works internally.

---

## 2. Encapsulation

Keep data together and protect it.

Example

Data + Methods are wrapped inside one object.

---

## 3. Inheritance

One object/class can use features of another.

Example

Parent → Child

---

## 4. Polymorphism

One method can behave differently in different situations.

---

# 7. Object Literal Example

```javascript
const user = {
    username: "Anu",
    loginCount: 5,
    isLoggedIn: true
}
```

Properties:

* username
* loginCount
* isLoggedIn

---

# 8. Adding Methods

Objects can also contain functions.

```javascript
const user = {
    username: "Anu",

    greet() {
        console.log("Welcome");
    }
}
```

Call it:

```javascript
user.greet();
```

---

# 9. this Keyword

**this** refers to the **current object**.

Example

```javascript
const user = {
    username: "Anu",

    greet() {
        console.log(this.username);
    }
}
```

Output

```
Anu
```

Without **this**

```javascript
console.log(username);
```

Output

```
ReferenceError
```

Because JavaScript doesn't know which username you mean.

---

# 10. What does "this" mean?

Inside an object

```javascript
this
```

means

> Current Object

Example

```javascript
console.log(this);
```

Inside the object,

Output:

```
{
 username: "Anu",
 loginCount: 5
}
```

---

# 11. this in Global Scope

### Browser

```javascript
console.log(this);
```

Output

```
Window Object
```

Because the browser's global object is **window**.

---

### Node.js

```javascript
console.log(this);
```

Output

```
{}
```

(empty object)

---

# 12. Problem Without Constructor Function

Suppose we create users manually.

```javascript
const user1 = { ... }

const user2 = { ... }

const user3 = { ... }
```

Every time we repeat the same code.

This is not efficient.

---

# 13. Constructor Function

Example

```javascript
function User(username, loginCount, isLoggedIn){

    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
}
```

Now we can create many users easily.

---

# 14. Why use new Keyword?

```javascript
const user1 = new User("Anu",5,true);
```

Without **new**

Objects overwrite each other's data.

With **new**

Each object gets its own separate copy.

---

# 15. What does new Keyword do?

When JavaScript sees

```javascript
new User()
```

It performs these steps:

### Step 1

Creates a new empty object.

```
{}
```

---

### Step 2

Calls the constructor function.

---

### Step 3

Binds **this** to the new object.

---

### Step 4

Returns the new object automatically.

---

# 16. Return this

Inside constructor

```javascript
return this;
```

Writing this is optional.

JavaScript automatically returns the new object.

---

# 17. Adding Methods Inside Constructor

```javascript
function User(name){

    this.name = name;

    this.greeting = function(){
        console.log("Welcome");
    }
}
```

Each object can now call

```javascript
user.greeting();
```

---

# 18. Constructor Property

Every object has a constructor.

Example

```javascript
console.log(user.constructor);
```

It tells which constructor created the object.

---

# 19. instanceof Operator

Checks whether an object belongs to a constructor.

Example

```javascript
user instanceof User
```

Output

```
true
```

---

# 20. Key Points 

* JavaScript is **Prototype-Based**.
* Classes were added in **ES6**.
* Classes are **syntactic sugar** over prototypes.
* Object = Properties + Methods.
* **this** refers to the current object.
* **new** creates a new instance.
* Constructor functions avoid code repetition.
* Every object has a constructor.
* Use **instanceof** to check object type.



# One-Line Revision

* **OOP:** Programming style using objects.
* **Object:** Collection of properties and methods.
* **Class:** Cleaner syntax for creating objects.
* **Prototype:** Core inheritance system in JavaScript.
* **this:** Refers to the current object.
* **new:** Creates a new object instance.
* **Constructor Function:** Creates multiple objects without repeating code.
* **instanceof:** Checks an object's constructor type.
* **Abstraction:** Hide implementation details.
* **Encapsulation:** Wrap data and methods together.
* **Inheritance:** Reuse features from another object/class.
* **Polymorphism:** One method, different behaviors.
