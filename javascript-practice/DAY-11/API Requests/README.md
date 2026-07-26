
# JavaScript Notes – API Requests (XMLHttpRequest)

## 1. What is an API?

* **API (Application Programming Interface)** is a way for two applications or systems to communicate.
* It allows the frontend to request data from the backend.
* APIs usually send data in **JSON format**. 

---

## 2. API Response and JSON

* Most APIs return data as **JSON (JavaScript Object Notation)**.
* JSON contains objects and arrays.
* Use **dot notation** (`data.name`) or **array indexing** (`data.results[0]`) to access values.
* JSON Formatter tools help make large JSON data easy to read. 

---

## 3. XMLHttpRequest (XHR)

* `XMLHttpRequest` is the **old way** of making API requests in JavaScript.
* It was widely used before the **Fetch API**.
* It is still useful to understand because many older projects use it. 

Example:

```javascript
const xhr = new XMLHttpRequest();
```

---

## 4. Making an API Request

Two important methods:

* `open()` → Prepares the request.
* `send()` → Sends the request to the server.

Example:

```javascript
xhr.open("GET", url);
xhr.send();
```



---

## 5. ReadyState

`readyState` shows the current status of the request.

| State | Meaning                 |
| ----- | ----------------------- |
| 0     | Request not initialized |
| 1     | Connection opened       |
| 2     | Request received        |
| 3     | Loading response        |
| 4     | Request completed       |

When `readyState == 4`, the response is ready. 

---

## 6. onreadystatechange

* This event runs whenever the request state changes.
* It is used to check when the response is fully received.

Example:

```javascript
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        console.log(xhr.responseText);
    }
};
```



---

## 7. JSON.parse()

* API responses are usually received as **strings**.
* `JSON.parse()` converts the string into a JavaScript object.

Example:

```javascript
const data = JSON.parse(xhr.responseText);
```

Now you can access:

```javascript
data.followers
```



---

# Console in JavaScript

* `console.log()` is mainly used for **debugging** and checking program output.
* It is **not a core JavaScript feature**.
* It is provided by the **browser** or **Node.js runtime**. 

---

## V8 Engine

* Google Chrome uses the **V8 JavaScript Engine**.
* V8 is written in **C++**.
* It executes JavaScript code and provides features like `console.log()`. 



# Quick Revision

* API connects two applications.
* API data is mostly in **JSON** format.
* Use **JSON Formatter** to understand JSON structure.
* `XMLHttpRequest` is the old method for API calls.
* `open()` prepares the request.
* `send()` sends the request.
* `readyState = 4` means the response is complete.
* `responseText` returns data as a string.
* `JSON.parse()` converts JSON string into an object.
* `console.log()` is used for debugging.
* V8 Engine runs JavaScript in Chrome.
