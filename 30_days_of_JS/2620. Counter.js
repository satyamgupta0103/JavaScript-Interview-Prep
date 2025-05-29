var createCounter = function (n) {
  let counter = 0;

  return function () {
    return n + counter++; //first uses value of counter and then increment its value
  };
};
