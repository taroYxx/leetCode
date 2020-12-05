var missingNumber = function(nums) {
    // let n = nums.length;
    // let res = 0;
    // res = res ^ n;
    // for (let i = 0; i < nums.length; i++) {
    //     res = res ^ nums[i] ^ i;
    // }
    // return res;
    let n = nums.length;
    let sum = (n+1)*n/2
    let sumB = 0;
    for (let i = 0; i < nums.length; i++) {
        sumB = sumB + nums[i];
    }
    return sum - sumB;

};

console.log(missingNumber([0,1,2,3,4,5,6,7,9]))