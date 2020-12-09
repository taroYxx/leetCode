/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    // dp[i][j] 代表word1到i位置转换成word2的j位需要的最小步数
    //当word1[i] == word2[j], dp[i][j] = dp[i-1][j-1];  当前不需要操作
    //当word1[i] != word2[j], dp[i][j] = min(dp[i-1][j-1],dp[i-1][j],dp[i][j-1]) + 1; 当前需要操作
    // dp[i-1][j-1]：替换 
    // dp[i-1][j]表示删除 
    // dp[i][j-1] 表示插入
    let n1 = word1.length;
    let n2 = word2.length;
    let dp = new Array(n1+1);
    for (let i = 0; i < n1+1; i++) {
        dp[i] = new Array(n2+1).fill(0);
    }

    for (let i = 1; i < n2+1; i++) {
        dp[0][i] = dp[0][i-1] + 1;
    }

    for (let j = 1; j < n1+1; j++) {
        dp[j][0] = dp[j-1][0] + 1;
    }

    for (let i = 1; i < n1+1; i++) {
        for (let j = 1; j < n2+1; j++) {
            if(word1[i-1] == word2[j-1]){
                dp[i][j] = dp[i-1][j-1]
            }else{
                dp[i][j] = Math.min(dp[i][j-1], dp[i-1][j-1], dp[i-1][j]) + 1;
            }
            
        }
        
    }

    console.log(dp[n1][n2])
    return dp;


};

console.log(minDistance("horse","ros"));