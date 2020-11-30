var preimageSizeFZF = function(K) {
    let max = 1e9;
    console.log(max)
};


var leftBound()= function(K){
    let left = 0;
    let right = 1e9;
    

}

var trailingZeroes = function(n) {
    let res = 0;
    let divisor = 5;
    while(divisor <= n){
        res = res + parseInt(n/divisor);
        divisor = divisor * 5
    }
    return res;
};

console.log(preimageSizeFZF(5))