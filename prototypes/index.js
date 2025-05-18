let arr = ["Satyam", "Sumit"];

let object = {
  name: "Satyam",
  city: "Delhi",
  getIntro: function () {
    console.log(this.name + "from" + this.city);
  },
};

let object2 = {
  name: "Sumit",
};

//Never do this
object2.__proto__ = object;

function fun() {
  //
}

//arr.__proto__ : this is the object where js engine is putting all these functions and methods.
//arr.__proto__ = Array.prototype, arr.__proto__.__proto__ = Object.prototype
//array.__proto__.__proto__.__proto__ = null

//object.__proto__ = Object.prototype, object.__proto__.__proto__ = null

//fun.__proto__ = Function.prototype, fun.__proto__.__proto__ = Object.prototype, fun.__proto__.__proto__.__proto__ = null

//down the line everything in js is an object

//Note: diff btw __proto__ and prototype => __proto__ is attached on objects and prototype is attached on base class

class Student {
  constructor() {}

  getName() {
    return "I am inside getName";
  }
}

const s1 = new Student();

const s2 = { __proto__: Student.prototype };

const p1 = {
  xp1: "I am inside P1",
};

const p2 = {
  xp2: "I am inside P2",
  __proto__: p1,
};

const p3 = {
  xp3: "I am inside P3",
  __proto__: p2,
};

// p3.xp1
// 'I am inside P1'
// p1.xp1
// 'I am inside P1'
// p1.__proto__
// {__defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, __lookupSetter__: ƒ, …}
// p1.__proto__.__proto__
// null
// Object.prototype
// {__defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, __lookupSetter__: ƒ, …}
// p3.__proto__
// {xp2: 'I am inside P2'}
// p3.__proto__.__proto__
// {xp1: 'I am inside P1'}
// p3.__proto__.__proto__.__proto__
// {__defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, __lookupSetter__: ƒ, …}
// p3.__proto__.__proto__.__proto__.__proto__
// null
