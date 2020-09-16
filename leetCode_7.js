var reverse = function(x) {
    
    let str = String(x)
    var resultStr = str.split('').reverse(); 
    if(resultStr[0] == 0){
        resultStr.shift()
    }
    if(resultStr.indexOf("-") != -1){
            resultStr.pop();
            resultStr.unshift("-");
        }


    let result = resultStr.join("")

    if (result < - (2 ** 31) || result > 2 ** 31 -1) {
        return 0;
    }

    return result

};

reverse(1534236469)