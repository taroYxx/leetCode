var exist = function(board, word) {

    let m = board.length;
    let n = board[0].length;
    let res = false;
    let dp = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if(board[i][j] == word[0]){
                res = dfs(i, j, 0);
            }
        }
    }

    console.log(res);
    
    function dfs(i , j, count){
        if(count == word.length){
            console.log(dp);
            return;
        }
        if(i < 0 || j < 0 || i >= m || j >= n){
            return;
        }
        if(board[i][j] == word[count]){
            dp.push([i, j]);
            dfs(i+1, j, count+1);
            dfs(i, j+1, count+1);
            dfs(i-1, j, count+1);
            dfs(i, j-1, count+1);
        }else{
            return
        }
    }



};


console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCEDE"))