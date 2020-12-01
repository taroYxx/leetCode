var maxSubArray = function(nums) {
    // dp[i] 以 i 结尾的最大和
    // dp[i] = Max(dp[i-1]+num[i], num[i])

    let dp = new Array(nums.length)
    dp[0] = nums[0];
    let max = 0;
    // [-2,1,-3,4,-1,2,1,-5,4]
    for (let i = 1; i < nums.length; i++) {
        dp[i] = Math.max(dp[i-1]+nums[i], nums[i])
        if(dp[i]>max){
            max = dp[i]
        }
    }
    console.log(dp);
    return max;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))