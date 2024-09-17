xdescribe('leetcode 629: k inverse pairs in array', () => {
    function kInversePairs(n: number, k: number): number {
        let M = 1000000007;
        const df = new Array<Array<number>>(n + 1).fill([]).map(r => new Array<number>(k + 1));
        df[0][0] = 1;
        for (let i = 0; i <= n; ++i) {
            for (let j = 0; j < i; ++j) {
                for (let m = 0; m <= k; ++m) {
                    if (m - j >= 0 && m - j <= k) {
                        df[i][m] = (df[i][m] + df[i - 1][m - j]) % M;
                    }
                }
            }
        }
        return df[n][k];
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
