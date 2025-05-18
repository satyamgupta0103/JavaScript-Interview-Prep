In JavaScript, data types are categorized into **primitive** and **non-primitive (reference)** types based on how they are stored and accessed in memory.

### **1. Primitive Data Types**

Primitive types are **immutable** (cannot be changed directly) and are stored **by value** (a copy is made when assigned or passed).

JavaScript has **7 primitive data types**:

1. **`number`** – Integers, floats, etc.
   ```js
   let age = 25;
   let price = 99.99;
   ```
2. **`string`** – Text enclosed in quotes (`''`, `""`, or `` ` ` ``).
   ```js
   let name = "Alice";
   ```
3. **`boolean`** – `true` or `false`.
   ```js
   let isActive = true;
   ```
4. **`null`** – Represents an **intentional absence** of a value.
   ```js
   let data = null;
   ```
5. **`undefined`** – A variable declared but not assigned.
   ```js
   let x;
   console.log(x); // undefined
   ```
6. **`symbol`** (ES6) – A unique and immutable value.
   ```js
   let id = Symbol("id");
   ```
7. **`bigint`** (ES2020) – For very large integers.
   ```js
   let bigNum = 12345678901234567890n;
   ```

#### **Key Points for Primitives:**

- Stored directly in the **stack memory**.
- Compared **by value** (two variables with the same value are equal).
- **Immutable** (operations return new values, don’t modify the original).

---

### **2. Non-Primitive (Reference) Data Types**

Non-primitive types are **mutable** and stored **by reference** (memory address is passed, not the actual value).

JavaScript has **3 main non-primitive types**:

1. **`object`** – Key-value pairs (includes arrays, functions, dates, etc.).
   ```js
   let person = { name: "Bob", age: 30 };
   ```
2. **`array`** (a type of object) – Ordered lists.
   ```js
   let numbers = [1, 2, 3];
   ```
3. **`function`** (a callable object) – Reusable blocks of code.
   ```js
   function greet() {
     console.log("Hello!");
   }
   ```

#### **Key Points for Non-Primitives:**

- Stored in the **heap memory**, referenced via pointers.
- Compared **by reference** (two objects with the same content are **not** equal unless they reference the same memory location).
  ```js
  let a = [1, 2];
  let b = [1, 2];
  console.log(a === b); // false (different references)
  ```
- **Mutable** (can be modified after creation).

---

### **Example: Primitive vs Non-Primitive Behavior**

```js
// Primitive (copied by value)
let x = 10;
let y = x; // y gets a copy of x's value
x = 20;
console.log(y); // 10 (unchanged)

// Non-Primitive (copied by reference)
let arr1 = [1, 2];
let arr2 = arr1; // arr2 references the same array
arr1.push(3);
console.log(arr2); // [1, 2, 3] (modified)
```

### **Summary Table**

| Feature        | Primitive Types (`number`, `string`, etc.) | Non-Primitive Types (`object`, `array`, `function`) |
| -------------- | ------------------------------------------ | --------------------------------------------------- |
| **Stored in**  | Stack (by value)                           | Heap (by reference)                                 |
| **Mutable?**   | No (immutable)                             | Yes (mutable)                                       |
| **Comparison** | By value (`5 === 5` is `true`)             | By reference (`{} === {}` is `false`)               |
| **Copied as**  | New independent value                      | Reference to the same object                        |

Understanding these differences is crucial for avoiding bugs, especially when dealing with object mutations and comparisons in JavaScript. 🚀
