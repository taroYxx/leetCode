
var letterCombinations = function(digits) {
    let dic = {
        "2":['a','b','c'],
        "3":['d','e','f'],
        "4":['g','h','i'],
        "5":['j','k','l'],
        "6":['m','n','o'],
        "7":['p','q','r','s'],
        "8":['t','u','v'],
        "9":['w','x','y','z']
    }

    // let nums = [];
    // for (let index = 0; index < digits.length; index++) {
    //     nums.push(dic[digits[index]])
    // }
    let res = [];

    function dfs(curStr, i){
        if (i > digits.length - 1) {
            res.push(curStr);
            return;
        }
        let letter = dic[digits[i]];
        for (const l of letter) {
            dfs(curStr + l, i+1);
        }
    }
    dfs("",0)
    
    return res;

};
console.log(letterCombinations("23")) 