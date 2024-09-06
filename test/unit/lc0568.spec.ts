xdescribe('leetcode 568: best flight days', () => {
    function maxVacationDays(flights: number[][], days: number[][]): number {
        const n = flights.length;
        const K = days[0].length;

        const f = new Array<Array<number>>(K + 1).fill([]).map((r) => new Array<number>(n).fill(Number.MIN_SAFE_INTEGER));

        f[0][0] = 0;
        for (let k = 1; k <= K; ++k) {
            for (let j = 0; j < n; ++j) {
                f[k][j] = f[k - 1][j];
                for (let i = 0; i < n; ++i) {
                    if (flights[i][j] == 1) {
                        f[k][j] = Math.max(f[k][j], f[k - 1][i]);
                    }
                }
                f[k][j] += days[j][k - 1];
            }
        }
        let ans = 0;
        for (let j = 0; j < n; ++j) {
            ans = Math.max(ans, f[K][j]);
        }
        return ans;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
