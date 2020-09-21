var threeSum = function(nums) {

    let newNums = nums.sort((a, b) => a - b);
    let result = []
   
    for (let index = 0; index < newNums.length; index++) {
        let a = newNums[index];
        if (a > 0) break;
        if(index > 0 && newNums[index] == newNums[index-1]) continue;
      
        let i = index + 1;
        let j = newNums.length - 1;
        while(i<j){
            let res = [];
            if(newNums[i] + newNums[j] == -a){
                res.push(a);
                res.push(newNums[i]);
                res.push(newNums[j]);
                while (i<j && newNums[i] == newNums[i+1]) i++; // 去重
                while (i<j && newNums[j] == newNums[j-1]) j--; // 去重
                i++;
                j--;
                result.push(res);
            }else{
                if(newNums[i] + newNums[j] + a > 0){
                    j--;
                }else{
                    i++;
                }
            }
        }  
    }
    console.log(result)

};


threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4])