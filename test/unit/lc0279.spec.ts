xdescribe('leetcode 279: least number of squares', () => {
    function numSquares(n: number): number {
        const df = new Array<number>(n + 1).fill(Number.MAX_SAFE_INTEGER);
        df[0] = 0;
        for (let i = 1; i <= n; ++i) {
            for (let j = 1; j * j <= i; ++j) {
                df[i] = Math.min(df[i], df[i - j * j] + 1);
            }
        }

        return df[n];
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
