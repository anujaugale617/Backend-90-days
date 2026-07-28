## JavaScript Prototype & `new` Keyword 
# 1. What is Prototype?

* Prototype is a **built-in feature** of JavaScript.
* It allows one object to **inherit properties and methods** from another object.
* If JavaScript cannot find a property in the current object, it searches in its **prototype**, then its parent's prototype, until it reaches `null`. This is called the **Prototype Chain**. 

### Simple Example

```javascript
const heroes = ["Hulk", "SpiderMan"];

console.log(heroes.length);   // Own property
console.log(heroes.map());    // From Array prototype
```

---

# 2. Prototype Chain

JavaScript searches for properties like this:

```
Object
   ↑
Array
   ↑
Your Array
```

If the property is not found:

* Search current object
* Search parent prototype
* Search next prototype
* Stop when `null` is reached. 

---

# 3. Everything is an Object

In JavaScript:

* Arrays are objects
* Strings are objects
* Functions are also objects

That is why they all have methods and properties. 

---

# 4. Functions are Objects

Functions can:

* Be called like functions
* Store properties like objects

Example:

```javascript
function multiplyBy5(num){
    return num * 5;
}

multiplyBy5.power = 2;

console.log(multiplyBy5.power);
```

Output

```
2
```

Functions behave as **both functions and objects**. 

---

# 5. `this` Keyword

`this` refers to the **current object** that calls the function.

Example

```javascript
this.username = username;
this.score = score;
```

Remember:

> **`this` means "the object that called me."** 

---

# 6. Adding Methods using Prototype

We can add new methods to a constructor using `prototype`.

Example

```javascript
function CreateUser(username, score){
    this.username = username;
    this.score = score;
}

CreateUser.prototype.increment = function(){
    this.score++;
}
```

Now every object created from `CreateUser` can use `increment()`. 

---

# 7. Why do we use `new` Keyword?

Without `new`, JavaScript cannot correctly create an object and link it to the prototype.

Correct:

```javascript
const user = new CreateUser("Anu", 25);
```

Without `new`:

```javascript
const user = CreateUser("Anu", 25);
```

This causes problems because no new object is created. 

---

# 8. What happens when `new` is used?

When JavaScript sees:

```javascript
new CreateUser("Anu",25)
```

It does these steps:

1. Creates a **new empty object**
2. Links it to the constructor's prototype
3. Sets `this` to the new object
4. Executes the constructor
5. Returns the new object 

---

# 9. Custom Prototype Methods

You can create your own methods.

Example

```javascript
String.prototype.trueLength = function(){
    console.log(this.trim().length);
}
```

Now every string can use:

```javascript
let name = "Anu     ";
name.trueLength();
```

This shows how libraries add extra functionality to JavaScript objects. 

---

# 10. Prototype Inheritance

You can add methods to `Object.prototype`.

Example

```javascript
Object.prototype.sayHello = function(){
    console.log("Hello");
}
```

Now every object can use:

```javascript
const user = {};
user.sayHello();
```

Because every object inherits from `Object`. 

---

# Interview Points

* Prototype enables inheritance.
* JavaScript searches through the prototype chain.
* Functions are objects.
* `this` refers to the current calling object.
* `prototype` is used to share methods.
* `new` creates and returns a new object.
* All objects ultimately inherit from `Object.prototype`. 

---

# Quick Revision

* Prototype = Inheritance mechanism
* Prototype Chain = Search until `null`
* Arrays, Strings, Functions = Objects
* Functions can store properties
* `this` = Current object
* `prototype` = Shared methods
* `new` = Creates object + links prototype + returns object
* `Object.prototype` = Parent of most objects
