xdescribe('leetcode 289: game of life', () => {
    function gameOfLife(board: number[][]): void {
        const nextState = new Array<Array<number>>(board.length).fill([]).map((r) => new Array<number>(board[0].length).fill(0));

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
                nextState[i][j] = getNextState(board, i, j);
            }
        }

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
                board[i][j] = nextState[i][j];
            }
        }
    }

    function gameOfLifeInplace(board: number[][]): void {
        const nextState = new Array<Array<number>>(board.length).fill([]).map((r) => new Array<number>(board[0].length).fill(0));

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
                nextState[i][j] = getNextState(board, i, j);
            }
        }

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
                board[i][j] = nextState[i][j];
            }
        }
    }

    function getNextState(board: number[][], i: number, j: number): number {
        const neighborWeight = getNeighborsWeight(board, i, j);

        if (board[i][j] === 1 && neighborWeight < 2) {
            return 0;
        }

        if (board[i][j] === 1 && neighborWeight >= 2 && neighborWeight <= 3) {
            return 1;
        }

        if (board[i][j] === 1 && neighborWeight > 3) {
            return 0;
        }

        if (board[i][j] === 0 && neighborWeight === 3) {
            return 1;
        }

        return NaN;
    }

    function getNeighborsWeight(board: number[][], i: number, j: number): number {
        let result = 0;
        result += board[i + 1][j] || 0;
        result += board[i - 1][j] || 0;
        result += board[i][j + 1] || 0;
        result += board[i][j - 1] || 0;
        result += board[i + 1][j + 1] || 0;
        result += board[i - 1][j + 1] || 0;
        result += board[i + 1][j - 1] || 0;
        result += board[i - 1][j - 1] || 0;

        return result;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
