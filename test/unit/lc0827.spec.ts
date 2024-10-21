xdescribe('leetcode 827: making a large island  ', () => {
    function largestIsland(grid: number[][]): number {
        // idea marking distinct islands
        // finding all 0s
        // for each 0 see 
        // if it neighbors two islands,  max = max or island1 + island2 + 1
        // if it neighbors one island , max = max or island1 + 1
        // it it neighbors none, max = max or 1

        const islandSizeMap = new Map<number, number>();
        let islandNumber = 2;
        const zeroCoors: number[][] = [];
        let maxSize = 0;
        for(let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (grid[i][j] === 1) {
                    mapIsland(grid, i, j, islandNumber++, islandSizeMap);
                    maxSize = Math.max(maxSize, islandSizeMap.get(islandNumber) || 0);
                }
                
                if (grid[i][j] === 0) {
                    zeroCoors.push([i,j]);
                }
            }
        }

        
        for (const zero of zeroCoors) {
            const neighbors = getValidNeighbors(zero[0], zero[1], grid);
            let size = 1;
            const uniqueIslands = new Set<number>(neighbors.map(rc => grid[rc[0]][rc[1]]));
            for(const islandNumber of uniqueIslands) {
                size += islandSizeMap.get(islandNumber) || 0;
            }
            
            maxSize = Math.max(maxSize, size);
        }

        return maxSize;
    };

    function mapIsland(grid: number[][], i: number, j: number, islandNumber: number, islandSizeMap: Map<number, number>) {
        if (!isInBound(i, j, grid)|| grid[i][j] === 0 || grid[i][j] === islandNumber) {
            return;
        }

        grid[i][j] = islandNumber;
        islandSizeMap.set(islandNumber, (islandSizeMap.get(islandNumber) || 0)+ 1);

        mapIsland(grid, i + 1, j, islandNumber, islandSizeMap);
        mapIsland(grid, i - 1, j, islandNumber, islandSizeMap);
        mapIsland(grid, i, j + 1, islandNumber, islandSizeMap);
        mapIsland(grid, i, j - 1, islandNumber, islandSizeMap);
    }

    function getValidNeighbors(r: number, c: number, grid: number[][]) {
        const neighbors: number[][] = [];
        if (isInBound(r + 1,c, grid)) {
            neighbors.push([r + 1,c]);
        }

        if (isInBound(r - 1,c, grid)) {
            neighbors.push([r - 1,c]);
        }

        if (isInBound(r,c + 1, grid)) {
            neighbors.push([r,c + 1]);
        }

        if (isInBound(r,c - 1, grid)) {
            neighbors.push([r,c - 1]);
        }

        return neighbors;
    }

    function isInBound(i: number, j: number, grid) {
        return i < 0 || i >= grid.length || j < 0 || j >= grid[0].length
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});






