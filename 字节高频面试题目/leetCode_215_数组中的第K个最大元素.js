var findKthLargest = function(nums, k) {
    nums = nums.sort((a, b) => a-b);
    return nums[nums.length-k]
};


console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4));