xdescribe('leetcode 994: rotten orange', () => {
    function orangesRotting(grid: number[][]): number {
        const rows = grid.length;
        const cols = grid[0].length;

        let freshOranges = 0; 
        const queue: [number, number][] = []; 

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (grid[i][j] === 1) {
                    freshOranges++;
                } else if (grid[i][j] === 2) {
                    queue.push([i, j]);
                }
            }
        }

        let minutes = 0; 
        
        const directions = [1, 0, -1, 0, 1]; 

        while (freshOranges !== 0 && queue.length !== 0) {
            const currentLevelSize = queue.length; 
            for (let i = 0; i < currentLevelSize; i++) {
                const [x, y] = queue.shift() || [-1, -1]; 

                for (let j = 0; j < 4; j++) {
                    const newX = x + directions[j];
                    const newY = y + directions[j + 1];

                    if (newX >= 0 && newX < rows && newY >= 0 && newY < cols && grid[newX][newY] === 1) {
                        grid[newX][newY] = 2;
                        queue.push([newX, newY]); 
                        freshOranges--; 
                    }
                }
            }

            minutes++; 
        }

        return freshOranges !== 0 ? -1 : minutes;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
