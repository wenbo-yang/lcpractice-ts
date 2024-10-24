xdescribe('leetcode 840: number of magic squares', () => {
    function numMagicSquaresInside(grid: number[][]): number {
        let count = 0;
        for (let i = 2; i < grid.length; i++) {
            for (let j = 2; j < grid.length; j++) {
                if (isMagicSquare(grid, i, j)) {
                    count++;
                }
            }
        }

        return count;
    };

    function isMagicSquare(grid: number[][], i: number, j: number) {
        const square = [[grid[i-2][j-2], grid[i-2][j-1], grid[i-2][j]],
                     [grid[i-1][j-2], grid[i-1][j-1], grid[i-1][j]],
                     [grid[i][j-2], grid[i][j-1], grid[i][j]]]
        if (!hasOneToNine(square)) {
            return false;
        }

        const sumR0 = square[0].reduce((a,b) => a + b); 
        const sumR1 = square[1].reduce((a,b) => a + b); 
        const sumR2 = square[2].reduce((a,b) => a + b); 


        const sumC0 = square[0][0] + square[1][0] + square[2][0];
        const sumC1 = square[0][1] + square[1][1] + square[2][1];
        const sumC2 = square[0][2] + square[1][2] + square[2][2];

        const sumD1 = square[0][0] + square[1][1] + square[2][2];
        const sumD2 = square[0][2] + square[1][1] + square[2][0];
        
        return [sumR0, sumR1, sumR2, sumC0, sumC1, sumC2, sumD1, sumD2].findIndex(n => n !== sumR0) !== -1;
    }


    function hasOneToNine(square: number[][]) {
        const numIndex: number[] = new Array<number>(9);
        square.forEach(r => {
            r.forEach(n => {
                numIndex[n - 1]++;
            })
        })

        return numIndex.findIndex(i => i !== 1) !== -1;
    }


    it('test case 1 Input:, target = 5, output 2 ', () => {});
});


