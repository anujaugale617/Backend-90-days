
# Numbers

### Create Number

```javascript
const score = 400;
const balance = new Number(100);
```

* `400` → Normal number
* `new Number(100)` → Number object

---

### `toString()`

Converts **Number → String**

```javascript
let num = 100;
num.toString();   // "100"
```

---

### `length`

Returns the number of characters in a string.

```javascript
(100).toString().length   // 3
```

---

### `toFixed(n)`

Shows fixed decimal places.

```javascript
100.toFixed(2);    // "100.00"
```

---

### `toPrecision(n)`

Returns a number with **n significant digits**.

```javascript
123.89.toPrecision(3);   // "124"
```

---

### `toLocaleString()`

Formats numbers based on country.

```javascript
1000000.toLocaleString('en-IN'); // 10,00,000
```

---

# Math Object

`Math` is a built-in object used for mathematical operations.

---

### `Math.abs()`

Returns positive value.

```javascript
Math.abs(-5);   // 5
```

---

### `Math.round()`

Rounds to the nearest integer.

```javascript
Math.round(5.6);   // 6
```

---

### `Math.ceil()`

Always rounds **up**.

```javascript
Math.ceil(4.1);   // 5
```

---

### `Math.floor()`

Always rounds **down**.

```javascript
Math.floor(4.9);   // 4
```

---

### `Math.min()`

Returns the smallest number.

```javascript
Math.min(3,5,1);   // 1
```

---

### `Math.max()`

Returns the largest number.

```javascript
Math.max(3,5,1);   // 5
```

---

### `Math.random()`

Returns a random number between **0 and 1**.

```javascript
Math.random();
```

---

### Random Number (1–10)

```javascript
Math.floor(Math.random() * 10) + 1;
```

---

### Random Number (Min–Max)

```javascript
Math.floor(Math.random() * (max - min + 1)) + min;
```

---

# One-Line Revision

* `toString()` → Number ➜ String
* `length` → Counts characters
* `toFixed()` → Fixed decimal places
* `toPrecision()` → Significant digits
* `toLocaleString()` → Country-wise number format
* `Math.abs()` → Positive value
* `Math.round()` → Nearest integer
* `Math.ceil()` → Always up
* `Math.floor()` → Always down
* `Math.min()` → Smallest value
* `Math.max()` → Largest value
* `Math.random()` → Random number (0–1)
