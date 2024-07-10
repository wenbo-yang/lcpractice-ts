xdescribe('leetcode 51: n queens', () =>{
    function solveNQueens(n: number): string[][] {
        if (n <= 0) {
            return [[]];
        }
        
        const mat = generateMat(n, n); 
        const result: string[][] = [];

        solveNQueensHelper(mat, 0, n, result);

        return result;
    };

    function generateMat(rows: number, cols: number): string[][] {
        return new Array<string[]>(rows).fill([]).map(r => new Array<string>(cols).fill('.'));
    }

    function solveNQueensHelper(mat: string[][], startRow: number, queenCount: number, result: string[][]): void {
        if (queenCount === 0) {
            result.push(Array.from(mat.map(r => r.join(''))));
        }
        
        for (let i = startRow; i < mat.length; i++) {
            for (let j = 0; j < mat[i].length; j++) {
                if(canPlaceAt(mat, i, j)) {
                    placeAt(mat, i, j);

                    solveNQueensHelper(mat, i, queenCount - 1, result);

                    removeAt(mat, i, j)
                }
                
            }
        }
    }

    function placeAt(mat: string[][], i: number, j: number) {
        mat[i][j] = 'Q';
    }

    function removeAt(mat: string[][], i: number, j: number) {
        mat[i][j] = '.'
    }
    
    function canPlaceAt(mat: string[][], row: number, col: number): boolean {
        if (mat[row][col] === 'Q') {
            return false;
        }

        for (let i = 0; i < mat.length; i++) {
            if (mat[i][col] === 'Q') {
                return false;
            }
        }

        for (let j = 0; j < mat[0].length; j++) {
            if (mat[row][j] === 'Q') {
                return false;
            }
        }

        let i = row;
        let j = col;

        while (i >= 0 && j >= 0 && i < mat.length && j < mat[0].length) {
            if(mat[i--][j--] == 'Q') {
                return false;
            }
        }

        i = row;
        j = col;

        while (i >= 0 && j >= 0 && i < mat.length && j < mat[0].length) {
            if(mat[i++][j++] == 'Q') {
                return false;
            }
        }

        i = row;
        j = col;

        while (i >= 0 && j >= 0 && i < mat.length && j < mat[0].length) {
            if(mat[i--][j++] == 'Q') {
                return false;
            }
        }

        i = row;
        j = col;

        while (i >= 0 && j >= 0 && i < mat.length && j < mat[0].length) {
            if(mat[i++][j--] == 'Q') {
                return false;
            }
        }

        return true;
    }
    
    it('test case 1 Input:, target = 5, output 2 ', () => {
    });
});








