xdescribe('leetcode 498: diagnal traversal', () => {
    function findDiagonalOrder(mat: number[][]): number[] {
        let startingIndex = [-1, -1];
        let iteratingIndex = [0, 0];

        const result: number[] = [];
        while (!reachedEnd(startingIndex, mat)) {
            startingIndex = updateStartingIndex(startingIndex, mat);
            iteratingIndex[0] = startingIndex[0];
            iteratingIndex[1] = startingIndex[1];

            do {
                result.push(mat[iteratingIndex[0]][iteratingIndex[1]]);
            } while (!reachedDiagnalEnd(iteratingIndex, mat));
        }

        return result;
    }

    function reachedEnd(startingIndex: number[], mat: number[][]): boolean {
        return startingIndex[0] === mat.length - 1 && startingIndex[1] === mat[0].length - 1;
    }

    function reachedDiagnalEnd(iteratingIndex: number[], mat: number[][]): boolean {
        return iteratingIndex[0] === 0 || iteratingIndex[1] === mat[0].length - 1;
    }

    function updateStartingIndex(startingIndex: number[], mat: number[][]): number[] {
        let newStartingRow = mat.length - 1;
        let newStartingCol = 0;
        if (startingIndex[0] !== mat.length - 1) {
            newStartingRow = startingIndex[0] + 1;
            newStartingCol = newStartingRow;
        }

        return [newStartingRow, newStartingCol];
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
