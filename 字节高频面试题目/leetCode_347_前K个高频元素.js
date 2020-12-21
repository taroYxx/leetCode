var topKFrequent = function(nums, k) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if(map.has(nums[i])){
            let count = map.get(nums[i]) + 1;
            map.set(nums[i], count);
        }else{
            map.set(nums[i], 1);
        }
    }

    let array = [];
    for (const [key, value] of map) {
        array.push({
            key, value
        })
    }

    array.sort((a, b) => {
        return b.value - a.value;
    })
    
    return array.slice(0, k).map(item => {
        return item.key;
    })

};

console.log(topKFrequent([1,1,1,2,2,3]), 2)
