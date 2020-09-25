var removeElement = function(nums, val) {
    let i = 0;
    while(nums[i] != undefined){
        if(nums[i] == val){
            nums.splice(i,1);
        }else{
            i++;
        }
    }
    console.log(nums)
    return nums


};


removeElement([3,2,2,3], 3);