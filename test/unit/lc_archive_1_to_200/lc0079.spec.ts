xdescribe('leetcode 79: word search', () => {
    function exist(board: string[][], word: string): boolean {
        let retVal = false;

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
                if (board[i][j] === word.charAt(0)) {
                    const visited = new Set<string>();
                    if (dfs(board, i, j, word, 0, visited)) {
                        return true;
                    }
                }
            }
        }

        return false;
    }

    function dfs(board: string[][], r: number, c: number, word: string, wordIndex: number, visited: Set<string>): boolean {
        if (wordIndex === word.length) {
            return true;
        }

        if (r > board.length - 1 || r < 0 || c > board[0].length - 1 || c < 0 || visited.has(JSON.stringify({ r, c }))) {
            return false;
        }

        if (board[r][c] !== word.charAt(wordIndex)) {
            return false;
        }

        visited.add(JSON.stringify({ r, c }));

        return dfs(board, r - 1, c, word, wordIndex + 1, visited) || dfs(board, r + 1, c, word, wordIndex + 1, visited) || dfs(board, r, c + 1, word, wordIndex + 1, visited) || dfs(board, r, c - 1, word, wordIndex + 1, visited);
    }

    it('test case 1 board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]:, word = "ABCCED", output true ', () => {
        const board = [
            ['A', 'B', 'C', 'E'],
            ['S', 'F', 'C', 'S'],
            ['A', 'D', 'E', 'E'],
        ];
        const word = 'ABCCED';

        const result = exist(board, word);
        expect(result).toBeTruthy();
    });
});
