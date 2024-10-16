xdescribe('leetcode 694: number of distinct islands', () => {
    function numDistinctIslands(grid: number[][]): number {
        const visited = new Array<Array<boolean>>(grid.length).fill([]).map(r => new Array<boolean>(grid[0].length).fill(false));

        const set = new Set<string>();

        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (grid[i][j] === 1 && !visited[i][j]) {
                    const path: string[] = ['o'];
                    mapIsland(grid, i, j, path, visited);
                    set.add(path.join(''));
                }
            }
        }

        return set.size;
    }

    function mapIsland(grid: number[][], i: number, j: number, path: string[], visited: boolean[][]) {
        if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === 0 || visited[i][j]) {
            path.pop();
            return;
        }

        visited[i][j] = true;

        path.push('u');
        mapIsland(grid, i - 1, j, path, visited);
        path.push('d');
        mapIsland(grid, i + 1, j, path, visited);
        path.push('l');
        mapIsland(grid, i, j - 1, path, visited);
        path.push('r');        
        mapIsland(grid, i, j + 1, path, visited);
    }

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});


