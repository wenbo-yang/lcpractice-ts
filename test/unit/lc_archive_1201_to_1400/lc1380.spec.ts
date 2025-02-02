xdescribe('leetcode 1380: lucky numbers in a matrix', () => {
    function luckyNumbers(matrix: number[][]): number[] {
        const minRow: number[] = [];
        const maxCol: number[] = [];

        for (let i = 0; i < matrix.length; i++) {
            let min = Number.MAX_SAFE_INTEGER;
            for (let j = 0; j < matrix[0].length; j++) {
                min = Math.min(matrix[i][j], min);
            }
            minRow.push(min);
        }

        for (let j = 0; j < matrix[0].length; j++) {
            let max = Number.MIN_SAFE_INTEGER;
            for (let i = 0; i < matrix.length; i++) {
                max = Math.max(matrix[i][j], max);
            }
            maxCol.push(max);
        }

        const numbers: number[] = [];
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[0].length; j++) {
                if (matrix[i][j] === minRow[i] && matrix[i][j] === maxCol[j]) {
                    numbers.push(matrix[i][j]);
                }
            }
        }
        
        return numbers;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
