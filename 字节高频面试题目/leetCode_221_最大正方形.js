/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    if(matrix == []) return 0;
    let dp = new Array(matrix.length);
    let width = matrix[0].length;
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(width).fill(0);
    }
    let max = 0;
    
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if(matrix[i][j] == "1"){
                if(i == 0 || j == 0){
                    dp[i][j] = 1
                }else{
                    dp[i][j] = Math.min(dp[i-1][j], dp[i-1][j-1], dp[i][j-1])+1;
                }
                max = Math.max(max, dp[i][j]);
            }
        }
    }

    return max * max;

};


console.log(maximalSquare([["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]))