var uniquePaths = function(m, n) {

    // let conut = 0
    // function dfs(i, j){
    //     if(i == (m-1) && j == (n - 1)){
    //         conut++;
    //         return;
    //     }
    //     if(i >= m || j >= n){
    //         return;
    //     }
    //     dfs(i+1, j);
    //     dfs(i, j+1);
    // }
    // dfs(0, 0);
    // return conut
    let count = m + n - 2;
    let target = (m > n ? n : m) - 1;
    let p = 1;
    let q = 1;
    let index = 0;
    let targetIndex = target;
    while(index != targetIndex){
        p = p * count;
        q = q * target;
        target--;
        count--;
        index++;
    }    
    return p / q
};

// 向下 2步
// 向右 6步
// C 2 8
// 3 7 28
// 23 12 193536720
console.log(uniquePaths(3, 7))