// 第i个状态即以第i个数字结尾的最大尾巴段和
var maxSubArray = function(nums) {
    let dp = new Array(nums.length);
    dp[0] = nums[0];
    let max = dp[0];
    for (let i = 1; i < nums.length; i++) {
        
        dp[i] = Math.max(dp[i-1]+nums[i], nums[i]);
        if(dp[i]>max){
            max = dp[i]
        }
        
    }
    return max;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))