var plusOne = function(digits) {
    let i = digits.length - 1;
    let sum = (digits[i] + 1) % 10;
    let jinwei = parseInt((digits[i] + 1)/10);
    digits[i] = sum;
    while(i > 0){
        i--;
        sum = (digits[i] + jinwei) % 10;
        jinwei = parseInt((digits[i] + jinwei)/10);
        digits[i] = sum;
    }
    if(jinwei > 0){
        digits.unshift(1)
    }
    return digits;
};  

console.log(plusOne([9,9,9,9]))