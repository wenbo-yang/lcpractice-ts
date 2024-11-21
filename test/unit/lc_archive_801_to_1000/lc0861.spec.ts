xdescribe('leetcode 861: score after flipping matrix', () => {
    function matrixScore(grid: number[][]): number {
        const rows = grid.length; 
        const cols = grid[0].length;
    
        for (let row = 0; row < rows; ++row) {
            if (grid[row][0] === 0) {
                
                for (let col = 0; col < cols; ++col) {
                    grid[row][col] ^= 1; 
                }
            }
        }
    
        let score = 0; 
    
        for (let col = 0; col < cols; ++col) {
            let countOnes = 0; 
            for (let row = 0; row < rows; ++row) {
                countOnes += grid[row][col];
            }
            score += Math.max(countOnes, rows - countOnes) * (1 << (cols - col - 1));
        }
    
        return score;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
