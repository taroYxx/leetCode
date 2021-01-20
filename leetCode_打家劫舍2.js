var rob = function(nums) {
    return Math.max(noCirclerob(nums.slice(0, nums.length-1)), noCirclerob(nums.slice(1)))
};


var noCirclerob = function(nums) {
    if(nums.length == 0) return 0;
    if(nums.length == 1) return nums[0]
    let dp = new Array(nums.length);
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0],nums[1]);
    for (let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i-1], dp[i-2]+nums[i])
    }
    return dp.pop()
};

console.log(rob([2,3,2]));