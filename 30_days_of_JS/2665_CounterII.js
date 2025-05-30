var createCounter = function (init) {
  let originalValue = init;

  return {
    increment() {
      return ++init;
    },
    decrement() {
      return --init;
    },
    reset() {
      init = originalValue;
      return originalValue;
    },
  };
};
