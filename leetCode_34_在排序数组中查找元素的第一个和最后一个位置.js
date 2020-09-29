var searchRange = function(nums, target) {
    let n = nums.length;
    if(n == 0) return [-1, -1];
    if(n == 1){
        if(nums[0] == target){
            return [0, 0];
        }else{
            return [-1, -1];
        }
    }

    let l = 0;
    let r = nums.length-1;
    let index = -1;
    while(l <= r){
        let mid = Math.floor((l+r)/2);
        if(nums[mid] == target){
            index = mid;
        }
        if(nums[0] <= target && target < nums[mid]){
            r = mid - 1;
        }else{
            l = mid + 1;
        }
    }

    if(index == -1) return [-1, -1];

    let min = index;
    while(min >= 0){
        let next = min-1;
        if(nums[min] ==nums[next]){
            min--;
        }else{
            break;
        }
    }
    let max = index;
    while(max < n){
        let next = max+1;
        if(nums[max] == nums[next]){
            max++;
        }else{
            break;
        }
    }

    return [min, max];

};

console.log(searchRange([1,2,3], 1))