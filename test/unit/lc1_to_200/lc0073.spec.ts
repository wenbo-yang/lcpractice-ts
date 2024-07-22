xdescribe('leetcode 73: name', () => {
    // use the first zeroed out row col to store zero out information
    function setZeroes(matrix: number[][]): void {
        let zeroR = -1;
        let zeroC = -1;

        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[0].length; j++) {
                if (matrix[i][j] === 0) {
                    zeroR = i;
                    zeroC = j;
                }
            }
        }

        if (zeroR === -1) {
            return; // non to be zeroed out;
        }

        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[0].length; j++) {
                if (matrix[i][j] === 0) {
                    if (i === zeroR && j === zeroC) {
                        continue;
                    } else {
                        matrix[i][zeroC] = 0;
                        matrix[zeroR][j] = 0;
                    }
                }
            }
        }

        setZerosUsingColumnRC(matrix, zeroR, zeroC);
    }

    function setZerosUsingColumnRC(matrix: number[][], zeroR: number, zeroC: number) {
        for (let i = 0; i < matrix.length; i++) {
            if (i === zeroR) {
                continue;
            }

            if (matrix[i][zeroC] === 0) {
                setRowToZeros(matrix, i);
            }
        }

        for (let j = 0; j < matrix[0].length; j++) {
            if (j === zeroC) {
                continue;
            }

            if (matrix[zeroR][j] === 0) {
                setColToZeros(matrix, j);
            }
        }

        setRowToZeros(matrix, zeroR);
        setColToZeros(matrix, zeroC);
    }

    function setRowToZeros(matrix: number[][], i: number) {
        for (let j = 0; j < matrix[i].length; j++) {
            matrix[i][j] = 0;
        }
    }

    function setColToZeros(matrix: number[][], j: number) {
        for (let i = 0; i < matrix.length; i++) {
            matrix[i][j] = 0;
        }
    }

    it('test case 1 Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]], Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]', () => {
        const matrix = [
            [0, 1, 2, 0],
            [3, 4, 5, 2],
            [1, 3, 1, 5],
        ];
        setZeroes(matrix);
        expect(matrix).toEqual([
            [0, 0, 0, 0],
            [0, 4, 5, 0],
            [0, 3, 1, 0],
        ]);
    });
});
