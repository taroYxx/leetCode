var permute = function(nums) {
    let list = [];
    let res = [];
    let visit = new Array(nums.length).fill(false)
    function backtrack(list, nums) {
        if (list.length === nums.length) {
            res.push(list.concat()) //深拷贝
            return list
        }
        for(let i = 0; i < nums.length; i++) {
            if (visit[i]) continue;
            list.push(nums[i])
            visit[i] = true;
            backtrack(list,nums)
            visit[i] = false;
            list.pop()
        }
    }
    backtrack([], nums);
    return res
};

console.log(permute([1,1,1]))