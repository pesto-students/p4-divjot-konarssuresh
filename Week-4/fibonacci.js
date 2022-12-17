let fibonacciSeries = {
  [Symbol.iterator]() {
    let series = [0];
    let currentIndex = 0;
    return {
      next() {
        currentIndex++;
        if (series.length <= 1) {
          series.push(1);
          return {value: series[currentIndex], done: false};
        } else {
          const numberToBeAddedToSeries =
            series[currentIndex - 1] + series[currentIndex - 2];
          series.push(numberToBeAddedToSeries);
          return {value: numberToBeAddedToSeries, done: false};
        }
      },
    };
  },
};

for (const nob of fibonacciSeries) {
  console.log(nob);
  if (nob > 380) {
    break;
  }
}
