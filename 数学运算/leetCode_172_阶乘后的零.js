var trailingZeroes = function(n) {
    let res = 0;
    let divisor = 5;
    while(divisor <= n){
        res = res + parseInt(n/divisor);
        divisor = divisor * 5
    }
    return res;
};

console.log(trailingZeroes(10));