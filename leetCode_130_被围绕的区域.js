var solve = function(board) {

    let m = board.length;
    let n = board[0].length;
    let res = []

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if(board[i][j] == "O"){
                let blockRes = [];
                dfs(i, j, blockRes);
                // console.log(blockRes);
                res.push(blockRes);
            }
        }
    }

    function dfs(i, j, count){
        if(i >= m || j >= n || i < 0 || j < 0){
            return
        }
        if(board[i][j] == "X"){
            return
        }
        if(board[i][j] == "O"){
            count.push([i, j]);
            board[i][j] = "X";
        }
        dfs(i+1, j, count);
        dfs(i, j+1, count);
        dfs(i-1, j, count);
        dfs(i, j-1, count);
        return count;
    }

    // console.log(res)
    let target = [];
    for (let i = 0; i < res.length; i++) {
        for (let j = 0; j < res[i].length; j++) {
            const element = res[i][j];
            if(element[0] == m-1 || element[1] == n-1 || element[0] == 0 || element[1] == 0){
                target.push(...res[i])
            }
        }
    }

    for (let i = 0; i < target.length; i++) {
        let x = target[i][0];
        let y = target[i][1];
        board[x][y] = "O";
    }
    return board;

};


console.log(solve([["X","O","X"],
                   ["O","X","O"],
                   ["X","O","X"]]))