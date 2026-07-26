# JavaScript Promises 

## What is a Promise?

A **Promise** is a JavaScript object that represents the **future result** of an asynchronous task.

It tells us:

* The task will complete later.
* It may **succeed** or **fail**.

### Simple Definition

> A Promise is a placeholder for a value that will be available in the future.

---

# Why do we use Promises?

Some operations take time to complete, such as:

* 🌐 Network/API requests
* 📁 Reading files
* 🗄 Database operations
* 🔐 Cryptography (encryption)
* 📷 Camera access
* 🔊 Audio/Video devices

Instead of stopping the whole program, JavaScript lets these tasks run in the background using **Promises**. 

---

# Promise States

Every Promise has **3 states**:

### 1. Pending

* Initial state
* Task is still running

### 2. Fulfilled (Resolved)

* Task completed successfully

### 3. Rejected

* Task failed with an error

```
Pending
   |
   |----> Fulfilled ✅
   |
   └----> Rejected ❌
```

---

# Creating a Promise

Syntax:

```javascript
const promise = new Promise((resolve, reject) => {

});
```

* `resolve()` → Success
* `reject()` → Failure

---

# Consuming a Promise

After creating a Promise, use:

```javascript
promise.then()
```

Example:

```javascript
promise.then(() => {
    console.log("Promise completed");
});
```

`.then()` runs only after `resolve()` is called. 

---

# resolve()

`resolve()` tells JavaScript:

> "The task completed successfully."

Example:

```javascript
resolve();
```

Now `.then()` will execute.

---

# Passing Data using resolve()

You can send data through `resolve()`.

Example:

```javascript
resolve({username:"Javascript",email:"javascript@gmail.com"});
```

Receive it using:

```javascript
promise.then((user) => {
    console.log(user);
});
```

---

# reject()

If something goes wrong:

```javascript
reject("Something went wrong");
```

Now `.catch()` will execute.

---

# catch()

Used to handle errors.

Example:

```javascript
promise
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
});
```

---

# finally()

`finally()` always runs.

Whether:

* Promise succeeds ✅
* Promise fails ❌

Example:

```javascript
promise
.finally(() => {
    console.log("Promise finished");
});
```

Useful for:

* Hide loading spinner
* Close connection
* Cleanup code

---

# Promise Chaining

You can use multiple `.then()` methods.

Example:

```javascript
promise
.then((user) => {
    return user.username;
})
.then((username) => {
    console.log(username);
});
```

This is called **Promise Chaining**.

Each `.then()` receives the value returned from the previous `.then()`. 

---

# async and await

Another way to use Promises.

Example:

```javascript
async function getData() {
    const response = await promise;
    console.log(response);
}
```

`await` waits until the Promise finishes.

It makes asynchronous code look like normal synchronous code.

---

# Error Handling with async/await

Use `try...catch`.

```javascript
async function getData() {
    try {
        const response = await promise;
        console.log(response);
    } catch(error) {
        console.log(error);
    }
}
```

This is the recommended way when using `async/await`. 

---

# Promise vs async/await

| Promise (.then)     | async/await            |
| ------------------- | ---------------------- |
| Uses `.then()`      | Uses `await`           |
| Uses `.catch()`     | Uses `try...catch`     |
| Good for chaining   | Easier to read         |
| More callback style | Looks like normal code |

---

# Real-Life Example

Imagine you order food online.

* You place an order → **Pending**
* Food delivered → **Resolved (Fulfilled)**
* Order cancelled → **Rejected**

The restaurant gives a **Promise** that your order will eventually complete.

---

# Important Points

* Promise handles asynchronous tasks.
* Promise is an object.
* It has three states:

  * Pending
  * Fulfilled
  * Rejected
* `resolve()` → Success
* `reject()` → Failure
* `.then()` handles success.
* `.catch()` handles errors.
* `.finally()` always executes.
* `async/await` is a cleaner way to work with Promises.
* Use `try...catch` with `await`.

