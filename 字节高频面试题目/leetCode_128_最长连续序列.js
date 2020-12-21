var longestConsecutive = function(nums) {
    nums = nums.sort((a, b) => a - b);
    let res = - Infinity;
    let count = 1;
    for (let i = 1; i < nums.length; i++) {
        if(nums[i] == nums[i-1]) continue;
        if(nums[i] == nums[i-1] + 1){
            count ++;
            res = Math.max(res, count);
        }else{
            count = 0;
        }
    }
    return res;

};