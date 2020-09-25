var kmp = function(haystack, needle) {
    if(needle == "") return -1;
    let table = [];
    for (let index = 1; index < needle.length+1; index++) {
        const element = needle.slice(0,index);
        let res = 0;
        for (let i = 1; i < element.length; i++) {
            if(element.slice(0,i) == element.slice(element.length-i, element.length)){
                res = element.slice(0,i).length;
            }
        }
        table.push(res);
    };
    console.log(table);
    let m = 0;
    let result = -1;
    while(m < haystack.length){
        let n = 0;
        if(haystack[m+n] == needle[n]){
            while(n<needle.length){
                if(haystack[m+n] == needle[n]){
                    n++;
                }else{
                    break;
                }
            }
            if(n == needle.length){
                result = m;
                break;
            }else{
                m = m + n - table[n-1];
            }
        }else{
            m++;
        }
        
    }
    return result;
};


kmp("BBC ABCDAB ABCDABCDABDE", "ABCDABD")