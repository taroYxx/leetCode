var uniquePathsWithObstacles = function(obstacleGrid) {
    // let m = obstacleGrid.length;
    // let n = obstacleGrid[0].length;
    // let count = 0;
    // function dfs(i, j){
    //     if(i == m-1 && j == n-1){
    //         count ++;
    //         return;
    //     }
    //     if(i >= m || j >= n || obstacleGrid[i][j] == 1){
    //         return;
    //     }
    //     dfs(i+1, j);
    //     dfs(i, j+1);
    // }
    // dfs(0,0);
    // return count;
 
    // C 4 2  6 
    // C 4 

    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;
    let dp = new Array(m);
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(n);
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if(i == 0 && j == 0){
                dp[0][0] = obstacleGrid[0][0] == 0 ? 1 : 0;
                continue;
            }
            if(obstacleGrid[i][j] == 1){
                dp[i][j] = 0; 
                continue;
            }
            else if(j == 0 && obstacleGrid[i][j] == 0){
                dp[i][j] = dp[i-1][j];
            }
            else if(i == 0 && obstacleGrid[i][j] == 0){
                dp[i][j] = dp[i][j-1];
            }
            else if(j - 1 >= 0 && i-1 >=0 && obstacleGrid[i][j] == 0){
                dp[i][j] = dp[i-1][j] + dp[i][j-1];
            }
        }
        
    }

    return dp[m-1][n-1];


};

console.log(uniquePathsWithObstacles([[0,0]]))