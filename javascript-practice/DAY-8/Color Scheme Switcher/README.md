

# 🎨 Color Scheme Switcher

## 📌 Project Overview

The **Color Scheme Switcher** is a simple JavaScript mini project that changes the background color of the webpage when the user clicks on a color box.

This project helps beginners understand how JavaScript interacts with HTML and CSS using **DOM (Document Object Model)** concepts.

---

# 🎯 Objective

The main objective of this project is to learn:

* HTML page structure
* CSS styling
* JavaScript DOM manipulation
* Event handling
* Using `switch` statements
* Changing CSS properties dynamically

---

# 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)

---

# 📁 Project Structure

```
Color-Scheme-Switcher/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

# 📄 HTML Explanation

The HTML file creates the webpage layout.

## Main Components

### 1. Navigation Bar

```html
<nav>
```

Contains links like:

* Home
* YouTube Channel

---

### 2. Main Container

```html
<div class="canvas">
```

Stores all project content.

---

### 3. Heading

```html
<h1>Color Scheme Switcher</h1>
```

Displays the project title.

---

### 4. Color Buttons

```html
<span class="button" id="grey"></span>
```

Each `<span>` acts as a clickable color box.

Available colors:

* Grey
* White
* Blue
* Yellow
* Purple

Each button has:

* Common class → `.button`
* Unique ID → `grey`, `white`, `blue`, etc.

---

### 5. Instruction Text

```html
<h2>
Try clicking on one of the colors...
</h2>
```

Guides the user.

---

### 6. JavaScript File

```html
<script src="script.js"></script>
```

Connects the JavaScript file with the webpage.

---

# 🎨 CSS Explanation

CSS makes the webpage attractive.

---

## html

```css
html{
margin:0;
}
```

Removes the default margin.

---

## span

```css
span{
display:block;
}
```

Makes every span behave like a block element.

---

## Canvas

```css
.canvas{
margin:100px auto;
width:80%;
text-align:center;
}
```

Used to:

* Center the content
* Add spacing
* Align text

---

## Button

```css
.button{
width:100px;
height:100px;
border:2px solid black;
display:inline-block;
}
```

Creates square color boxes.

Each button:

* Width = 100px
* Height = 100px
* Black border
* Displayed side by side

---

## Individual Colors

Example:

```css
#grey{
background:grey;
}
```

Each ID assigns its own background color.

---

# ⚙️ JavaScript Explanation

JavaScript provides the functionality.

---

## Step 1: Select All Buttons

```javascript
const buttons = document.querySelectorAll(".button");
```

`querySelectorAll()` selects every element having the class `.button`.

Result:

A NodeList containing all five buttons.

---

## Step 2: Select Body

```javascript
const body = document.querySelector("body");
```

Selects the `<body>` element because its background color will be changed.

---

## Step 3: Loop Through Buttons

```javascript
buttons.forEach(function(button){
```

`forEach()` visits every button one by one.

---

## Step 4: Add Click Event

```javascript
button.addEventListener("click",function(e){
```

Whenever a button is clicked, this function executes.

---

## Step 5: Event Object

```javascript
console.log(e);
```

The event object stores information about the click.

Example:

* Mouse position
* Target element
* Event type

---

## Step 6: Target Element

```javascript
console.log(e.target);
```

Returns the exact element that was clicked.

---

## Step 7: Get Button ID

```javascript
const target = e.target.id;
```

Stores the clicked button's ID.

Example:

```
grey
```

or

```
blue
```

---

## Step 8: Switch Statement

```javascript
switch(target)
```

Checks which button was clicked.

Example:

```
if target == grey
```

↓

Background becomes grey.

---

## Example

```javascript
case "blue":
body.style.backgroundColor="blue";
break;
```

Changes the page background to blue.

---

## Why `break`?

`break` stops the switch after executing the matching case.

Without `break`, JavaScript would continue checking the remaining cases.

---

# 🔄 Working Flow

```
Webpage Loads
       ↓
Select All Color Buttons
       ↓
Wait for User Click
       ↓
User Clicks Color
       ↓
Read Button ID
       ↓
Switch Statement Executes
       ↓
Background Color Changes
```

---

# 📚 JavaScript Concepts Used

* Variables (`const`)
* DOM Manipulation
* `querySelector()`
* `querySelectorAll()`
* NodeList
* `forEach()`
* Event Listener
* Event Object
* `e.target`
* Element ID
* Switch Case
* CSS Style Manipulation

---

# 🖥️ Output

When the webpage opens:

* Five colored boxes are displayed.
* Clicking any color box instantly changes the webpage background to that color.
* The page responds immediately without refreshing.

---

# 🚀 Features

* Beginner-friendly project
* Interactive UI
* Instant background color change
* Clean and simple code
* Uses JavaScript DOM events
* Easy to understand and modify

---

# 📖 Learning Outcomes

After completing this project, you will understand:

* How HTML, CSS, and JavaScript work together
* How to select HTML elements using JavaScript
* How to handle click events
* How to use `addEventListener()`
* How to use `forEach()` to work with multiple elements
* How to use `switch` statements
* How to change CSS properties dynamically using JavaScript
* Basics of DOM manipulation and event-driven programming



# 📌 Conclusion

The **Color Scheme Switcher** is a beginner-level JavaScript project that demonstrates how **DOM manipulation** and **event handling** can be used to create an interactive web application. It strengthens the fundamentals of HTML, CSS, and JavaScript while providing hands-on experience with dynamic webpage updates. This project is an excellent starting point for learning how user interactions can control webpage behavior and can be further extended with advanced features like animations, local storage, and custom themes.
