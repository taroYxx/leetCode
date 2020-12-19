var maxSubArray = function(nums) {

    let dp = new Array(nums.lenght);
    let max = - Infinity;
    

    for (let i = 0; i < nums.length; i++) {
        if(i == 0){
            dp[i] = nums[0]
        }else{
            dp[i] = Math.max(dp[i-1] + nums[i], nums[i]);
        }
        if(dp[i] > max){
            max = dp[i]
        }
    }
    return max;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))