xdescribe('leetcode num: count negative numbers in a sorted matrix', () => {
    function countNegatives(grid: number[][]): number {
        const rowCount = grid.length;
        const columnCount = grid[0].length;
        let negativeCount = 0;
        let row = rowCount - 1;
        let column = 0;
    
        while (row >= 0 && column < columnCount) {
            if (grid[row][column] < 0) {
                negativeCount += columnCount - column;
                row--;
            } else {
                column++;
            }
        }
        return negativeCount;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
