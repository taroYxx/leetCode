var numDecodings = function(s) {
    let dp = new Array(s.length+1).fill(0);
    dp[0] = 1;
    dp[1] = s[0] === "0" ? 0 : 1;
    

    for (let i = 2; i <= s.length; i++) {
        if(s[i] == "0"){
            if(s[i-1] == "1" || s[i-1] == "2"){
                dp[i] = dp[i-1];
            }else{
                return 0
            }
        }else if(s[i-1] == "1" || (s[i-1] == '2' && s[i] >= "1" && s[i] <= "6")){
            dp[i] = dp[i] + dp[i-1];
        }
    }

    return dp[s.length]

};


console.log(numDecodings("226"))