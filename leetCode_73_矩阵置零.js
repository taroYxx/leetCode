var setZeroes = function(matrix) {
    
    let iArray = [];
    let jArray = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if(matrix[i][j] == 0){
                iArray.push(i);
                jArray.push(j);
            }
        }
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if(iArray.indexOf(i) != -1 || jArray.indexOf(j) != -1){
                matrix[i][j] = 0;
            }
        }
    }
    return matrix;



};

console.log(setZeroes([
    [0,1,2,0],
    [3,4,5,2],
    [1,3,1,5]
  ]));