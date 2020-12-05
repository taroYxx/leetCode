var preimageSizeFZF = function(K) {
    
    return rightBound(K) - leftBound(K) + 1;

};

var rightBound = function(K){
    let left = 0;
    let right = K+1;
    while(left <= right){
        let mid = left + (right - left >> 1);
        if(trailingZeroes(mid) > K){
            right = mid - 1;
        }else if(trailingZeroes(mid) == K){
            left = mid + 1;
        }else if(trailingZeroes(mid) < K){
            left = mid + 1;
        }
    }
    return right;
}

var leftBound = function(K){
    let left = 0;
    let right = K+1;
    while(left <= right){
        let mid = left + (right - left >> 1);
        if(trailingZeroes(mid) < K){
            left = mid + 1;
        }else if(trailingZeroes(mid) == K){
            right = mid - 1;
        }else if(trailingZeroes(mid) > K){
            right = mid - 1;
        }
    }
    return left
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

console.log(preimageSizeFZF(0))