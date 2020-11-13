// 用一个标记 是否买入， 第二天涨持有，第二天跌卖出。
// var maxProfit = function(prices) {
//     let ishad = 0;
//     let sum = 0;
//     for (let i = 0; i < prices.length; i++) {
//         if(prices[i+1] > prices[i]){
//             if(ishad == 1){
//                 sum = sum + (prices[i]-prices[i-1]);
//             }else{
//                 ishad = 1;
//             }
//         }else{
//             if(ishad == 1){
//                 ishad = 0;
//                 sum = sum + (prices[i]-prices[i-1])
//             }else{
//                 ishad = 0;
//             }
//         }
//     }
//     return sum

// };

var maxProfit = function(prices) {
    
/*
    dp[i][k][0] = Math.max(dp[i-1][k][0], dp[i-1][k][1] + prices[i]);
    dp[i][k][1] = Math.max(dp[i-1][k][1], dp[i-1][k-1][0] - prices[i]);
    如果 k 为正无穷，那么就可以认为 k 和 k - 1 是一样的。可以这样改写框架：
    dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i]);
    dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0] - prices[i]);
*/
    let dp_i_0 = 0;
    let dp_i_1 = - Infinity;    

    for (let i = 0; i < prices.length; i++) {
        let temp = dp_i_0;
        dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i]);
        dp_i_1 = Math.max(dp_i_1, temp - prices[i]);
    }

    return dp_i_0

};


console.log(maxProfit([1,2,3,4,5]))