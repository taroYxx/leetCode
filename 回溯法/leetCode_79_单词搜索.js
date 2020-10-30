var exist = function(board, word) {
    
    let tag = false;
    let m = board.length;
    let n = board[0].length;
    let res = [];

    function dfs(cur, i, j){
        if(cur.join("") == word){
            tag = true;
            return
        }
        if(i == m || j== n){
            return
        }
        for (let p = 0; p < board.length; p++) {
            for (let q = 0; q < board[p].length; q++) {
                console.log(cur);
                cur.push(board[p][q])
                dfs(cur,p+1,q);
                cur.pop();
            }
        }
    }

    dfs([], 0, 0);

    return res

};


console.log(exist([
    ['A','B','C','E'],
    ['S','F','C','S'],
    ['A','D','E','E']
  ],"ABCCED"))