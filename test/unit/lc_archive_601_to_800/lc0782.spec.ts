xdescribe('leetcode 782: ', () => {
    function movesToChessboard(board: number[][]): number {
        const n = board.length; 
        const mask: number = (1 << n) - 1; 
        let rowMask: number = 0, colMask: number = 0; 
    
        for (let i = 0; i < n; ++i) {
            rowMask |= board[0][i] << i; 
            colMask |= board[i][0] << i; 
        }

        const revRowMask: number = mask ^ rowMask; 
        const revColMask: number = mask ^ colMask; 

        let sameRow: number = 0, sameCol: number = 0; 

        for (let i = 0; i < n; ++i) {
            let curRowMask: number = 0, curColMask: number = 0; 
        
            for (let j = 0; j < n; ++j) {
                curRowMask |= board[i][j] << j;
                curColMask |= board[j][i] << j;
            }

            if ((curRowMask !== rowMask && curRowMask !== revRowMask) || (curColMask !== colMask && curColMask !== revColMask)) {
                return -1;
            }

            sameRow += (curRowMask === rowMask) ? 1 : 0;
            sameCol += (curColMask === colMask) ? 1 : 0;
        }

        const movesRow: number = calculateMoves(rowMask, sameRow, n);
        const movesCol: number = calculateMoves(colMask, sameCol, n);

        return (movesRow === -1 || movesCol === -1) ? -1 : movesRow + movesCol;
    };

    function calculateMoves(mask: number, count: number, n: number): number {
        const ones: number = countOnes(mask); 
        
        if (n % 2 === 1) {
            if (Math.abs(n - 2 * ones) !== 1 || Math.abs(n - 2 * count) !== 1) return -1;

            if (ones === Math.floor(n / 2)) {
                return Math.floor(n / 2) - countOnes(mask & 0xAAAAAAAA); // for even indexes
            } else {
                return (Math.floor(n / 2) + 1) - countOnes(mask & 0x55555555); // for odd indexes
            }
        } else {
            if (ones !== n / 2 || count !== n / 2) return -1;

            const movesEvenIndexes: number = n / 2 - countOnes(mask & 0xAAAAAAAA); // for even indexes
            const movesOddIndexes: number = n / 2 - countOnes(mask & 0x55555555); // for odd indexes
        
            return Math.min(movesEvenIndexes, movesOddIndexes);
        }
    }

    function countOnes(mask: number): number {
        return mask.toString(2).split('0').join('').length;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
