var exist = function(board, word) {
    let m = board.length;
    let n = board[0].length;
    let visit = new Array(m);
    for (let i = 0; i < visit.length; i++) {
        visit[i] = new Array(n)
    }
    function dfs(x, y, i){
        // 结果
        if (i > word.length - 1) {
            return true;
        }
        // 边界
        if (x >= m || x < 0 || y >= n || y < 0) {
            return false;
        }
        // 访问过的 以及 本来就不符合条件
        if (visit[x][y] == true || board[x][y] != word[i]){
            return false;
        }

        // 开始访问 循环体
        visit[x][y] = true;
        if (dfs(x+1, y, i+1) || dfs(x-1, y, i+1) || dfs(x, y+1, i+1) || dfs(x, y-1, i+1)) {
            return true;
        }

        visit[x][y] = false;
        return false;
    }
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if(board[i][j] == word[0] && dfs(i, j, 0)){
                return true;
            }   
        }
    }
    return false

};


console.log(exist([
    ['A','B','C','E'],
    ['S','F','C','S'],
    ['A','D','E','E']
  ],"ABCCED"))