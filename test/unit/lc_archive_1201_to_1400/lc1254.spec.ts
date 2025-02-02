xdescribe('leetcode 1254: number of closed island', () => {
    function closedIsland(grid: number[][]): number {
        const visited = new Array<Array<boolean>>(grid.length).fill([]).map(r => new Array<boolean>(grid[0].length).fill(false));
        
        let count = 0;
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (grid[i][j] === 0) {
                    const perimeters: number[][] = [];
                    mapIslandAndGetPerimeter(grid, i, j, perimeters, visited);

                    count += checkEnclosedPerimeters(perimeters, grid) ? 1 : 0;
                }
            }
        }

        return count;
    };

    function checkEnclosedPerimeters(perimeters: number[][], grid: number[][]): boolean {
        for (const p of perimeters) {
            if (isOnEdge(grid, p[0], p[1])) {
                return false;
            }
        }

        return true;
    }

    function mapIslandAndGetPerimeter(grid: number[][], i: number, j: number, perimeters: number[][], visited: boolean[][]) {
        if (!isInBound(grid, i, j) || visited[i][j]) {
            return;
        }

        visited[i][j] = true;
        const validNeighbors = getValidNeighbors(grid, i, j);

        if (sumOfNeighbors(validNeighbors, grid) > 0 || isOnEdge(grid, i, j)) {
            return perimeters.push([i,j]);
        }

        for (const n of validNeighbors) {
            mapIslandAndGetPerimeter(grid, n[0], n[1], perimeters, visited);
        }
    }

    function sumOfNeighbors(validNeighbors: number[][], grid: number[][]) {
        let sum = 0;

        for (const n of validNeighbors) {
            sum += grid[n[0]][n[1]];
        }

        return sum;
    }
    
    function getValidNeighbors(grid: number[][], i: number, j: number): number[][] {
        const neighbors: number[][] = [];

        if (isInBound(grid, i + 1, j)) {
            neighbors.push([i + 1, j]);
        }

        if (isInBound(grid, i - 1, j)) {
            neighbors.push([i - 1, j]);
        }

        if (isInBound(grid, i, j + 1)) {
            neighbors.push([i, j + 1]);
        }

        if (isInBound(grid, i, j - 1)) {
            neighbors.push([i, j - 1]);
        }

        return neighbors;
    }

    function isInBound(grid: number[][], i: number, j: number) {
        return i >= 0 && i < grid.length && j >=0 && j < grid[0].length;
    }


    function isOnEdge(grid: number[][], i: number, j: number): boolean {
        return i === 0 || i === grid.length - 1 || j === 0 || j === grid[0].length - 1;
    }


    it('test case 1 Input:, target = 5, output 2 ', () => {});
});




