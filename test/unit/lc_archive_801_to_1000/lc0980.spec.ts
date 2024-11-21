xdescribe('leetcode 980: unique path', () => {
    function uniquePathsIII(grid: number[][]): number {
        const rows = grid.length;
        const cols = grid[0].length;
        let startRow = 0;
        let startCol = 0;
        let emptyCells = 0;

        for (let i = 0; i < rows; ++i) {
            for (let j = 0; j < cols; ++j) {
                if (grid[i][j] === 0) {
                    emptyCells++;
                } else if (grid[i][j] === 1) {
                    startRow = i;
                    startCol = j;
                }
            }
        }

        const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
        visited[startRow][startCol] = true;

        return dfs(startRow, startCol, 0, visited, grid, emptyCells);
    };

    function dfs(row: number, col: number, steps: number, visited: boolean[][], grid: number[][], emptyCells: number): number {
        const directions = [-1, 0, 1, 0, -1];
        if (grid[row][col] === 2) {
            return steps === emptyCells + 1 ? 1 : 0;
        }

        let paths = 0;

        for (let d = 0; d < 4; ++d) {
            const nextRow = row + directions[d];
            const nextCol = col + directions[d + 1];

            if (nextRow >= 0 && nextRow < grid.length && nextCol >= 0 && nextCol < grid[0].length &&
                !visited[nextRow][nextCol] && grid[nextRow][nextCol] !== -1) {
                visited[nextRow][nextCol] = true;
                paths += dfs(nextRow, nextCol, steps + 1, visited, grid, emptyCells);
                visited[nextRow][nextCol] = false; 
            }
        }
        return paths;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
