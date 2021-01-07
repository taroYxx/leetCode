var sortColors = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    for (let i = left; i <= right; i++) {
        if(nums[i] == 2){
            [nums[i], nums[right]] = [nums[right], nums[i]];
            right--;
            i--;
        }else if(nums[i] == 0){
            [nums[i], nums[left]] = [nums[left], nums[i]];
            left++
        }
    }
    return nums;
};

console.log(sortColors([2,0,2,1,1,0]))


/*
function QuickSort(array, low ,high){
    let i = low;
    let j = high;
    let key = array[low];
    if(low >= high){
        return;
    }
    while(low < high){
        while(low < high && key <= array[high]){
            --high
        }
        if(key > array[high]){
            Swap(array[low], array[high]);
            ++low;
        }
        while(low < high && key >= array[low]){
            ++low;
        }
        if(key < array[low]){
            Swap(array[low], array[high]);
            --high;
        }
    }
    QuickSort(array, i, low-1); //用同样的方式对分出来的左边的部分进行同上的做法
    QuickSort(array, low+1, j); //用同样的方式对分出来的右边的部分进行同上的做法




}



*/