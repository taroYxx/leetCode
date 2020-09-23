var romanToInt = function(s) {
    
    if(s.length == 0) return 0;

    let t = {
        "I":1,
        "V":5,
        "X":10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000
    };
    let result = 0;
    for (let i = 0; i < s.length-1; i++) {
        const element = s[i];
        if(t[s[i+1]] > t[s[i]]){
            result = result - t[s[i]]
        }else{
            result = result + t[s[i]]
        }
    }
    result = result + t[s[s.length-1]];
};

romanToInt("MCMXCIV")