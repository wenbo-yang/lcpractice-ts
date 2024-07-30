xdescribe('leetcode 64: min path sum', () => {
    function minPathSum(grid: number[][]): number {
        const df = generateDf(grid.length, grid[0].length);
        initializeDf(df, grid);

        for (let i = 1; i < df.length; i++) {
            for (let j = 1; j < df[0].length; j++) {
                df[i][j] = grid[i][j] + Math.min(df[i - 1][j], df[i][j - 1]);
            }
        }

        return df[df.length - 1][df[0].length - 1];
    }

    function generateDf(row: number, col: number) {
        return new Array<Array<number>>(row).fill([]).map((r) => new Array<number>(col).fill(0));
    }

    function initializeDf(df: number[][], grid: number[][]) {
        df[0][0] = grid[0][0];

        for (let i = 1; i < grid.length; i++) {
            df[i][0] = grid[i][0] + df[i - 1][0];
        }

        for (let j = 1; j < grid.length; j++) {
            df[0][j] = grid[0][j] + df[0][j - 1];
        }
    }

    it('test case 1 Input: grid = [[1,3,1],[1,5,1],[4,2,1]], output 7 ', () => {
        const grid = [
            [1, 3, 1],
            [1, 5, 1],
            [4, 2, 1],
        ];
        const result = minPathSum(grid);
        expect(result).toEqual(7);
    });
});
