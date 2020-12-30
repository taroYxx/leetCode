var decodeString = function(s) {

    // 栈
    let strStack = [];
    let numStack = [];
    let res  = "";
    let num = 0;
    for (let i = 0; i < s.length; i++) {
        if(s[i] == "["){
            strStack.push(res);
            res = '';
            numStack.push(num);
            num = 0;
        }else if(!isNaN(s[i])){
            num = num * 10 + Number(s[i]);
        }
        else if (s[i] == "]"){
            let repeatTime = numStack.pop();
            res = strStack.pop() + res.repeat(repeatTime);
        }else{
            res = res + s[i]
        }
    }
    return res;
};

console.log(decodeString("2[abc]3[cd]ef"))