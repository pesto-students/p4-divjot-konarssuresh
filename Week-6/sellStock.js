// // time complexity - o(n) space complexity- o(1)
const bestTimeToBuyAndSellStock = (prices) => {
  let maxProfit = 0;
  let minPrice = Infinity;
  prices.forEach((price) => {
    if (price < minPrice) {
      minPrice = price;
    } else if (price - minPrice > maxProfit) {
      maxProfit = price - minPrice;
    }
  });
  return maxProfit;
};

console.log(bestTimeToBuyAndSellStock([2, 4, 1]));
