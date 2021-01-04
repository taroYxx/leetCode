var subarraySum = function(nums, k) {
    const mp = {};
    mp["0"] = 1;
    let count = 0, pre = 0;
    for (const x of nums) {
        pre += x;
        if(mp[pre-k]){
            count += mp[pre-k];
        };
        if(mp[pre]){
            mp[pre]++;
        }else{
            mp[pre] = 1;
        }
    }
    console.log(mp)
    return count;
};

// console.log(subarraySum([-1,-1,1], 0))
console.log(subarraySum([1, -1, 0], 0))