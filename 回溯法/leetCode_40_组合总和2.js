var combinationSum2 = function(candidates, target) {

    // let res = new Set;
    // let result = [];
    let res = [];
    let nums = candidates.sort((x, y)=>(x-y));

    function dfs(cur, sums, start){
        if(sums == target){
            res.push([...cur])
            return;
        }
        if(sums > target){
            return;
        }

        for (let i = start; i < nums.length; i++) {
            if(i-1 >= start && nums[i] == nums[i-1]) continue;
            sums = sums + nums[i];
            cur.push(nums[i]);
            dfs(cur, sums, i+1);
            let b = cur.pop();
            sums = sums - b;
        }
    }

    dfs([], 0, 0);
    return res;

};


console.log(combinationSum2([2,5,2,1,2],5))