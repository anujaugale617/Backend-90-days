
# 1. What is Synchronous JavaScript?

JavaScript is **Synchronous** by default.

### Meaning

* Code runs **one line at a time**.
* The next line starts **only after the previous line finishes**.

### Example

```javascript
console.log("One");
console.log("Two");
console.log("Three");
```

**Output**

```
One
Two
Three
```

**Remember:** JavaScript executes code in order.

---

# 2. JavaScript is Single-Threaded

JavaScript has **only one thread**.

### Meaning

It can do **only one task at a time**.

Example:

```
Task 1
 ↓
Task 2
 ↓
Task 3
```

The next task waits until the previous task finishes. 

---

# 3. What is Asynchronous Programming?

Asynchronous programming allows JavaScript to perform long tasks **without stopping the whole program**.

Instead of waiting,

JavaScript says:

> "You continue your work, I will inform you when the task is completed."

Example:

* API Calls
* Fetch Data
* Reading Files
* Timers

---

# 4. Blocking Code

Blocking code stops the program until the current task finishes.

Example

```
Read File
↓
Wait...
↓
Continue Program
```

The program cannot do anything while waiting.

### Real-life Example

Teacher says:

> "Sit here until I return."

You cannot do anything else.

---

# 5. Non-Blocking Code

Non-blocking code allows other tasks to run while waiting.

Example

```
Read File
↓

Continue Other Work

↓

File Finished

↓

Use Result
```

### Real-life Example

Teacher says:

> "Complete your homework while I bring the books."

You keep working without waiting. 

---

# 6. Is Non-Blocking Always Better?

**No.**

Sometimes blocking code is necessary.

### Example

User Registration

Wrong Order

```
Store data in Database
↓

Show Success Message
```

If the database fails, the user already received a success message.

Correct Order

```
Store Data

↓

Wait for Success

↓

Show Success Message
```

Use the right approach based on the situation. 

---

# 7. JavaScript Execution Context

Whenever JavaScript starts,

it creates an **Execution Context**.

It helps JavaScript execute the program line by line.

Execution Context contains

* Memory
* Call Stack

---

# 8. Call Stack

Call Stack stores function calls.

It works on **LIFO (Last In First Out)**.

Example

```
main()

↓

fun1()

↓

fun2()
```

Execution

```
fun2()

↓

fun1()

↓

main()
```

---

# 9. Memory Heap

Memory Heap stores

* Objects
* Variables
* Dynamic Data

Simple Idea:

```
Variables
↓

Memory Heap
```

---

# 10. Runtime Environment

JavaScript Engine alone is not enough.

It runs inside

* Browser
* Node.js

These environments provide extra features like

* DOM
* Timers
* Fetch API



---

# 11. Web APIs

Web APIs are provided by the browser.

Examples

* setTimeout()
* setInterval()
* fetch()
* DOM Events

These are **not part of the JavaScript language itself**.

---

# 12. How setTimeout Works

Example

```javascript
setTimeout(()=>{
    console.log("Hello");
},2000);
```

Flow

```
Call Stack

↓

Web API

↓

Wait 2 Seconds

↓

Task Queue

↓

Call Stack

↓

Print Hello
```

The timer is handled by the browser, not by the JavaScript engine. 

---

# 13. Task Queue

Completed asynchronous tasks are stored in the **Task Queue**.

The Event Loop moves them to the Call Stack when it becomes empty.

Think of it as a queue at a ticket counter:

```
Person 1

↓

Person 2

↓

Person 3
```

First person enters first.

---

# 14. Event Loop

The Event Loop continuously checks:

```
Is Call Stack Empty?

↓

Yes

↓

Take Task from Queue

↓

Execute Task
```

It manages asynchronous operations.

---

# 15. setTimeout(0)

Example

```javascript
console.log("1");

setTimeout(()=>{
console.log("2");
},0);

console.log("3");
```

Output

```
1
3
2
```

### Why?

Even with `0` milliseconds:

* `setTimeout` first goes to the Web API.
* Then to the Task Queue.
* It executes **only after** the Call Stack is empty. 

---

# 16. Fetch API

`fetch()` is used to get data from a server.

Example

```javascript
fetch(url)
```

The Fetch API uses **Promises**, which are handled with higher priority than the normal task queue in modern JavaScript engines (via the microtask queue). 

---

# Flow of Asynchronous JavaScript

```
JavaScript Code
        │
        ▼
Call Stack
        │
        ▼
Web API
(setTimeout, fetch, Events)
        │
        ▼
Task Queue
        │
        ▼
Event Loop
        │
        ▼
Call Stack
        │
        ▼
Output
```

---

# Important Points

* JavaScript is **Synchronous** by default.
* JavaScript is **Single-Threaded**.
* Code executes **one line at a time**.
* `setTimeout()` is handled by **Web APIs**.
* Completed tasks move to the **Task Queue**.
* The **Event Loop** checks if the Call Stack is empty.
* `setTimeout(0)` does **not** execute immediately.
* `fetch()` returns a **Promise**.

---

# Quick Revision 

* **Synchronous:** One task at a time.
* **Single Thread:** Only one execution thread.
* **Asynchronous:** Long tasks run in the background.
* **Blocking Code:** Stops the program.
* **Non-Blocking Code:** Allows other work to continue.
* **Call Stack:** Executes functions (LIFO).
* **Memory Heap:** Stores objects and variables.
* **Web APIs:** Browser features like timers and DOM.
* **Task Queue:** Stores completed async tasks.
* **Event Loop:** Moves tasks from the queue to the Call Stack.
* **`setTimeout(0)`:** Runs after the current synchronous code finishes.
* **Fetch API:** Used to request data from servers using Promises.
