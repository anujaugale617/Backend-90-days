
# JavaScript DOM Notes 

## 1. What is DOM?

* DOM stands for **Document Object Model**.
* It represents an HTML page as a **tree structure**.
* Every HTML element is a **node** in this tree.
* JavaScript uses the DOM to access and change web pages dynamically. 

---

# 2. Parent and Child Relationship

Example:

```html
<div class="parent">
    <div>Monday</div>
    <div>Tuesday</div>
    <div>Wednesday</div>
    <div>Thursday</div>
</div>
```

Here,

* `div.parent` → Parent Element
* Monday, Tuesday, Wednesday, Thursday → Child Elements

---

# 3. Selecting Parent Element

```javascript
const parent = document.querySelector(".parent");
```

* Selects the parent element.
* Stores it in a variable.

---

# 4. children Property

```javascript
parent.children
```

* Returns all child elements.
* Output type is **HTMLCollection**.
* You can check the number of children using:

```javascript
parent.children.length
```

Example Output:

```
4
```

---

# 5. Access Child Elements

Access using index.

```javascript
parent.children[0]
```

Returns

```
Monday
```

Get text:

```javascript
parent.children[0].innerHTML
```

Output

```
Monday
```

---

# 6. Loop Through Children

```javascript
for(let i=0;i<parent.children.length;i++){
    console.log(parent.children[i].innerHTML);
}
```

Output

```
Monday
Tuesday
Wednesday
Thursday
```

---

# 7. Change Style of Child

```javascript
parent.children[0].style.color = "orange";
```

Changes text color of the first child.

---

# 8. First and Last Child

First child

```javascript
parent.firstElementChild
```

Last child

```javascript
parent.lastElementChild
```

Useful for directly accessing first or last elements.

---

# 9. Move from Child to Parent

```javascript
const dayOne = document.querySelector(".day");

console.log(dayOne.parentElement);
```

Returns the parent element.

---

# 10. Next Sibling

```javascript
dayOne.nextElementSibling
```

Returns the next element.

Example

```
Monday → Tuesday
```

---

# 11. childNodes Property

```javascript
parent.childNodes
```

Returns **NodeList**.

It includes:

* Elements
* Text nodes
* Line breaks
* Spaces
* Comments

Unlike `children`, it does **not return only HTML elements**. 

---

# 12. HTMLCollection vs NodeList

| HTMLCollection         | NodeList                   |
| ---------------------- | -------------------------- |
| Only HTML elements     | Elements + Text + Comments |
| Returned by `children` | Returned by `childNodes`   |

---

# 13. Create New Element

```javascript
const div = document.createElement("div");
```

Creates a new `<div>` element.

---

# 14. Add Class

```javascript
div.className = "box";
```

Adds a class.

---

# 15. Add ID

```javascript
div.id = "myId";
```

Adds an ID.

Random ID example:

```javascript
div.id = Math.round(Math.random()*10+1);
```

---

# 16. Add Attribute

```javascript
div.setAttribute("title","Generated Title");
```

Adds a custom attribute.

---

# 17. Add CSS Style

```javascript
div.style.backgroundColor = "green";
div.style.padding = "12px";
```

Adds CSS using JavaScript.

---

# 18. Add Text

Method 1

```javascript
div.innerText = "Chai Aur Code";
```

Method 2 (Preferred)

```javascript
const text = document.createTextNode("Chai Aur Code");
div.appendChild(text);
```

Creates a text node and attaches it to the element. 

---

# 19. Add Element to Web Page

```javascript
document.body.appendChild(div);
```

Adds the created element to the webpage.

Without `appendChild()`, the element stays only in memory.

---

# Important DOM Methods

| Method               | Purpose                       |
| -------------------- | ----------------------------- |
| `querySelector()`    | Select first matching element |
| `children`           | Get child elements            |
| `childNodes`         | Get all nodes                 |
| `firstElementChild`  | First child                   |
| `lastElementChild`   | Last child                    |
| `parentElement`      | Parent element                |
| `nextElementSibling` | Next sibling                  |
| `createElement()`    | Create HTML element           |
| `createTextNode()`   | Create text node              |
| `appendChild()`      | Add element to page           |
| `setAttribute()`     | Add attribute                 |

---

# Interview Points

* DOM is a **tree structure**.
* Every HTML element is a **Node**.
* `children` returns **HTMLCollection**.
* `childNodes` returns **NodeList**.
* `firstElementChild` gets the first child.
* `parentElement` gets the parent.
* `nextElementSibling` gets the next sibling.
* `createElement()` creates a new HTML element.
* `appendChild()` inserts an element into the page.
* `setAttribute()` adds custom attributes.

---

# Quick Revision 

* DOM = HTML Tree
* Parent → Child → Sibling
* `querySelector()` → Select element
* `children` → HTMLCollection
* `childNodes` → NodeList
* `parentElement` → Parent
* `nextElementSibling` → Next element
* `createElement()` → Create new element
* `createTextNode()` → Create text
* `appendChild()` → Add to webpage
* `setAttribute()` → Add attributes
* `style` → Change CSS

