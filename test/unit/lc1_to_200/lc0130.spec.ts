xdescribe('leetcode 130: surrounded regions', () => {
    function solve(board: string[][]): void {
        const visited = new Array<Array<boolean>>(board.length).fill([]).map((r) => new Array<boolean>(board[0].length).fill(false));

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
                if (board[i][j] === 'O' && !visited[i][j]) {
                    const islandIndices: number[][] = [];
                    mapIsland(board, i, j, visited, islandIndices);
                    if (!isAnyIndexOnEdge(board, islandIndices)) {
                        convertAllIslandIndicesToX(board, islandIndices);
                    }
                }
            }
        }
    }

    function convertAllIslandIndicesToX(board: string[][], islandIndices: number[][]) {
        for (const coor of islandIndices) {
            board[coor[0]][coor[1]] = 'X';
        }
        return false;
    }

    function isAnyIndexOnEdge(board: string[][], islandIndices: number[][]): boolean {
        for (const coor of islandIndices) {
            if (coor[0] === board.length - 1 || coor[0] === 0 || coor[1] === 0 || coor[1] === board[0].length - 1) {
                return true;
            }
        }
        return false;
    }

    function mapIsland(board: string[][], startingRow: number, startingCol: number, visited: boolean[][], islandIndices: number[][]) {
        if (startingCol > board[0].length - 1 || startingCol < 0 || startingRow > board.length - 1 || startingRow < 0) {
            return;
        }

        if (visited[startingRow][startingCol]) {
            return;
        }

        if (board[startingRow][startingCol] === 'X') {
            return;
        }

        visited[startingRow][startingCol] = true;
        islandIndices.push([startingRow, startingCol]);

        mapIsland(board, startingRow - 1, startingCol, visited, islandIndices);
        mapIsland(board, startingRow + 1, startingCol, visited, islandIndices);
        mapIsland(board, startingRow, startingCol + 1, visited, islandIndices);
        mapIsland(board, startingRow, startingCol - 1, visited, islandIndices);
    }

    it('test case 1 board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]], output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]', () => {
        const board = [
            ['X', 'X', 'X', 'X'],
            ['X', 'O', 'O', 'X'],
            ['X', 'X', 'O', 'X'],
            ['X', 'O', 'X', 'X'],
        ];
        solve(board);
        expect(board).toEqual([
            ['X', 'X', 'X', 'X'],
            ['X', 'X', 'X', 'X'],
            ['X', 'X', 'X', 'X'],
            ['X', 'O', 'X', 'X'],
        ]);
    });
});
