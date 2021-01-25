var productExceptSelf = function(nums) {
    let right = [];
    let left = [];
    let rightNum = 1;
    let leftNum = 1;
    for (let i = 0; i < nums.length; i++) {
        leftNum = leftNum * nums[i];
        left.push(leftNum);
    }
    for (let i = nums.length-1; i >= 0; i--) {
        rightNum = rightNum * nums[i];
        right.push(rightNum);
    }
    let res = [];
    let resNum = 1;
    for (let i = 0; i < nums.length; i++) {
        let resNum = right[i] * left[i];
        res.push(resNum);
    }
    return res;


};  

console.log(productExceptSelf([1,2,3,4]))