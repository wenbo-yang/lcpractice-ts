xdescribe('leetcode 1278: palidrome partitioning III', () => {
    function palindromePartition(s: string, k: number): number {
        const n: number = s.length;
        let changesNeeded = Array.from(Array(n), () => new Array(n).fill(0));
    
        for (let start = n - 1; start >= 0; --start) {
            for (let end = start; end < n; ++end) {
                changesNeeded[start][end] = s[start] != s[end] ? 1 : 0;
                if (start + 1 < end) {
                    changesNeeded[start][end] += changesNeeded[start + 1][end - 1];
                }
            }
        }
    
        let dp = Array.from(Array(n + 1), () => new Array(k + 1).fill(0));
    
        for (let i = 1; i <= n; ++i) {
            for (let j = 1; j <= Math.min(i, k); ++j) {
                if (j === 1) {
                    dp[i][j] = changesNeeded[0][i - 1];
                } else {
                    dp[i][j] = Infinity;
                    for (let h = j - 1; h < i; ++h) {
                        dp[i][j] = Math.min(dp[i][j], dp[h][j - 1] + changesNeeded[h][i - 1]);
                    }
                }
            }
        }
        return dp[n][k];
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
