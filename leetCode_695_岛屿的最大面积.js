var maxAreaOfIsland = function(grid) {

    let res = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if(grid[i][j] == 1){
                let a = dfs(i, j)
                res = Math.max(a, res);
            }
        }
    }

    function dfs(i, j){
        let count = 0;
        if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length) {
            return 0;
        }
        if (grid[i][j] == 0) {
            return 0;
        }
        if (grid[i][j] == 1) {
            grid[i][j] = 0;
            count++;
        }
        count += dfs(i+1, j);
        count += dfs(i, j+1);
        count += dfs(i-1, j);
        count += dfs(i, j-1);
        return count;
    }
    return res;

};


console.log(maxAreaOfIsland(
    [[0,0,0,0,0,0,0,0]]
))

console.log(maxAreaOfIsland(
   [[0,0,1,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0],
    [0,1,1,0,1,0,0,0,0,0,0,0,0],
    [0,1,0,0,1,1,0,0,1,0,1,0,0],
    [0,1,0,0,1,1,0,0,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0],
    [0,0,0,0,0,0,0,1,1,0,0,0,0]]))