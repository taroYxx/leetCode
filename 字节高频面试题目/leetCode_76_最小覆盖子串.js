/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {

    if(t.length > s.length) return ""
    if(t.length == 1){
        if(s.indexOf(t) != -1){
            return s[s.indexOf(t)];
        }else{
            return ""
        }
    }
    if(t.length == s.length){
       return s.split("").sort().join("") == t.split("").sort().join("") ? s : "";
    }

    let target = t.split("");
    let need = {};
    for (let i = 0; i < target.length; i++) {
        need[target[i]] = 0
    }

    let i = 0;
    let j = 0;
    let min = Infinity;
    let res = "";

    while(j < s.length){
        if(t.includes(s[j])){
            need[s[j]] = need[s[j]] + 1;
        }
        let allSuccess = true;
        for (const value of Object.keys(need)) {
            if(need[value] == 0){
                allSuccess = false;
                break;
            }
        }
        if(allSuccess){
            while(i < j){
                // 如果相同要继续往后移
                if(t.includes(s[i])) break;
                i++;
            }
            if(j-i < min){
                min = j - i;
                res = s.slice(i, j+1);
            }

            for (const value of Object.keys(need)) {
                if(value == s[i]){
                    need[value] -- ;
                }
            }
            i = i + 1;
            while(i < j){
                if(t.includes(s[i])) break;
                i++;
            }
        }  
        j = j + 1;
    }

    return res;

};


console.log(minWindow("bba", "ba"))