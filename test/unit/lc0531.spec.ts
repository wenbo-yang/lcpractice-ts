xdescribe('leetcode 531: description', () => {
    function numberOfLonelyPixels(board: string[][]): number {
        const rowCount = new Array<number>(board.length).fill(0);
        const colCount = new Array<number>(board[0].length).fill(0);

        const coor: number[][] = [];

        for(let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
                if (board[i][j] === 'B') {
                    rowCount[i]++;
                    colCount[j]++;
                    coor.push([i,j]);
                }
            }
        }

        let count = 0;
        
        for (const c of coor) {
            if(rowCount[c[0]] === 1 && colCount[c[1]]) {
                count++;
            }
        }

        return count;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
