xdescribe('leetcode 1030: matrix cells in distance order', () => {
    function allCellsDistOrder(rows: number, cols: number, rCenter: number, cCenter: number): number[][] {
        const queue: [number, number][] = [[rCenter, cCenter]];
        const answer: [number, number][] = [];

        const visited: boolean[][] = Array.from({ length: rows }, () => Array(cols).fill(false));

        visited[rCenter][cCenter] = true;

        const directions: number[] = [-1, 0, 1, 0, -1];

        while (queue.length > 0) {
            const [currentRow, currentCol] = queue.shift()!;

            answer.push([currentRow, currentCol]);

            for (let k = 0; k < 4; k++) {
                const newRow: number = currentRow + directions[k];
                const newCol: number = currentCol + directions[k + 1];

                if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols && !visited[newRow][newCol]) {
                    visited[newRow][newCol] = true; 
                    queue.push([newRow, newCol]); 
                }
            }
        }

        return answer;
    };
    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
