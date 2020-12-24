var minPathSum = function(grid) {

    // dp[i][j] = dp[i-1][j] dp[i][j-1] + grid[i][j]
    let m = grid.length
    let n = grid[0].length;

    let dp = new Array(m);
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(n)
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if(i == 0 && j ==0){
                dp[0][0] = grid[0][0]
                continue;
            }else if(i == 0){
                dp[i][j] = dp[i][j-1] + grid[i][j]
            }else if(j == 0){
                dp[i][j] = dp[i-1][j] + grid[i][j]
            }else{
                dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + grid[i][j]
            }
        }
    }
    return dp[m-1][n-1]

};

console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]]))