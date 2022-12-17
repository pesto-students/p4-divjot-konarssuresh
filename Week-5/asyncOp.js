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

const asyncOpGenerator = function* () {
  try {
    const aSquare = yield getNumber1();
    const bSquare = yield getNumber2();
    const sumOfSquares = yield getSum(aSquare, bSquare);
    return sumOfSquares;
  } catch (e) {
    console.log("error occured");
    console.log(e);
  }
};
const usingGenerator = () => {
  console.log("using generator");
  const gen = asyncOpGenerator();
  const firstNumberPromise = gen.next().value;
  firstNumberPromise
    .then((firstNo) => {
      console.log(firstNo);
      gen
        .next(firstNo * firstNo)
        .value.then((secondNo) => {
          console.log(secondNo);
          gen
            .next(secondNo * secondNo)
            .value.then((result) => {
              console.log("sum of squares");
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

const withoutUsingGenerator = async () => {
  try {
    console.log("without using generator");
    const a = await getNumber1();
    console.log(a);
    const aSquare = a * a;
    const b = await getNumber2();
    console.log(b);
    const bSquare = b * b;
    const sumOfSquares = await getSum(aSquare, bSquare);
    console.log("sumofsquares");
    console.log(sumOfSquares);
  } catch (e) {
    console.log("error occured");
    console.log(e);
  }
};

const callingFunction = async () => {
  await withoutUsingGenerator();

  usingGenerator();
};

callingFunction();
