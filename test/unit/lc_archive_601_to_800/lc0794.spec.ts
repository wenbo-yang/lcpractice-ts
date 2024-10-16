xdescribe('leetcode 794: description', () => {
    function validTicTacToe(board: string[]): boolean {
        const xCount = countOccurrences(board, 'X');
        const oCount = countOccurrences(board, 'O');
      
        
        if (xCount !== oCount && xCount - 1 !== oCount) {
            return false;
        }
    
        
        if (hasWon(board,'X') && xCount - 1 !== oCount) {
            return false;
        }
    
        if (hasWon(board, 'O') && xCount !== oCount) {
            return false;
        }
    
        return true;
    };

    function countOccurrences(board: string[], char: string): number {
        return board.reduce((accumulator, currentRow) => {
            return accumulator + [...currentRow].filter(c => c === char).length;
        }, 0);
    };

    // Helper function to check if a player has won the game.
    function hasWon(board: string[], char: string): boolean {
        // Check rows and columns for win
        for (let i = 0; i < 3; ++i) {
            if (board[i][0] === char && board[i][1] === char && board[i][2] === char) {
                return true;
            }
            if (board[0][i] === char && board[1][i] === char && board[2][i] === char) {
                return true;
            }
        }
        // Check diagonals for win
        if (board[0][0] === char && board[1][1] === char && board[2][2] === char) {
            return true;
        }
        return board[0][2] === char && board[1][1] === char && board[2][0] === char;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
