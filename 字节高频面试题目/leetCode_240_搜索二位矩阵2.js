var searchMatrix = function(matrix, target) {
    if(matrix.length==0) return false // 判空
    let [letf, up]=[matrix[0].length-1, 0]; // 初始化位置
    while(letf>=0 && up<matrix.length){
        if(matrix[up][letf]>target){
            letf--;
        }else if(matrix[up][letf]<target){
            up++;
        }else{
            return true;
        }
    }
    return false;
};

console.log(searchMatrix([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]],
    20))