xdescribe('leetcode 764: description', () => {
    function orderOfLargestPlusSign(n: number, mines: number[][]): number {
        const dp: number[][] = new Array<Array<number>>(n).fill([]).map(r => new Array<number>(n).fill(n));
        
        for (const e of mines) {
            dp[e[0]][e[1]] = 0;
        }

        for (let i = 0; i < n; ++i) {
            let left = 0, right = 0, up = 0, down = 0;
            for (let j = 0, k = n - 1; j < n; ++j, --k) {
                left = dp[i][j] > 0 ? left + 1 : 0;
                right = dp[i][k] > 0 ? right + 1 : 0;
                up = dp[j][i] > 0 ? up + 1 : 0;
                down = dp[k][i] > 0 ? down + 1 : 0;
                dp[i][j] = Math.min(dp[i][j], left);
                dp[i][k] = Math.min(dp[i][k], right);
                dp[j][i] = Math.min(dp[j][i], up);
                dp[k][i] = Math.min(dp[k][i], down);
            }
        }
        return Math.max(...dp.flat(1));
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
