xdescribe('leetcode 276: number of ways of painting fence', () => {
    function numberOfWaysOfPaintingFence(n: number, k: number): number {
        if (n == 0 || k == 0)
            return 0;

        // `dp[i][0]` same color
        // `dp[i][1]` different color
        const dp = new Array<Array<number>>(n).fill([]).map(r => r = new Array<number>(k).fill(0));
        dp[0][0] = 0;
        dp[0][1] = k;
        for (let i = 1; i < n; i++) {
            dp[i][0] = dp[i - 1][1]; // or else 3-posts the same color
            dp[i][1] = (dp[i - 1][0] + dp[i - 1][1]) * (k - 1);
        }
        return dp[n - 1][0] + dp[n - 1][1];
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
