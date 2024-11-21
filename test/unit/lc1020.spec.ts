xdescribe('leetcode 1020: number of enclaves', () => {
    function numEnclaves(grid: number[][]): number {
        const rows = grid.length;
        const cols = grid[0].length;

        for (let row = 0; row < rows; ++row) {
            for (let col = 0; col < cols; ++col) {
                if (grid[row][col] === 1 && (row === 0 || row === rows - 1 || col === 0 || col === cols - 1)) {
                    dfs(row, col, grid);
                }
            }
        }
        
        let enclaveCount = 0;
        for (const row of grid) {
            for (const cell of row) {
                enclaveCount += cell;
            }
        }
        return enclaveCount;
    };

    function dfs(row: number, col: number, grid: number[][]) {
        const rows = grid.length;
        const cols = grid[0].length;
        const directions = [-1, 0, 1, 0, -1];
        grid[row][col] = 0;
        for (let k = 0; k < 4; ++k) {
            const nextRow = row + directions[k];
            const nextCol = col + directions[k + 1];
            if (nextRow >= 0 && nextRow < rows && nextCol >= 0 && nextCol < cols && grid[nextRow][nextCol] === 1) {
                dfs(nextRow, nextCol, grid);
            }
        }
    };
    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
