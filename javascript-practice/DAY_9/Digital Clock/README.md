

# Digital Clock 

## Aim

To create a **Digital Clock** using **HTML, CSS, and JavaScript** that shows the current local time and updates every second.

---

# Technologies Used

* **HTML** – Creates the structure of the webpage.
* **CSS** – Designs and styles the clock.
* **JavaScript** – Gets the current time and updates it every second.

---

# HTML Explanation

### 1. HTML Boilerplate

```html
<!DOCTYPE html>
<html lang="en">
```

* `<!DOCTYPE html>` tells the browser that this is an HTML5 document.
* `<html lang="en">` sets the language to English.

---

### 2. Head Section

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

* `charset="UTF-8"` supports all characters.
* `viewport` makes the webpage responsive on mobile devices.

---

### 3. Title

```html
<title>Your Local Time</title>
```

Displays **Your Local Time** on the browser tab.

---

### 4. Body

```html
<div class="center">
```

Creates a container that holds the heading and clock.

---

### 5. Banner

```html
<div id="banner">
<span>Your local time</span>
</div>
```

Displays the text:

**Your local time**

---

### 6. Clock

```html
<div id="clock"></div>
```

This empty `<div>` is where JavaScript displays the current time.

---

# CSS Explanation

## Body

```css
body{
    background-color:#212121;
    color:white;
}
```

* Sets dark background.
* Makes text white.

---

## Center Class

```css
.center{
display:flex;
height:100vh;
justify-content:center;
align-items:center;
flex-direction:column;
}
```

### Meaning

* `display:flex` → Uses Flexbox.
* `justify-content:center` → Centers vertically.
* `align-items:center` → Centers horizontally.
* `height:100vh` → Takes full screen height.
* `flex-direction:column` → Displays items one below another.

---

## Clock Styling

```css
#clock{
font-size:40px;
background-color:orange;
padding:20px 50px;
margin-top:10px;
border-radius:10px;
}
```

### Meaning

* `font-size` → Makes time large.
* `background-color` → Orange background.
* `padding` → Space inside the clock.
* `margin-top` → Gap above clock.
* `border-radius` → Rounded corners.

---

# JavaScript Explanation

## Selecting the Clock

```javascript
const clock = document.getElementById("clock");
```

Gets the HTML element whose id is **clock**.

---

## setInterval()

```javascript
setInterval(function(){

},1000);
```

Runs the function every **1000 milliseconds (1 second)**.

---

## Creating Date Object

```javascript
let date = new Date();
```

Creates a Date object containing the current date and time.

Example:

```
Fri Jul 24 2026 10:30:45
```

---

## Getting Current Time

```javascript
date.toLocaleTimeString();
```

Returns only the current time.

Example:

```
10:30:45 AM
```

---

## Displaying Time

```javascript
clock.innerHTML = date.toLocaleTimeString();
```

Updates the content of the clock `<div>` with the current time.

---

# Working of the Project

1. HTML creates an empty clock area.
2. CSS styles the clock and centers it on the page.
3. JavaScript selects the clock element.
4. Every second, `setInterval()` runs.
5. `new Date()` gets the current system time.
6. `toLocaleTimeString()` converts it into readable time.
7. `innerHTML` displays the updated time.
8. The clock keeps updating every second.

---

# Output

The webpage displays:

```
Your local time

10:45:20 AM
```

The time changes automatically every second.

---

# Important JavaScript Functions

| Function               | Purpose                                           |
| ---------------------- | ------------------------------------------------- |
| `getElementById()`     | Selects an HTML element by its id.                |
| `setInterval()`        | Repeats a function after a fixed time interval.   |
| `new Date()`           | Creates an object with the current date and time. |
| `toLocaleTimeString()` | Returns the current time in a readable format.    |
| `innerHTML`            | Updates the content inside an HTML element.       |

---

.

