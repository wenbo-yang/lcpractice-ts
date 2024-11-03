xdescribe('leetcode 920: number of music playlists', () => {
    function numMusicPlaylists(n: number, goal: number, k: number): number {
        const MOD = 1e9 + 7; 
        const dp = new Array(goal + 1).fill(0).map(() => new Array(n + 1).fill(0)); 
        dp[0][0] = 1;

        for (let i = 1; i <= goal; ++i) {
            for (let j = 1; j <= n; ++j) {
                dp[i][j] = dp[i - 1][j - 1] * (n - j + 1) % MOD;

                if (j > k) {
                    dp[i][j] = (dp[i][j] + dp[i - 1][j] * (j - k)) % MOD;
                }
            }
        }
        return dp[goal][n];
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
