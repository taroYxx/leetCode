var minSubArrayLen = function(s, nums) {
    // 动态规划
    
    // dp[i] 
    let window = [];
    let sum = 0;
    let res = Infinity;
    let ss = [];
    for (let i = 0; i < nums.length; i++) {
        window.push(nums[i]);
        sum += nums[i]
        
        while(sum >= s){
            ss.push(window.concat());
            res = Math.min(res, window.length);
            let temp = window.shift();
            sum -= temp;
        }
    }
    console.log(ss)
    return res;

};


console.log(minSubArrayLen(7, [2,3,1,2,4,3]))