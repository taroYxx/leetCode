var numSquares = function(n) {
    // 1 4 9 16 25 36 49;
    // f(n) = Math.max(f(n-k)+1);   k 属于完全平方数
    // f(1) = 1 f(2)= 0 f(3) = 0 f(4) = 1

    let dp = new Array(n+1).fill(0);
    dp[0] = 0;
    dp[1] = 1
    for (let i = 2; i <= n; i++) {
        dp[i] = i;
        for (let j = 1; i - j*j >= 0; j++) {
            dp[i] = Math.min(dp[i], dp[i-j * j] + 1);   
        }
    }
    console.log(dp)
    return dp.pop()
};


console.log(numSquares(13))