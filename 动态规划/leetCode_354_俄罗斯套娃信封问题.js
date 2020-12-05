var maxEnvelopes = function(envelopes) {
    if(envelopes.length == 0) return 0;
    let sortArray = envelopes.sort(function(a, b){
        return a[0] > b[0] ? 1 : -1;
    })

    let dp = new Array(envelopes.length).fill(1);
    
    console.log(sortArray);
    for (let i = 0; i < sortArray.length; i++) {
        for (let j = 0; j < i; j++) {
            if(sortArray[i][1] > sortArray[j][1] && sortArray[i][0] > sortArray[j][0]){
                dp[i] = Math.max(dp[j]+1, dp[i]);
            }
        }
    }
    return Math.max(...dp)
  
};  


console.log(maxEnvelopes([[5,4],[6,4],[6,7],[2,3]]));