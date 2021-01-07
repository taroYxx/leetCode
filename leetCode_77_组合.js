var combine = function(n, k) {

    let res = [];

    let visit = new Array(n);
    function dfs(array){
        if(array.length == k){
            res.push(array.concat());
            return res;
        }
        for (let i = 1; i <= n; i++) {
            if(visit[i] == true || i <= array[array.length-1]) continue;
            visit[i] = true;
            array.push(i)
            dfs(array)
            array.pop()
            visit[i] = false;
        }
    }
    dfs([])
    console.log(res);

};

console.log(combine(4, 3))