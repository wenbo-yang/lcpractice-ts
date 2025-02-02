xdescribe('leetcode 1210: minimum moves to reach target with rotations', () => {
    function minimumMoves(grid: number[][]): number {
        const gridSize = grid.length;
        const targetPosition: number[] = [gridSize * gridSize - 2, gridSize * gridSize - 1];
        const queue: number[][] = [[0, 1]];
        const visited = Array.from({ length: gridSize * gridSize }, () => Array(2).fill(false));
        visited[0][0] = true;

        const attemptMove = (row1: number, col1: number, row2: number, col2: number) => {
            if (row1 >= 0 && row1 < gridSize && col1 >= 0 && col1 < gridSize &&
                row2 >= 0 && row2 < gridSize && col2 >= 0 && col2 < gridSize) {
                    const index1 = row1 * gridSize + col1;
                    const index2 = row2 * gridSize + col2;
                    const orientation = row1 === row2 ? 0 : 1; 
                    if (!visited[index1][orientation] && grid[row1][col1] == 0 && grid[row2][col2] == 0) {
                        queue.push([index1, index2]);
                        visited[index1][orientation] = true;
                    }
            }
        };

        
        let moves = 0;
        while (queue.length) {
            for (let size = queue.length; size; --size) {
                const currentPosition = queue.shift()!;
                if (currentPosition[0] === targetPosition[0] && currentPosition[1] === targetPosition[1]) {
                    return moves; 
                }
                const [row1, col1] = [~~(currentPosition[0] / gridSize), currentPosition[0] % gridSize];
                const [row2, col2] = [~~(currentPosition[1] / gridSize), currentPosition[1] % gridSize];
            
                attemptMove(row1, col1 + 1, row2, col2 + 1);
                attemptMove(row1 + 1, col1, row2 + 1, col2);
            
                if (row1 === row2 && row1 + 1 < gridSize && grid[row1 + 1][col2] === 0) {
                    attemptMove(row1, col1, row1 + 1, col1);
                }
                if (col1 === col2 && col1 + 1 < gridSize && grid[row2][col1 + 1] === 0) {
                    attemptMove(row1, col1, row1, col1 + 1);
                }
            }
            ++moves;
        }

        return -1;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
