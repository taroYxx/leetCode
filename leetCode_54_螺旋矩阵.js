var spiralOrder = function(matrix) {
    if (matrix.length == 0) {
        return [];
    }
    let cur = [];
    let m = matrix.length;
    let n = matrix[0].length;
    let visit = new Array(m);
    for (let i = 0; i < visit.length; i++) {
        visit[i] = new Array(n).fill(false);
    }
    let vector = 0;
    let res = [];
    function dfs(cur, i, j){
        if(cur.length == m*n){
            res = cur.concat();
            return
        }
        if(i >= m || j >= n || i<0 || j<0 || visit[i][j] == true){
            vector = (vector + 1) % 4
            if(vector == 0){
                j = j + 1;
                i = i + 1;
            }else if(vector == 1){
                j = j - 1;
                i = i + 1;
            }else if(vector == 2){
                i = i - 1;
                j = j - 1;
            }else{
                i = i - 1;
                j = j + 1;
            }
            dfs(cur, i, j);
            return;
        }
        cur.push(matrix[i][j]);
        visit[i][j] = true;
        if(vector == 0){
            j = j + 1;
        }else if(vector == 1){
            i = i + 1;
        }else if(vector == 2){
            j = j - 1;
        }else{
            i = i - 1;
        }
        dfs(cur, i, j);
        
    }

    dfs([], 0, 0);

    return res;

};

console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]))