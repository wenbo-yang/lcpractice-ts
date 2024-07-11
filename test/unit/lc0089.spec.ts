xdescribe('leetcode 89: gray code', () => {
    function grayCode(n: number): number[] {
        const df: number[][] = new Array<Array<number>>(n + 1).fill([]);

        df[0] = [0];
        for (let i = 1; i <= n; i++) {
            df[i] = df[i - 1];
            for (let j = df[i - 1].length - 1; j >= 0; j--) {
                df[i].push(df[i - 1][j] | (1 << (i - 1)));
            }
        }

        return df[n];
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
