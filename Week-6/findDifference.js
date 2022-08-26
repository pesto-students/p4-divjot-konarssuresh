// time Complexity - o(n square)  space Complexity - o(1)
const pairWithDifference = (array, difference) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (i !== j) {
        const diff = array[i] - array[j];
        if (diff === difference || diff * -1 === difference) {
          return 1;
        }
      }
    }
  }
  return 0;
};

// time complexity - o(n) space complexity o(n)
const pairWithDifference1 = (array, target) => {
  const s = new Set();
  for (let num of array) {
    const possibleNumber = target + num;
    const otherPossibleNumber = -target + num;
    if (s.has(num)) {
      return 1;
    } else {
      s.add(possibleNumber);
      s.add(otherPossibleNumber);
    }
  }
  return 0;
};
console.log(pairWithDifference1([-10, 20], 30));
