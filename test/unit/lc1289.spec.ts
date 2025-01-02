xdescribe('leetcode 1289: minimum falling path sum', () => {
    function minFallingPathSum(grid: number[][]): number {
        const kInfinity: number = Number.MAX_SAFE_INTEGER;

        let minFirstPathSum: number = 0; 
        let minSecondPathSum: number = 0;
        let prevMinPathCol: number = -1;

        const n: number = grid.length; 

        for (let row of grid) {
            let newMinFirstPathSum: number = kInfinity;
            let newMinSecondPathSum: number = kInfinity;
            let newMinPathCol: number = -1;
          
            for (let j = 0; j < n; ++j) {
                let currentSum: number = (prevMinPathCol !== j ? minFirstPathSum : minSecondPathSum) + row[j];
    
                if (currentSum < newMinFirstPathSum) {
                    newMinSecondPathSum = newMinFirstPathSum; 
                    newMinFirstPathSum = currentSum; 
                    newMinPathCol = j; 
                } else if (currentSum < newMinSecondPathSum) {
                    newMinSecondPathSum = currentSum; 
                }
            }
          
            minFirstPathSum = newMinFirstPathSum;
            minSecondPathSum = newMinSecondPathSum;
            prevMinPathCol = newMinPathCol;
        }
      
        return minFirstPathSum; 
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
