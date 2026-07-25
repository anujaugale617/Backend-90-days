# JavaScript Notes 
# First code Content

## 1. `setTimeout()`

`setTimeout()` is an asynchronous JavaScript function that executes another function **after a specified time**.

### Syntax

```javascript
setTimeout(functionName, timeInMilliseconds)
```

Example

```javascript
setTimeout(saySTOP, 2000);
```

* `2000` milliseconds = **2 seconds**
* After 2 seconds, `saySTOP()` will execute.

---

# 2. Function Expression

```javascript
const saySTOP = function(){
    console.log("STOP");
}
```

### Explanation

* A function is stored inside a variable named `saySTOP`.
* It prints `"STOP"` in the console.
* It does not execute immediately.
* It executes only when called.

---

# 3. Another Function

```javascript
const ChangeText = function(){
    document.querySelector('h1').innerHTML = "Dont Stop";
}
```

### Explanation

This function:

* Selects the first `<h1>` element.
* Changes its text to `"Dont Stop"`.

It also executes only when called.

---

# 4. Scheduling the Function

```javascript
const changeme = setTimeout(ChangeText, 2000);
```

### Explanation

* `setTimeout()` starts a timer.
* Waits for **2 seconds**.
* Executes the `ChangeText()` function.
* Returns a **Timer ID**.
* The Timer ID is stored in the variable `changeme`.

Why store it?

Because later we can stop this timer using `clearTimeout()`.

---

# 5. `querySelector()`

```javascript
document.querySelector('#stop')
```

### Explanation

* Selects the HTML element with id `stop`.

`#` means **id selector**.

Example

```javascript
'#stop'
```

selects

```html
<button id="stop">
```

---

# 6. `addEventListener()`

```javascript
.addEventListener('click', function(){
```

### Explanation

Adds a **click event** to the button.

Whenever the button is clicked, the function inside it runs.

Syntax

```javascript
element.addEventListener(event, function)
```

---

# 7. `clearTimeout()`

```javascript
clearTimeout(changeme);
```

### Explanation

Stops the timer created by `setTimeout()`.

If the timer is cancelled before 2 seconds, the `ChangeText()` function never executes.

---

# 8. `console.log()`

```javascript
console.log("STOPPED");
```

### Explanation

Prints

```
STOPPED
```

in the browser console.

---

# Program Flow

```
Page Loads
      │
      ▼
setTimeout() starts (2 sec)
      │
      ▼
Wait...
      │
      ├──────────────┐
      │              │
      ▼              ▼
No Click        Stop Button Click
      │              │
      ▼              ▼
ChangeText()    clearTimeout()
executes        cancels timer
      │
      ▼
Heading changes
```

---

# Important Functions Used

| Function             | Purpose                                |
| -------------------- | -------------------------------------- |
| `setTimeout()`       | Executes a function after a delay      |
| `clearTimeout()`     | Cancels a scheduled timeout            |
| `querySelector()`    | Selects an HTML element                |
| `addEventListener()` | Listens for an event                   |
| `innerHTML`          | Changes the content of an HTML element |
| `console.log()`      | Prints output in the browser console   |


# Second code Content


# 1. `Display()` Function

```javascript
const Display = function(){
    console.log("Hii", Date.now());
};
```

### Explanation

* A function named **Display** is created.
* It prints:

  * `"Hii"`
  * The current timestamp using `Date.now()`.

### `Date.now()`

```javascript
Date.now()
```

Returns the **current time in milliseconds** since **1 January 1970 (Unix Epoch)**.

Example Output

```text
Hii 1785324567890
```

Every second, the number changes.

---

# 2. Creating a Variable

```javascript
let intervalId;
```

### Explanation

* A variable named `intervalId` is created.
* It will store the **Interval ID** returned by `setInterval()`.
* This ID is later used to stop the interval.

---

# 3. `setInterval()`

### Syntax

```javascript
setInterval(functionName, time);
```

### Purpose

`setInterval()` repeatedly executes a function after a fixed time interval.

Example

```javascript
setInterval(Display,1000);
```

* Executes `Display()`
* Every **1000 milliseconds (1 second)**
* Continues until stopped.

---

# 4. Start Button Event

```javascript
document.querySelector("#Start").addEventListener('click', function(){
    intervalId = setInterval(Display,1000);
});
```

### Explanation

### Step 1

```javascript
document.querySelector("#Start")
```

Selects the button with id **Start**.

---

### Step 2

```javascript
.addEventListener('click', ...)
```

Listens for the **click** event.

Whenever the Start button is clicked, the function runs.

---

### Step 3

```javascript
intervalId = setInterval(Display,1000);
```

* Starts the timer.
* Calls the `Display()` function every **1 second**.
* Stores the interval ID in `intervalId`.

---

# 5. `clearInterval()`

### Syntax

```javascript
clearInterval(intervalId);
```

### Purpose

Stops a timer created by `setInterval()`.

Once stopped, the function is no longer called repeatedly.

---

# 6. Stop Button Event

```javascript
document.querySelector("#stop").addEventListener('click', function(){
    clearInterval(intervalId);
    console.log("STOPPED");
});
```

### Explanation

### Step 1

```javascript
document.querySelector("#stop")
```

Selects the Stop button.

---

### Step 2

```javascript
addEventListener('click', ...)
```

Runs the function whenever the Stop button is clicked.

---

### Step 3

```javascript
clearInterval(intervalId);
```

Stops the repeated execution of `Display()`.

---

### Step 4

```javascript
console.log("STOPPED");
```

Prints

```text
STOPPED
```

in the browser console.

---

# Difference Between `setTimeout()` and `setInterval()`

| `setTimeout()`                        | `setInterval()`                        |
| ------------------------------------- | -------------------------------------- |
| Executes only **once**                | Executes **repeatedly**                |
| Runs after a specified delay          | Runs after every specified interval    |
| Can be stopped using `clearTimeout()` | Can be stopped using `clearInterval()` |

---

# Program Flow

```text
Page Loads
      │
      ▼
Click Start
      │
      ▼
setInterval() Starts
      │
      ▼
Display() runs every 1 second
      │
      ▼
Console prints:
Hii 1785...
Hii 1785...
Hii 1785...
      │
      ▼
Click Stop
      │
      ▼
clearInterval()
      │
      ▼
Timer Stops
      │
      ▼
Console prints:
STOPPED
```

---

# Important Functions Used

| Function             | Purpose                                       |
| -------------------- | --------------------------------------------- |
| `setInterval()`      | Repeats a function after a fixed interval     |
| `clearInterval()`    | Stops the repeated execution                  |
| `Date.now()`         | Returns the current timestamp in milliseconds |
| `querySelector()`    | Selects an HTML element                       |
| `addEventListener()` | Attaches an event to an element               |
| `console.log()`      | Prints output in the browser console          |


