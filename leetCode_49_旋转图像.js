var rotate = function(matrix) {

    // 该方法使用新的空间
    let m = matrix.length;

    let res = [];

    for (let i = 0; i < m; i++) {
        let array = [];
        for (let j = 0; j < m; j++) {
            array.push(matrix[j][i]) ///  其实本质是 ij和ji的交换 ，没必要开辟新的array空间
        }
        res.push(array.reverse())
    } 

    return res
};

console.log(rotate([
    [ 5, 1, 9,11],
    [ 2, 4, 8,10],
    [13, 3, 6, 7],
    [15,14,12,16]
  ]))