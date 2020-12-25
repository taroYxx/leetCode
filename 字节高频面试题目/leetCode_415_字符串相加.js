var addStrings = function(num1, num2) {
    let s1 = num1.split("");
    let s2 = num2.split("");
    let res =[];

    let d = 0;
    while(s1.length > 0 || s2.length > 0){
        if(s1.length > 0 && s2.length > 0){
            let sum = parseInt(s1.pop())+ parseInt(s2.pop()) + d;
            d = parseInt(sum/10);
            sum = sum % 10;
            res.push(sum);
        }
        if(s1.length > 0 && s2.length == 0){
            let sum = parseInt(s1.pop()) + d;
            d = parseInt(sum/10);
            sum = sum % 10;
            res.push(sum);
        }
        if(s2.length > 0 && s1.length == 0){
            let sum = parseInt(s2.pop()) + d;
            d = parseInt(sum/10);
            sum = sum % 10;
            res.push(sum);
        }
    }
    if(d > 0){
        res.push(d);
    }

    return res.reverse().join("")


};