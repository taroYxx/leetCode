var divide = function(dividend, divisor) {
    let INT_MAX = 2**31 - 1;
    let INT_MIN = - INT_MAX;
    if(dividend == 0) return 0;
    if(divisor == 1) return dividend;
    if(divisor == -1) {
        if(dividend > INT_MIN) return -dividend;
        return INT_MAX;
    }
    let a = dividend;
    let b = divisor;
    let sign = a ^ b >> 32;
    a = a > 0 ? a : -a;
    b = b > 0 ? b : -b;
    let res = div(a, b);
    if(sign > 0) return res > 2 ** 32 ? 2**32:res;
    return -res
    

    function div(a, b){
        if(a < b) return 0;
        let count = 1;
        let tb = b;
        while((tb + tb) <= a){
            count = count + count;
            tb = tb + tb
        };
        return count + div(a-tb, b);
    }


};


console.log(divide(8, 2));