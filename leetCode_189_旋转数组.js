var rotate = function(nums, k) {

    while(k > 0){
        let temp = nums.pop();
        nums.unshift(temp);
        k--
    }
    return nums;

};


console.log(rotate([1,2,3,4,5,6,7], 3))