var fourSum = function(nums, target) {
    nums = nums.sort((a, b)=> a - b);
    console.log(nums);
    let result = [];
    for (let index = 0; index < nums.length-3; index++) {
        const first = nums[index];
        if(index > 0 && nums[index] == nums[index-1]) break;
        for (let j = index+1; j < nums.length-2; j++) {
            const second = nums[j];
            if (j - 1 > index && nums[j] === nums[j - 1]) break;
            let L = j+1;
            let R = nums.length - 1 ;
            while(L < R){
                if(first + second + nums[L] + nums[R] == target){
                    while(L < R && nums[L] == nums[L+1]) L++;
                    while(L < R && nums[R] == nums[R-1]) R--;
                    console.log(index, j, L, R);
                    result.push([first, second, nums[L], nums[R]]);
                    L++;
                    R--;
                }else if(first + second + nums[L] + nums[R] > target){
                    R -- ;
                }else{
                    L ++ ;
                }
            }   
        }
    }
    console.log(result);
};


fourSum([-1,-5,-5,-3,2,5,0,4], -7)