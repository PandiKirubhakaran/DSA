// Ques 5 - Best Time to Buy and Sell Stocks
// You are given an array prices where prices[i] is the price of a given stock
// on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock
// and choosing a different day in the future to sell that stock.
// Return the maximum profit, If you cannot achieve any profit, return 0.

// Input: prices = [7, 1, 5, 3, 6, 4];  ----->>>>>  Output: 5;
// Input: prices = [7, 6, 4, 3, 1];     ----->>>>>  Output: 0;

const maxProfit = (prices) => {
  let globalProfit = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      let profit = prices[j] - prices[i];
      if (profit > globalProfit) {
        globalProfit = profit;
      }
    }
  }
  return globalProfit;
};
console.log(maxProfit([1,4,2,5,2,8,1]))

// Greedy Algorithm
const maxByProfit = function (prices) {
    let minStockPurchasePrice = prices[0] || 0;
    let profit = 0;
  
    for (let i = 1; i < prices.length; i++) {
      if (prices[i] < minStockPurchasePrice) {
        minStockPurchasePrice = prices[i];
      }
  
      profit = Math.max(profit, prices[i] - minStockPurchasePrice);
    }
  
    return profit;
  };
  
  console.log(maxByProfit([7, 6, 4, 3, 1]));
  // [7, 1, 5, 3, 6, 4]
// min = 7 => 1
// profit = 0 => 5-1 = 4 => 6-1 = 5