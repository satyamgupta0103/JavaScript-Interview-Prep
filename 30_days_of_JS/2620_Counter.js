var createCounter = function (n) {
  let counter = 0;

  return function () {
    //Post-increment : first uses value of counter and then increment its value
    return n + counter++;
  };
};
