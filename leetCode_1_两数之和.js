var twoSum = function(nums, target) {

    for (let i = 0; i < nums.length; i++) {
        let a = nums[i];
        for (let j = i+1; j < nums.length; j++){
            let b = nums[j];
            if(a + b == target){
                return [i, j];
            }
        }
    }

    return [0, 0]

};

console.log(twoSum([3,2,4], 6))