var kmp = function(haystack, needle) {
    if(needle == "") return 0;
    let i = 0;
    while(i < haystack.length){
        let j = 0;
        if(haystack[i] == needle[j]){
            while(j < needle.length){
                if(haystack[i+j] == needle[j]){
                    j++;
                }else{
                    break
                }
            }
            if(j == needle.length){
                console.log(i);
                return i;
            }else{
                let next = haystack[i+needle.length];
                let q = needle.length-1;
                let dur = -1;
                while(q > 0){
                    if(needle[q] == next){
                        dur = q;
                        break;
                    }else{
                        q--;
                    }
                }
                if(dur != -1){
                    i = i + needle.length - dur;
                }else{
                    i++;
                }            
            }
        }else{
            i++;
        }
    }
    console.log("-1");
    return -1;

};


kmp("mississippi", "issip")