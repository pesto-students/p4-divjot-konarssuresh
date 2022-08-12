const resolveFunc = function (value) {
  if (this.state === "pending") {
    this.value = value;
    this.state = "fullfilled";
  }
};

const rejectFunc = function (value) {
  if (this.state === "pending") {
    this.value = value;
    this.state = "rejected";
  }
};

function MyPromise(moderator) {
  this.state = "pending";
  this.value = undefined;
  this.resolve = resolveFunc.bind(this);
  this.reject = rejectFunc.bind(this);
  moderator(this.resolve, this.reject);
}

const getNumber = () => {
  const n = Math.floor(Math.random() * 10);
  console.log(n);
  const p = new MyPromise((resolve, reject) => {
    if (n % 5 !== 0) {
      resolve("number is divisible by 5");
    } else {
      reject("number is not divisible by 5");
    }
  });
};

getNumber();
