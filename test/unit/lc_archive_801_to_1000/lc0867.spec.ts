xdescribe('leetcode 867: transpose matrix', () => {
    function transpose(matrix: number[][]): number[][] {
        const newMat = new Array<Array<number>>(matrix[0].length).fill([]).map(r => new Array<number>(matrix.length).fill(0));
        
        for (let i = 0; i < matrix.length ; i++) {
            for (let j = 0; j < matrix[0].length; j++) {
                newMat[j][i] = matrix[j][i];
            }
        }

        return newMat;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
