var findDuplicate = function(nums) {
    let res = {};
    for (let i = 0; i < nums.length; i++) {
        if(res[nums[i]]){
            return nums[i]
        }else{
            res[nums[i]] = 1;
        }
    }
    

};


console.log(findDuplicate([3,1,3,4,2]))