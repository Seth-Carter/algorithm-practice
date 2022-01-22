// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

const maxProfit = (prices) => {
  let maxProfit = 0;
  let minPrice = Infinity;
  for (price of prices) {
      minPrice = Math.min(minPrice, price);
      maxProfit = Math.max(maxProfit, price - minPrice);
  }
  return maxProfit;
}; 