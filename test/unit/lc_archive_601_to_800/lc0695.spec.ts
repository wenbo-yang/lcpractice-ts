xdescribe('leetcode 695: max area of island', () => {
    function maxAreaOfIsland(grid: number[][]): number {
        const visited = new Array<Array<boolean>>(grid.length).fill([]).map(r => new Array<boolean>(grid[0].length).fill(false));

        let area = 0;

        for (let i = 0; i < grid.length; i++) {
            for(let j = 0; i < grid[0].length; j++) {
                if (grid[i][j] === 1) {
                    area = Math.max(area, mapIsland(grid, i, j, visited));
                }
            }
        }

        return area;
    };

    function mapIsland(grid: number[][], i: number, j: number, visited: boolean[][]): number {
        if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === 0 || visited[i][j]) {
            return 0;
        }

        visited[i][j] = true;

        return 1 + mapIsland(grid, i + 1, j, visited) + 
                   mapIsland(grid, i - 1, j, visited) + 
                   mapIsland(grid, i, j + 1, visited) + 
                   mapIsland(grid, i, j - 1, visited);
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});


