

# JavaScript `call()` Method -

## 1. What is `call()`?

* `call()` is a JavaScript method.
* It is used to **call a function immediately**.
* It allows you to **change the value of `this`** inside the function.

**Syntax**

```javascript
functionName.call(thisValue, arg1, arg2, ...);
```

---

## 2. Why do we use `call()`?

Sometimes a function loses its correct `this` reference.

Normally:

* `this` refers to the object that calls the function.
* But when one function calls another function, `this` may point to the **global object** (`window` in browser or an empty/global object in Node.js). 

To solve this problem, we use **`call()`**.

---

## 3. Execution Context

Every function creates its own **Execution Context**.

It contains:

* Memory
* Variables
* `this` keyword

When a function finishes, its execution context is removed. 

---

## 4. Problem Without `call()`

Example:

```javascript
function setUsername(username){
    this.username = username;
}

function createUser(username,email,password){
    setUsername(username);
    this.email = email;
    this.password = password;
}
```

### Problem

`setUsername()` gets called, but its `this` is **not** the `createUser` object.

So,

```javascript
this.username
```

does not get stored in the correct object.

Only

```javascript
email
password
```

are stored. 

---

## 5. Solution Using `call()`

```javascript
function setUsername(username){
    this.username = username;
}

function createUser(username,email,password){
    setUsername.call(this, username);

    this.email = email;
    this.password = password;
}
```

Now `this` inside `setUsername()` becomes the same object as `createUser()`.

Result:

```
{
 username: "Anu",
 email: "...",
 password: "..."
}
```

All values are stored correctly. 

---

# 6. What does the first parameter mean?

```javascript
call(this, username)
```

The first argument tells JavaScript:

> "Use **this object** while running the function."

Example

```javascript
setUsername.call(this, username);
```

Here,

* `this` → current object
* `username` → function argument

---

# 7. Browser vs Node.js

### Browser

```javascript
this
```

usually refers to

```javascript
window
```

### Node.js

There is no `window` object.

`this` behaves differently depending on the context. 

---

# 8. Key Points

* `call()` executes the function immediately.
* It changes the value of `this`.
* Useful when sharing functions between objects.
* Prevents losing the correct object reference.
* Often asked in JavaScript interviews.

---

# Interview Definition

**JavaScript `call()`** is a method used to invoke a function immediately while explicitly setting the value of `this`. It helps execute a function using another object's context.

---

# Easy Real-Life Example

Imagine two students:

* Rahul has a notebook.
* Aman wants to write in Rahul's notebook.

Instead of writing in his own notebook, Aman says:

> "Use Rahul's notebook."

`call()` does the same thing.

It tells JavaScript:

> **"Run this function, but use this object's data."**

---

# Revision

* `call()` → Calls a function immediately.
* First parameter → Sets the value of `this`.
* Solves `this` context problems.
* Very useful in objects, constructors, and interviews.
