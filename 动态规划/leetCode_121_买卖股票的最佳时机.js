// var maxProfit = function(prices) {
    
//     if(prices.length == 0) return 0;
//     // dp[i] 是指在第i天买入能够获得最大的收益
//     let dp = new Array(prices.length).fill(0);

//     for (let i = 0; i < prices.length; i++) {
//         for (let j = i+1; j < prices.length; j++) {
//             if(prices[i] > prices[j]) continue;
//             dp[i] = Math.max(dp[i], prices[j]-prices[i]);
//         }
//     }
//     return Math.max(...dp);

// };

var maxProfit = function(prices) {
    
/*
    dp[i][k][0] = Math.max(dp[i-1][k][0], dp[i-1][k][1] + prices[i]);
    dp[i][k][1] = Math.max(dp[i-1][k][1], dp[i-1][k-1][0] - prices[i]);
    
    因为这里k=1  

    dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i]);
    dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0] - prices[i]);

    因为 k 是从 1 开始的，所以 k = 0 意味着根本不允许交易，这时候利润当然是 0

    dp[i-1][0] = 0;
*/
    let dp_i_0 = 0;
    let dp_i_1 = - Infinity;    

    for (let i = 0; i < prices.length; i++) {
        dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i]);
        dp_i_1 = Math.max(dp_i_1,  -prices[i]);
    }

    return dp_i_0
};




console.log(maxProfit([7,1,5,3,6,4]))