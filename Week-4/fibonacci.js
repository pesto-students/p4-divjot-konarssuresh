let fibonacciSeries = {
  [Symbol.iterator]() {
    let series = [];
    let currentIndex;
    return {
      next() {
        if (currentIndex || currentIndex === 0) currentIndex++;
        else currentIndex = 0;
        if (series.length === 0 || series.length === 1) {
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
