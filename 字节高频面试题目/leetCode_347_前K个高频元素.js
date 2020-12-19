var topKFrequent = function(nums, k) {
    let res = new Array(nums.length).fill(0);
    for (let i = 0; i < nums.length; i++) {
        res[nums[i]]++;
    }
    return res;

};

console.log(topKFrequent([1,1,1,2,2,3]), 2)
