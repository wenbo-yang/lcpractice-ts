xdescribe('leetcode 1277: count square submatrices with all ones', () => {
    // [0 1 1 1 1]
    // [0 1 2 2 2]
    // [0 1 2 3 3]
    // [0 1 2 3 4]
    
    function countSquares(matrix: number[][]): number {
        const map = new Map<number, number>();
        let count = 0;
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[0].length; j++) {
                const min = Math.min(((matrix[i - 1]||[])[j - 1] || 0), ((matrix[i - 1]||[])[j] || 0), ((matrix[i] || [])[j - 1] || 0));
                matrix[i][j] += min;
                count += matrix[i][j];
            }
        }

        return count;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
