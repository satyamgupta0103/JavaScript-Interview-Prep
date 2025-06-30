## Arrow functions

Arrow functions were introduced in the ES6 version of javascript. They provide us with a new and shorter syntax for declaring functions. Arrow functions can only be used as a function expression.

Arrow functions are declared without the function keyword. If there is only one returning expression then we don’t need to use the return keyword as well in an arrow function.

## Example

var obj1 = {
valueOfThis: function(){
return this;
}
}
var obj2 = {
valueOfThis: ()=>{
return this;
}
}

obj1.valueOfThis(); // Will return the object obj1
obj2.valueOfThis(); // Will return window/global object

## Diff btw arrow vs normal fn.

The biggest difference between the traditional function expression and the arrow function is the handling of this keyword. By general definition, this keyword always refers to the object that is calling the function. As you can see in the code above, obj1.valueOfThis() returns obj1 since this keyword refers to the object calling the function.

In the arrow functions, there is no binding of this keyword. This keyword inside an arrow function does not refer to the object calling it. It rather inherits its value from the parent scope which is the window object in this case. Therefore, in the code above, obj2.valueOfThis() returns the window object.

Great question — and it’s very important! Let’s go **deep into when NOT to use arrow functions** and why they cause issues in certain places.

---

## ❌ When **NOT** to Use Arrow Functions — with Detailed Explanations

Arrow functions don’t have their own `this`, `arguments`, or `super`, and can’t be used as constructors. So in the following use cases, they **don’t behave as expected**:

---

### **1. Object Methods**

When you're defining a method inside an object, **do NOT use arrow functions**.

#### ❌ Wrong:

```js
const person = {
  name: "Satyam",
  greet: () => {
    console.log("Hi, I'm " + this.name);
  },
};

person.greet(); // Output: Hi, I'm undefined
```

#### ✅ Correct:

```js
const person = {
  name: "Satyam",
  greet() {
    console.log("Hi, I'm " + this.name);
  },
};

person.greet(); // Output: Hi, I'm Satyam
```

> 💡 Why? Arrow functions **inherit `this` from their outer scope**, which is not the `person` object in this case — it's likely the global scope where `this.name` is undefined.

---

### **2. Constructor Functions or Classes**

Arrow functions **cannot be used as constructors**. That means you can't use them with `new`.

#### ❌ Wrong:

```js
const Person = (name) => {
  this.name = name;
};

const p = new Person("Satyam"); // TypeError: Person is not a constructor
```

#### ✅ Correct:

```js
function Person(name) {
  this.name = name;
}

const p = new Person("Satyam");
console.log(p.name); // Satyam
```

> 💡 Why? Arrow functions don’t have a `[[Construct]]` method or their own `this`, so `new` doesn’t work.

---

### **3. Event Handlers in DOM**

When attaching event handlers like `onclick`, arrow functions don’t behave correctly with `this`.

#### ❌ Wrong:

```js
document.getElementById("btn").addEventListener("click", () => {
  console.log(this); // 'this' is not the button
});
```

#### ✅ Correct:

```js
document.getElementById("btn").addEventListener("click", function () {
  console.log(this); // 'this' is the button element
});
```

> 💡 Why? In arrow functions, `this` is not the clicked DOM element — it refers to the outer lexical context (maybe `window`), which breaks event logic.

---

### **4. When You Need `arguments`**

Arrow functions **do not have the `arguments` object**, which refers to all arguments passed into a function.

#### ❌ Wrong:

```js
const sum = () => {
  console.log(arguments); // ReferenceError: arguments is not defined
};
sum(1, 2, 3);
```

#### ✅ Correct:

```js
function sum() {
  console.log(arguments); // Logs [1, 2, 3]
}
sum(1, 2, 3);
```

> 💡 Why? If you need to access all function arguments dynamically, arrow functions won’t help.

---

## 🧠 Summary – Never Use Arrow Functions When:

| Use Case                   | Why Arrow Fails                              |
| -------------------------- | -------------------------------------------- |
| Object methods             | `this` won't refer to the object             |
| Constructor functions      | Arrow functions can't be used with `new`     |
| Event handlers             | `this` won't refer to the DOM element        |
| Using `arguments` object   | Arrow functions don’t have `arguments`       |
| Using `super` (in classes) | Arrow functions don't have their own `super` |

---

## 👍 Use Arrow Functions When:

- You’re working with short callbacks (e.g., `map`, `filter`, `setTimeout`)
- You want to preserve `this` from outer scope
- You don’t need your own `this`, `arguments`, or `super`

---

Would you like real-world practice examples to try this out or maybe rewrite some buggy code together?
