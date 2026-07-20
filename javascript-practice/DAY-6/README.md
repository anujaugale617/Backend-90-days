
# JavaScript DOM (Document Object Model)

## 1. What is DOM?

* DOM stands for **Document Object Model**.
* It allows JavaScript to **access, change, and control HTML elements**.
* With DOM, we can:

  * Select elements
  * Change text
  * Change CSS styles
  * Add or remove elements
  * Change attributes

---

# 2. Selecting Elements

### A. getElementById()

Used to select an element using its **id**.

```javascript
const title = document.getElementById("title");
```

Example:

```html
<h1 id="title">DOM Learning</h1>
```

---

### B. getElementsByClassName()

Selects elements using **class name**.

```javascript
document.getElementsByClassName("heading");
```

Returns **HTMLCollection**.

---

### C. querySelector()

Selects the **first matching element**.

```javascript
document.querySelector("h1");
```

Using ID

```javascript
document.querySelector("#title");
```

Using Class

```javascript
document.querySelector(".heading");
```

---

### D. querySelectorAll()

Selects **all matching elements**.

```javascript
document.querySelectorAll("li");
```

Returns **NodeList**.

---

# 3. Accessing Element Properties

After selecting an element:

```javascript
const title = document.getElementById("title");
```

### Get ID

```javascript
title.id
```

### Get Class Name

```javascript
title.className
```

---

# 4. Getting Attributes

```javascript
title.getAttribute("id");
```

```javascript
title.getAttribute("class");
```

Returns the attribute value.

---

# 5. Setting Attributes

```javascript
title.setAttribute("class","test");
```

Changes the class.

Multiple classes:

```javascript
title.setAttribute("class","heading test");
```

**Note:** `setAttribute()` replaces the old value if not included.

---

# 6. Changing CSS Style

```javascript
title.style.backgroundColor = "green";
```

Other styles:

```javascript
title.style.color = "white";
title.style.padding = "15px";
title.style.borderRadius = "10px";
```

---

# 7. Getting Text

### textContent

Returns **all text**, including hidden text.

```javascript
title.textContent;
```

---

### innerText

Returns **only visible text**.

```javascript
title.innerText;
```

---

### innerHTML

Returns **HTML code with tags**.

```javascript
title.innerHTML;
```

Example

```html
<h1>Hello <span>World</span></h1>
```

`innerHTML` returns

```html
Hello <span>World</span>
```

---

# Difference

| Property    | Returns                     |
| ----------- | --------------------------- |
| textContent | All text (visible + hidden) |
| innerText   | Only visible text           |
| innerHTML   | Text + HTML tags            |

---

# 8. CSS Selectors with querySelector()

```javascript
document.querySelector("#title");
```

Select by ID

```javascript
document.querySelector(".heading");
```

Select by class

```javascript
document.querySelector("input[type='password']");
```

Select by attribute

---

# 9. Working with Lists

Example

```html
<ul>
   <li>One</li>
   <li>Two</li>
   <li>Three</li>
</ul>
```

Select first item

```javascript
const item = document.querySelector("li");
```

Change style

```javascript
item.style.backgroundColor = "green";
```

Change text

```javascript
item.innerText = "Five";
```

---

# 10. NodeList

Returned by

```javascript
document.querySelectorAll()
```

Example

```javascript
const items = document.querySelectorAll("li");
```

Loop using

```javascript
items.forEach(function(item){
    item.style.color = "red";
});
```

---

# 11. HTMLCollection

Returned by

```javascript
document.getElementsByClassName()
```

Cannot directly use

```javascript
forEach()
```

Convert into Array

```javascript
const arr = Array.from(htmlCollection);
```

Now use

```javascript
arr.forEach(function(item){
    item.style.color = "orange";
});
```

---

# 12. NodeList vs HTMLCollection

| NodeList                         | HTMLCollection                         |
| -------------------------------- | -------------------------------------- |
| Returned by `querySelectorAll()` | Returned by `getElementsByClassName()` |
| Supports `forEach()`             | Does not support `forEach()` directly  |
| Easy to loop                     | Convert to Array first                 |

---

# 13. Useful DOM Methods

```javascript
document.getElementById()
```

```javascript
document.getElementsByClassName()
```

```javascript
document.querySelector()
```

```javascript
document.querySelectorAll()
```

```javascript
getAttribute()
```

```javascript
setAttribute()
```

```javascript
textContent
```

```javascript
innerText
```

```javascript
innerHTML
```

```javascript
style
```

---

# Quick Revision 

* DOM = Control HTML using JavaScript.
* `getElementById()` → Select by ID.
* `getElementsByClassName()` → Returns HTMLCollection.
* `querySelector()` → First matching element.
* `querySelectorAll()` → Returns NodeList.
* `getAttribute()` → Read attribute.
* `setAttribute()` → Change attribute.
* `style` → Change CSS.
* `textContent` → All text.
* `innerText` → Visible text.
* `innerHTML` → HTML with tags.
* NodeList → `forEach()` works.
* HTMLCollection → Convert using `Array.from()` before looping.

