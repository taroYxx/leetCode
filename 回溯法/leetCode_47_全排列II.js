
var permuteUnique = function(nums) {
    let list = [];
    let res = []
    let visit = new Array(nums.length).fill(false);
    function backtrack(curL, nums){
        if(curL.length == nums.length){
            res.push(curL.concat());
            return curL
        }
        for (let i = 0; i < nums.length; i++) {
            if(i > 0 && nums[i] == nums[i-1] && !visit[i-1]) continue;
            if (visit[i]) continue;  // 这个数使用过了，跳过。
            curL.push(nums[i])
            visit[i] = true;
            backtrack(curL, nums);
            visit[i] = false
            curL.pop();
        }
    }
    nums.sort((x,y)=>(x-y))
    backtrack([], nums);
    return res;
};

console.log(permuteUnique([1,1,2]))