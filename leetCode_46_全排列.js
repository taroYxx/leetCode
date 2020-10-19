function backtrack(list, nums) {
    if (list.length === nums.length) {
        return list
    }
    for(let i = 0; i < nums.length; i++) {
        nums.pop()
        backtrack(list,)

        if (tempList.includes(nums[i])) continue;
        tempList.push(nums[i]);
        backtrack(list, tempList, nums);
        tempList.pop();
    }
}

var permute = function(nums) {
    let list = []
    list.push(backtrack([], nums))
    return list

};

console.log(permute([1,2,3]))