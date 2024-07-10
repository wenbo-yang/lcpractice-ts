xdescribe('leetcode 48: rotate image', () =>{
    function rotate(matrix: number[][]): void {
        const mid = Math.floor(matrix.length / 2);
        let endingCol = matrix.length - 1;
        for (let i = 0; i < endingCol; i++) {
            rotateInPlace(matrix, i, endingCol--);
        }
    };

    function rotateInPlace(matrix: number[][], startingRow: number, endingCol: number) {
        const mid = Math.floor(matrix.length / 2);

        for (let j = startingRow; j < endingCol; j++) {
            rotateInPlaceForEachElement(matrix, startingRow, j);
        }
    }

    function rotateInPlaceForEachElement(matrix: number[][], row: number, col: number) {
        const target1 = [col, matrix[0].length - row - 1];
        const target2 = [target1[1], matrix[0].length - target1[0] - 1];
        const target3 = [target2[1], matrix[0].length - target2[0] - 1];
        
        const temp1 = matrix[target1[0]][target1[1]];
        matrix[target1[0]][target1[1]] = matrix[row][col];
        const temp2 = matrix[target2[0]][target2[1]];
        matrix[target2[0]][target2[1]] = temp1;
        const temp3 = matrix[target3[0]][target3[1]];
        matrix[target3[0]][target3[1]] = temp2;
        matrix[row][col] = temp3;        
    }
    
    it('test case 1 Input: [[1,2,3],[4,5,6],[7,8,9]], output [[7,4,1],[8,5,2],[9,6,3]]', () => {
        const matrix = [[1,2,3],[4,5,6],[7,8,9]];
        rotate(matrix);
        expect(matrix).toEqual([[7,4,1],[8,5,2],[9,6,3]]);
    });

    it('test case 1 Input: [5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]], output [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]', () => {
        const matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]];
        rotate(matrix);
        expect(matrix).toEqual([[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]);
    });
});



