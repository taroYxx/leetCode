var maxProfit = function(k, prices) {

    let dp_ik0 = new Array(k);
    let dp_ik1 = new Array(k);

    for (let i = 0; i < k+1; i++) {
        dp_ik0[i] = 0;
        dp_ik1[i] = - Infinity;
    }

    for (let i = 0; i < prices.length; i++) {
        for (let j = k; j >= 1; j--) {
            dp_ik0[j] = Math.max(dp_ik0[j], dp_ik1[j]+prices[i]);
            dp_ik1[j] = Math.max(dp_ik1[j], dp_ik0[j-1] -prices[i]);
        }
    }

    return dp_ik0[k]


};

console.log(maxProfit(2, [3,2,6,5,0,3]))