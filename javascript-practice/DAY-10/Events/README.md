
# JavaScript Events

## What is an Event?

An **event** is an action that happens on a webpage.

Events can be performed by the **user** or the **browser**.

### Examples

* Clicking a button
* Clicking an image
* Typing in a textbox
* Pressing a keyboard key
* Moving the mouse
* Scrolling the page
* Loading a webpage

JavaScript listens for these events and performs a task when they occur.

---

# Ways to Handle Events

## 1. Using `onclick`

```javascript
document.getElementById('owl').onclick = function(){
    alert("owl clicked")
}
```

### Explanation

* Finds the image with id **owl**.
* When the user clicks the image,
* An alert box appears saying **"owl clicked"**.

### Drawback

Only one `onclick` function can be attached at a time.

---

## 2. Using `addEventListener()` (Recommended)

Syntax

```javascript
element.addEventListener("event", function(){
    // code
})
```

Example

```javascript
document.getElementById('owl').addEventListener('click', function(){
    console.log("owl clicked");
})
```

### Advantages

* Can add multiple events to the same element.
* More flexible.
* Mostly used in modern JavaScript.

---

# Event Object (`e`)

Whenever an event happens, JavaScript creates an **Event Object**.

Example

```javascript
function(e){
    console.log(e);
}
```

The variable `e` contains information about the event.

---

# Important Event Properties

## 1. `e.target`

Returns the element that was actually clicked.

Example

```javascript
console.log(e.target);
```

If you click the owl image,

```
<img id="owl">
```

is returned.

---

## 2. `e.target.id`

Returns the id of the clicked element.

Example

```javascript
console.log(e.target.id);
```

Output

```
owl
```

---

## 3. `e.target.tagName`

Returns the HTML tag name.

Example

```javascript
console.log(e.target.tagName);
```

Possible outputs

```
IMG
LI
A
```

---

## 4. `e.currentTarget`

Returns the element where the event listener is attached.

Example

If the listener is attached to

```javascript
<ul id="images">
```

then

```javascript
e.currentTarget
```

returns

```
UL
```

---

## 5. Mouse Position

```javascript
e.clientX
e.clientY
```

Returns the mouse position inside the browser.

---

## 6. Keyboard Keys

```javascript
e.keyCode
```

Returns the key pressed.

Example

```
Enter
Space
A
```

---

# Event Bubbling

By default, events move **from child to parent**.

Example

```
IMG
 ↓
LI
 ↓
UL
 ↓
BODY
 ↓
HTML
```

This is called **Event Bubbling**.

---

### Code

```javascript
document.getElementById('images').addEventListener('click', function(){
    console.log("clicked inside ul");
})

document.getElementById('owl').addEventListener('click', function(){
    console.log("owl clicked");
})
```

When clicking the owl image, output is

```
owl clicked
clicked inside ul
```

Because the event bubbles upward.

---

# `stopPropagation()`

Stops the event from moving to parent elements.

Example

```javascript
document.getElementById('owl').addEventListener('click', function(e){
    console.log("owl clicked");
    e.stopPropagation();
})
```

Now clicking owl prints only

```
owl clicked
```

The UL event does not run.

---

# `preventDefault()`

Stops the browser's default action.

Example

```javascript
document.getElementById('google').addEventListener('click', function(e){
    e.preventDefault();
});
```

Normally,

```
<a href="https://google.com">
```

opens Google.

After using

```javascript
e.preventDefault();
```

Google does **not** open.

Instead,

```
google clicked
```

is printed in the console.

---

# Removing an Image

The main part of your code

```javascript
document.querySelector('#images').addEventListener('click', function(e){
```

Adds one event listener to the entire `<ul>`.

---

## Step 1

```javascript
console.log(e.target.tagName);
```

Checks which element was clicked.

Example

```
IMG
```

---

## Step 2

```javascript
if(e.target.tagName === 'IMG')
```

Runs the code only if an image is clicked.

This prevents accidental deletion when clicking empty space or the list.

---

## Step 3

```javascript
console.log(e.target.id);
```

Prints the clicked image id.

Example

```
owl
```

or

```
river
```

---

## Step 4

```javascript
let removeIt = e.target.parentNode;
```

`e.target`

↓

```
IMG
```

`parentNode`

↓

```
LI
```

Since the image is inside `<li>`, the `<li>` element is selected.

---

## Step 5

```javascript
removeIt.remove();
```

Removes the entire `<li>`.

The clicked image disappears from the webpage.

---

# Another Way to Remove

```javascript
removeIt.parentNode.removeChild(removeIt);
```

This is the older method.

### Working

```
UL
 ├── LI
      └── IMG
```

`removeChild()` tells the parent (`UL`) to remove its child (`LI`).

---

# Event Delegation

Your code uses **Event Delegation**.

Instead of adding an event listener to every image,

```javascript
document.getElementById('owl')
document.getElementById('river')
document.getElementById('japan')
```

you add **one event listener** to the parent `<ul>`.

```javascript
document.querySelector('#images')
```

When any image is clicked, the event reaches the parent, and JavaScript checks which image was clicked using:

```javascript
e.target
```

### Advantages

* Less code.
* Better performance.
* Easy to handle dynamically added elements.
* Easier to maintain.

---

# Important Terms Used

| Term                | Meaning                                    |
| ------------------- | ------------------------------------------ |
| Event               | User or browser action                     |
| Event Listener      | Waits for an event                         |
| Event Object (`e`)  | Contains event information                 |
| `e.target`          | Clicked element                            |
| `e.currentTarget`   | Element with the listener                  |
| `preventDefault()`  | Stops the browser's default action         |
| `stopPropagation()` | Stops event bubbling                       |
| Event Bubbling      | Event moves from child to parent           |
| Event Delegation    | One parent handles events for its children |
| `parentNode`        | Parent HTML element                        |
| `remove()`          | Removes an element                         |

---

# Output of Your Program

When the page loads:

* Five images and one Google link are displayed.

When an image is clicked:

1. The clicked image's tag name (`IMG`) is logged.
2. The image ID is logged (e.g., `owl`, `river`).
3. The image's parent `<li>` is removed.
4. The image disappears from the page.

When the Google link is clicked (with the `preventDefault()` code enabled):

* The browser does **not** open Google.
* `"google clicked"` is shown in the console.


