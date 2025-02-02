xdescribe('leetcode 1260: shift 2d grid', () => {
    function shiftGrid(grid: number[][], k: number): number[][] {
        const numRows = grid.length;
        const numCols = grid[0].length;
        const totalSize = numRows * numCols;
        k %= totalSize;
    
        if (k === 0 || totalSize <= 1) return grid;
    
        const flatArray = grid.flat();
    
        let shiftedGrid = Array.from({ length: numRows }, () => new Array(numCols));
    
        for (let i = 0, shiftIndex = totalSize - k; i < totalSize; i++) {
            shiftedGrid[Math.floor(i / numCols)][i % numCols] = flatArray[shiftIndex];
    
            shiftIndex = shiftIndex === totalSize - 1 ? 0 : shiftIndex + 1;
        }
    
        return shiftedGrid;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
