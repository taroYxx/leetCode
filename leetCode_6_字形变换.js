var convert = function(s, numRows) {

    if(s.length <= numRows || numRows == 1){
        console.log(s)
        return;
    }

    let res = [];
    for (let i = 0; i < numRows; i++) {
        res.push("");
    }

    let down = true;
    let a = 0;
    res[0] = res[0] + s[0];
    for (let i = 0; i < s.length-1; i++) {
        if(i%(numRows - 1) == 0){
            down = !down;
        }
        if(down == false){
            a = a + 1;
        }else{
            a = a - 1;
        }
        res[a] = res[a] + s[i+1];
    }

    let result = ''
    for (let i = 0; i < res.length; i++) {
        result = result + res[i]
    }
    console.log(result);


};

convert('LEETCODEISHIRING', 4)