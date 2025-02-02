xdescribe('leetcode 1391: check if there is a valid path in a grid', () => {
    function find(x: number, parent: number[]): number {
        if (parent[x] != x) {
            parent[x] = find(parent[x], parent);
        }
        return parent[x];
    }

    function hasValidPath(grid: number[][]): boolean {
        const rows = grid.length;
        const cols = grid[0].length; 
        const parent = Array.from({ length: rows * cols }, (_, index) => index); 

        // Nested function to connect the current cell with the cell to its left.
        const connectLeft = (row: number, col: number): void => {
            if (col > 0 && [1, 4, 6].includes(grid[row][col - 1])) {
                parent[find(row * cols + col, parent)] = find(row * cols + col - 1, parent);
            }
        };

        // Nested function to connect the current cell with the cell to its right.
        const connectRight = (row: number, col: number): void => {
            if (col < cols - 1 && [1, 3, 5].includes(grid[row][col + 1])) {
                parent[find(row * cols + col, parent)] = find(row * cols + col + 1, parent);
            }
        };

        // Nested function to connect the current cell with the cell above it.
        const connectUp = (row: number, col: number): void => {
            if (row > 0 && [2, 3, 4].includes(grid[row - 1][col])) {
                parent[find(row * cols + col, parent)] = find((row - 1) * cols + col, parent);
            }
        };

        // Nested function to connect the current cell with the cell below it.
        const connectDown = (row: number, col: number): void => {
            if (row < rows - 1 && [2, 5, 6].includes(grid[row + 1][col])) {
                parent[find(row * cols + col, parent)] = find((row + 1) * cols + col, parent);
            }
        };

        // Iterate over each cell in the grid to establish connections.
        for (let row = 0; row < rows; ++row) {
            for (let col = 0; col < cols; ++col) {
                const tileType = grid[row][col];
                if (tileType === 1) {
                    connectLeft(row, col);
                    connectRight(row, col);
                } else if (tileType === 2) {
                    connectUp(row, col);
                    connectDown(row, col);
                } else if (tileType === 3) {
                    connectLeft(row, col);
                    connectDown(row, col);
                } else if (tileType === 4) {
                    connectRight(row, col);
                    connectDown(row, col);
                } else if (tileType === 5) {
                    connectLeft(row, col);
                    connectUp(row, col);
                } else { // tileType == 6
                    connectRight(row, col);
                    connectUp(row, col);
                }
            }
        }

        // Check if the start (0, 0) cell has the same root as the end (rows - 1, cols - 1) cell.
        return find(0, parent) === find(rows * cols - 1, parent);
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
