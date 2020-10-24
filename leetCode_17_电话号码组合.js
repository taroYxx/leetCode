
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

    let nums = [];
    for (let index = 0; index < digits.length; index++) {
        nums.push(dic[digits[index]])
    }

    let res = []
    let visit = new Array(digits.length).fill(false)
    function backtrack(cur, nums){
        if(cur.length == nums.length){
            res.push(cur.concat())
            console.log(cur);
            return cur
        }
        for (let i = 0; i < nums.length; i++) {
            for (let j = 0; j < nums[i].length; j++) {
                const element = nums[i][j];
                if(visit[i] == true) continue;
                visit[i] = true;
                cur.push(element);
                backtrack(cur, nums)
                visit[i] = false;
                cur.pop()
            }
        }
    }
    backtrack([],nums)
    return res;

};
letterCombinations("23")