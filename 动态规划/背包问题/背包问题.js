/*
N = 3, W = 4         N个物品  W重量
wt = [2, 1, 3]       每个物品重量
val = [4, 2, 3]      价值

dp[i][w] 对于前i个物品，当前背包容量为W，这种情况下可以装下的最大的价值

int dp[N+1][W+1]
dp[0][..] = 0
dp[..][0] = 0

for i in [1..N]:
    for w in [1..W]:
        dp[i][w] = max(
            把物品 i 装进背包,
            不把物品 i 装进背包
        )
return dp[N][W]

*/


for i in [1..N]:
    for w in [1..W]:
        dp[i][w] = max(
            dp[i-1][w],
            dp[i-1][w - wt[i-1]] + val[i-1]
        )
return dp[N][W]