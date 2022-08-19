const getNumber1 = () =>
  new Promise((resolve, _reject) => {
    setTimeout(() => resolve(2), 2000);
  });

const getNumber2 = () =>
  new Promise((resolve, _reject) => {
    setTimeout(() => resolve(4), 2000);
  });
const getSum = (a, b) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(a + b), 2000);
  });

const asyncOpGenerator = async function* () {
  try {
    const a = await getNumber1();
    const aSquare = yield a;
    const b = await getNumber2();
    const bSquare = yield b;
    const sumOfSquares = await getSum(aSquare, bSquare);
    return sumOfSquares;
  } catch (e) {
    console.log("error occured");
    console.log(e);
  }
};
const usingGenerator = async () => {
  console.log("using generator");
  const gen = asyncOpGenerator();
  const firstNumber = (await gen.next()).value;
  console.log(firstNumber);
  const secondNumber = (await gen.next(firstNumber * firstNumber)).value;
  console.log(secondNumber);
  const result = (await gen.next(secondNumber * secondNumber)).value;
  console.log(result);
};

const withoutUsingGenerator = () => {
  console.log("without using generator");
  return getNumber1()
    .then((a) => {
      console.log(a);
      getNumber2()
        .then((b) => {
          console.log(b);
          const aSquare = a * a;
          const bSquare = b * b;
          getSum(aSquare, bSquare)
            .then((result) => {
              console.log(result);
            })
            .catch((e) => {
              console.log("error occured ");
              console.log(e);
            });
        })
        .catch((e) => {
          console.log("error occured ");
          console.log(e);
        });
    })
    .catch((e) => {
      console.log("error occured ");
      console.log(e);
    });
};

usingGenerator();

setTimeout(withoutUsingGenerator, 7000);
