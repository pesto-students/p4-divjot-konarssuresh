function Stack() {
  const stack = [];

  this.push = function (value) {
    stack.push(value);
  };

  this.pop = function () {
    if (stack.length === 0) {
      return;
    } else {
      return stack.pop();
    }
  };

  this.peek = function () {
    if (stack.length === 0) {
      return;
    } else return stack[stack.length - 1];
  };
}

export {Stack};
