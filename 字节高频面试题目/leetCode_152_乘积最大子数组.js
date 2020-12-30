var maxProduct = function(nums) {

    // dp[i] = max(dp[i-1],  num[i])

    let dp = new Array(nums.length);
    let min = new Array(nums.length);
    min[0] = nums[0];
    dp[0] = nums[0];
    let max = dp[0];

    for (let i = 1; i < nums.length; i++) {
        dp[i] = Math.max(min[i-1]*nums[i], dp[i-1]*nums[i], nums[i]);
        min[i] = Math.min(min[i-1]*nums[i], dp[i-1]*nums[i], nums[i]);
        
       
        if(dp[i] > max){
            max = dp[i];
        }
    }
    return max;
};  

console.log(maxProduct([-2,3,-4]))