var spiralOrder = function(matrix) {
    let cur = [];
    let m = matrix.length;
    let n = matrix[0].length;
    let visit = new Array(m);
    for (let i = 0; i < visit.length; i++) {
        visit[i] = new Array(n).fill(false);
    }

    console.log(visit);
    let vector = 0;

    function dfs(cur, i, j){
        if(cur.length == m*n){
            console.log(cur);
            return
        }
        if(i >= m || j >= n || i<0 || j<0 ||visit[i][j] == true){
            vector = (vector + 1) % 4
            if(vector == 0){
                i = i+1;
            }else if(vector == 1){
                j = j + 1;
            }else if(vector == 2){
                i = i - 1;
            }else{
                j = j - 1;
            }
            dfs(cur, i, j);
            return;
        }
        cur.push(matrix[i][j]);
        visit[i][j] = true;
        if(vector == 0){
            i = i + 1;
        }else if(vector == 1){
            j = j + 1;
        }else if(vector == 2){
            i = i - 1;
        }else{
            j = j - 1;
        }
        dfs(cur, i, j);
        
    }

    dfs([], 0, 0);

    

};

console.log(spiralOrder([
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ]
   ]))