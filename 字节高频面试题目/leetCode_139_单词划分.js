var wordBreak = function(s, wordDict) {
    let wordDictSet = new Set(wordDict);
    // dp[i] 表示字符串 s 前 i 个字符组成的字符串 
    //s[0..i-1]是否能被空格拆分成若干个字典中出现的单词。
    let dp = new Array(s.length + 1).fill(false)
    dp[0] = true;
    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            if(dp[j] && wordDictSet.has(s.slice(j, i))){
                // d[j]是保证 前[0 : j]
                // s.slice是保证 后面[j, i]
                dp[i] = true;
                break;
            }
        }
    }
    console.log(dp)
    return dp[s.length]

};
// console.log(wordBreak("leetcode", ["leet", "code"]))
console.log(wordBreak("catsand", ["cats", "dog", "sand", "and", "cat"]))