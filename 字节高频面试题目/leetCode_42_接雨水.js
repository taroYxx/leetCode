var trap = function(height) {
    let sum = 0;
    // dp_left 代表第i列左边最高的墙的高度， 不包括自己
    // dp_rigth 代表第i列右边最高的墙的高度， 不包括自己
    let max_left = new Array(height.length).fill(0);
    let max_right = new Array(height.length).fill(0);

    for (let i = 1; i < height.length-1; i++) {
        max_left[i] = Math.max(max_left[i-1], height[i-1]);
    }
    
    for (let i = height.length-2; i >= 0; i--) {
        max_right[i] = Math.max(max_right[i+1], height[i+1]);
    }

    for (let i = 1; i < height.length; i++) {
        let min = Math.min(max_right[i], max_left[i]);
        if(min > height[i]){
            sum = sum + (min - height[i]);
        }
    }
    return sum;
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))