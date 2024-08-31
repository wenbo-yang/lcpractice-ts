xdescribe('leetcode 529: mine sweeper', () => {
    function updateBoard(board: string[][], click: number[]): string[][] {
        if (board[click[0]][click[1]] === 'M') {
            board[click[0]][click[1]] = 'X';
        }
        else if (board[click[0]][click[1]] === 'E') {
            mapIsland(board, click[0], click[1]);
        }
        
        return board;
    };

    function mapIsland(board: string[][], r: number, c: number) {
        if (r < 0 || r >= board.length || c < 0 || c >= board.length || board[r][c] !== 'E') {
            return;
        }
        
        let neighborMines = getNeighboringMines(board, r, c);

        if (neighborMines) {
            board[r][c] = neighborMines.toString();
            return;
        }

        board[r][c] = 'B';

        mapIsland(board, r + 1, c);
        mapIsland(board, r - 1, c);
        mapIsland(board, r, c + 1);
        mapIsland(board, r, c - 1);
    }
    
    function getNeighboringMines(board: string[][], i: number, j: number): number {
        let count = 0;

        if (board[i][j] === 'E') {
            if ((board[i + 1] || [])[j] === 'M') {
                count++;
            }
            if ((board[i - 1] || [])[j] === 'M') {
                count++;
            }
            if ((board[i + 1] || [])[j + 1] === 'M') {
                count++;
            }
            if ((board[i + 1] || [])[j - 1] === 'M') {
                count++;
            }
            if ((board[i - 1] || [])[j + 1] === 'M') {
                count++;
            }
            if ((board[i - 1] || [])[j - 1] === 'M') {
                count++;
            }
            if ((board[i] || [])[j + 1] === 'M') {
                count++;
            }
            if ((board[i] || [])[j - 1] === 'M') {
                count++;
            }
        }

        return count;
    }
    

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});





