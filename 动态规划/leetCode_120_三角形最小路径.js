var minimumTotal = function(triangle) {
    
    for (let i = 0; i < triangle.length; i++) {
        for (let j = 0; j < triangle[i].length; j++) {
            if(i==0) continue;
            if(j == 0){
                triangle[i][0] = triangle[i-1][0] + triangle[i][0];
            }else if(j == i){
                triangle[i][i] = triangle[i-1][i-1] + triangle[i][i]
            }else{
                triangle[i][j] = Math.min(triangle[i-1][j-1], triangle[i-1][j]) + triangle[i][j]
            }
        }
    }

    let length = triangle.length;

    return Math.min(...triangle[length-1]);

};


console.log(minimumTotal([
    [2],
   [3,4],
  [6,5,7],
 [4,1,8,3]
]));