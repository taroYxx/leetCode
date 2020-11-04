// 选择第i个房间盗取财宝，就一定不能选择第i-1个房间盗取财宝
// 如果不选择第i个房间盗取财宝，就相当于只考虑前i-1个房间盗取财宝

var rob = function(nums) {
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

console.log(rob([2,7,9,3,1]));
