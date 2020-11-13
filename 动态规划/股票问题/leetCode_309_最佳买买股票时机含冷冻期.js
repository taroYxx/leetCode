var maxProfit = function(prices) {

/*
    dp[i][k][0] = Max(dp[i-1][k][0], dp[i-1][k][1] + price[i]);
    dp[i][k][1] = Max(dp[i-1][k][1], dp[i-2][k][0] - price[i])

    dp[i][0] = Max(dp[i-1][0], dp[i-1][1] + price[i]);
    dp[i][1] = Max(dp[i-1][1], dp[i-2][0] - price[i])

*/
    let dp_i_0 = 0;
    let dp_i_1 = - Infinity;
    let dp_pre_0 = 0; // 代表 dp[i-2][0]
    for (let i = 0; i < prices.length; i++) {
        let temp = dp_i_0;                               // 0
        dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i]);   // 1
        dp_i_1 = Math.max(dp_i_1, dp_pre_0 - prices[i]); // 2
        dp_pre_0 = temp;                                 // 2-2 = 0
    }

    return dp_i_0;


};


console.log(maxProfit([1,2,3,0,2]));