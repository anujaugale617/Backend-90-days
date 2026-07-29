
# JavaScript Classes (ES6)
## 1. What is a Class?

* A **class** is a blueprint for creating objects.
* It was introduced in **ES6**.
* Classes make Object-Oriented Programming (OOP) easier.
* Internally, JavaScript still uses **functions and prototypes**.
* Classes are just **syntactic sugar** over prototypes. 

### Syntax

```javascript
class User {

}
```

---

## 2. Constructor

* A **constructor** is a special method.
* It runs automatically when an object is created using `new`.
* It is used to initialize object properties.

### Example

```javascript
class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
}
```

**Key Points**

* Called automatically.
* Initializes object data.
* Uses `this` keyword. 

---

## 3. `this` Keyword

* `this` refers to the current object.
* It is used to access object properties.

Example

```javascript
this.username
this.email
```

---

## 4. Methods in Class

* Functions inside a class are called **methods**.
* No `function` keyword is needed.

Example

```javascript
encryptPassword() {
    return this.password + "abc";
}
```

Another method

```javascript
changeUsername() {
    return this.username.toUpperCase();
}
```



---

## 5. Creating Objects

Use the `new` keyword.

```javascript
const user1 = new User(
    "chai",
    "chai@gmail.com",
    "123"
);
```

Calling methods

```javascript
user1.encryptPassword();
user1.changeUsername();
```

---

# Behind the Scenes

JavaScript classes are actually functions.

Instead of

```javascript
class User {}
```

JavaScript can work like

```javascript
function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}
```

Methods are added using **prototype**.

```javascript
User.prototype.encryptPassword = function () {
    return this.password + "abc";
};
```

So,

**Class = Function + Prototype** 

---

# Inheritance

Inheritance allows one class to use the properties and methods of another class.

Use the `extends` keyword.

```javascript
class Teacher extends User {

}
```

Benefits

* Reuse code.
* Child class gets parent methods.
* No need to write the same code again.



---

# super Keyword

`super()` calls the parent class constructor.

Example

```javascript
class Teacher extends User {
    constructor(username, email, password) {
        super(username);
        this.email = email;
        this.password = password;
    }
}
```

Why use it?

* Initializes parent class.
* Gives access to parent properties.



---

# Using Child Class

```javascript
const teacher = new Teacher(
    "chai",
    "chai@gmail.com",
    "123"
);

teacher.addCourse();
teacher.logMe();
```

Parent methods are also available because of inheritance.

---

# instanceof Operator

Checks whether an object belongs to a class.

Example

```javascript
teacher instanceof Teacher
// true

teacher instanceof User
// true
```

Returns

* `true`
* `false`



---

# Static Methods

Use the `static` keyword.

```javascript
static createId() {
    return "123";
}
```

### Why use static?

* Cannot be called using object.
* Used for utility/helper methods.
* Prevents unnecessary access.

Example

```javascript
User.createId();      // Works

const user = new User("Hitesh");

user.createId();      // Error
```

Even child classes cannot access it through instances.



---

# Important Keywords

| Keyword     | Meaning                      |
| ----------- | ---------------------------- |
| class       | Create a class               |
| constructor | Initializes object           |
| this        | Current object               |
| new         | Creates object               |
| extends     | Inherit another class        |
| super       | Calls parent constructor     |
| static      | Method belongs to class only |
| instanceof  | Checks object's class        |

---

# Interview Points

* Classes were introduced in **ES6**.
* JavaScript classes are **syntactic sugar**.
* JavaScript is **prototype-based**, not truly class-based.
* `constructor()` runs automatically with `new`.
* `extends` is used for inheritance.
* `super()` calls the parent constructor.
* `static` methods belong to the class, not object instances.
* `instanceof` checks whether an object is an instance of a class.

---

# Quick Revision

* Class → Blueprint for objects.
* Constructor → Runs when object is created.
* `this` → Refers to current object.
* Method → Function inside class.
* `new` → Creates object.
* `extends` → Inheritance.
* `super()` → Parent constructor.
* `static` → Class-only method.
* `instanceof` → Checks object type.
* Behind the scenes, classes use **functions + prototypes**.
