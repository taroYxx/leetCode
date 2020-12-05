

// var canPartition = function(nums) {
//     let sum = 0;
//     for (let i = 0; i < nums.length; i++) {
//         sum = sum + nums[i];
//     }
//     if (sum % 2 == 1) return false;
//     sum = sum >> 1;
//     let n = nums.length;
//     let dp = new Array((sum+1)).fill(false);
//     dp[0] = true;

//     for (let i = 0 ; i < n; i++) {
//         for (let j = sum; j >=0; j--) {
//             if((j - nums[i]) >= 0){ 
//               dp[j] = dp[j] || dp[j - nums[i]];
//             }
//         }
//     }
//     return dp[sum];

// };

// 背包法
var canPartition = function(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    if (sum % 2 == 1) return false;
    sum = sum >> 1;
    let n = nums.length;
    let dp = new Array((n+1));
    for (let i = 0; i < n+1; i++) {
        dp[i] = new Array((sum+1)).fill(false);
        dp[i][0] = true;
    }

    for (let i = 1 ; i <= n; i++) {
        for (let j = 1; j <= sum; j++) {
            if((j - nums[i-1]) < 0){ 
                dp[i][j] = dp[i-1][j];
            }else{
                dp[i][j] = dp[i-1][j] || dp[i-1][j-nums[i-1]];
            }
        }
    }
    return dp[n][sum];
};



// 回溯做法
// var canPartition = function(nums) {
//     let sum = 0;
//     for (let i = 0; i < nums.length; i++) {
//         sum = sum + nums[i];
//     }
//     if (sum % 2 == 1) return false;
//     let target = sum >> 1;

//     let tag = false;
//     let visit = new Array(nums.length).fill(false)
//     function dfs(sum, cur){
//         if(sum == target){
//             tag = true;
//             return
//         }
//         if(cur.length == nums.length) return;
//         for (let i = 0; i < nums.length; i++) {
//             if(visit[i]) continue;
//             sum = sum + nums[i];
//             visit[i] = true;
//             cur.push(nums[i]);
//             dfs(sum, cur);
//             cur.pop();
//             visit[i] = false;
//             sum = sum - nums[i];
//         }
//     }
//     dfs(0, []);
//     return tag;

// };

console.log(canPartition([1, 2, 5]));