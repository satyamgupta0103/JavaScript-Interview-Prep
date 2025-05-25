# **Shallow Clone vs. Deep Clone in JavaScript**

In JavaScript, cloning objects and arrays is a common task, but it can lead to unexpected behavior if not done correctly. There are **two main types of cloning**:

1. **Shallow Clone** → Copies only top-level properties (nested objects/arrays remain referenced).
2. **Deep Clone** → Copies all nested structures recursively (fully independent copy).

---

## **1. Shallow Clone (Top-Level Copy)**

### **When to Use?**

- When you only need a **new top-level object/array** (nested data is shared).
- Faster than deep cloning.

### **How to Shallow Clone?**

#### **A. For Arrays**

1. **Spread Operator (`...`)**
   ```javascript
   const original = [1, 2, { a: 3 }];
   const shallowCopy = [...original];
   ```
2. **`Array.from()`**
   ```javascript
   const shallowCopy = Array.from(original);
   ```
3. **`slice()`**
   ```javascript
   const shallowCopy = original.slice();
   ```

#### **B. For Objects**

1. **Spread Operator (`...`)**
   ```javascript
   const original = { x: 1, y: { z: 2 } };
   const shallowCopy = { ...original };
   ```
2. **`Object.assign()`**
   ```javascript
   const shallowCopy = Object.assign({}, original);
   ```

### **Problem with Shallow Clone**

- **Nested objects/arrays are still referenced!**

  ```javascript
  const original = [{ a: 1 }];
  const shallowCopy = [...original];

  shallowCopy[0].a = 100; // Also modifies `original[0].a`!
  console.log(original); // [{ a: 100 }] 😱
  ```

---

## **2. Deep Clone (Full Independent Copy)**

### **When to Use?**

- When you need a **completely independent copy** (no shared references).
- Useful for **immutable updates** (e.g., Redux state management).

### **How to Deep Clone?**

#### **A. `JSON.parse(JSON.stringify())` (Quick & Dirty)**

✅ **Works for:** Simple objects (no functions, `Date`, `undefined`, `Infinity`, etc.).  
❌ **Fails for:**

- Circular references (`obj.self = obj`).
- Special objects (`Date`, `Map`, `Set`, etc.).

```javascript
const original = { a: 1, b: { c: 2 } };
const deepCopy = JSON.parse(JSON.stringify(original));

deepCopy.b.c = 99; // Does NOT affect `original`
console.log(original.b.c); // 2 (unchanged)
```

#### **B. `structuredClone()` (Modern & Reliable)**

✅ **Works for:** Most cases (including `Date`, `Map`, `Set`, but **not functions**).  
❌ **Fails for:**

- Functions.
- DOM elements.

```javascript
const original = { a: 1, b: new Date() };
const deepCopy = structuredClone(original);
```

#### **C. Lodash `_.cloneDeep()` (Best for Complex Objects)**

✅ **Works for:** Everything (functions, circular refs, custom classes).

```javascript
import _ from "lodash";
const original = { a: () => console.log("hi") };
const deepCopy = _.cloneDeep(original);
```

#### **D. Manual Recursive Cloning (Custom Solution)**

✅ **Use when:** You need fine-grained control.

```javascript
function deepClone(obj) {
  if (obj === null || typeof obj !== "object") return obj;
  const clone = Array.isArray(obj) ? [] : {};
  for (const key in obj) {
    clone[key] = deepClone(obj[key]);
  }
  return clone;
}
```

---

## **Comparison Table**

| Method                         | Shallow/Deep | Handles Nested Objects? | Handles Functions? | Handles Circular Refs?  |
| ------------------------------ | ------------ | ----------------------- | ------------------ | ----------------------- |
| `[...arr]` / `{...obj}`        | Shallow      | ❌ (Shared reference)   | ✅                 | ❌                      |
| `Object.assign()`              | Shallow      | ❌ (Shared reference)   | ✅                 | ❌                      |
| `JSON.parse(JSON.stringify())` | Deep         | ✅                      | ❌ (Removed)       | ❌ (Throws error)       |
| `structuredClone()`            | Deep         | ✅                      | ❌ (Removed)       | ✅                      |
| Lodash `_.cloneDeep()`         | Deep         | ✅                      | ✅                 | ✅                      |
| Custom Recursive Function      | Deep         | ✅                      | ✅                 | ✅ (With modifications) |

---

## **Key Takeaways**

1. **Use shallow clone** when:
   - You only need a new top-level object/array.
   - Performance matters (faster than deep cloning).
2. **Use deep clone** when:
   - You need a **fully independent copy** (e.g., Redux state updates).
   - The object contains nested structures.
3. **Best methods:**
   - For simple objects → `structuredClone()` (modern JS).
   - For complex objects → Lodash `_.cloneDeep()`.
   - For quick JSON-safe objects → `JSON.parse(JSON.stringify())`.

---

### **Final Note**

- **Avoid `JSON.parse(JSON.stringify())`** if your object has `Date`, `undefined`, or functions.
- **Prefer `structuredClone()`** for modern browsers (Node.js ≥17).
- **Use Lodash for edge cases** (functions, circular refs).

Would you like a deep dive into circular reference handling? 🚀
