var combinationSum2 = function(candidates, target) {

    // let res = new Set;
    // let result = [];
    let res = [];
    let nums = candidates.sort((x, y)=>(x-y));

    let visit = new Array(nums.length).fill(false);

    function dfs(cur, sums, start){
        if(sums == target){
            res.push([...cur])
            return;
        }
        if(sums > target){
            return;
        }

        for (let i = start; i < nums.length; i++) {
            if(visit[i] == true || (i-1 >= start && nums[i] == nums[i-1])) continue;
            sums = sums + nums[i];
            cur.push(nums[i]);
            visit[i] = true;
            dfs(cur, sums, i);
            let b = cur.pop();
            visit[i] = false;
            sums = sums - b;
        }
    }

    dfs([], 0, 0);
    return res;

};


console.log(combinationSum2([10,1,2,7,6,1,5], 8))