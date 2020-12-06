var paintingPlan = function(n, k) {
    if(k == n*n || k == 0) return 1;
    if(k<n || k > n*n) return 0;
    let res = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if((i*n) + (j*n) - (i*j) == k) {
                res = res + C(n,i) * C(n,j);
            }            
        }
        
    }
    return res;
};

var C = function(n , i){
    if(i == 0) return 1;
    let p = n;
    let q = 1;
    let res = n;
    let chushu = 1;
    for(let index = 1; index < i; index++){
        p = p - 1;
        res = res * p
        q = q + 1;
        chushu = chushu * q;
    }
    return res / chushu;
}


console.log(paintingPlan(2,2))
