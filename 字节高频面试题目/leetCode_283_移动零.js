var moveZeroes = function(nums) {
    
    // 冒泡
    for (let i = 1; i < nums.length; i++) {
        for (let j = 1; j < nums.length; j++) {
            if(nums[j-1] == 0){
                let temp = nums[j];
                nums[j] = 0;
                nums[j-1] = temp;
            }
        }
    }

    return nums;
};


console.log(moveZeroes([0,0,1]));