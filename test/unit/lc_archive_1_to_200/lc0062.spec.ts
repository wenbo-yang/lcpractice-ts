xdescribe('leetcode 62: unique path', () => {
    function uniquePaths(m: number, n: number): number {
        const df = generateDf(m, n);
        initializeDf(df);

        for (let i = 1; i < df.length; i++) {
            for (let j = 1; j < df[0].length; j++) {
                df[i][j] = df[i - 1][j] + df[i][j - 1];
            }
        }

        return df[df.length - 1][df[0].length - 1];
    }

    function initializeDf(df: number[][]) {
        for (let i = 0; i < df.length; i++) {
            df[i][0] = 1;
        }

        for (let j = 0; j < df[0].length; j++) {
            df[0][j] = 1;
        }
    }

    function generateDf(m: number, n: number): number[][] {
        return new Array<Array<number>>(m).fill([]).map((r) => new Array<number>(n).fill(0));
    }

    it('test case 1 m = 3, n = 7, output 28', () => {
        const result = uniquePaths(3, 7);
        expect(result).toEqual(28);
    });
});
