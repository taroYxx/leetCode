var numTrees = function(n) {
    
    // dp(n) = f(1)+f(2)+f(3)+....+f(n)

    // f(i) = dp(i-1) * dp(n-(i-1)-1)
    // f(i) = dp(i-1) * dp(n-i);

    // dp(n) = dp(0)*dp(n-1) + dp(1)*dp(n-2) + ... dp(n-1)*dp(0);

    let dp = new Array(n+1).fill(0);
    // dp[0] = 1;           1
    // dp[1] = dp[0]*dp[0]; 1
    // dp[2] = dp[0]*dp[1] + dp[1]*dp[0]; 2
    // dp[3] = dp[0]*dp[2] + dp[1]*dp[1] + dp[2]*dp[0]; 5
    dp[0] = 1;
    dp[1] = 1;
    for (let index = 2; index <= n; index++) {
        let i = 0;
        let j = index-1;
        while(i<index){
            dp[index] += dp[i]*dp[j]
            i++;
            j--;
        }   
    }
    console.log(dp)

   




};


console.log(numTrees(4))