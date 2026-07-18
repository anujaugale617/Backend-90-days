

### Date and Time in JavaScript

JavaScript uses the `Date` object to work with dates and times.

### Creating a Date object

JavaScript

```
let date = new Date();
console.log(date);
```

This creates a new Date object with the current date and time.

### Ways to create a date

| Code                          | Meaning                        |
| ----------------------------- | ------------------------------ |
| new Date()                    | Current date and time          |
| new Date("2026-07-18")        | Specific date                  |
| new Date(2026, 6, 18)         | Year, month, day               |
| new Date(2026, 6, 18, 10, 30) | Year, month, day, hour, minute |

Important:

In JavaScript, months are 0-based:

* `0` = January

* `1` = February

* `6` = July

* `11` = December

### Getting date and time values

| Method        | Returns             |
| ------------- | ------------------- |
| getFullYear() | Year                |
| getMonth()    | Month (0–11)        |
| getDate()     | Day of month (1–31) |
| getDay()      | Day of week (0–6)   |
| getHours()    | Hours (0–23)        |
| getMinutes()  | Minutes (0–59)      |
| getSeconds()  | Seconds (0–59)      |

JavaScript

```
let now = new Date();

console.log(now.getFullYear()); // 2026
console.log(now.getMonth());    // 6 (July)
console.log(now.getDate());     // 18
console.log(now.getDay());      // 0 = Sunday
console.log(now.getHours());    // current hour
```

### Setting date and time values

| Method        | Purpose          |
| ------------- | ---------------- |
| setFullYear() | Set year         |
| setMonth()    | Set month        |
| setDate()     | Set day of month |
| setHours()    | Set hour         |
| setMinutes()  | Set minute       |

JavaScript

```
let d = new Date();

d.setFullYear(2030);
d.setMonth(0); // January
d.setDate(1);

console.log(d);
```

### Formatting dates

| Method               | Output example           |
| -------------------- | ------------------------ |
| toDateString()       | Sat Jul 18 2026          |
| toTimeString()       | 10:30:00 GMT+0530        |
| toISOString()        | 2026-07-18T05:00:00.000Z |
| toLocaleDateString() | 18/7/2026                |
| toLocaleTimeString() | 10:30:00 AM              |

JavaScript

```
let now = new Date();

console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleDateString());
console.log(now.toLocaleTimeString());
```

### Timestamps

A timestamp is the number of milliseconds since 1 January 1970.

JavaScript

```
let now = new Date();

console.log(now.getTime()); // timestamp
console.log(Date.now());    // current timestamp
```

### Date calculations

JavaScript

```
let d1 = new Date("2026-07-18");
let d2 = new Date("2026-07-20");

let diff = d2 - d1; // milliseconds
let days = diff / (1000 * 60 * 60 * 24);

console.log(days); // 2
```

Formula for converting milliseconds to days:

days=milliseconds/(1000×60×60×24)days = milliseconds / (1000 \times 60 \times 60 \times 24)days=milliseconds/(1000×60×60×24)

### Quick revision

* `new Date()` creates the current date and time.

* Months are 0-based in JavaScript.

* `getFullYear()`, `getMonth()`, and `getDate()` are commonly used methods.

* `toLocaleDateString()` and `toLocaleTimeString()` make dates easier to read.

* `Date.now()` gives the current timestamp.


Based on your code, here are **short, simple, and easy-to-revise notes** covering all the object concepts you studied.

---

# JavaScript Objects 

## 1. Object

An **object** stores data in **key : value** format.

```javascript
const user = {
    name: "Ram",
    age: 19
};
```

* `name` → Key
* `"Ram"` → Value

---

# 2. Access Object Properties

### Dot Notation

```javascript
user.name
```

Output

```text
Ram
```

### Bracket Notation

```javascript
user["name"]
```

Output

```text
Ram
```

👉 Use `[]` when:

* Key contains spaces
* Using Symbol as key

Example

```javascript
user["Fullname"]
```

---

# 3. Symbol as Object Key

A **Symbol** creates a **unique key**.

```javascript
const mySymbol = Symbol("KEY1");

const user = {
    [mySymbol]: "KEY1"
};
```

Access

```javascript
user[mySymbol]
```

**Important**

❌ Wrong

```javascript
user.mySymbol
```

✅ Correct

```javascript
user[mySymbol]
```

---

# 4. Update Object Property

```javascript
user.email = "ram@chatgpt.com";
```

Updates the value.

---

# 5. Object.freeze()

Prevents changes to an object.

```javascript
Object.freeze(user);
```

After freezing,

❌ Cannot add property

❌ Cannot update property

❌ Cannot delete property

---

# 6. Empty Object

Create an empty object.

```javascript
const tinderUser = {};
```

Then add properties.

```javascript
tinderUser.id = "123abc";
tinderUser.email = "user@gmail.com";
```

---

# 7. Nested Object

An object inside another object.

```javascript
const regularUser = {
    Fullname: {
        username: {
            Firstname: "Radha"
        }
    }
};
```

Access

```javascript
regularUser.Fullname
```

```javascript
regularUser.Fullname.username
```

```javascript
regularUser.Fullname.username.Firstname
```

Output

```text
Radha
```

---

# 8. Merge Objects

### Using Object.assign()

```javascript
const obj3 = Object.assign({}, obj1, obj2);
```

---

### Using Spread Operator (Modern Way)

```javascript
const obj3 = {
    ...obj1,
    ...obj2
};
```

Output

```javascript
{
 1: "a",
 2: "b",
 3: "a",
 4: "b"
}
```

---

# 9. Object.keys()

Returns all keys.

```javascript
Object.keys(tinderUser)
```

Output

```javascript
["id","email","islogged"]
```

---

# 10. Object.values()

Returns all values.

```javascript
Object.values(tinderUser)
```

Output

```javascript
["123abc","user@gmail.com",false]
```

---

# 11. Object.entries()

Returns key-value pairs as arrays.

```javascript
Object.entries(tinderUser)
```

Output

```javascript
[
 ["id","123abc"],
 ["email","user@gmail.com"],
 ["islogged",false]
]
```

---

# 12. typeof Symbol Value

```javascript
console.log(typeof user[mySymbol]);
```

Output

```text
string
```

Because `"KEY1"` is a **string value**.

If you check the symbol itself:

```javascript
typeof mySymbol
```

Output

```text
symbol
```

---

# ⭐ Quick Revision

| Topic              | Meaning                              |
| ------------------ | ------------------------------------ |
| `{}`               | Create object                        |
| `.`                | Access property                      |
| `[]`               | Access property with space or Symbol |
| `Symbol()`         | Creates a unique key                 |
| `Object.freeze()`  | Locks the object                     |
| Nested Object      | Object inside object                 |
| `Object.assign()`  | Merge objects                        |
| `...`              | Spread operator to merge objects     |
| `Object.keys()`    | Returns all keys                     |
| `Object.values()`  | Returns all values                   |
| `Object.entries()` | Returns key-value pairs              |

