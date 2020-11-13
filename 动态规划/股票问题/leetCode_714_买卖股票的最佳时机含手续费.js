var maxProfit = function(prices, fee) {
    let dp_0 = 0;
    let dp_1 = - Infinity;
    for (let i = 0; i < prices.length; i++) {
        let temp = dp_0;
        dp_0 = Math.max(dp_0, dp_1+prices[i]);
        dp_1 = Math.max(dp_1, temp - prices[i] - fee);
        
    }

    return dp_0;

};

console.log(maxProfit([1, 3, 2, 8, 4, 9], 2))