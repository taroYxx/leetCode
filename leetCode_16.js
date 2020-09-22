var threeSumClosest = function(nums, target) {
    nums = nums.sort((a, b) => a - b);
    console.log(nums)
    let max = Infinity;
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        const a = nums[i];
        let L = i + 1;
        let R = nums.length - 1;
        while(L < R){
            console.log(a, nums[L], nums[R]);
            let res = nums[L] + nums[R] + a - target;
            if ( res == 0) {
                result = nums[L] + nums[R] + a;
                return result;
            }else if (res > 0) {
                if (Math.abs(res) < max) {
                    max = Math.abs(res);
                    result = nums[L] + nums[R] + a;
                }
                R--;
            }else {
                if (Math.abs(res) < max) {
                    max = Math.abs(res);
                    result = nums[L] + nums[R] + a;
                }
                L++;
            }
        }
    }
    return result

};

threeSumClosest([-1,2,1,-4],1)