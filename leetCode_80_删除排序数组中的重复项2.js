var removeDuplicates = function(nums) {

    let count = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        const next = nums[i+1];
        const cur = nums[i];
        if(cur == next){
            count++;
            if(count == 2){
                nums.splice(i+1, 1);
                count--;
                i--;
            }
        }else{
            count = 0;
        }
    }
    return nums.length;

};


console.log(removeDuplicates([1,1,1,2,2,3]))