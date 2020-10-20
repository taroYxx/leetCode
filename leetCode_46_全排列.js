function backtrack(list, nums) {
    if (list.length === nums.length) {
        console.log(list)
        return list
    }
    for(const i = 0; i < nums.length; i++) {
        if (list.includes(nums[i])) continue;
        const curList = list.push(nums[i])
        backtrack(curList,nums)
    }
}

var permute = function(nums) {
    let list = []
    backtrack([], nums)
    return list
};

console.log(permute([1,2,3]))