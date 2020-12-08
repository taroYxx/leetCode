var restoreIpAddresses = function(s) {

    let length = s.length;
    let sum = []

    for (let i = 1; i <= 3; i++) {

        let first = s.slice(0, i);
        if(first[0] == "0" && first.length > 1) continue;
        if(parseInt(first) > 255) continue;
        if(i > length) continue;

        for (let j = 1; j <= 3; j++) {
            let second = s.slice(i, j+i);
            if(second[0] == "0" && second.length > 1) continue;
            if(parseInt(second) > 255) continue;
            if(j+i > length) continue;

            for (let p = 1; p <= 3; p++) {
                let third = s.slice(i+j, j+i+p);
                if(third[0] == "0" && third.length > 1) continue;
                if(parseInt(third) > 255) continue;
                if(j+i+p > length) continue;

                for (let q = 1; q <= 3; q++) {
                    let fouth = s.slice(i+j+p, j+i+p+q);
                    if(fouth[0] == "0" && fouth.length > 1) continue;
                    if(parseInt(fouth) > 255) continue;
                    if(j+i+p+q != length) continue;

                    sum.push([first,second,third,fouth].join("."));
                }
                
            }
        }  
    }
    return sum;

};

console.log(restoreIpAddresses("101023"))