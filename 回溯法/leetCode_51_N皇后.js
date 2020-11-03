var solveNQueens = function(n) {

    let visit = new Array(n);
    for (let i = 0; i < visit.length; i++) {
        visit[i] = new Array(n).fill(".");
    }
    
    function dfs(x, y, path){
        console.log(visit)
        if(path == 4){
            
            return
        }
        if(x>=n || y>= n){
            return
        }
        // 判断点是否正确
        let tag1 = 0;
        let tag2 = 0;
        let tag3 = 0;
        let tag4 = 0;
        let tag5 = 0;

        for (let p = 0; p < n; p++) {
            // 竖向
            if(visit[p][y] == 'Q' && p != x){
                tag1++;
                if(tag1==2){return}
            }
        // 对角线
            for (let  q = 0; q < n; q++) {
                //横向
                if(visit[x][q] == "Q" && q != y){
                    tag2++;
                    if(tag2==2){return}
                }
                if(p > q && p+q==x+y && visit[p][q] == "Q"){
                    tag3++;
                    if(tag3==2){return}

                }
                if(p == q && x==y && visit[p][q] == "Q"){
                    tag4++;
                    if(tag4==2){return}

                }
                if(p<q && p-q == x-y && visit[p][q] == "Q"){
                    tag5++;
                    if(tag5==2){return}
                }
            }    

        }
        
        for (let i = x; i < n; i++) {
            for (let j = 0; j < n; j++) {
                visit[i][j] = "Q";
                path = path + 1;
                dfs(i, j, path);
                visit[i][j] = "."
                path = path - 1;
            }
        }
        

    }

    dfs(0, 0, 0);




};


console.log(solveNQueens(4))



