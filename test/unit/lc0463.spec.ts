xdescribe('leetcode 463: description', () => {
    function islandPerimeter(grid: number[][]): number {
        const visited = new Array<Array<boolean>>(grid.length).fill([]).map(r => new Array<boolean>(grid[0].length).fill(false));

        const perimeterLength: number[] = [0]
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (grid[i][j] === 1) {
                    mapIsland(grid, i, j, visited, perimeterLength);
                }
            }
        }

        return perimeterLength[0];
    };

    function mapIsland(grid: number[][], r: number, c: number, visited: boolean[][], perimeterLength: number[]) {
        if (!isInBound(grid, r, c)|| !visited[r][c]) {
            return;
        }

        visited[r][c] = true;

        const validNeighbors = getNeighbors(grid, r, c);
        calculatePerimeterBy(validNeighbors.length, perimeterLength);

        for (const neighbor of validNeighbors) {
            mapIsland(grid, neighbor.r, neighbor.c, visited, perimeterLength);
        }
    }

    function getNeighbors(grid: number[][], r: number, c: number): {r: number, c: number}[] {
        const neighbors: {r: number, c: number}[] = []
        if (isInBound(grid, r + 1, c)) {
            neighbors.push({r: r + 1,c: c});
        }

        if (isInBound(grid, r - 1, c)) {
            neighbors.push({r: r - 1,c: c});
        }

        if (isInBound(grid, r, c + 1)) {
            neighbors.push({r: r,c: c + 1});
        }

        if (isInBound(grid, r, c - 1)) {
            neighbors.push({r: r,c: c - 1});
        }

        return neighbors;
    }

    function isInBound(grid: number[][], r: number, c: number) {
        return r >=0 && r < grid.length && c >= 0 && c < grid[0].length;
    }

    function calculatePerimeterBy(length: number, perimeterLength: number[]) {
        perimeterLength[0] += 4 - length;
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});



