var maxProfit = function(prices) {
    
    /*
        dp[i][k][0] = Math.max(dp[i-1][k][0], dp[i-1][k][1] + prices[i]);
        dp[i][k][1] = Math.max(dp[i-1][k][1], dp[i-1][k-1][0] - prices[i]);
        k = 2;
    */
   

    let k = 2;
    let n = prices.length;

    let dp = new Array(prices.length);
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(k+1);
        for (let j = 0; j < k+1; j++) {
            dp[i][j] = new Array(2);
        }
    }
    

    for (let i = 0; i < prices.length; i++) {
        if(i == 0){
            dp[i][2][0] = 0
            dp[i][2][1] = - Infinity;
            dp[i][1][0] = 0
            dp[i][1][1] = - Infinity;
            continue;
        }
        dp[i][2][0] = Math.max(dp[i-1][2][0], dp[i-1][2][1] + prices[i])
        dp[i][2][1] = Math.max(dp[i-1][2][1], dp[i-1][1][0] - prices[i])
        dp[i][1][0] = Math.max(dp[i-1][1][0], dp[i-1][1][1] + prices[i])
        dp[i][1][1] = Math.max(dp[i-1][1][1], -prices[i])
    }

    return dp[n-1][k][0]
    
};

console.log(maxProfit([1,2,4,2,5,7,2,4,9,0]))