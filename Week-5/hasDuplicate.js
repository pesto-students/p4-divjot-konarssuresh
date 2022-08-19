const hasDuplicate = (arr) => {
  const setToCompare = new Set();
  for (let el of arr) {
    if (setToCompare.has(el)) {
      return true;
    } else {
      setToCompare.add(el);
    }
  }
  return false;
};

console.log(hasDuplicate([1, 5, 2, 3, 4, 5, 6]));
