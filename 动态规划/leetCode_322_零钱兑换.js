var coinChange = function(coins, amount) {


    let dp = new Array(amount+1).fill(-1);
    dp[0] = 0;
   
    for (let i = 1; i <= amount; i++) {
        
        for (let j = 0; j < coins.length; j++) {
            
            if (i-coins[j]>=0&&dp[i-coins[j]]!=-1) {
                if (dp[i]==-1||dp[i]>dp[i-coins[j]]+1) {
                        dp[i]=dp[i-coins[j]]+1;
                }
            }
        }
        
    }

    return dp[amount];

};

console.log(coinChange([186,419,83,408],6249))