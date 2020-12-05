var canJump = function(nums) {
    if(nums[0] == 0 && nums.length > 1) return false
    let dp = new Array(nums.length).fill(false);
    dp[0] = true;
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        if(dp[i] == true){
            for (let j = 1; j <= element; j++) {
                dp[i+j] = true;
            }
        }
    }
    // return dp;
    return dp[nums.length-1];
};

console.log(canJump([1,0,1,0]));