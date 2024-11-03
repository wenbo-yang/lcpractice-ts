import {Queue} from './commonLibs';

xdescribe('leetcode 934: shortest bridge', () => {
    function shortestBridge(grid: number[][]): number {
        mapIslands(grid);
        const perimeters = getPerimeterOfIsland1(grid)
        const queue: Queue<{depth: number, coor: number[]}> = new Queue<{depth: number, coor: number[]}>();
        
        for(const p of perimeters) {
            queue.enque({depth: 0, coor:p});
        }

        let min = Number.MAX_SAFE_INTEGER;
        while (queue.length) {
            const top = queue.deque();
            if (!top) return -1;

            if (hasIsland2AsNeighbor(top, grid)) {
                min = Math.min(min, top.depth);
            }
            else {
                grid[top.coor[0]][top.coor[1]] = top.depth;
                const validNeighbors = getNeighbors(grid, top.coor[0], top.coor[1]);

                for (const n of validNeighbors) {
                    queue.enque({depth: top.depth + 1, coor: n});
                }
            }
        }

        return min;

    };

    function getNeighbors(grid: number[][], i: number, j: number) {
        const neighbors: number[][] = [];
        
        if (grid[i + 1][j] === 0) {
            neighbors.push([i + 1, j]);
        }

        if (grid[i - 1][j] === 0) {
            neighbors.push([i - 1, j]);
        }

        if (grid[i][j + 1] === 0) {
            neighbors.push([i, j + 1]);
        }

        if (grid[i][j - 1] === 0) {
            neighbors.push([i, j - 1]);
        }

        return neighbors;
    }

    function hasIsland2AsNeighbor(top: { depth: number; coor: number[]; }, grid: number[][]) {
        let r = top.coor[0];
        let c = top.coor[1];

        return grid[r + 1][c] === -2 || grid[r - 1][c] === -2 || grid[r][c + 1] === -2 || grid[r][c - 1] === -2;
    }

    function getPerimeterOfIsland1(grid: number[][]): number[][] {
        const perimeters: number[][] = [];
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (grid[i][j] === -1) {                    
                    mapIslandPerimeters(grid, i, j, perimeters);
                }
            }
        }

        return perimeters;
    }

    function mapIslandPerimeters(grid: number[][], i: number, j: number, perimeters: number[][]) {
        if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] !== -1) {
            return;
        }

        if (grid[i][j] === -1 && isOnEdge(grid, i, j)) {
            perimeters.push([i,j]);
        }

        mapIslandPerimeters(grid, i + 1, j, perimeters);
        mapIslandPerimeters(grid, i - 1, j, perimeters);
        mapIslandPerimeters(grid, i, j + 1, perimeters);
        mapIslandPerimeters(grid, i, j - 1, perimeters);
    }

    function isOnEdge(grid: number[][], i: number, j: number) {
        return grid[i - 1][j] === 0 || grid[i + 1][j] === 0 || grid[i][j - 1] === 0 || grid[i][j + 1] === 0;
    }
    

    
    function mapIslands(grid: number[][]) {
        let islandId = -1;
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (grid[i][j] === 1) {                    
                    mapIsland(grid, i, j, islandId);
                    islandId--;
                }
            }
        }
    }

    function mapIsland(grid: number[][], i: number, j: number, islandId: number) {
        if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === 0) {
            return;
        }

        grid[i][j] = islandId;

        mapIsland(grid, i + 1, j, islandId);
        mapIsland(grid, i - 1, j, islandId);
        mapIsland(grid, i, j + 1, islandId);
        mapIsland(grid, i, j - 1, islandId);
    }
    

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});

