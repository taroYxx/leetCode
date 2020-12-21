var findKthNumber = function(n, k) {

    // 确定在什么节点下 有多少个子节点，包含自己。  
    function getCount(prefix, n){
        let cur = prefix;
        let next = prefix + 1;
        let count = 0;
        while(cur <= n){
            count += Math.min(next, n+1) - cur;
            cur *= 10;
            next *= 10;
        }
        return count;
    }

    let p = 1; // 作为第一个指针，当p==k时，也就是到了排位第k的数  相当于步数
    let prefix = 1; // 前缀
    while(p < k){
        let count = getCount(prefix, n);
        if(p + count > k){// 找到目标节点
            prefix *= 10;  // 目标节点向下移动 
            p++;
        }else if(p + count <= k){
            prefix ++;     // 目标节点向右移动
            p += count;
        }
    }
    return prefix;
};


console.log(findKthNumber(100, 12))