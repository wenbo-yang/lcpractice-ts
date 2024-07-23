describe('leetcode 221: maximal square', () => {
    function maximalSquare(matrix: string[][]): number {
        // bounding square  
        const boundSquare: Map<string, string> = new Map();
        let result = 0;
        for(let i = 0; i < matrix.length; i++) {
            for(let j = 0; j < matrix[0].length; j++) {
                if (matrix[i][j] === '1') {
                    let currentSize = setBoundingSquare(matrix, i, j, boundSquare);
                    result = Math.max(result, currentSize);
                }
            }
        }

        return result;
    };

    function setBoundingSquare(matrix: string[][], i: number, j: number, boundSquare: Map<string, string>): number {
        const topLeft = (boundSquare.get([i - 1, j - 1].join()) || [i, j].join()).split(',').map(s => Number(s));
        const bottomRight = [i, j];
        const updatedTopLeft = determineLargerSquare(matrix, topLeft, bottomRight);

        boundSquare.set(bottomRight.join(), updatedTopLeft.join());

        return (bottomRight[0] - topLeft[0] + 1) * (bottomRight[1] - topLeft[1] + 1);
    }

    function determineLargerSquare(matrix: string[][], topLeft: number[], bottomRight: number[]): number[] {
        for (let i = topLeft[0]; i < bottomRight[0]; i++) {
            if (matrix[i][bottomRight[1]] !== '1') {
                return bottomRight;
            }
        }


        for (let j = topLeft[1]; j < bottomRight[1]; j++) {
            if (matrix[bottomRight[0]][j] !== '1') {
                return bottomRight;
            }
        }

        return topLeft;
    }

    it('test case 1 Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]], output 4', () => {
        const matrix = [['1','0','1','0','0'],['1','0','1','1','1'],['1','1','1','1','1'],['1','0','0','1','0']];
        const result = maximalSquare(matrix);
        expect(result).toEqual(4);
    });
});



