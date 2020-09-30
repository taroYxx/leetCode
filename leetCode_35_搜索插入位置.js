var searchInsert = function(nums, target) {
    if(target < nums[0]) return 0;
    let n = nums.length;
    if(target > nums[n-1]) return n;
    let l = 0;
    let r = n-1;
    while(l <= r){
        let mid = (l+r) >> 1;
        if(nums[mid] == target){
            return mid;
        }
        if(target >= nums[0] && target < nums[mid]){
            r = mid - 1;
        }else{
            l = mid + 1;
        }
    }
    if(target > nums[r]){
        r++;
    }else{
        r--;
    }
    return l;
};
console.log(searchInsert([1,3,5,6], 2))