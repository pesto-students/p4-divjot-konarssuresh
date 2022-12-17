// Refactor the above stack implementation, using the concept of closure, such that there is noway to access items array outside of createStack() function scope:

function createStack() {
  // Write your code here...
  const items = [];
  return {
    push: (item) => {
      items.push(item);
    },
    pop: () => {
      return items.pop();
    },
    getItems: () => {
      return [...items];
    },
  };
}

console.log("stack1");
const stack = createStack();
stack.push(10);
stack.push(5);
console.log(stack.pop()); // => 5
console.log(stack.items); // => undefined
console.log(stack.getItems());

console.log("stack2");
const stack2 = createStack();
stack2.push(20);
stack2.push(50);
console.log(stack2.pop()); // => 50
console.log(stack2.items); // => undefined
console.log(stack2.getItems());
