var breakfastNumber = function(staple, drinks, x) {
    // 两数之和
    staple = staple.sort((a, b)=>a-b);
    drinks = drinks.sort((a, b)=>a-b);
    let res = 0;


    for (let i = 0; i < staple.length; i++) {
        if(staple[i] > x) continue;
        //二分法 找临界点 查找右边界
        let target = x - staple[i];
        let p = 0;
        let q = drinks.length-1;
        let maxIndex = -1;
        while(p <= q){
            let mid = p + ((q - p)>>1);
            if(drinks[mid] == target){
                maxIndex = mid;
                p = mid + 1;
            }else if(drinks[mid] < target){
                maxIndex = mid
                p = mid + 1;
            }else if(drinks[mid] > target){
                q = mid - 1;
            }
        }
        res = res + maxIndex + 1;
    }
    return res%(1e9 + 7)
};
// [5, 10 ,20]  [2, 5, 5]
console.log(breakfastNumber([6,1,9,2,9,9,3,4],[2,7,10,2,9,2,1,3],2))