xdescribe('leetcode 1222: queens that can attack the king', () => {
    function queensAttacktheKing(queens: number[][], king: number[]): number[][] {
        const boardSize = 8; 
        const board: boolean[][] = Array.from({ length: boardSize }, () => Array.from({ length: boardSize }, () => false));
    
        queens.forEach(([row, col]) => (board[row][col] = true));
        const attackingQueens: number[][] = [];
    
        for (let rowDirection = -1; rowDirection <= 1; ++rowDirection) {
            for (let colDirection = -1; colDirection <= 1; ++colDirection) {
                if (rowDirection || colDirection) {
                    let [currentRow, currentCol] = [king[0] + rowDirection, king[1] + colDirection];
                    while (currentRow >= 0 && currentRow < boardSize && currentCol >= 0 && currentCol < boardSize) {
                        if (board[currentRow][currentCol]) {
                            attackingQueens.push([currentRow, currentCol]);
                            break;
                        }
                        currentRow += rowDirection;
                        currentCol += colDirection;
                    }
                }
            }
        }
        
        return attackingQueens;
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
