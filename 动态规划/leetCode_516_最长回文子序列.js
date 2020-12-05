var longestPalindromeSubseq = function(s) {
    
    let n = s.length;
    let dp = new Array(s.length);
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(s.length).fill(0);
        dp[i][i] = 1;
    }
    
    for (let i = n-1; i >= 0; i--) {
        for (let j = i+1; j < n; j++) {
            if(s[i] == s[j]){
                dp[i][j] = dp[i+1][j-1] + 2;
            }else{
                dp[i][j] = Math.max(dp[i][j-1], dp[i+1][j]);
            }
        }
    }

    return dp[0][n-1]


};

console.log(longestPalindromeSubseq("bbbab"));