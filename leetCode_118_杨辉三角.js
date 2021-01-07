var generate = function(numRows) {

    let res = [];
    for (let i = 0; i < numRows; i++) {
        let subRes = new Array(i+1).fill(1);
        for (let j = 1; j < subRes.length-1; j++) {
            subRes[j] = res[i-1][j-1] + res[i-1][j];
        }
        res.push(subRes);
    }
    return res;

};

console.log(generate(5))