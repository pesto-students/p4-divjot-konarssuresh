// 1.What is the output of the below problem and why

function createIncrement() {
  let count = 0;
  function increment() {
    count++;
  }
  let message = `Count is ${count}`;
  function log() {
    console.log(message);
  }
  return [increment, log];
}
const [increment, log] = createIncrement();
increment();
increment();
increment();
log(); // What is logged?

// "Count is 0" . is logged because message is initialised in starting with initial value of count(0). and even though count changes message will still remain the same
