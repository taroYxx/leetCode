var combinationSum = function(candidates, target) {
    // let res = [];
    // let nums = candidates;

    // function dfs(cur, sums, start){
    //     if(sums == target){
    //         res.push([...cur]);
    //         return;
    //     }
    //     if(sums > target){
    //         return;
    //     }
    //     for (let i = start; i < nums.length; i++) {
    //         cur.push(nums[i])
    //         sums = sums + nums[i]
    //         dfs(cur, sums, i);
    //         let b = cur.pop()
    //         sums = sums - b;
    //     }
    // }
    // dfs([], 0, 0);
    // return res

// 该方法结果需要去重   
    let res = [];
    let visit = new Array(candidates.length).fill(false)
    function dfs(cur, nums, start){
        if(sum(cur) == target){
            res.push(cur.concat())
            return
        }
        for (let i = start; i < nums.length; i++) {
            cur.push(nums[i]);
            if(sum(cur) > target){
                cur.pop()
                return;
            } 
            dfs(cur, nums, i);  
            cur.pop();     
        }
    }

    function sum(array){
        let sum = 0;
        for (const item of array) {
            sum = sum + item;
        }
        return sum;
    }


    dfs([],candidates, 0)

    return res
};

console.log(combinationSum([2,3,5], 8))