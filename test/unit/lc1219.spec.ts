xdescribe('leetcode 1219: path with maximum gold', () => {
    function getMaximumGold(grid: number[][]): number {
        const rowCount: number = grid.length;
        const colCount: number = grid[0].length;
    
        function dfs(row: number, col: number): number {
            if (row < 0 || row >= rowCount || col < 0 || col >= colCount || grid[row][col] === 0) {
                return 0;
            }
    
            const currentGold: number = grid[row][col];
            grid[row][col] = 0;
          
            let maxGoldFromHere: number = 0;
          
            const directions: number[] = [-1, 0, 1, 0, -1];
          
            for (let k: number = 0; k < 4; ++k) {
                const nextRow: number = row + directions[k];
                const nextCol: number = col + directions[k + 1];
              
                maxGoldFromHere = Math.max(maxGoldFromHere, currentGold + dfs(nextRow, nextCol));
            }
            grid[row][col] = currentGold;
          
            return maxGoldFromHere;
        }
    
        let maxGold: number = 0;
    
        for (let i: number = 0; i < rowCount; ++i) {
            for (let j: number = 0; j < colCount; ++j) {
                maxGold = Math.max(maxGold, dfs(i, j));
            }
        }
    
        return maxGold;

    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});




