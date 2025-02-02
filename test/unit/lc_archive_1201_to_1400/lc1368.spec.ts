xdescribe('leetcode 1368: min cost to make at least one valid path in a grid', () => {
    function minCost(grid: number[][]): number {
        const rows = grid.length,
        cols = grid[0].length;
      
        let costGrid = Array.from({ length: rows }, () => new Array(cols).fill(Infinity));
        costGrid[0][0] = 0; 

        let queue: [number, number][] = [[0, 0]];

        const directions = [
            [0, 1], 
            [0, -1],
            [1, 0], 
            [-1, 0],
        ];

        while (queue.length) {
            let [x, y] = queue.shift()!;
            for (let step = 1; step < 5; step++) {
                let [dx, dy] = directions[step - 1];
                let [i, j] = [x + dx, y + dy];
                if (i < 0 || i >= rows || j < 0 || j >= cols) continue;
                let cost = ~~(grid[x][y] != step) + costGrid[x][y];

                if (cost >= costGrid[i][j]) continue;

                costGrid[i][j] = cost;

                if (grid[x][y] == step) {
                    queue.unshift([i, j]);
                } else {
                    queue.push([i, j]);
                }
            }
        }

        return costGrid[rows - 1][cols - 1];
    };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
