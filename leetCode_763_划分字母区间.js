var partitionLabels = function(S) {

    let map = {};

    for (let i = 0; i < S.length; i++) {
        map[S[i]] = i;
    }

    const res = [];
    let start = 0;
    let scannedCharMax = 0;

    for (let i = 0; i < S.length; i++) {
        let curCharMax = map[S[i]];
        scannedCharMax = Math.max(scannedCharMax, curCharMax);
        if(i == scannedCharMax){
            res.push(i- start + 1);
            start = i + 1;
        }
    }
    return res;

};

// console.log(partitionLabels("aba"))

console.log(partitionLabels("ababcbacadefegdehijhklij"))