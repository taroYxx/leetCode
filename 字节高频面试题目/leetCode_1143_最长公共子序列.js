var longestCommonSubsequence = function(text1, text2) {
    // dp[i][j] 对于s1[1...i]和s2[1...j]，他们的LCS长度是dp[i][j]。

    let dp = new Array(text1.length);
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(text2.length);
    }

    for (let i = 0; i < text1.length; i++) {
        for (let j = 0; j < text2.length; j++) {
            if(text1[i] == text2[j]){
                if(i==0 || j==0){
                    dp[i][j] = 1;
                }else{
                    dp[i][j] = dp[i-1][j-1] + 1;
                }
            }else{
                if(i == 0 || j == 0){
                    if (i - 1 < 0 && j - 1 < 0) {
                        dp[i][j] = 0
                      } else if (i - 1 < 0) {
                        dp[i][j] = dp[i][j - 1]
                      } else if (j - 1 < 0) {
                        dp[i][j] = dp[i - 1][j]
                      } 
                }else{
                    dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
                }
            }   
        }
    }

    return dp[text1.length-1][text2.length-1];

};

console.log(longestCommonSubsequence("abcde","ace"))