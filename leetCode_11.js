var maxArea = function(height) {
    let i = 0;
    let j = height.length-1;
    let max = 0;
    console.log(height);
    while(i<j){

        let sum = Math.min(height[i], height[j]) * (j - i);
        if(sum >= max){
            max = sum;
        }
        if(height[i] > height[j]){
            j--;
        }else{
            i++
        }
        console.log(i, j);
    }
    console.log(max);

};

maxArea([1,8,6,2,5,4,8,3,7])