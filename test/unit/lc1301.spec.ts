xdescribe('leetcode 1301: number of path with max score', () => {


    function pathsWithMaxScore(board: string[]): number[] {
        const MOD = 1e9 + 7;
        const n: number = board.length; // Get the size of the board.
        let maxScores: number[][] = []; // Matrix to store the maximum scores to each cell.
        let ways: number[][] = []; // Matrix to store the number of ways to reach each cell with the max score.

        for (let i = 0; i < n; i++) {
            maxScores[i] = [];
            ways[i] = [];
            for (let j = 0; j < n; j++) {
                maxScores[i][j] = -1; // Initialize scores with -1.
                ways[i][j] = 0; // Initialize ways with 0.
            }
        }

        maxScores[n - 1][n - 1] = 0;
        ways[n - 1][n - 1] = 1;

        const update = (i: number, j: number, x: number, y: number) => {
            if (x >= n || y >= n || maxScores[x][y] === -1 || board[i][j] === 'X' || board[i][j] === 'S') {
                return;
            }
            if (maxScores[x][y] > maxScores[i][j]) {
                maxScores[i][j] = maxScores[x][y];
                ways[i][j] = ways[x][y];
            }
            else if (maxScores[x][y] === maxScores[i][j]) {
                ways[i][j] = (ways[i][j] + ways[x][y]) % MOD;
            }
        };

        for (let i = n - 1; i >= 0; --i) {
            for (let j = n - 1; j >= 0; --j) {
                update(i, j, i + 1, j); // Down
                update(i, j, i, j + 1); // Right
                update(i, j, i + 1, j + 1); // Diagonally
                if (maxScores[i][j] !== -1 && !isNaN(parseInt(board[i][j]))) {
                    maxScores[i][j] += parseInt(board[i][j]);
                }
            }
        }

        let answer: number[] = [0, 0]; // Initialize answer with 0s for cases where the top-left cell is not reachable.
        if (maxScores[0][0] !== -1) { // If the top-left cell is reachable.
            answer[0] = maxScores[0][0]; // Maximum score.
            answer[1] = ways[0][0]; // Number of ways.
        }
        return answer;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
