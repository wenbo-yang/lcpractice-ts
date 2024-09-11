xdescribe('leetcode 533: lonely pixels', () => {
    function numberOfLonelyPixels(board: string[][], n: number): number {
        const rowCount = new Array<number>(board.length);
        const colCount = new Array<number>(board[0].length);
        const coord: number[][] = [];

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
                if (board[i][j] === 'B') {
                    rowCount[i]++;
                    colCount[j]++;
                    coord.push([i, j]);
                }
            }
        }

        const blackListedRow = new Set<number>();
        const blackListedCol = new Set<number>();
        let result = 0;
        for (const c of coord) {
            if (blackListedRow.has(c[0]) || blackListedCol.has(c[1])) {
                continue;
            }

            if (rowCount[c[0]] === n && colCount[c[1]] === n) {
                result += n;
                blackListedRow.add(c[0]);
                blackListedCol.add(c[1]);
            }
        }

        return result;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
