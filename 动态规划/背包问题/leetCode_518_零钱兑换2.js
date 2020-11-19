var change = function(amount, coins) {
    
    let n = amount;
    let m = coins.length;
    let dp = new Array(m+1);
    for (let i = 0; i < m+1; i++) {
        dp[i] = new Array(n+1).fill(0);
        dp[i][0] = 1;
    }

    /* 如果你不把第i个物品放入背包
        dp[i][j] = dp[i-1][j];
       如果把第i个物品放入背包
        dp[i][j] = dp[i][j-coins[i-1]];
    */

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if(j - coins[i-1] >= 0){
                // 放入
                dp[i][j] = dp[i-1][j] + dp[i][j-coins[i-1]];
            }else{
                // 不放
                dp[i][j] = dp[i-1][j]
            }
        }    
    }
    return dp[m][n];

};

console.log(change(5, [1, 2, 5]));