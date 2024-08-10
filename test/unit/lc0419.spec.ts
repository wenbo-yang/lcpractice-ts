xdescribe('leetcode 419: description', () => {
    function countBattleships(board: string[][]): number {
        let result = 0;

        for (let i = 0; i< board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
                if (board[i][j] === 'X') {
                    mapIsland(board, i, j)
                    result++;
                }
            }
        }

        return result;
    };

    function countBattleshipsOnePassNoExtraMemory(board: string[][]): number {
        let result = 0;

        for (let i = 0; i< board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
                if (board[i][j] === 'X'
                    && (i === 0 || board[i - 1][j] === '.')
                    && (j === 0 || board[i][j - 1] === '.')
                ) {
                    result++;
                }
            }
        }

        return result;
    };
    

    function mapIsland(board: string[][], r: number, c: number) {
        if (r < 0 || r >= board.length || c < 0 || c >= board[0].length || board[r][c] !== 'X') {
            return;
        }

        board[r][c] = 'V'

        mapIsland(board, r - 1, c)
        mapIsland(board, r + 1, c)
        mapIsland(board, r, c - 1)
        mapIsland(board, r, c + 1)
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});

