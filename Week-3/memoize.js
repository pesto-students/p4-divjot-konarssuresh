// Create a memoize function that remembers previous inputs and stores them in cache so that itwon’t have to
// compute the same inputs more than once. The function will take an
// unspecified number of integer inputs and a reducer method.

const memoize = (funcToMemoize) => {
  const storedValues = {};

  const prepareKeys = (params) => {
    let paramsString = "";
    params.forEach((param) => {
      paramsString = `${paramsString}_${param}`;
    });
    return paramsString;
  };

  return (...params) => {
    const keyToCheck = prepareKeys(params);
    if (storedValues?.[keyToCheck]) {
      return storedValues?.[keyToCheck];
    } else {
      const valueToStore = funcToMemoize(...params);
      storedValues[keyToCheck] = valueToStore;
      return valueToStore;
    }
  };
};

const add = (a, b) => {
  console.log("executing add function");
  return a + b;
};

const subtract = (a, b) => {
  console.log("executing subtract function");
  return a - b;
};

const memoizedAdd = memoize(add);
const memoizedSubtract = memoize(subtract);

console.log(memoizedAdd(2, 1));
console.log(memoizedAdd(3, 4));
console.log(memoizedAdd(2, 1));
console.log(memoizedAdd(3, 4));

console.log(memoizedSubtract(2, 1));
console.log(memoizedSubtract(2, 1));
