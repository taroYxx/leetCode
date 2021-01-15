var combinationSum3 = function(k, n) {

    let res = [];
    function dfs(array, sum){
        if(array.length == k && sum == n){
            res.push(array.concat());
            return
        }
        if(array.length > k || sum > n){
            return
        }

        for (let i = 1; i <= 9; i++) {
            if(array.indexOf(i) != -1 || i < array[array.length-1]) continue;
            array.push(i);
            sum += i;
            dfs(array, sum);
            array.pop();
            sum -= i   
        }

    }
    dfs([], 0);
    return res;

};

console.log(combinationSum3(3, 9))