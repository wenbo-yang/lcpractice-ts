xdescribe('leetcode 59: generate spiral matrix', () => {
    function generateMatrix(n: number): number[][] {
        const mat = new Array<Array<number>>(n).fill([]).map((r) => new Array<number>(n).fill(0));
        const MAXNUM = n * n;
        let currentNum = 1;
        let startingCol = 0;
        let startingRow = 0;
        let endingCol = n - 1;
        let endingRow = n - 1;
        let directionSwitch = 0;
        while (currentNum <= MAXNUM) {
            if (directionSwitch % 4 === 0) {
                currentNum = writeRowForward(mat, startingRow, startingCol, endingCol, currentNum);
                startingRow++;
            }

            if (directionSwitch % 4 === 1) {
                currentNum = writeColDownward(mat, endingCol, startingRow, endingRow, currentNum);
                endingCol--;
            }

            if (directionSwitch % 4 === 2) {
                currentNum = writeRowBackward(mat, endingRow, endingCol, startingCol, currentNum);
                endingRow--;
            }

            if (directionSwitch % 4 === 3) {
                currentNum = writeColUpward(mat, startingCol, endingRow, startingRow, currentNum);
                startingCol++;
            }

            directionSwitch++;
        }

        return mat;
    }

    function writeRowForward(mat: number[][], row: number, startingCol: number, endingCol: number, startingNum: number): number {
        for (let j = startingCol; j <= endingCol; j++) {
            mat[row][j] = startingNum++;
        }

        return startingNum;
    }

    function writeColDownward(mat: number[][], col: number, startingRow: number, endingRow: number, startingNum: number): number {
        for (let i = startingRow; i <= endingRow; i++) {
            mat[i][col] = startingNum++;
        }
        return startingNum;
    }

    function writeRowBackward(mat: number[][], row: number, startingCol: number, endingCol: number, startingNum: number): number {
        for (let j = startingCol; j >= endingCol; j--) {
            mat[row][j] = startingNum++;
        }

        return startingNum;
    }

    function writeColUpward(mat: number[][], col: number, startingRow: number, endingRow: number, startingNum: number): number {
        for (let i = startingRow; i >= endingRow; i--) {
            mat[i][col] = startingNum++;
        }
        return startingNum;
    }

    it('test case 1 input n = 3, Output: [[1,2,3],[8,9,4],[7,6,5]] ', () => {
        const result = generateMatrix(3);
        expect(result).toEqual([
            [1, 2, 3],
            [8, 9, 4],
            [7, 6, 5],
        ]);
    });
});
