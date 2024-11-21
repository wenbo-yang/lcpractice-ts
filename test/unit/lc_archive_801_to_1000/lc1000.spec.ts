xdescribe('leetcode 1000: min cost to merge stones', () => {
    function mergeStones(stones: number[], k: number): number {
        let n: number = stones.length;

        if ((n - 1) % (k - 1) !== 0) {
            return -1;
        }

        let prefixSums: number[] = new Array(n + 1).fill(0);
        for (let i = 1; i <= n; ++i) {
            prefixSums[i] = prefixSums[i - 1] + stones[i - 1];
        }

        let dp: number[][][] = Array.from({ length: n + 1 }, () =>
            Array.from({ length: n + 1 }, () => new Array(k + 1).fill(Number.MAX_SAFE_INTEGER))
        );

        for (let i = 1; i <= n; ++i) {
            dp[i][i][1] = 0;
        }

        for (let length = 2; length <= n; ++length) {
            for (let i = 1; i + length - 1 <= n; ++i) {
                let j = i + length - 1;
                for (let piles = 2; piles <= k; ++piles) {
                    for (let mid = i; mid < j; mid += k - 1) {
                        dp[i][j][piles] = Math.min(dp[i][j][piles], dp[i][mid][1] + dp[mid + 1][j][piles - 1]);
                    }
                }
                if (dp[i][j][k] < Number.MAX_SAFE_INTEGER) {
                    dp[i][j][1] = dp[i][j][k] + prefixSums[j] - prefixSums[i - 1];
                }
            }
        }

        return dp[1][n][1];
    };
    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
