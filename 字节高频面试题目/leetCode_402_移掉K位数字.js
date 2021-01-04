var removeKdigits = function(num, k) {
    let stack = [];
    let count = 0;
    for (let i = 0; i < num.length; i++) {
        while(stack[stack.length - 1] > num[i] && count < k){
            stack.pop();
            count ++ ;
        }
        if(stack.length != 0 || num[i] != "0"){
            stack.push(num[i])
        }
        
    }
    while (count < k) {
        stack.pop();
        count ++;
    }

    if(stack.length == 0){
        return "0"
    }
    return stack.join("");
};


console.log(removeKdigits("1234567890", 9))