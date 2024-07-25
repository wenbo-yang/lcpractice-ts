xdescribe('leetcode 240: search in a sorted 2d matrix', () => {
    // binary search
    function searchMatrix(matrix: number[][], target: number): boolean {
        const minRowBound = searchForRowBoundMin(target, matrix);
        const rowBound = searchForRowBoundMax(target, matrix, minRowBound);

        const columnBound = searchForColumnBound(target, matrix);

        for (let i = rowBound[0]; i < rowBound[1]; i++) {
            if (binarySearchRow(target, matrix, columnBound)) {
                return true;
            }
        }

        return false;
    }

    function searchForRowBoundMin(target: number, matrix: number[][]): number[] {
        throw new Error('Function not implemented.');
    }

    function searchForRowBoundMax(target: number, matrix: number[][], minRowBound: number[]): number[] {
        throw new Error('Function not implemented.');
    }

    function searchForColumnBound(target: number, matrix: number[][]): number[] {
        throw new Error('Function not implemented.');
    }

    function binarySearchRow(target: number, matrix: number[][], columnBound: number[]): boolean {
        throw new Error('Function not implemented.');
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
