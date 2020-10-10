var isValidSudoku = function(board) {
    let rows = [];
    let columns = [];
    let boxs = [];
    for (let i = 0; i < 9; i++) {
        rows.push([]);
        columns.push([]);
        boxs.push([]);
    }


    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            let s = board[i][j];
            if(s != "."){
                // 行判断
                if(rows[i].indexOf(s) == -1){
                    rows[i].push(s);
                }else{
                    return false;
                };

                // 列判断
                if(columns[j].indexOf(s) == -1){
                    columns[j].push(s)
                }else{
                    return false;
                }

                // 九宫格判断
                const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3); // 对应的盒子
                if(boxs[boxIndex].indexOf(s) == -1){
                    boxs[boxIndex].push(s)
                }else{
                    return false
                }
            }

            
        }
        
    }

    return true;


};


console.log(isValidSudoku([
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
  ]))