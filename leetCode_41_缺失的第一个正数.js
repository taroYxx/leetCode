var firstMissingPositive = function(nums) {
    if(nums.length == 0) return 1;
    let array = []
    for (let i = 0; i < nums.length; i++) {
        if( nums[i] > 0){
            array[nums[i]] = 1;
        }
    }
    for (let i = 1; i < array.length; i++) {
        if(array[i] == undefined){
            return i
        }      
    }
    return array.length == 0 ? 1 : array.length;

};

console.log(firstMissingPositive([0]))


