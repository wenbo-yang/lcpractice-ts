xdescribe('leetcode 766: is Toeplitz Matrix ', () => {
    function isToeplitzMatrix(matrix: number[][]): boolean {
        for(let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[0].length; j++) {
                if (!outOfBound(matrix, i-1, j-1) && matrix[i][j] !== matrix[i - 1][j - 1]) {
                    return false;
                }
            }
        }

        return true;
    };

    function outOfBound(matrix: number[][], i: number, j: number) {
        return i < 0 || i >= matrix.length || j < 0 || j >=  matrix[0].length;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});




