xdescribe('leetcode 807: description', () => {
    function maxIncreaseKeepingSkyline(grid: number[][]): number {
        let rowMaxes = grid.map(row => Math.max(...row));

        let colMaxes = new Array(grid[0].length).fill(0).map((_, colIndex) =>
            Math.max(...grid.map(row => row[colIndex]))
        );

        let totalIncrease = 0;

        for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
            for (let colIndex = 0; colIndex < grid[0].length; colIndex++) {
                let limitHeight = Math.min(rowMaxes[rowIndex], colMaxes[colIndex]);
                totalIncrease += limitHeight - grid[rowIndex][colIndex];
            }
        }

        return totalIncrease;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
