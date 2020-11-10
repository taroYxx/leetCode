var lengthOfLIS = function(nums) {
    let dp = new Array(nums.length).fill(1);
    
    dp[0] = 0;
    dp[1] = 1;

    for (let i = 1; i < nums.length; i++) {
        let j = i - 1;
        let cur = nums[j]
        while(j>=0){
            if(cur<nums[i]){
                dp[i] = dp[i] + 1;
                cur = nums[j];
            }
            j--;
        }
    }
    return dp;

};

console.log(lengthOfLIS([4,10,4,3,8,9]))