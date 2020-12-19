var findRepeatNumber = function(nums) {

    let array = new Array(nums.length).fill(-1);

    for (let i = 0; i < nums.length; i++) {
        if(array[nums[i]] == -1){
            array[nums[i]] = 1;
        }else{
            return nums[i];
        }
    }
    
    return 

};

console.log(findRepeatNumber([2, 3, 1, 0, 2, 5, 3]))