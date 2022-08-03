//  Create 3 simple functions where call, bind and apply are used.
// The intention of this exercise isto understand how they work and their differences.

// bind -  bind creates seperate function where the context is permanently bould to different value
const objToTestBind = {
  x: 42,
  getX: function () {
    return this.x;
  },
};
const func = objToTestBind.getX;
console.log(func()); //undefined

const bindedFunc = func.bind(objToTestBind);
console.log(bindedFunc()); //42
//added this to show that once binded value cannot change
const anotherBindedFunc = bindedFunc.bind({x: "abc"});
console.log(func.bind(objToTestBind)()); //42

// call - it calls the function with different value of "this/object" and sets of arguments passed initially
function testCall(name) {
  console.log([name, this.key, "has value of", this.value].join(" "));
}

const callObj = {key: "testKey", value: "testValue"};

testCall.call(callObj, "Suresh");

// apply -  it is similar to call but just that it accepts arguments as array and it passes it as positional arguments to function
// we can use it where we dont know the number of parameters
const findMax = function (numbers = []) {
  console.log(Math.max.apply(null, numbers));
};

findMax([10, 60, 99, 22]);
