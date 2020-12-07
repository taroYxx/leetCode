var nextPermutation = function(nums) {
    if(nums == null || nums.length < 2) return;
    let cur = nums.length - 2;
    let length = nums.length;

    while(cur >= 0){
        // 找到后面连续的 后面的>前面的
        // 再从后面找到比当前大的
        // 交换 转置
        if(nums[cur] < nums[cur + 1]){
            let index = nums.length - 1;
            while(index > cur && nums[index] <= nums[cur]){
                // 比他小的不要
                index = index - 1;
            }
            exchange(nums, cur, index);
            reverseList(nums, cur+1, length-1);
            return nums;
        }
        cur = cur - 1;
    }
    reverseList(nums, 0, length-1);
    return nums;
};


var exchange = function(nums, p, q){
    let temp = nums[p];
    nums[p] = nums[q];
    nums[q] = temp;
}

var reverseList = function(nums, startIndex, endIndex){
    while(startIndex < endIndex){
        exchange(nums, startIndex++, endIndex--);
    }
}





console.log(nextPermutation([1,5,2,4,3,2]))