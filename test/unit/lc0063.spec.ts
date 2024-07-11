xdescribe('leetcode 63: unique with blocks', () => {
    function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
        const df = generateDf(obstacleGrid.length, obstacleGrid[0].length);
        initializeDf(obstacleGrid, df);

        for (let i = 1; i < df.length; i++) {
            for (let j = 1; j < df[0].length; j++) {
                df[i][j] = obstacleGrid[i][j] === 1 ? 0 : df[i - 1][j] + df[i][j - 1];
            }
        }

        return df[df.length - 1][df[0].length - 1];
    }

    function initializeDf(obstacleGrid: number[][], df: number[][]) {
        for (let i = 0; i < df.length; i++) {
            if (obstacleGrid[i][0] === 1) {
                break;
            }

            df[i][0] = 1;
        }

        for (let j = 0; j < df[0].length; j++) {
            if (obstacleGrid[0][j] === 1) {
                break;
            }

            df[0][j] = 1;
        }
    }

    function generateDf(m: number, n: number): number[][] {
        return new Array<Array<number>>(m).fill([]).map((r) => new Array<number>(n).fill(0));
    }

    it('test case 1 obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]], output 2', () => {
        const obstacleGrid = [
            [0, 0, 0],
            [0, 1, 0],
            [0, 0, 0],
        ];
        const result = uniquePathsWithObstacles(obstacleGrid);
        expect(result).toEqual(2);
    });
});
