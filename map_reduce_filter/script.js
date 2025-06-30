const nums = [1, 2, 3, 4, 5];

//return completely new error
const multiplyThree = nums.map((num, i, nums) => {
  return num * 3;
});

console.log(multiplyThree);

const moreThanTwo = nums.filter((num, i, nums) => {
  return num > 2;
});

console.log(moreThanTwo);

const sum = nums.reduce((acc, curr, i, nums) => {
  return acc + curr;
}, 0);

console.log(sum);

//pollyfill for map

Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }

  return temp;
};

const multiplyThre = nums.map((num, i, nums) => {
  return num * 3;
});

console.log(multiplyThre);

//pollyfill for filter
Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(this[i]);
    }
  }
  return temp;
};

const moreThan2 = nums.myFilter((num, i, nums) => {
  return num > 2;
});

console.log(moreThan2);

//pollyfills for reduce
Array.prototype.myReduce = function (cb, initialValue) {
  var accumulator = initialValue;

  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }

  return accumulator;
};

const sumof = nums.myReduce((acc, curr, i, nums) => {
  return acc + curr;
}, 0);

console.log(sumof);
