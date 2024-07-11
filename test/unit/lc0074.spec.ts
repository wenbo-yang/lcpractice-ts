xdescribe('leetcode 74: search in a matrix', () => {
    function searchMatrix(matrix: number[][], target: number): boolean {
        if (target < matrix[0][0] || target > matrix[matrix.length - 1][matrix[0].length - 1]) {
            return false;
        }

        const l = 0;
        const r = matrix.length * matrix[0].length - 1;

        return binarySearchMatrix(matrix, l, r, target);
    }

    function binarySearchMatrix(matrix: number[][], l: number, r: number, target: number): boolean {
        if (l > r) {
            return false;
        }

        if (l === r) {
            const rc = translatePivotIntoMatRowCol(matrix, l);
            return matrix[rc[0]][rc[1]] === target;
        }

        const pivot = Math.floor((l + r) / 2);

        const rc = translatePivotIntoMatRowCol(matrix, pivot);

        const value = matrix[rc[0]][rc[1]];

        if (target === value) {
            return true;
        }

        return target <= value ? binarySearchMatrix(matrix, l, pivot, target) : binarySearchMatrix(matrix, pivot + 1, r, target);
    }

    function translatePivotIntoMatRowCol(matrix: number[][], pivot: number): number[] {
        return [Math.floor(pivot / matrix[0].length), pivot % matrix[0].length];
    }

    it('test case 1 matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]] target = 3, output true ', () => {
        const matrix = [
            [1, 3, 5, 7],
            [10, 11, 16, 20],
            [23, 30, 34, 60],
        ];

        const result = searchMatrix(matrix, 3);

        expect(result).toBeTruthy();
    });

    it('test case 2 matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]] target = 60, output true ', () => {
        const matrix = [
            [1, 3, 5, 7],
            [10, 11, 16, 20],
            [23, 30, 34, 60],
        ];

        const result = searchMatrix(matrix, 60);

        expect(result).toBeTruthy();
    });

    it('test case 3 matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]] target = 12, output false ', () => {
        const matrix = [
            [1, 3, 5, 7],
            [10, 11, 16, 20],
            [23, 30, 34, 60],
        ];

        const result = searchMatrix(matrix, 12);

        expect(result).toBeFalsy();
    });
});
