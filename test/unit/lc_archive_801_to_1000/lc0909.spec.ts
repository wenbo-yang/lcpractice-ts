xdescribe('leetcode 909: description', () => {
    function snakesAndLadders(board: number[][]): number {
        const boardSize = board.length; 
        const positionsQueue: number[] = []; 
        positionsQueue.push(1); 
        const visited = new Array(boardSize * boardSize + 1).fill(false); 
        visited[1] = true; 
        let moves = 0; 

        while (positionsQueue.length > 0) {
            const levelSize = positionsQueue.length;
            for (let i = 0; i < levelSize; ++i) {
                const current = positionsQueue.shift()!;
            
                if (current === boardSize * boardSize) return moves;
            
                for (let nextPos = current + 1; nextPos <= Math.min(current + 6, boardSize * boardSize); ++nextPos) {
                    const [row, col] = convertTo2D(nextPos, boardSize); 
                    let target = nextPos;
                
                    if (board[row][col] !== -1) target = board[row][col];
                
                    if (!visited[target]) {
                        visited[target] = true;
                        positionsQueue.push(target);
                    }
                }
            }
            moves++; 
        }
        return -1; 
    };

    function convertTo2D(pos: number, boardSize: number): number[] {
        const row = Math.floor((pos - 1) / boardSize);
        let col = (pos - 1) % boardSize;
        if (row % 2 === 1) { 
            col = boardSize - 1 - col;
        }
        
        const convertedRow = boardSize - 1 - row;
        return [convertedRow, col];
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
