xdescribe('leetcode 54: spiral matrix', () => {
    function spiralOrder(matrix: number[][]): number[] {
        const directions: number[][] = [
            [0, 1],
            [1, 0],
            [0, -1],
            [-1, 0],
        ];
        const result: number[] = [];
        let startingCol = 0;
        let endingCol = matrix[0].length - 1;
        let startingRow = 0;
        let endingRow = matrix.length - 1;
        while (true) {
            if (result.length === matrix.length * matrix[0].length) {
                break;
            }
            readRowForward(matrix, startingRow, startingCol, endingCol, result);
            startingRow++;
            readColDownward(matrix, endingCol, startingRow, endingRow, result);
            endingCol--;
            readRowBackward(matrix, endingRow, endingCol, startingCol, result);
            endingRow--;
            readColUpward(matrix, startingCol, endingRow, startingRow, result);
            startingCol++;
        }

        return result;
    }

    function readRowForward(matrix: number[][], row: number, startingCol: number, endingCol: number, result: number[]) {
        if (result.length === matrix.length * matrix[0].length) {
            return;
        }

        for (let i = startingCol; i <= endingCol; i++) {
            result.push(matrix[row][i]);
        }
    }

    function readColDownward(matrix: number[][], col: number, startingRow: number, endingRow: number, result: number[]) {
        if (result.length === matrix.length * matrix[0].length) {
            return;
        }
        for (let i = startingRow; i <= endingRow; i++) {
            result.push(matrix[i][col]);
        }
    }

    function readRowBackward(matrix: number[][], row: number, startingCol: number, endingCol: number, result: number[]) {
        if (result.length === matrix.length * matrix[0].length) {
            return;
        }
        for (let i = startingCol; i >= endingCol; i--) {
            result.push(matrix[row][i]);
        }
    }

    function readColUpward(matrix: number[][], col: number, startingRow: number, endingRow: number, result: number[]) {
        if (result.length === matrix.length * matrix[0].length) {
            return;
        }
        for (let i = startingRow; i >= endingRow; i--) {
            result.push(matrix[i][col]);
        }
    }

    it('test case 1 input matrix = [[1,2,3],[4,5,6],[7,8,9]], [1,2,3,6,9,8,7,4,5]', () => {
        const matrix = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ];
        const result = spiralOrder(matrix);

        expect(result).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
    });
});
