// Problem Description Given a matrix of m * n elements (m rows, n columns),
// return allelements of the matrix in spiral order.
// Example: Given the following matrix: [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ] You should return[1, 2, 3, 6, 9, 8, 7, 4, 5]

// time complexity o(m*n) - space complexity o(n)
const spiralArr = (matrix) => {
  let right = matrix[0].length;
  let bottom = matrix.length;
  let left = 0;

  let top = 0;

  const result = [];
  while (left < right && top <= bottom) {
    for (let i = left; i < right; i++) {
      result.push(matrix[top][i]);
    }
    top++;
    if (top === bottom) {
      break;
    }

    for (let i = top; i < bottom; i++) {
      result.push(matrix[i][right - 1]);
    }
    right--;
    if (left === right) {
      break;
    }
    for (let i = right - 1; i >= left; i--) {
      result.push(matrix[bottom - 1][i]);
    }
    bottom--;
    if (top === bottom) {
      break;
    }
    for (let i = bottom - 1; i >= top; i--) {
      result.push(matrix[i][left]);
    }
    left++;
    if (left === right) {
      break;
    }
  }
  return result;
};

console.log(spiralArr([[1], [2], [3], [4]]));
