var numTrees = function(n) {
    // let dp = new Array(n+1).fill(0);
    // dp[0] = 1;
    // dp[1] = 1;
    // for (let index = 2; index <= n; index++) {
    //     let i = 0;
    //     let j = index-1;
    //     while(i<index){
    //         dp[index] += dp[i]*dp[j]
    //         i++;
    //         j--;
    //     }   
    // }
    // console.log(dp)

    let dp = new Array(n+1).fill(0);
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(n+1).fill(0);   
    }

    function count(low, high){
        if(low > high) return 1;
        if(dp[low][high] != 0){
            return dp[low][high]
        }
        let res = 0;
        for (let i = low; i <= high; i++) {
            let left = count(low, i-1);
            let right = count(i+1, high);
            res += left * right;
        }
        dp[low][high] = res;
        return res;
    }
    
    return count(1, n);
};


console.log(numTrees(3))