const hasDuplicate = (arr) => {
  const setToCompare = new Set(arr);
  return setToCompare.size !== arr.length;
};

console.log(hasDuplicate([1, 5, 2, 3, 4, 5, 6]));
