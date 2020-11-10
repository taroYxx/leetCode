var lengthOfLIS = function(nums) {
    let tssass

    for (var i = 1; dp[i] = 1, i < nums.length; i++)
        for (var j = 0; j < i; j++)
            nums[i] > nums[j] && (dp[i] = Math.max(dp[i], dp[j] + 1))

    return dp;
};

console.log(lengthOfLIS([4,10,4,3,8,9]))