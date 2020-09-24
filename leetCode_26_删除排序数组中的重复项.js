var removeDuplicates = function(nums) {
    if(nums.length == 0) return nums;
    let res = 0;
    let i = 1;
    while(nums[i] != undefined){
        console.log(nums[i])
        if(nums[i] == nums[i-1]){
            nums.splice(i, 1)
        }else{
            i++
        }
    }
    return nums;
};



removeDuplicates([0,0,1,1,1,2,2,3,3,4])