# 🧮 BMI Calculator

## 📌 Project Overview

The **BMI (Body Mass Index) Calculator** is a beginner-friendly JavaScript mini project that calculates a person's BMI based on their **height (in centimeters)** and **weight (in kilograms)**. It also displays the user's weight category (Underweight, Normal Weight, or Overweight).

This project demonstrates how HTML, CSS, and JavaScript work together to create an interactive web application. It is a great project for learning **DOM manipulation**, **form handling**, **user input validation**, **event handling**, and **mathematical calculations**.

---

# 🎯 Objective

The main objectives of this project are to:

* Build an interactive BMI Calculator.
* Learn how to collect user input using HTML forms.
* Validate user input before processing.
* Perform mathematical calculations using JavaScript.
* Display dynamic results on a webpage.
* Understand DOM manipulation and event handling.

---

# 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)

---

# 📁 Project Structure

```text
BMI-Calculator/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

# 📄 HTML Explanation

The HTML file creates the structure of the BMI Calculator.

---

## 1. Main Container

```html
<div class="container">
```

This container holds all the calculator elements.

---

## 2. Heading

```html
<h1>BMI Calculator</h1>
```

Displays the project title.

---

## 3. Form

```html
<form>
```

The form allows users to enter their height and weight.

---

## 4. Height Input

```html
<input type="text" id="height">
```

Used to enter the user's height in **centimeters**.

Example:

```
170
```

---

## 5. Weight Input

```html
<input type="text" id="weight">
```

Used to enter the user's weight in **kilograms**.

Example:

```
65
```

---

## 6. Calculate Button

```html
<button>Calculate</button>
```

When clicked, JavaScript calculates the BMI.

---

## 7. Result Section

```html
<div id="results"></div>
```

Displays:

* BMI Value
* Weight Category
* Validation Messages

---

## 8. BMI Guide

```html
<div id="weight-guide">
```

Shows BMI categories.

```
Underweight = Less than 18.6

Normal Weight = 18.6 – 24.9

Overweight = Greater than 24.9
```

---

## 9. JavaScript File

```html
<script src="script.js"></script>
```

Connects JavaScript with the webpage.

---

# 🎨 CSS Explanation

CSS makes the application attractive and user-friendly.

---

## Body

The body is centered using Flexbox.

Features:

* Center alignment
* Full-screen height
* Clean background

---

## Container

```css
.container
```

Properties:

* Fixed width
* Padding
* Background color
* Rounded corners
* Shadow effect

This creates a card-like design.

---

## Input Fields

```css
#height,
#weight
```

Used to style both input boxes.

Features:

* Same width
* Same height
* Proper spacing

---

## Button

The button is styled with:

* Rounded corners
* Border
* Hover effect
* Pointer cursor

---

## Results

```css
#results
```

Displays the calculated BMI in a larger font.

---

## Weight Guide

Provides a quick reference for BMI ranges.

---

# ⚙️ JavaScript Explanation

JavaScript is responsible for all calculations and user interaction.

---

# Step 1: Select the Form

```javascript
const form = document.querySelector("form");
```

Selects the HTML form.

---

# Step 2: Add Submit Event

```javascript
form.addEventListener("submit", function(e){
```

Runs the function when the user clicks the **Calculate** button.

---

# Step 3: Prevent Page Reload

```javascript
e.preventDefault();
```

Normally, a form refreshes the page after submission.

`preventDefault()` stops this behavior.

This allows the result to appear instantly without reloading.

---

# Step 4: Get User Input

```javascript
const height =
parseInt(document.querySelector("#height").value);
```

Reads the height entered by the user.

Similarly,

```javascript
const weight =
parseInt(document.querySelector("#weight").value);
```

Reads the weight.

---

# Why parseInt()?

Input values are stored as **strings**.

Example:

```
"170"
```

`parseInt()` converts it into

```
170
```

so mathematical calculations can be performed.

---

# Step 5: Select Result Area

```javascript
const results =
document.querySelector("#results");
```

This element is used to display the BMI result.

---

# Step 6: Validate Height

```javascript
if(isNaN(height) || height<=0)
```

Checks whether:

* Height is empty
* Height is not a number
* Height is zero
* Height is negative

If invalid,

```javascript
results.innerHTML =
"Please enter a valid height.";
```

---

# Step 7: Validate Weight

```javascript
else if(isNaN(weight)||weight<=0)
```

Performs the same validation for weight.

---

# Step 8: BMI Formula

```javascript
const bmi =
weight / ((height * height)/10000);
```

Formula:

```
BMI =
Weight (kg)
-----------------------
Height² (m²)
```

Since height is entered in centimeters,

```
(height × height) / 10000
```

converts it into square meters.

---

# Step 9: Round the Value

```javascript
.toFixed(2)
```

Rounds the BMI to **2 decimal places**.

Example:

```
23.45789

↓

23.46
```

---

# Step 10: Convert to Number

```javascript
Number(...)
```

Converts the rounded string back into a number.

---

# Step 11: Check BMI Category

## Underweight

```javascript
if(bmi<18.6)
```

Displays

```
Your BMI is 17.42

You are UNDERWEIGHT.
```

---

## Normal Weight

```javascript
else if(bmi>=18.6 && bmi<=24.9)
```

Displays

```
Your BMI is 22.31

You are NORMAL WEIGHT.
```

---

## Overweight

```javascript
else
```

Displays

```
Your BMI is 28.65

You are OVERWEIGHT.
```

---

# 📊 BMI Classification

| BMI Range         | Category      |
| ----------------- | ------------- |
| Less than 18.6    | Underweight   |
| 18.6 – 24.9       | Normal Weight |
| Greater than 24.9 | Overweight    |

---

# 🔄 Working Flow

```text
User Opens Website
        │
        ▼
Enter Height (cm)
        │
        ▼
Enter Weight (kg)
        │
        ▼
Click Calculate
        │
        ▼
JavaScript Prevents Page Refresh
        │
        ▼
Validate Input
        │
        ▼
Calculate BMI
        │
        ▼
Check BMI Category
        │
        ▼
Display BMI and Weight Status
```

---

# 📚 JavaScript Concepts Used

* Variables (`const`)
* DOM Manipulation
* `querySelector()`
* Form Handling
* `addEventListener()`
* Submit Event
* `preventDefault()`
* Input Validation
* `parseInt()`
* `isNaN()`
* Arithmetic Operations
* `if...else`
* Comparison Operators
* Logical Operators (`&&`, `||`)
* Template Literals
* `.innerHTML`
* `.toFixed()`

---

# 🖥️ Sample Output

### Input

```
Height = 170 cm

Weight = 65 kg
```

### Output

```
Your BMI is 22.49

You are NORMAL WEIGHT.
```

---

### Invalid Input

```
Height = abc
```

Output

```
Please enter a valid height.
```

---

### Invalid Weight

```
Weight = -50
```

Output

```
Please enter a valid weight.
```

---

# ✨ Features

* Calculates BMI instantly.
* Validates user input.
* Displays accurate BMI up to two decimal places.
* Shows weight category.
* Simple and beginner-friendly interface.
* Prevents page reload using JavaScript.
* Responsive and easy to customize.

---

# 📖 Learning Outcomes

After completing this project, you will understand:

* How HTML forms work.
* How to collect user input.
* How to validate input before processing.
* How to use JavaScript to perform calculations.
* How to manipulate HTML elements using the DOM.
* How event listeners work.
* How to display dynamic content using `.innerHTML`.
* How to build an interactive web application using HTML, CSS, and JavaScript.



# 📌 Conclusion

The **BMI Calculator** is an excellent beginner-level JavaScript project that demonstrates how to combine **HTML**, **CSS**, and **JavaScript** to create an interactive web application. It teaches essential frontend development concepts such as form handling, DOM manipulation, event handling, input validation, mathematical calculations, and dynamic content updates. This project provides a strong foundation for building more advanced web applications and improving problem-solving skills in JavaScript.
