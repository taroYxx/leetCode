var subsets = function(nums) {

   let res = [];   
   function dfs(i, tmp){
       res.push([...tmp]);
       for (let j = i; j < nums.length; j++) {
            tmp.push(nums[j]);
            dfs(j+1, tmp);
            tmp.pop();
       }
   }
   dfs(0, [])

   return res;

};

console.log(subsets([1, 2, 3]))