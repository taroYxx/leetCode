var jump = function(nums) {

    let n = nums.length;
    let jumpNum = 0;
    let end = 0;
    let farthest = 0;
    for (let i = 0; i < n-1; i++) {
        farthest = Math.max(nums[i]+i, farthest);
        if(end == i){
            jumpNum ++ ;
            end = farthest;
        }
    }
    return jumpNum
};

console.log(jump([2,3,1,1,4]));