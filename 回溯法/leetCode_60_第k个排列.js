var getPermutation = function(n, k) {

    let visit = new Array(n).fill(false);

    let res = [];
    
    function dfs(cur, path){
        if(cur.length == n){
            res.push(cur.concat())
            return;
        }
        if(res.length == k) {
            return;
        }

        for (let i = 0; i < n; i++) {
            if(visit[i]) continue;
            visit[i] = true;
            cur.push(i+1)
            path++;
            dfs(cur, path);
            visit[i] = false;
            cur.pop();
        }
    }
    dfs([], 0);

    return res.pop().join('');
};

console.log(getPermutation(4, 9))