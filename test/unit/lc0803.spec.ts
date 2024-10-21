xdescribe('leetcode 803: hit bricks', () => {
    function hitBricks(grid: number[][], hits: number[][]): number[] {
        let parent: number[];
        let clusterSize: number[];

        let rows = grid.length, cols = grid[0].length;
          
        // Initialize the parent and clusterSize arrays.
        parent = new Array(rows * cols + 1);
        clusterSize = new Array(rows * cols + 1).fill(1);
        parent = parent.map((_, index) => index);
    
        // Make a copy of the grid and apply the hits.
        let currentGrid = grid.map(row => [...row]);
        for (let hit of hits) currentGrid[hit[0]][hit[1]] = 0;
    
        // Connect the first row bricks to the virtual top node.
        for (let j = 0; j < cols; ++j) {
            if (currentGrid[0][j] === 1) merge(clusterSize, parent, j, rows * cols);
        }
    
        // Connect the remaining bricks in the grid.
        for (let i = 1; i < rows; ++i) {
            for (let j = 0; j < cols; ++j) {
                if (currentGrid[i][j] === 0) continue;
                if (currentGrid[i - 1][j] === 1) merge(clusterSize, parent, i * cols + j, (i - 1) * cols + j);
                if (j > 0 && currentGrid[i][j - 1] === 1) merge(clusterSize, parent, i * cols + j, i * cols + j - 1);
            }
        }
    
        // Process the hits in reverse and calculate the results.
        let results = new Array(hits.length).fill(0),
            directions = [-1, 0, 1, 0, -1]; // Used for exploring adjacent cells.
    
        for (let k = hits.length - 1; k >= 0; --k) {
            let i = hits[k][0], j = hits[k][1];
            if (grid[i][j] === 0) continue; // The brick was already empty before the hit.
    
            currentGrid[i][j] = 1; // Revert the hit.
            let previousSize = clusterSize[findParent(parent, rows * cols)];
    
            // Connect the brick to the virtual top node if it's in the first row.
            if (i === 0) merge(clusterSize, parent, j, rows * cols);
    
            // Connect the brick to its adjacent bricks.
            for (let l = 0; l < 4; ++l) {
                let x = i + directions[l], y = j + directions[l + 1];
                if (x >= 0 && x < rows && y >= 0 && y < cols && currentGrid[x][y] === 1)
                    merge(clusterSize, parent, i * cols + j, x * cols + y);
            }
    
            let currentSize = clusterSize[findParent(parent, rows * cols)];
            // Calculate the number of bricks that fell due to the hit.
            results[k] = Math.max(0, currentSize - previousSize - 1);
        }
    
        return results;
    };

    function findParent(parent: number[], x: number): number {
        if (parent[x] !== x) parent[x] = findParent(parent, parent[x]);
        return parent[x];
    }
    
    // Function to merge two clusters.
    function merge(clusterSize: number[], parent: number[], a: number, b: number): void {
        let rootA = findParent(parent, a),
            rootB = findParent(parent, b);
    
        if (rootA !== rootB) {
            clusterSize[rootB] += clusterSize[rootA];
            parent[rootA] = rootB;
        }
    }
    
    

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});
