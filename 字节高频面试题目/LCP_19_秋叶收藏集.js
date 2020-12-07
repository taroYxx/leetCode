var minimumOperations = function(leaves) {
    let n = leaves.length;
    let dp = new Array(3)
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(n);
    }


    for (let i = 0; i < leaves.length; i++) {
        // 全红   黄变红  是黄+1    变红
        if(i < 1){
            dp[0][i] = (leaves[i] != 'r');
        }else{
            dp[0][i] = dp[0][i-1] + (leaves[i] != 'r');
        }

        // 红  黄     变黄
        if(i < 1){
            dp[1][i] = dp[0][i];
        }else{
            // 纯第一种变到第二种   纯第二种   红变黄  是红的 + 1
            dp[1][i] = Math.min(dp[0][i-1]+(leaves[i] != 'y'), dp[1][i-1]+(leaves[i] != 'y'));
        }

        // 红 黄 红   变红
        if(i < 2){
            dp[2][i] = dp[1][i]
        }else{
            // 第二种变第三种  黄变红    纯第三种 黄变红
            dp[2][i] = Math.min(dp[1][i-1]+ (leaves[i] != 'r'), dp[2][i - 1] + (leaves[i] != 'r'))
        }
        
    }

    return dp;



    /*
    1 动态规划
    2 使用 3 个 dp 数组记录状态
    dp[0][i] 代表从头开始全部修改成红色（纯红）需要修改几次
    dp[1][i] 代表从头开始是红色，然后现在是黄色（红黄），需要修改几次
    dp[2][i] 代表从头开始是红色，然后变成黄色，又变成红色（红黄红），需要修改几次
    根据 i 是红是黄，判断转移情况

    3 dp[0][i] 就很简单，如果是黄的，就比之前加一
    dp[1][i] 可以从上一个纯红状态变化过来，也可以从上一个本身状态变化过来
    dp[2][i] 可以从上一个红黄状态变化过来，也可以从上一个本身状态变化过来
    */


};


console.log(minimumOperations("yry"));